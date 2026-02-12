"use client";

import { useState } from 'react';
import Link from 'next/link';

const mbtiTypes = [
  { code: 'INTJ', name: '전략가', color: 'from-blue-500 to-purple-600', group: '분석가형' },
  { code: 'INTP', name: '논리술사', color: 'from-blue-500 to-purple-600', group: '분석가형' },
  { code: 'ENTJ', name: '통솔자', color: 'from-blue-500 to-purple-600', group: '분석가형' },
  { code: 'ENTP', name: '변론가', color: 'from-blue-500 to-purple-600', group: '분석가형' },
  { code: 'INFJ', name: '옹호자', color: 'from-pink-500 to-rose-600', group: '외교관형' },
  { code: 'INFP', name: '중재자', color: 'from-pink-500 to-rose-600', group: '외교관형' },
  { code: 'ENFJ', name: '선도자', color: 'from-pink-500 to-rose-600', group: '외교관형' },
  { code: 'ENFP', name: '활동가', color: 'from-pink-500 to-rose-600', group: '외교관형' },
  { code: 'ISTJ', name: '현실주의자', color: 'from-green-500 to-teal-600', group: '관리자형' },
  { code: 'ISFJ', name: '수호자', color: 'from-green-500 to-teal-600', group: '관리자형' },
  { code: 'ESTJ', name: '경영자', color: 'from-green-500 to-teal-600', group: '관리자형' },
  { code: 'ESFJ', name: '집정관', color: 'from-green-500 to-teal-600', group: '관리자형' },
  { code: 'ISTP', name: '장인', color: 'from-orange-500 to-red-600', group: '탐험가형' },
  { code: 'ISFP', name: '모험가', color: 'from-orange-500 to-red-600', group: '탐험가형' },
  { code: 'ESTP', name: '사업가', color: 'from-orange-500 to-red-600', group: '탐험가형' },
  { code: 'ESFP', name: '연예인', color: 'from-orange-500 to-red-600', group: '탐험가형' },
];

const compatibilityData: Record<string, Record<string, { score: number; level: string; description: string; advice: string }>> = {
  'INTJ': {
    'ENFP': { score: 95, level: '천생연분', description: '창의적 ENFP가 INTJ의 세계에 색다른 영감을 제공합니다.', advice: 'ENFP의 즉흥성을 INTJ의 계획으로 균형있게 조화시키세요.' },
    'ENTP': { score: 90, level: '최고의 파트너', description: '지적인 대화와 혁신적인 아이디어가 넘치는 관계입니다.', advice: '서로의 아이디어를 존중하며 실행 가능성을 함께 검토하세요.' },
    'INTJ': { score: 85, level: '깊은 이해', description: '서로를 완벽하게 이해하며 성장하는 관계입니다.', advice: '같은 유형끼리는 강점도 약점도 함께하므로 다양한 시각을 위해 다른 사람들과도 교류하세요.' },
  }
};

function getCompatibility(type1: string, type2: string) {
  if (compatibilityData[type1]?.[type2]) {
    return compatibilityData[type1][type2];
  }
  if (compatibilityData[type2]?.[type1]) {
    return compatibilityData[type2][type1];
  }
  
  // Calculate basic compatibility based on letters
  let score = 70;
  if (type1 === type2) score = 85;
  
  const e1 = type1[0], e2 = type2[0];
  const s1 = type1[1], s2 = type2[1];
  const t1 = type1[2], t2 = type2[2];
  const j1 = type1[3], j2 = type2[3];
  
  // E/I: opposite is good
  if (e1 !== e2) score += 5;
  
  // S/N: opposite can be complementary
  if (s1 !== s2) score += 3;
  
  // T/F: opposite is good for balance
  if (t1 !== t2) score += 5;
  
  // J/P: opposite is good
  if (j1 !== j2) score += 5;
  
  // Cap at 95
  score = Math.min(score, 95);
  
  let level = '좋은 관계';
  if (score >= 90) level = '최고의 궁합';
  else if (score >= 80) level = '훌륭한 궁합';
  else if (score >= 70) level = '좋은 관계';
  else level = '노력이 필요한 관계';
  
  return {
    score,
    level,
    description: '서로 다른 성향이 균형을 이루는 관계입니다.',
    advice: '차이점을 존중하고 서로 배우며 성장하세요.'
  };
}

const relationshipTips = [
  {
    category: "연인 관계",
    icon: "💕",
    tips: [
      "상대방의 사랑 표현 방식을 이해하세요 (말로 표현 vs 행동으로 표현)",
      "갈등 시 서로의 차이점을 인정하고 타협점을 찾으세요",
      "공통 관심사를 개발하고 함께 즐길 수 있는 활동을 찾아보세요"
    ]
  },
  {
    category: "부부 관계",
    icon: "💑",
    tips: [
      "가정 내 역할 분담 시 각자의 강점을 고려하세요",
      "의사소통 스타일의 차이를 인정하고 적응하세요",
      "정기적으로 서로의 감정과 생각을 공유하는 시간을 가지세요"
    ]
  },
  {
    category: "자녀 양육",
    icon: "👨‍👩‍👧‍👦",
    tips: [
      "아이의 MBTI를 고려한 교육 방법을 선택하세요",
      "강요보다는 격려와 지지를 통해 성장을 도와주세요",
      "아이의 성격 유형에 맞는 학습 스타일을 찾아주세요"
    ]
  }
];

export default function Compatibility() {
  const [type1, setType1] = useState<string>('');
  const [type2, setType2] = useState<string>('');
  const [showResult, setShowResult] = useState(false);

  const handleCheckCompatibility = () => {
    if (type1 && type2) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setType1('');
    setType2('');
    setShowResult(false);
  };

  const result = (type1 && type2) ? getCompatibility(type1, type2) : null;
  const type1Data = mbtiTypes.find(t => t.code === type1);
  const type2Data = mbtiTypes.find(t => t.code === type2);

  return (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter mb-4">
            MBTI 궁합
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
            두 유형의 궁합을 확인하고 관계 팁을 알아보세요
          </p>
        </div>

        {/* Interactive Compatibility Checker */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">궁합 확인하기</h2>
          
          {!showResult ? (
            <div className="space-y-8">
              {/* Type Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Type */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 text-center">첫 번째 유형</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {mbtiTypes.map((type) => (
                      <button
                        key={`1-${type.code}`}
                        onClick={() => setType1(type.code)}
                        className={`p-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                          type1 === type.code
                            ? `bg-gradient-to-r ${type.color} text-white shadow-lg scale-105`
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {type.code}
                      </button>
                    ))}
                  </div>
                  {type1 && type1Data && (
                    <div className="mt-4 text-center">
                      <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${type1Data.color} text-white text-sm`}>
                        {type1Data.name} ({type1Data.group})
                      </span>
                    </div>
                  )}
                </div>

                {/* Second Type */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 text-center">두 번째 유형</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {mbtiTypes.map((type) => (
                      <button
                        key={`2-${type.code}`}
                        onClick={() => setType2(type.code)}
                        className={`p-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                          type2 === type.code
                            ? `bg-gradient-to-r ${type.color} text-white shadow-lg scale-105`
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {type.code}
                      </button>
                    ))}
                  </div>
                  {type2 && type2Data && (
                    <div className="mt-4 text-center">
                      <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${type2Data.color} text-white text-sm`}>
                        {type2Data.name} ({type2Data.group})
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Check Button */}
              <div className="text-center">
                <button
                  onClick={handleCheckCompatibility}
                  disabled={!type1 || !type2}
                  className={`px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                    type1 && type2
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-purple-500/25 hover:scale-105'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  궁합 확인하기
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Result Display */}
              {result && (
                <div className="text-center space-y-6">
                  {/* Types Display */}
                  <div className="flex items-center justify-center gap-4">
                    <div className={`px-6 py-4 rounded-xl bg-gradient-to-r ${type1Data?.color} text-white`}>
                      <div className="text-2xl font-bold">{type1}</div>
                      <div className="text-sm opacity-90">{type1Data?.name}</div>
                    </div>
                    <div className="text-4xl">💕</div>
                    <div className={`px-6 py-4 rounded-xl bg-gradient-to-r ${type2Data?.color} text-white`}>
                      <div className="text-2xl font-bold">{type2}</div>
                      <div className="text-sm opacity-90">{type2Data?.name}</div>
                    </div>
                  </div>

                  {/* Score Circle */}
                  <div className="flex justify-center">
                    <div className="relative w-48 h-48">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="8"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={`${result.score * 2.83} 283`}
                          className="transition-all duration-1000"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9333ea" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-5xl font-bold text-white">{result.score}</span>
                        <span className="text-sm text-gray-400 mt-1">점</span>
                      </div>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30">
                    <span className="text-xl font-bold text-purple-300">{result.level}</span>
                  </div>

                  {/* Description */}
                  <div className="bg-white/5 rounded-xl p-6 max-w-2xl mx-auto">
                    <p className="text-gray-300 text-lg leading-relaxed">{result.description}</p>
                  </div>

                  {/* Advice */}
                  <div className="bg-purple-500/10 rounded-xl p-6 max-w-2xl mx-auto border border-purple-500/30">
                    <h4 className="text-purple-300 font-semibold mb-2">💡 관계 조언</h4>
                    <p className="text-gray-300">{result.advice}</p>
                  </div>

                  {/* Reset Button */}
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all duration-300"
                  >
                    다시 확인하기
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Compatibility Levels Explanation */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-8 text-center">
            궁합도별 안내
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-emerald-400/50 hover:border-emerald-400 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">💚</span>
                <h4 className="text-lg font-bold text-emerald-300">90-100점</h4>
              </div>
              <p className="text-emerald-400 font-semibold mb-2">천생연분</p>
              <p className="text-gray-300 text-sm">
                성격이 매우 잘 맞습니다. 서로를 이해하고 보완하는 이상적인 관계입니다.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-green-400/50 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">💚</span>
                <h4 className="text-lg font-bold text-green-300">80-89점</h4>
              </div>
              <p className="text-green-400 font-semibold mb-2">훌륭한 궁합</p>
              <p className="text-gray-300 text-sm">
                서로 잘 맞으며 함께 성장할 수 있는 관계입니다.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-yellow-400/50 hover:border-yellow-400 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">💛</span>
                <h4 className="text-lg font-bold text-yellow-300">70-79점</h4>
              </div>
              <p className="text-yellow-400 font-semibold mb-2">좋은 관계</p>
              <p className="text-gray-300 text-sm">
                차이점이 있지만 노력하면 좋은 관계를 유지할 수 있습니다.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-red-400/50 hover:border-red-400 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">❤️</span>
                <h4 className="text-lg font-bold text-red-300">70점 미만</h4>
              </div>
              <p className="text-red-400 font-semibold mb-2">노력 필요</p>
              <p className="text-gray-300 text-sm">
                많은 차이점이 있습니다. 서로 이해하고 존중하는 태도가 중요합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Relationship Tips */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent mb-8 text-center">
            인간관계 팁
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relationshipTips.map((category, index) => (
              <div
                key={index}
                className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-black/30 hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-2">
                      <span className="text-pink-400 mt-1">✓</span>
                      <span className="text-gray-300 text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Famous Couples Examples */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
            유명한 궁합 사례
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-bold">INTJ</span>
                  <span className="text-gray-400">💕</span>
                  <span className="px-3 py-1 rounded-full bg-pink-500 text-white text-sm font-bold">ENFP</span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">전략가 × 활동가</h4>
              <p className="text-emerald-300 text-sm mb-3">95점 - 천생연분</p>
              <p className="text-gray-300 text-sm">
                전략적 사고(INTJ)와 창의적 에너지(ENFP)의 완벽한 조합. 서로의 강점을 극대화합니다.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-green-500 text-white text-sm font-bold">ISTJ</span>
                  <span className="text-gray-400">💕</span>
                  <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-sm font-bold">ESFP</span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">현실주의자 × 연예인</h4>
              <p className="text-emerald-300 text-sm mb-3">92점 - 최고의 궁합</p>
              <p className="text-gray-300 text-sm">
                안정성(ISTJ)과 에너지(ESFP)의 균형. 서로의 부족한 부분을 채워줍니다.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-green-400/30 hover:border-green-400/60 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-pink-500 text-white text-sm font-bold">INFJ</span>
                  <span className="text-gray-400">💕</span>
                  <span className="px-3 py-1 rounded-full bg-pink-500 text-white text-sm font-bold">ENFP</span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">옹호자 × 활동가</h4>
              <p className="text-green-300 text-sm mb-3">88점 - 훌륭한 궁합</p>
              <p className="text-gray-300 text-sm">
                깊은 공감과 이상주의의 조화. 서로의 감정을 잘 이해하고 지지합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/">
            <button className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-gray-700 transition-all duration-300 transform hover:scale-105">
              홈으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
