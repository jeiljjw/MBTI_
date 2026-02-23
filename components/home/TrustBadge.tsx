"use client";

import { useTranslations } from 'next-intl';

interface TrustBadgeProps {
  className?: string;
}

export function TrustBadge({ className = "" }: TrustBadgeProps) {
  const t = useTranslations('home');

  const stats = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: t('trust.accuracy'),
      value: t('trust.accuracyValue'),
      highlight: true,
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: t('trust.time'),
      value: t('trust.timeValue'),
      highlight: false,
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      label: t('trust.questions'),
      value: t('trust.questionsValue'),
      highlight: false,
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: t('trust.price'),
      value: t('trust.priceValue'),
      highlight: true,
    },
  ];

  return (
    <div className={`grid grid-cols-4 gap-1 sm:gap-4 ${className}`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`
            flex flex-col items-center justify-center gap-0.5 sm:gap-2 p-2 sm:p-4 rounded-xl min-w-0
            ${stat.highlight
              ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30'
              : 'bg-white/5 border border-white/10'
            }
          `}
        >
          <div className={`w-3 h-3 sm:w-6 sm:h-6 ${stat.highlight ? 'text-purple-400' : 'text-gray-400'}`}>
            {stat.icon}
          </div>
          <span className="text-gray-400 text-[10px] sm:text-sm truncate w-full text-center">{stat.label}</span>
          <span className={`
            text-[10px] sm:text-lg font-semibold truncate w-full text-center
            ${stat.highlight
              ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
              : 'text-white'
            }
          `}>
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  );
}
