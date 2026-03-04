"use client";

import { useTranslations } from 'next-intl';

export function MBTIStorySection() {
  const t = useTranslations('home.mbtiStory');

  return (
    <section className="w-full bg-neutral-900/50 py-24 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-purple-300/80 font-medium">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed md:leading-loose">
          <p className="mb-6">{t('p1')}</p>
          <p className="mb-6">{t('p2')}</p>
          <p className="mb-8 font-semibold text-white/90">{t('p3')}</p>
          
          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg mt-10 shadow-sm backdrop-blur-sm">
            <div className="flex items-start">
              <span className="text-2xl mr-4 opacity-70">💡</span>
              <p className="text-purple-100/90 text-sm md:text-base italic m-0">
                {t('authorTip')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
