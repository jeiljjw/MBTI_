"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBarComponent = ({ current, total }: ProgressBarProps) => {
  const t = useTranslations('test');
  const progress = ((current + 1) / total) * 100;
  const remaining = total - current - 1;

  return (
    <div className="mb-6 sm:mb-8 px-2 sm:px-0">
      <div className="flex justify-between items-center mb-2 sm:mb-3">
        <span className="text-white text-sm sm:text-base font-medium" suppressHydrationWarning>
          {t('question')} {current + 1} / {total}
        </span>
        <span className="text-white text-sm sm:text-base font-medium" suppressHydrationWarning>
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2.5 sm:h-3 backdrop-blur-sm">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 sm:h-3 rounded-full transition-all duration-500 ease-out shadow-lg shadow-purple-500/30"
          style={{ width: `${progress}%` }}
          suppressHydrationWarning
        ></div>
      </div>
      <div className="text-center mt-2 sm:mt-3">
        <span className="text-gray-400 text-xs sm:text-sm" suppressHydrationWarning>
          {remaining} {remaining === 1 ? t('questionsRemainingSingular') : t('questionsRemaining')}
        </span>
      </div>
    </div>
  );
};

export const ProgressBar = React.memo(ProgressBarComponent);