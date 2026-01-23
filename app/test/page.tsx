"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { BeamsBackground } from "@/components/ui/beams-background";
import { ProgressBar } from "@/components/test/ProgressBar";
import { QuestionCard } from "@/components/test/QuestionCard";
import { ResultCard } from "@/components/test/ResultCard";
import { getMBTIDescription } from '@/lib/mbti-descriptions';
import { questions } from '@/lib/questions';
import type { TestState, MBTIType } from '@/lib/types/test';

export default function MBTITest() {
  const [testState, setTestState] = useState<TestState>({
    currentQuestionIndex: 0,
    answers: {},
    shuffledQuestions: [],
    isCompleted: false,
    result: undefined,
  });
  const router = useRouter();

  const currentQuestion = testState.shuffledQuestions[testState.currentQuestionIndex];
  const showResult = testState.isCompleted;
  const result = testState.result;

  useEffect(() => {
    try {
      // Shuffle questions when component mounts
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      setTestState(prev => ({ ...prev, shuffledQuestions: shuffled }));
    } catch (error) {
      console.error('Failed to initialize test:', error);
    }
  }, []);

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

   // const resetTest = useCallback(() => {
   //   const shuffled = [...questions].sort(() => Math.random() - 0.5);
   //   setTestState({
   //     currentQuestionIndex: 0,
   //     answers: {},
   //     shuffledQuestions: shuffled,
   //     isCompleted: false,
   //     result: undefined,
   //   });
   // }, []);

  const goHome = useCallback(() => {
    router.push('/');
  }, [router]);

  const goToTypes = useCallback(() => {
    router.push('/types');
  }, [router]);

  if (testState.shuffledQuestions.length === 0) {
    return (
      <BeamsBackground>
        <div className="flex flex-col items-center justify-center gap-6 px-4 text-center min-h-screen pt-20 pb-8">
          <div className="text-white">질문을 불러오는 중...</div>
        </div>
      </BeamsBackground>
    );
  }

  if (showResult && result) {
    return (
      <BeamsBackground>
        <div className="flex flex-col items-center justify-center gap-6 px-4 text-center min-h-screen pt-20 pb-8">
          <ResultCard
            result={result}
            description={getMBTIDescription(result)}
            onGoToTypes={goToTypes}
            onGoHome={goHome}
          />
        </div>
      </BeamsBackground>
    );
  }

  return (
    <BeamsBackground>
      <div className="flex flex-col items-center justify-center gap-6 px-4 text-center min-h-screen pt-20 pb-8">
        <div className="max-w-2xl mx-auto w-full">
          <ProgressBar current={testState.currentQuestionIndex} total={testState.shuffledQuestions.length} />
          <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />
        </div>
      </div>
    </BeamsBackground>
  );
}