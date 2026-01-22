"use client";

import React from 'react';

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
  return (
    <div className="w-full max-w-lg sm:max-w-xl md:w-[600px] lg:w-[672px] min-h-[280px] sm:min-h-[300px] mx-auto bg-black/20 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 border border-white/10 flex flex-col justify-between">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-6 md:mb-8 text-center leading-relaxed">
        {question.question}
      </h2>

      <div className="flex flex-col items-center space-y-4">
        {/* Labels */}
        <div className="flex justify-between w-full max-w-md px-4">
          <span className="text-gray-300 text-sm font-medium">아니다</span>
          <span className="text-gray-300 text-sm font-medium">그렇다</span>
        </div>

        {/* Likert Scale with Circles */}
        <div className="flex items-center justify-center max-w-full px-2">
          {[1, 2, 3, 4, 5, 6, 7].map((score) => (
            <React.Fragment key={score}>
              <button
                onClick={() => onAnswer(score)}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 text-white font-medium hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xs sm:text-sm border-2 border-white/40 backdrop-blur-sm relative z-10"
                title={
                  score === 1 ? "매우 동의하지 않음" :
                  score === 2 ? "동의하지 않음" :
                  score === 3 ? "약간 동의하지 않음" :
                  score === 4 ? "보통" :
                  score === 5 ? "약간 동의함" :
                  score === 6 ? "동의함" :
                  "매우 동의함"
                }
              >
                {score}
              </button>
              {score < 7 && <div className="w-2 sm:w-4 h-0.5 bg-white/30 rounded-full"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export const QuestionCard = React.memo(QuestionCardComponent);