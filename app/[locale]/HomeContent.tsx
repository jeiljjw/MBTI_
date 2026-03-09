"use client";

import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/home/HeroSection';
import { SiteNavigation } from '@/components/home/SiteNavigation';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { StatsBanner } from '@/components/home/StatsBanner';
import { LatestBlog } from '@/components/home/LatestBlog';
import { FAQSection } from '@/components/home/FAQSection';
import { MBTIStorySection } from '@/components/home/MBTIStorySection';
import { DailyInsightsSection } from '@/components/home/DailyInsightsSection';

export function HomeContent() {
  const t = useTranslations('home');

  return (
    <div className="flex flex-col">
      {/* Hero Section with Beams */}
      <HeroSection t={t} />

      {/* Latest Blog (Moved to top to emphasize blog/magazine) */}
      <LatestBlog />

      {/* SEO & Story Section (Explains MBTI, good for E-E-A-T) */}
      <MBTIStorySection />

      {/* Daily Insights Section */}
      <DailyInsightsSection />

      {/* Site Navigation Section (Including test button) */}
      <section className="w-full bg-neutral-950 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <SiteNavigation />
        </div>
      </section>

      {/* Stats Banner */}
      <StatsBanner />

      {/* FAQ Section */}
      <FAQSection />

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  );
}
