"use client";

import { TrustBadge } from '@/components/home/TrustBadge';
import { HeroButton } from '@/components/home/HeroButton';
import { BeamsBackground } from '@/components/ui/beams-background';

export function HeroSection({ t }: { t: (key: string) => string }) {
  return (
    <BeamsBackground intensity="medium" minHeight="h-screen">
      {/* Content */}
      <div className="w-full max-w-5xl mx-auto text-center space-y-8 px-4">
        {/* 제목 */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter whitespace-pre-line">
          {t('title')}
        </h1>
        
        {/* 부제 */}
        <p className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        {/* Trust Badge */}
        <div className="py-4">
          <TrustBadge />
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <HeroButton>
            {t('startTest')}
          </HeroButton>
        </div>
      </div>
    </BeamsBackground>
  );
}
