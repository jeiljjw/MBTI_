import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/src/i18n/routing';
import { getMBTIDetails } from "@/lib/i18n/mbti-detailed";

// 16가지 MBTI 유형
const mbtiTypes = [
  "ISTJ", "ISFJ", "INFJ", "INTJ",
  "ISTP", "ISFP", "INFP", "INTP",
  "ESTP", "ESFP", "ENFP", "ENTP",
  "ESTJ", "ESFJ", "ENFJ", "ENTJ"
];

// Generate static params for all 16 types
export function generateStaticParams() {
  return mbtiTypes.map((type) => ({
    type: type,
  }));
}

// Get group color for styling (works for both Korean and English)
const getGroupColor = (group: string) => {
  if (group.includes("분석가") || group.includes("Analyst")) return "from-blue-500 to-purple-600";
  if (group.includes("외교관") || group.includes("Diplomat")) return "from-pink-500 to-rose-600";
  if (group.includes("관리자") || group.includes("Sentinel")) return "from-green-500 to-teal-600";
  if (group.includes("탐험가") || group.includes("Explorer")) return "from-orange-500 to-red-600";
  return "from-gray-500 to-gray-600";
};

// Get border color for styling
const getBorderColor = (group: string) => {
  if (group.includes("분석가") || group.includes("Analyst")) return "border-cyan-400";
  if (group.includes("외교관") || group.includes("Diplomat")) return "border-pink-400";
  if (group.includes("관리자") || group.includes("Sentinel")) return "border-green-400";
  if (group.includes("탐험가") || group.includes("Explorer")) return "border-orange-400";
  return "border-gray-400";
};

interface Props {
  params: Promise<{ locale: string; type: string }>;
}

// Generate metadata for each type
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, type } = await params;
  const typeCode = type.toUpperCase();
  const details = getMBTIDetails(locale as 'ko' | 'en');
  const detail = details[typeCode];
  
  if (!detail) {
    return {
      title: "MBTI Type Not Found",
    };
  }
  
  return {
    title: `${detail.code} ${detail.name} - MBTI Personality Type Analysis`,
    description: `${detail.code} ${detail.name} in-depth analysis. ${detail.characteristics.slice(0, 150)}...`,
    openGraph: {
      title: `${detail.code} ${detail.name} - MBTI Personality Type`,
      description: `${detail.code} ${detail.name} characteristics, cognitive functions, careers, and relationships.`,
      type: "article",
    },
  };
}

export default async function MBTITypeDetailPage({ params }: Props) {
  const { locale, type } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'typesPage' });
  
  const typeCode = type.toUpperCase();
  
  // Validate type code
  if (!mbtiTypes.includes(typeCode)) {
    notFound();
  }
  
  const details = getMBTIDetails(locale as 'ko' | 'en');
  const detail = details[typeCode];
  
  if (!detail) {
    notFound();
  }
  
  const groupColor = getGroupColor(detail.group);
  const borderColor = getBorderColor(detail.group);
  
  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${detail.code} ${detail.name} - MBTI Personality Type Analysis`,
    "description": detail.characteristics.slice(0, 200),
    "author": {
      "@type": "Organization",
      "name": "Simple MBTI"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "about": {
      "@type": "Thing",
      "name": "MBTI Personality Type"
    }
  };
  
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="max-w-5xl mx-auto px-4 py-8 pt-24">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-400 mb-6">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                {t('home')}
              </Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href="/types" className="hover:text-white transition-colors">
                {locale === 'ko' ? 'MBTI 유형' : 'MBTI Types'}
              </Link>
            </li>
            <li>&gt;</li>
            <li className="text-white font-medium">{detail.code}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${groupColor} text-white text-sm font-medium mb-4`}>
            {detail.group}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            {detail.code}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-2">
            {detail.name}
          </h2>
          <p className="text-lg text-gray-400">
            &ldquo;{detail.nickname}&rdquo;
          </p>
        </div>

        {/* Characteristics Section */}
        <section className={`bg-black/20 backdrop-blur-md rounded-xl p-8 border-2 ${borderColor} shadow-lg mb-8`}>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">📝</span>
            {t('characteristics')}
          </h3>
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {detail.characteristics}
          </div>
        </section>

        {/* Cognitive Functions Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">🧠</span>
            {t('cognitiveFunctions')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Dominant */}
            <div className={`bg-black/20 backdrop-blur-md rounded-lg p-6 border ${borderColor}`}>
              <div className="text-sm text-gray-400 mb-2">{t('dominant')}</div>
              <h4 className="text-xl font-bold text-white mb-2">{detail.cognitiveFunctions.dominant.name}</h4>
              <p className="text-gray-300 text-sm">{detail.cognitiveFunctions.dominant.description}</p>
            </div>
            
            {/* Auxiliary */}
            <div className={`bg-black/20 backdrop-blur-md rounded-lg p-6 border ${borderColor}`}>
              <div className="text-sm text-gray-400 mb-2">{t('auxiliary')}</div>
              <h4 className="text-xl font-bold text-white mb-2">{detail.cognitiveFunctions.auxiliary.name}</h4>
              <p className="text-gray-300 text-sm">{detail.cognitiveFunctions.auxiliary.description}</p>
            </div>
            
            {/* Tertiary */}
            <div className={`bg-black/20 backdrop-blur-md rounded-lg p-6 border ${borderColor} opacity-80`}>
              <div className="text-sm text-gray-400 mb-2">{t('tertiary')}</div>
              <h4 className="text-lg font-bold text-white mb-2">{detail.cognitiveFunctions.tertiary.name}</h4>
              <p className="text-gray-300 text-sm">{detail.cognitiveFunctions.tertiary.description}</p>
            </div>
            
            {/* Inferior */}
            <div className={`bg-black/20 backdrop-blur-md rounded-lg p-6 border ${borderColor} opacity-70`}>
              <div className="text-sm text-gray-400 mb-2">{t('inferior')}</div>
              <h4 className="text-lg font-bold text-white mb-2">{detail.cognitiveFunctions.inferior.name}</h4>
              <p className="text-gray-300 text-sm">{detail.cognitiveFunctions.inferior.description}</p>
            </div>
          </div>
        </section>

        {/* Strengths & Weaknesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Strengths */}
          <section className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-green-500/30">
            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
              <span className="mr-3">💪</span>
              {t('strengths')}
            </h3>
            <ul className="space-y-2">
              {detail.strengths.map((strength: string, index: number) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  {strength}
                </li>
              ))}
            </ul>
          </section>
          
          {/* Weaknesses */}
          <section className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-red-500/30">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
              <span className="mr-3">⚠️</span>
              {t('weaknesses')}
            </h3>
            <ul className="space-y-2">
              {detail.weaknesses.map((weakness: string, index: number) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  {weakness}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Careers Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">💼</span>
            {t('recommendedCareers')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recommended */}
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-green-500/30">
              <h4 className="text-lg font-bold text-green-400 mb-4">✓ {locale === 'ko' ? '추천 직업' : 'Recommended'}</h4>
              <div className="space-y-4">
                {detail.careers.recommended.map((career: { job: string; reason: string }, index: number) => (
                  <div key={index} className="border-b border-gray-700 pb-3 last:border-0">
                    <h5 className="font-semibold text-white mb-1">{career.job}</h5>
                    <p className="text-gray-400 text-sm">{career.reason}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Avoid */}
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-red-500/30">
              <h4 className="text-lg font-bold text-red-400 mb-4">⚠ {t('challengingCareers')}</h4>
              <div className="space-y-4">
                {detail.careers.avoid.map((career: { job: string; reason: string }, index: number) => (
                  <div key={index} className="border-b border-gray-700 pb-3 last:border-0">
                    <h5 className="font-semibold text-white mb-1">{career.job}</h5>
                    <p className="text-gray-400 text-sm">{career.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Relationships Section */}
        <section className={`bg-black/20 backdrop-blur-md rounded-xl p-8 border ${borderColor} mb-8`}>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">❤️</span>
            {t('relationships')}
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-2">{t('datingStyle')}</h4>
              <p className="text-gray-300">{detail.relationships.datingStyle}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-2">{t('communicationStyle')}</h4>
              <p className="text-gray-300">{detail.relationships.communicationStyle}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-2">{t('loveLanguage')}</h4>
              <div className="flex flex-wrap gap-2">
                {detail.relationships.loveLanguage.map((language: string, index: number) => (
                  <span key={index} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-2">{t('idealPartner')}</h4>
              <p className="text-gray-300">{detail.relationships.idealPartner}</p>
            </div>
          </div>
        </section>

        {/* Stress Management Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">🧘</span>
            {t('stressManagement')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-yellow-500/30">
              <h4 className="text-lg font-bold text-yellow-400 mb-3">{t('stressSources')}</h4>
              <ul className="space-y-2">
                {detail.stressManagement.stressSources.map((source: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    {source}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-blue-500/30">
              <h4 className="text-lg font-bold text-blue-400 mb-3">{t('copingMethods')}</h4>
              <ul className="space-y-2">
                {detail.stressManagement.copingMethods.map((method: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    {method}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-red-500/30">
              <h4 className="text-lg font-bold text-red-400 mb-3">{t('warningSigns')}</h4>
              <ul className="space-y-2">
                {detail.stressManagement.warningSigns.map((sign: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Growth Points Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">🌱</span>
            {t('growthPoints')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h4 className="text-lg font-bold text-purple-400 mb-3">{t('strengthsToDevelop')}</h4>
              <ul className="space-y-2">
                {detail.growthPoints.strengthsToDevelop.map((strength: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-purple-400 mr-2">↑</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-orange-500/30">
              <h4 className="text-lg font-bold text-orange-400 mb-3">{t('challenges')}</h4>
              <ul className="space-y-2">
                {detail.growthPoints.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-orange-400 mr-2">!</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-green-500/30">
              <h4 className="text-lg font-bold text-green-400 mb-3">{t('developmentTips')}</h4>
              <ul className="space-y-2">
                {detail.growthPoints.developmentTips.map((tip: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-green-400 mr-2">💡</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Celebrities Section */}
        <section className={`bg-black/20 backdrop-blur-md rounded-xl p-8 border ${borderColor} mb-12`}>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">⭐</span>
            {t('celebrityExamples')}
          </h3>
          
          <div className="space-y-6">
            {detail.celebrities.map((celebrity: { name: string; description: string }, index: number) => (
              <div key={index} className="border-l-4 border-gray-600 pl-4">
                <h4 className="text-lg font-bold text-white mb-1">{celebrity.name}</h4>
                <p className="text-gray-300 text-sm">{celebrity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Type Navigation Grid */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">{t('otherTypes')}</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {mbtiTypes.map((mbtiType) => (
              <Link
                key={mbtiType}
                href={`/types/${mbtiType}`}
                className={`text-center py-2 px-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                  mbtiType === typeCode
                    ? "bg-white text-black"
                    : "bg-black/20 text-gray-400 hover:bg-black/40 hover:text-white border border-white/10"
                }`}
              >
                {mbtiType}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('takeTest')}
            </h3>
            <p className="text-gray-400 mb-6">
              {t('testDescription')}
            </p>
            <Link href="/test">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
                {t('startTest')}
              </button>
            </Link>
          </div>
        </section>

        {/* Back to Types */}
        <div className="text-center">
          <Link href="/types">
            <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
              ← {t('allTypes')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
