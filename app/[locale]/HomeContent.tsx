"use client";

import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/home/HeroSection';
import { SiteNavigation } from '@/components/home/SiteNavigation';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { StatsBanner } from '@/components/home/StatsBanner';
import { LatestBlog } from '@/components/home/LatestBlog';
import { FAQSection } from '@/components/home/FAQSection';

export function HomeContent() {
  const t = useTranslations('home');

  return (
    <div className="flex flex-col">
      {/* Hero Section with Beams */}
      <HeroSection t={t} />

      {/* Site Navigation Section */}
      <section className="w-full bg-neutral-950 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SiteNavigation />
        </div>
      </section>

      {/* Stats Banner */}
      <StatsBanner />

      {/* Latest Blog */}
      <LatestBlog />

      {/* FAQ Section */}
      <FAQSection />

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  );
}
