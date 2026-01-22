"use client";

import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBarComponent = ({ current, total }: ProgressBarProps) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white text-sm">
          {current + 1} / {total}
        </span>
        <span className="text-white text-sm">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export const ProgressBar = React.memo(ProgressBarComponent);