"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface MBTIType {
  code: string;
  name: string;
  color: string;
  group: string;
}

interface CompatibilityCheckerProps {
  mbtiTypes: MBTIType[];
  compatibilityData: Record<string, Record<string, { score: number; level: string; description: string; advice: string }>>;
}

function getCompatibility(
  type1: string, 
  type2: string, 
  compatibilityData: Record<string, Record<string, { score: number; level: string; description: string; advice: string }>>,
  t: (key: string) => string
) {
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
  
  let level = t('levelGood');
  if (score >= 90) level = t('levelBest');
  else if (score >= 80) level = t('levelGreat');
  else if (score >= 70) level = t('levelGood');
  else level = t('levelNeedsWork');
  
  return {
    score,
    level,
    description: t('defaultDescription'),
    advice: t('defaultAdvice')
  };
}

export function CompatibilityChecker({ mbtiTypes, compatibilityData }: CompatibilityCheckerProps) {
  const [type1, setType1] = useState<string>('');
  const [type2, setType2] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const t = useTranslations('compatibility');

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

  const result = (type1 && type2) ? getCompatibility(type1, type2, compatibilityData, t) : null;
  const type1Data = mbtiTypes.find(t => t.code === type1);
  const type2Data = mbtiTypes.find(t => t.code === type2);

  return (
    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-12">
      <h2 className="text-2xl font-bold text-white text-center mb-8">{t('checkCompatibility')}</h2>
      
      {!showResult ? (
        <div className="space-y-8">
          {/* Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Type */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 text-center">{t('firstType')}</h3>
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
              <h3 className="text-lg font-semibold text-white mb-4 text-center">{t('secondType')}</h3>
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
              {t('checkCompatibility')}
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
                    <span className="text-sm text-gray-400 mt-1">{t('points')}</span>
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
                <h4 className="text-purple-300 font-semibold mb-2">💡 {t('relationshipAdvice')}</h4>
                <p className="text-gray-300">{result.advice}</p>
              </div>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all duration-300"
              >
                {t('checkAgain')}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
