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
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-8">
        Completed!
      </h1>
      <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          당신의 MBTI 유형은:
        </h2>
        <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          {result}
        </div>
        <div className="text-left text-gray-300 mb-8 max-w-2xl">
          {description}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md mx-auto">
          <button
            onClick={onGoToTypes}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-gray-700 transition-all duration-300 transform hover:scale-105"
          >
            유형 알아보기
          </button>
          <button
            onClick={onGoHome}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-gray-700 transition-all duration-300 transform hover:scale-105"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export const ResultCard = React.memo(ResultCardComponent);