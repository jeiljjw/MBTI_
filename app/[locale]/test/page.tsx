"use client";

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import dynamic from 'next/dynamic';
import { loadQuestions } from '@/lib/lazy-loaders';
import type { TestState, MBTIType, Question } from '@/lib/types/test';

// Dynamic import to avoid SSR
const ProgressBar = dynamic(
  () => import('@/components/test/ProgressBar').then(mod => mod.ProgressBar),
  { ssr: false }
);

const QuestionCard = dynamic(
  () => import('@/components/test/QuestionCard').then(mod => mod.QuestionCard),
  { ssr: false }
);

const EnhancedResultCard = dynamic(
  () => import('@/components/test/EnhancedResultCard').then(mod => mod.EnhancedResultCard),
  { ssr: false }
);

// Shuffle function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function MBTITest() {
  const locale = useLocale() as 'ko' | 'en';
  const [isClient, setIsClient] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  
  const [testState, setTestState] = useState<TestState>({
    currentQuestionIndex: 0,
    answers: {},
    shuffledQuestions: [],
    isCompleted: false,
    result: undefined,
  });
  
  const router = useRouter();

  // Load questions dynamically
  useEffect(() => {
    let mounted = true;
    
    const initQuestions = async () => {
      try {
        const loadedQuestions = await loadQuestions(locale);
        if (mounted) {
          setQuestions(loadedQuestions);
          setQuestionsLoading(false);
          setIsClient(true);
          setTestState(prev => ({
            ...prev,
            shuffledQuestions: shuffleArray(loadedQuestions),
          }));
        }
      } catch (error) {
        console.error('Failed to load questions:', error);
        if (mounted) {
          setQuestionsLoading(false);
        }
      }
    };
    
    initQuestions();
    
    return () => {
      mounted = false;
    };
  }, [locale]);

  const currentQuestion = testState.shuffledQuestions[testState.currentQuestionIndex];
  const showResult = testState.isCompleted;
  const result = testState.result;

  const handleAnswer = useCallback((score: number) => {
    setTestState(prev => {
      const newAnswers = { ...prev.answers, [currentQuestion.id]: score };

      if (prev.currentQuestionIndex < prev.shuffledQuestions.length - 1) {
        return { ...prev, answers: newAnswers, currentQuestionIndex: prev.currentQuestionIndex + 1 };
      } else {
        try {
          const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

          prev.shuffledQuestions.forEach(question => {
            const answerScore = newAnswers[question.id];
            if (answerScore !== undefined) {
              const weight = (answerScore - 4) * 0.5;
              scores[question.trait as keyof typeof scores] += weight * question.direction;
            }
          });

          const personality: MBTIType = [
            scores.E > scores.I ? 'E' : 'I',
            scores.S > scores.N ? 'S' : 'N',
            scores.T > scores.F ? 'T' : 'F',
            scores.J > scores.P ? 'J' : 'P'
          ].join('') as MBTIType;

          return { ...prev, answers: newAnswers, isCompleted: true, result: personality };
        } catch (error) {
          console.error('Failed to calculate result:', error);
          return { ...prev, answers: newAnswers, isCompleted: true, result: 'ERROR' as MBTIType };
        }
      }
    });
  }, [currentQuestion]);

  const resetTest = useCallback(() => {
    const shuffled = shuffleArray(questions);
    setTestState({
      currentQuestionIndex: 0,
      answers: {},
      shuffledQuestions: shuffled,
      isCompleted: false,
      result: undefined,
    });
  }, [questions]);

  const goHome = useCallback(() => {
    router.push('/');
  }, [router]);

  // 서버에서는 로딩 표시
  if (!isClient || questionsLoading || questions.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 pt-16 sm:pt-20 pb-6 sm:pb-8">
        <div className="w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-4 w-32 bg-gray-700 rounded mb-8"></div>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:w-[600px] min-h-[260px] sm:min-h-[280px] md:min-h-[300px] bg-gray-800 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult && result) {
    return (
      <div className="min-h-screen bg-neutral-950 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <EnhancedResultCard
            result={result}
            onGoHome={goHome}
            onRetake={resetTest}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 pt-16 sm:pt-20 pb-6 sm:pb-8">
      <div className="w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
        <ProgressBar current={testState.currentQuestionIndex} total={testState.shuffledQuestions.length} />
        <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />
      </div>
    </div>
  );
}
