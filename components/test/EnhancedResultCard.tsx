"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { mbtiDetails } from '@/lib/mbti-detailed';

interface EnhancedResultCardProps {
  result: string;
  onGoHome: () => void;
  onRetake: () => void;
}

// Type comparison data
const typeComparisons: Record<string, { similar: string[]; complementary: string[]; challenging: string[] }> = {
  INTJ: {
    similar: ["INTJ", "INTP", "ENTJ", "ENTP"],
    complementary: ["ENFP", "ENTP", "ESFJ", "ENFJ"],
    challenging: ["ISFP", "ESFP", "ESTP", "ISFJ"]
  },
  INTP: {
    similar: ["INTP", "INTJ", "ENTP", "ENTJ"],
    complementary: ["ENFJ", "ESFJ", "ENTJ", "ENFP"],
    challenging: ["ESFP", "ISFJ", "ESFJ", "ESTJ"]
  },
  ENTJ: {
    similar: ["ENTJ", "ENTP", "INTJ", "INTP"],
    complementary: ["ISFJ", "INFP", "ISFP", "INFJ"],
    challenging: ["ESFP", "ISFP", "INFP", "ESFJ"]
  },
  ENTP: {
    similar: ["ENTP", "ENTJ", "INTP", "INTJ"],
    complementary: ["INFJ", "ISFJ", "INTJ", "INFP"],
    challenging: ["ISFP", "ESFJ", "ISTJ", "ISFJ"]
  },
  INFJ: {
    similar: ["INFJ", "INFP", "ENFJ", "ENFP"],
    complementary: ["ENTP", "ENFP", "ESTP", "ENTJ"],
    challenging: ["ESTP", "ISTP", "ESTJ", "ENTP"]
  },
  INFP: {
    similar: ["INFP", "INFJ", "ENFP", "ENFJ"],
    complementary: ["ENFJ", "ENTJ", "ESTJ", "ESFJ"],
    challenging: ["ESTJ", "ISTJ", "ESTP", "ENTJ"]
  },
  ENFJ: {
    similar: ["ENFJ", "ENFP", "INFJ", "INFP"],
    complementary: ["INTP", "ISTP", "INTJ", "ENTP"],
    challenging: ["ISTP", "ESTP", "INTP", "ISTJ"]
  },
  ENFP: {
    similar: ["ENFP", "ENFJ", "INFP", "INFJ"],
    complementary: ["INTJ", "INFJ", "ISTJ", "INTP"],
    challenging: ["ISTJ", "ESTJ", "ISTP", "INTJ"]
  },
  ISTJ: {
    similar: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
    complementary: ["ESFP", "ESTP", "ESFJ", "ENFP"],
    challenging: ["ENFP", "INFP", "ENTP", "INFJ"]
  },
  ISFJ: {
    similar: ["ISFJ", "ISTJ", "ESFJ", "ESTJ"],
    complementary: ["ESTP", "ESFP", "ENTP", "ENFJ"],
    challenging: ["ENTP", "INTP", "ENTJ", "ENFP"]
  },
  ESTJ: {
    similar: ["ESTJ", "ESTP", "ISTJ", "ISTP"],
    complementary: ["INFP", "ISFP", "INTP", "INFJ"],
    challenging: ["INFP", "ENFP", "INFJ", "INTP"]
  },
  ESFJ: {
    similar: ["ESFJ", "ESFP", "ISFJ", "ISFP"],
    complementary: ["INTP", "ISTP", "INFP", "INTJ"],
    challenging: ["INTP", "ENTP", "INTJ", "ENTJ"]
  },
  ISTP: {
    similar: ["ISTP", "ISTJ", "ESTP", "ESTJ"],
    complementary: ["ENFJ", "ESFJ", "ENFP", "ENTJ"],
    challenging: ["ENFJ", "INFJ", "ENFP", "ESFJ"]
  },
  ISFP: {
    similar: ["ISFP", "ISFJ", "ESFP", "ESFJ"],
    complementary: ["ENTJ", "ESTJ", "ENFJ", "ENTP"],
    challenging: ["ENTJ", "INTJ", "ENTP", "ESTJ"]
  },
  ESTP: {
    similar: ["ESTP", "ESTJ", "ISTP", "ISTJ"],
    complementary: ["INFJ", "ISFJ", "INFP", "INTJ"],
    challenging: ["INFJ", "ENFJ", "INFP", "INTP"]
  },
  ESFP: {
    similar: ["ESFP", "ESFJ", "ISFP", "ISFJ"],
    complementary: ["INTJ", "INFJ", "ISTJ", "INTP"],
    challenging: ["INTJ", "ENTJ", "INTP", "INFJ"]
  }
};

const EnhancedResultCardComponent = ({ result, onGoHome, onRetake }: EnhancedResultCardProps) => {
  const [showComparison, setShowComparison] = useState(false);
  const detail = mbtiDetails[result];
  
  if (!detail) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
          <p className="text-gray-300">결과를 불러오는 중 오류가 발생했습니다.</p>
          <button onClick={onRetake} className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg">
            다시 테스트하기
          </button>
        </div>
      </div>
    );
  }

  const comparison = typeComparisons[result] || { similar: [], complementary: [], challenging: [] };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = `나의 MBTI 유형은 ${result} ${detail.name}입니다! 당신은 어떤 유형인가요?`;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(`${text} ${url}`);
          alert('링크가 복사되었습니다!');
        } catch {
          alert('링크 복사에 실패했습니다.');
        }
        break;
    }
  };

  const getGroupColor = (group: string) => {
    if (group.includes("분석가형")) return "from-blue-500 to-purple-600";
    if (group.includes("외교관형")) return "from-pink-500 to-rose-600";
    if (group.includes("관리자형")) return "from-green-500 to-teal-600";
    if (group.includes("탐험가형")) return "from-orange-500 to-red-600";
    return "from-gray-500 to-gray-600";
  };

  const groupColor = getGroupColor(detail.group);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-neutral-950">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            테스트 완료!
          </h1>
          
          <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${groupColor} text-white text-sm font-medium mb-4`}>
            {detail.group}
          </div>
          
          <div className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            {result}
          </div>
          
          <h2 className="text-2xl sm:text-3xl text-white mb-2">{detail.name}</h2>
          <p className="text-lg text-gray-400 mb-6">&ldquo;{detail.nickname}&rdquo;</p>
        </div>

        {/* Detailed Analysis */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📝</span> 상세 성격 분석
          </h3>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {detail.characteristics}
          </p>
        </div>

        {/* Cognitive Functions */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🧠</span> 인지기능 스택
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-purple-400 mb-1">주기능 (Dominant)</div>
              <h4 className="font-bold text-white">{detail.cognitiveFunctions.dominant.name}</h4>
              <p className="text-gray-400 text-sm mt-1">{detail.cognitiveFunctions.dominant.description}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-blue-400 mb-1">보조기능 (Auxiliary)</div>
              <h4 className="font-bold text-white">{detail.cognitiveFunctions.auxiliary.name}</h4>
              <p className="text-gray-400 text-sm mt-1">{detail.cognitiveFunctions.auxiliary.description}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 opacity-80">
              <div className="text-sm text-yellow-400 mb-1">3차기능 (Tertiary)</div>
              <h4 className="font-bold text-white">{detail.cognitiveFunctions.tertiary.name}</h4>
              <p className="text-gray-400 text-sm mt-1">{detail.cognitiveFunctions.tertiary.description}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 opacity-70">
              <div className="text-sm text-red-400 mb-1">열등기능 (Inferior)</div>
              <h4 className="font-bold text-white">{detail.cognitiveFunctions.inferior.name}</h4>
              <p className="text-gray-400 text-sm mt-1">{detail.cognitiveFunctions.inferior.description}</p>
            </div>
          </div>
        </div>

        {/* Strengths & Weaknesses Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-green-500/30">
            <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
              <span>💪</span> 주요 강점
            </h3>
            <div className="space-y-3">
              {detail.strengths.slice(0, 5).map((strength, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                      style={{ width: `${90 - idx * 8}%` }}
                    />
                  </div>
                  <span className="text-gray-300 text-sm whitespace-nowrap">{strength}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-red-500/30">
            <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
              <span>⚠️</span> 발전 영역
            </h3>
            <div className="space-y-3">
              {detail.weaknesses.slice(0, 5).map((weakness, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full"
                      style={{ width: `${70 - idx * 10}%` }}
                    />
                  </div>
                  <span className="text-gray-300 text-sm whitespace-nowrap">{weakness}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Compatibility */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>💼</span> 직업 적합도
          </h3>
          
          <div className="mb-6">
            <h4 className="text-green-400 font-semibold mb-3">✓ 잘 맞는 직업</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {detail.careers.recommended.slice(0, 4).map((career, idx) => (
                <div key={idx} className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <h5 className="font-semibold text-white text-sm">{career.job}</h5>
                  <p className="text-gray-400 text-xs mt-1">{career.reason.slice(0, 60)}...</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-red-400 font-semibold mb-3">⚠ 도전적인 직업</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {detail.careers.avoid.slice(0, 2).map((career, idx) => (
                <div key={idx} className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <h5 className="font-semibold text-white text-sm">{career.job}</h5>
                  <p className="text-gray-400 text-xs mt-1">{career.reason.slice(0, 60)}...</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Type Comparison */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>🤝</span> 다른 유형과의 관계
            </h3>
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-purple-400 text-sm hover:text-purple-300"
            >
              {showComparison ? '접기' : '자세히 보기'}
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{comparison.similar.length}</div>
              <div className="text-gray-400 text-sm">비슷한 유형</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{comparison.complementary.length}</div>
              <div className="text-gray-400 text-sm">보완적 유형</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{comparison.challenging.length}</div>
              <div className="text-gray-400 text-sm">도전적 유형</div>
            </div>
          </div>
          
          {showComparison && (
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">비슷한 유형</h4>
                <div className="flex flex-wrap gap-2">
                  {comparison.similar.map(type => (
                    <Link key={type} href={`/types/${type}`} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-colors">
                      {type}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-green-400 font-semibold mb-2">보완적 유형</h4>
                <div className="flex flex-wrap gap-2">
                  {comparison.complementary.map(type => (
                    <Link key={type} href={`/types/${type}`} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm hover:bg-green-500/30 transition-colors">
                      {type}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Famous People */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>⭐</span> 같은 유형의 유명인
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {detail.celebrities.map((celebrity, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold text-white">{celebrity.name}</h4>
                <p className="text-gray-400 text-sm mt-1">{celebrity.description.slice(0, 80)}...</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Share */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-6">
          <h3 className="text-lg font-bold text-white mb-4 text-center">결과 공유하기</h3>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => handleShare('twitter')}
              className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
              title="Twitter로 공유"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="p-3 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors"
              title="Facebook으로 공유"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="p-3 bg-gray-600 hover:bg-gray-700 rounded-full transition-colors"
              title="링크 복사"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
        <Link
          href={`/types/${result}`}
          className="px-6 py-3 min-w-[160px] bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-purple-700 transition-all text-center"
        >
          더 자세한 분석보기
        </Link>
        <button
          onClick={onRetake}
          className="px-6 py-3 min-w-[160px] bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all"
        >
          테스트 다시하기
        </button>
        <button
          onClick={onGoHome}
          className="px-6 py-3 min-w-[160px] bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-gray-700 transition-all"
        >
          홈으로
        </button>
      </div>
    </div>
  );
};

export const EnhancedResultCard = React.memo(EnhancedResultCardComponent);
