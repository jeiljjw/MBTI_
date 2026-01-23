"use client";

import React from 'react';

interface ResultCardProps {
  result: string;
  description: string;
  onGoToTypes: () => void;
  onGoHome: () => void;
}

const ResultCardComponent = ({ result, description, onGoToTypes, onGoHome }: ResultCardProps) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-2 sm:px-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6 sm:mb-8 text-center">
        Completed!
      </h1>
      <div className="bg-black/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4 text-center">
          당신의 MBTI 유형은:
        </h2>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 sm:mb-6 text-center">
          {result}
        </div>
        <div className="text-left text-gray-300 mb-6 sm:mb-8 max-w-2xl text-sm sm:text-base leading-relaxed">
          {description}
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center w-full">
          <button
            onClick={onGoToTypes}
            className="w-full max-w-xs sm:max-w-sm px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-purple-700 active:from-purple-700 active:to-purple-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            유형 알아보기
          </button>
          <button
            onClick={onGoHome}
            className="w-full max-w-xs sm:max-w-sm px-6 py-3 sm:py-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-gray-700 active:from-gray-700 active:to-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export const ResultCard = React.memo(ResultCardComponent);