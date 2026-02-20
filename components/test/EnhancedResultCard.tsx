"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '@/src/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { loadMBTIDetails } from '@/lib/lazy-loaders';

interface EnhancedResultCardProps {
  result: string;
  onGoHome: () => void;
  onRetake: () => void;
}

// Type for MBTI details (to avoid importing the full type)
type MBTIDetail = {
  name: string;
  nickname: string;
  group: string;
  characteristics: string;
  cognitiveFunctions: {
    dominant: { name: string; description: string };
    auxiliary: { name: string; description: string };
    tertiary: { name: string; description: string };
    inferior: { name: string; description: string };
  };
  strengths: string[];
  weaknesses: string[];
  careers: {
    recommended: Array<{ job: string; reason: string }>;
    avoid: Array<{ job: string; reason: string }>;
  };
  celebrities: Array<{ name: string; description: string }>;
};

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
  const [detail, setDetail] = useState<MBTIDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const t = useTranslations('enhancedResultCard');
  const locale = useLocale() as 'ko' | 'en';
  
  // Load MBTI details dynamically
  useEffect(() => {
    let mounted = true;
    
    const loadDetails = async () => {
      try {
        const mbtiDetails = await loadMBTIDetails(locale);
        if (mounted) {
          setDetail(mbtiDetails[result]);
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to load MBTI details:', error);
        if (mounted) {
          setLoading(false);
        }
      }
    };
    
    loadDetails();
    
    return () => {
      mounted = false;
    };
  }, [locale, result]);
  
  if (loading || !detail) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-700 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div>
            <div className="h-32 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const comparison = typeComparisons[result] || { similar: [], complementary: [], challenging: [] };

const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = t('shareText', { type: result, name: detail.name });
    const imageUrl = `${window.location.origin}/og-image.png`;
    
    switch (platform) {
      case 'x':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'threads':
        window.open(`https://www.threads.net/intent?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'instagram':
        try {
          await navigator.clipboard.writeText(`${text} ${url}`);
          alert(t('linkCopiedInstagram'));
        } catch {
          alert(t('linkCopyFailed'));
        }
        break;
      case 'kakao':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof window !== 'undefined' && (window as any).Kakao) {
          try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).Kakao.Share.sendDefault({
              objectType: 'feed',
              content: {
                title: t('kakaoTitle', { type: result, name: detail.name }),
                description: text,
                imageUrl: imageUrl,
                link: {
                  mobileWebUrl: url,
                  webUrl: url,
                },
              },
              buttons: [
                {
                  title: t('kakaoButton'),
                  link: {
                    mobileWebUrl: url,
                    webUrl: url,
                  },
                },
              ],
            });
          } catch {
            try {
              await navigator.clipboard.writeText(`${text} ${url}`);
              alert(t('linkCopiedKakao'));
            } catch {
              alert(t('linkCopyFailed'));
            }
          }
        } else {
          try {
            await navigator.clipboard.writeText(`${text} ${url}`);
            alert(t('linkCopiedKakao'));
          } catch {
            alert(t('linkCopyFailed'));
          }
        }
        break;
      case 'line':
        window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(`${text} ${url}`);
          alert(t('linkCopied'));
        } catch {
          alert(t('linkCopyFailed'));
        }
        break;
    }
  };

const getGroupColor = (group: string) => {
    if (group.includes("Analyst") || group.includes("분석가형")) return "from-blue-500 to-purple-600";
    if (group.includes("Diplomat") || group.includes("외교관형")) return "from-pink-500 to-rose-600";
    if (group.includes("Sentinel") || group.includes("관리자형")) return "from-green-500 to-teal-600";
    if (group.includes("Explorer") || group.includes("탐험가형")) return "from-orange-500 to-red-600";
    return "from-gray-500 to-gray-600";
  };

  const groupColor = getGroupColor(detail.group);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-neutral-950">
{/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            {t('completed')}
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
            <span>📝</span> {t('detailedAnalysis')}
          </h3>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {detail.characteristics}
          </p>
        </div>

{/* Cognitive Functions */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🧠</span> {t('cognitiveFunctionsTitle')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-purple-400 mb-1">{t('cognitiveFunctionDominant')}</div>
              <h4 className="font-bold text-white">{detail.cognitiveFunctions.dominant.name}</h4>
              <p className="text-gray-400 text-sm mt-1">{detail.cognitiveFunctions.dominant.description}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-blue-400 mb-1">{t('cognitiveFunctionAuxiliary')}</div>
              <h4 className="font-bold text-white">{detail.cognitiveFunctions.auxiliary.name}</h4>
              <p className="text-gray-400 text-sm mt-1">{detail.cognitiveFunctions.auxiliary.description}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 opacity-80">
              <div className="text-sm text-yellow-400 mb-1">{t('cognitiveFunctionTertiary')}</div>
              <h4 className="font-bold text-white">{detail.cognitiveFunctions.tertiary.name}</h4>
              <p className="text-gray-400 text-sm mt-1">{detail.cognitiveFunctions.tertiary.description}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 opacity-70">
              <div className="text-sm text-red-400 mb-1">{t('cognitiveFunctionInferior')}</div>
              <h4 className="font-bold text-white">{detail.cognitiveFunctions.inferior.name}</h4>
              <p className="text-gray-400 text-sm mt-1">{detail.cognitiveFunctions.inferior.description}</p>
            </div>
          </div>
        </div>

{/* Strengths & Weaknesses Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-green-500/30">
            <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
              <span>💪</span> {t('strengths')}
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
              <span>⚠️</span> {t('weaknesses')}
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
            <span>💼</span> {t('careerCompatibility')}
          </h3>
          
          <div className="mb-6">
            <h4 className="text-green-400 font-semibold mb-3">✓ {t('recommendedCareers')}</h4>
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
            <h4 className="text-red-400 font-semibold mb-3">⚠ {t('challengingCareers')}</h4>
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
              <span>🤝</span> {t('typeComparison')}
            </h3>
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-purple-400 text-sm hover:text-purple-300"
            >
              {showComparison ? t('collapse') : t('viewDetails')}
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{comparison.similar.length}</div>
              <div className="text-gray-400 text-sm">{t('similarTypes')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{comparison.complementary.length}</div>
              <div className="text-gray-400 text-sm">{t('complementaryTypes')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{comparison.challenging.length}</div>
              <div className="text-gray-400 text-sm">{t('challengingTypes')}</div>
            </div>
          </div>
          
          {showComparison && (
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">{t('similarTypes')}</h4>
                <div className="flex flex-wrap gap-2">
                  {comparison.similar.map(type => (
                    <Link key={type} href={`/types/${type}`} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-colors">
                      {type}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-green-400 font-semibold mb-2">{t('complementaryTypes')}</h4>
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
            <span>⭐</span> {t('famousPeople')}
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
          <h3 className="text-lg font-bold text-white mb-4 text-center">{t('shareResults')}</h3>
          <div className="flex justify-center gap-3 flex-wrap">
{/* X (Twitter) */}
            <button
              onClick={() => handleShare('x')}
              className="w-10 h-10 flex items-center justify-center bg-black hover:bg-gray-800 rounded-full transition-colors border border-gray-700 hover:border-gray-500"
              title={t('shareOnX')}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
{/* Threads */}
            <button
              onClick={() => handleShare('threads')}
              className="w-10 h-10 flex items-center justify-center bg-black hover:bg-gray-800 rounded-full transition-colors border border-gray-700 hover:border-gray-500"
              title={t('shareOnThreads')}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.635-1.986 1.47-1.56 1.387-3.47 1.09-4.69-.24-1.001-.77-1.835-1.49-2.468-.19 1.093-.59 2.07-1.21 2.88-.89 1.16-2.15 1.83-3.55 1.89-1.13.05-2.21-.33-3.04-1.06-.84-.74-1.33-1.77-1.38-2.89-.06-1.17.38-2.26 1.22-3.06.84-.79 1.99-1.19 3.24-1.13 1.29.06 2.44.53 3.38 1.37.63.56 1.14 1.26 1.52 2.07.45-.31.87-.67 1.24-1.07 1.25-1.35 1.83-3.09 1.63-4.9l2.05-.22c.26 2.33-.49 4.54-2.11 6.28-.28.3-.58.59-.9.85.38 1.03.58 2.18.54 3.41-.07 2.09-.93 4.02-2.42 5.43-1.72 1.63-4.12 2.47-7.13 2.49zm-.98-14.01c-.67-.03-1.27.17-1.7.58-.43.41-.65.96-.63 1.55.03.58.27 1.1.68 1.47.41.36.94.54 1.49.52.79-.04 1.48-.44 1.99-1.11.49-.64.78-1.45.85-2.35-.59-.38-1.27-.62-1.99-.66h-.69z"/>
              </svg>
            </button>
{/* Instagram */}
            <button
              onClick={() => handleShare('instagram')}
              className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-500 hover:via-pink-400 hover:to-orange-300 rounded-full transition-colors"
              title={t('shareOnInstagram')}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </button>
{/* Facebook */}
            <button
              onClick={() => handleShare('facebook')}
              className="w-10 h-10 flex items-center justify-center bg-blue-700 hover:bg-blue-600 rounded-full transition-colors"
              title={t('shareOnFacebook')}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
{/* KakaoTalk */}
            <button
              onClick={() => handleShare('kakao')}
              className="w-10 h-10 flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 rounded-full transition-colors"
              title={t('shareOnKakao')}
            >
              <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c-5.52 0-10 3.59-10 8 0 2.84 1.87 5.33 4.67 6.73-.2.76-.74 2.76-.85 3.19-.13.53.19.52.41.38.17-.11 2.72-1.85 3.83-2.6.63.09 1.28.14 1.94.14 5.52 0 10-3.59 10-8s-4.48-8-10-8z"/>
              </svg>
            </button>
{/* LINE */}
            <button
              onClick={() => handleShare('line')}
              className="w-10 h-10 flex items-center justify-center bg-green-500 hover:bg-green-400 rounded-full transition-colors"
              title={t('shareOnLine')}
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
            </button>
{/* Copy Link */}
            <button
              onClick={() => handleShare('copy')}
              className="w-10 h-10 flex items-center justify-center bg-gray-600 hover:bg-gray-500 rounded-full transition-colors"
              title={t('copyLink')}
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
          {t('viewDetailedAnalysis')}
        </Link>
        <button
          onClick={onRetake}
          className="px-6 py-3 min-w-[160px] bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all"
        >
          {t('retake')}
        </button>
        <button
          onClick={onGoHome}
          className="px-6 py-3 min-w-[160px] bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-gray-700 transition-all"
        >
          {t('goHome')}
        </button>
      </div>
    </div>
  );
};

export const EnhancedResultCard = React.memo(EnhancedResultCardComponent);
