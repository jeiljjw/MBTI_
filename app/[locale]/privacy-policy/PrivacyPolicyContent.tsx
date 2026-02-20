"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export function PrivacyPolicyContent() {
  const t = useTranslations('privacyPolicy');

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center gap-6 px-4 text-center pt-25 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Content */}
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10 text-left">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('articles.article1.title')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t('articles.article1.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('articles.article2.title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-3">{t('articles.article2.content')}</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                {t.raw('articles.article2.items').map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('articles.article3.title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-3">{t('articles.article3.content')}</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                {t.raw('articles.article3.items').map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('articles.article4.title')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t('articles.article4.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('articles.article5.title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-3">{t('articles.article5.content')}</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                {t.raw('articles.article5.items').map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('articles.article6.title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-3">{t('articles.article6.content')}</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                {t.raw('articles.article6.items').map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('articles.article7.title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-3">{t('articles.article7.content')}</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                {t.raw('articles.article7.items').map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('articles.article8.title')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t('articles.article8.content')}
              </p>
            </section>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/">
            <button className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-gray-700 transition-all duration-300 transform hover:scale-105">
              {t('backToHome')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
