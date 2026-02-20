"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export function TermsOfServiceContent() {
  const t = useTranslations('termsOfService');

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
              <h2 className="text-2xl font-bold text-white mb-4">{t('article1Title')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t('article1Content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('article2Title')}</h2>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• &quot;{t('article2Term1')}&quot; {t('article2Def1')}</li>
                <li>• &quot;{t('article2Term2')}&quot; {t('article2Def2')}</li>
                <li>• &quot;{t('article2Term3')}&quot; {t('article2Def3')}</li>
                <li>• &quot;{t('article2Term4')}&quot; {t('article2Def4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('article3Title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                {t('article3Intro')}
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• {t('article3Point1')}</li>
                <li>• {t('article3Point2')}</li>
                <li>• {t('article3Point3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('article4Title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-3">{t('article4Intro')}</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• {t('article4Service1')}</li>
                <li>• {t('article4Service2')}</li>
                <li>• {t('article4Service3')}</li>
                <li>• {t('article4Service4')}</li>
                <li>• {t('article4Service5')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('article5Title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-3">{t('article5Intro')}</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• {t('article5Reason1')}</li>
                <li>• {t('article5Reason2')}</li>
                <li>• {t('article5Reason3')}</li>
                <li>• {t('article5Reason4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('article6Title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-3">{t('article6Intro')}</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• {t('article6Limit1')}</li>
                <li>• {t('article6Limit2')}</li>
                <li>• {t('article6Limit3')}</li>
                <li>• {t('article6Limit4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('article7Title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-3">{t('article7Intro')}</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• {t('article7Disclaimer1')}</li>
                <li>• {t('article7Disclaimer2')}</li>
                <li>• {t('article7Disclaimer3')}</li>
                <li>• {t('article7Disclaimer4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('article8Title')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t('article8Content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('article9Title')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t('article9Content')}
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
