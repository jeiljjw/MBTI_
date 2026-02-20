"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

interface Question {
  id: number;
  question: string;
  trait: string;
  direction: number;
}

interface QuestionCardProps {
  question: Question;
  onAnswer: (score: number) => void;
}

const QuestionCardComponent = ({ question, onAnswer }: QuestionCardProps) => {
  const t = useTranslations('questionCard');
  
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:w-[600px] min-h-[260px] sm:min-h-[280px] md:min-h-[300px] mx-auto bg-black/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-white/10 flex flex-col justify-between shadow-2xl">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6 md:mb-8 text-center leading-relaxed px-2">
        {question.question}
      </h2>

      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
        {/* Labels */}
        <div className="flex justify-between w-full max-w-xs sm:max-w-sm md:max-w-md px-2 sm:px-4">
          <span className="text-gray-300 text-xs sm:text-sm font-medium">{t('disagree')}</span>
          <span className="text-gray-300 text-xs sm:text-sm font-medium">{t('agree')}</span>
        </div>

        {/* Likert Scale with Circles */}
        <div className="flex items-center justify-center max-w-full px-1 sm:px-2 gap-0.5 sm:gap-1 md:gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((score) => {
            // 가운데(4)를 기준으로 거리에 따른 크기 계산
            const distance = Math.abs(score - 4);
            const scale = 1.0 + (distance * 0.08); // 모바일에 더 적합하도록 scale 조정

            return (
              <React.Fragment key={score}>
                <button
                  onClick={() => onAnswer(score)}
                  className={`rounded-full bg-white/10 text-white font-medium hover:bg-purple-500/20 active:bg-purple-500/30 transition-all duration-200 transform hover:scale-110 active:scale-95 flex items-center justify-center text-xs sm:text-sm border-2 backdrop-blur-sm relative z-10 shadow-lg ${score <= 3 ? 'border-red-400/70 hover:border-red-400' : score >= 5 ? 'border-green-400/70 hover:border-green-400' : 'border-white/40 hover:border-white/60'}`}
                  style={{
                    width: `${Math.max(scale * 28, 32)}px`, // 모바일에서 최소 32px, 데스크톱에서 scale 적용
                    height: `${Math.max(scale * 28, 32)}px`,
                  }}
                  title={t(`answers.${score}`)}
                >
                </button>
                {score < 7 && <div className="w-1.5 sm:w-2 md:w-4 h-0.5 bg-white/30 rounded-full"></div>}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile touch hint */}
        <div className="text-center mt-2 sm:hidden">
          <span className="text-gray-400 text-xs">{t('touchToAnswer')}</span>
        </div>
      </div>
    </div>
  );
};

export const QuestionCard = React.memo(QuestionCardComponent);
