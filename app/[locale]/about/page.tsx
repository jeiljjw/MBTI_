import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale, getTranslations } from 'next-intl/server';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  
  return {
    title: t('metadataTitle'),
    description: t('metadataDescription'),
    keywords: ["MBTI", "성격 유형", "테스트", "심리학", "자기 이해", "전문가", "研究"],
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: "website",
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about' });
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-gray-400">
            {t('heroSubtitle')}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-3xl">🎯</span> {t('missionTitle')}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t('missionDescription')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🔬</div>
              <h3 className="font-semibold text-white mb-1">{t('scienceTitle')}</h3>
              <p className="text-gray-400 text-sm">{t('scienceDesc')}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-semibold text-white mb-1">{t('expertiseTitle')}</h3>
              <p className="text-gray-400 text-sm">{t('expertiseDesc')}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-semibold text-white mb-1">{t('practicalityTitle')}</h3>
              <p className="text-gray-400 text-sm">{t('practicalityDesc')}</p>
            </div>
          </div>
        </div>

        {/* Expert Team */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">👥</span> {t('teamTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Expert 1 */}
            <div className="bg-white/5 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                  👨‍🏫
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t('expert1Name')}</h3>
                  <p className="text-purple-400 text-sm">{t('expert1Title')}</p>
                </div>
              </div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• {t('expert1Edu')}</li>
                <li>• {t('expert1Work')}</li>
                <li>• {t('expert1Member')}</li>
                <li>• {t('expert1Exp')}</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                &ldquo;{t('expert1Quote')}rdquo;
              </p>
            </div>

            {/* Expert 2 */}
            <div className="bg-white/5 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl">
                  👩‍💼
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t('expert2Name')}</h3>
                  <p className="text-blue-400 text-sm">{t('expert2Title')}</p>
                </div>
              </div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• {t('expert2Edu')}</li>
                <li>• {t('expert2Work')}</li>
                <li>• {t('expert2Cert')}</li>
                <li>• {t('expert2Exp')}</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                &ldquo;{t('expert2Quote')}rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">🔬</span> {t('methodologyTitle')}
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">{t('researchBaseTitle')}</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                {t('researchBaseDesc')}
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                <li>Myers, I. B., & Myers, P. B. (1995). <em>Gifts Differing</em>. Davies-Black Publishing.</li>
                <li>Jung, C. G. (1921). <em>Psychological Types</em>. Princeton University Press.</li>
                <li>McCrae, R. R., & Costa, P. T. (1989). Reinterpreting the Myers-Briggs Type Indicator. <em>Journal of Personality</em>, 57(1), 17-40.</li>
                <li>Pittenger, D. J. (1993). Measuring the MBTI... And Coming Up Short. <em>Journal of Career Planning and Employment</em>, 54(1), 48-52.</li>
                <li>Grant, A. (2013). Goodbye to MBTI, the Fad That Won&apos;t Die. <em>Psychology Today</em>.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">{t('testDesignTitle')}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>{t('standardizedQuestions')}</strong> {t('standardizedQuestionsDesc')}</li>
                <li><strong>{t('balancedPlacement')}</strong> {t('balancedPlacementDesc')}</li>
                <li><strong>{t('scoreWeight')}</strong> {t('scoreWeightDesc')}</li>
                <li><strong>{t('privacy')}</strong> {t('privacyDesc')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Academic Partnerships */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">🎓</span> {t('partnershipsTitle')}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t('partnershipsDesc')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <p className="text-gray-300 text-sm">{t('org1')}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📖</div>
              <p className="text-gray-300 text-sm">{t('org2')}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🔬</div>
              <p className="text-gray-300 text-sm">{t('org3')}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">💼</div>
              <p className="text-gray-300 text-sm">{t('org4')}</p>
            </div>
          </div>
        </div>

        {/* Limitations & Ethics */}
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
            <span className="text-2xl">⚠️</span> {t('limitationsTitle')}
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
            <li>{t('limitation1')}</li>
            <li>{t('limitation2')}</li>
            <li>{t('limitation3')}</li>
            <li>{t('limitation4')}</li>
            <li>{t('limitation5')}</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-3xl">📧</span> {t('contactTitle')}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t('contactDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:contact@simplembti.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-purple-700 transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('sendEmail')}
            </a>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {t('contactPage')}
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link href="/">
            <button className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all">
              ← {t('backHome')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
