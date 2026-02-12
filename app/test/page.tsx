"use client";

import { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ProgressBar } from "@/components/test/ProgressBar";
import { QuestionCard } from "@/components/test/QuestionCard";
import { EnhancedResultCard } from "@/components/test/EnhancedResultCard";
import { questions } from '@/lib/questions';
import type { TestState, MBTIType } from '@/lib/types/test';

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
  // Initialize shuffled questions once
  const initialShuffledQuestions = useMemo(() => shuffleArray(questions), []);
  
  const [testState, setTestState] = useState<TestState>({
    currentQuestionIndex: 0,
    answers: {},
    shuffledQuestions: initialShuffledQuestions,
    isCompleted: false,
    result: undefined,
  });
  
  const router = useRouter();

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
          // Calculate result
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
  }, []);

  const goHome = useCallback(() => {
    router.push('/');
  }, [router]);

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
