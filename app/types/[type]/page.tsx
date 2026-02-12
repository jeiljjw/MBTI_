import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mbtiDetails } from "@/lib/mbti-detailed";

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

// Generate metadata for each type
export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const typeCode = type.toUpperCase();
  const detail = mbtiDetails[typeCode];
  
  if (!detail) {
    return {
      title: "MBTI 유형을 찾을 수 없습니다",
    };
  }
  
  return {
    title: `${detail.code} ${detail.name} - 성격 특징, 직업, 연애 스타일 | MBTI 상세 분석`,
    description: `${detail.code} ${detail.name}의 심층 분석. ${detail.characteristics.slice(0, 150)}... 인지기능, 강점/약점, 추천 직업, 연애 스타일, 스트레스 대처법을 알아보세요.`,
    keywords: [
      detail.code,
      detail.name,
      "MBTI",
      "성격 유형",
      "성격 분석",
      "직업 추천",
      "연애 스타일",
      "인지기능",
      `${detail.code} 특징`,
      `${detail.code} 직업`,
      `${detail.code} 연애`
    ],
    openGraph: {
      title: `${detail.code} ${detail.name} - MBTI 성격 유형 상세 분석`,
      description: `${detail.code} ${detail.name}의 특징, 인지기능, 직업, 연애 스타일을 심층 분석합니다.`,
      type: "article",
    },
  };
}

// Get group color for styling
const getGroupColor = (group: string) => {
  if (group.includes("분석가형")) return "from-blue-500 to-purple-600";
  if (group.includes("외교관형")) return "from-pink-500 to-rose-600";
  if (group.includes("관리자형")) return "from-green-500 to-teal-600";
  if (group.includes("탐험가형")) return "from-orange-500 to-red-600";
  return "from-gray-500 to-gray-600";
};

// Get border color for styling
const getBorderColor = (group: string) => {
  if (group.includes("분석가형")) return "border-cyan-400";
  if (group.includes("외교관형")) return "border-pink-400";
  if (group.includes("관리자형")) return "border-green-400";
  if (group.includes("탐험가형")) return "border-orange-400";
  return "border-gray-400";
};

interface Props {
  params: Promise<{ type: string }>;
}

export default async function MBTITypeDetailPage({ params }: Props) {
  const { type } = await params;
  const typeCode = type.toUpperCase();
  
  // Validate type code
  if (!mbtiTypes.includes(typeCode)) {
    notFound();
  }
  
  const detail = mbtiDetails[typeCode];
  
  if (!detail) {
    notFound();
  }
  
  const groupColor = getGroupColor(detail.group);
  const borderColor = getBorderColor(detail.group);
  
  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${detail.code} ${detail.name} - MBTI 성격 유형 상세 분석`,
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
                홈
              </Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href="/types" className="hover:text-white transition-colors">
                MBTI 유형
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
            상세 특징
          </h3>
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {detail.characteristics}
          </div>
        </section>

        {/* Cognitive Functions Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">🧠</span>
            인지기능 (Cognitive Functions)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Dominant */}
            <div className={`bg-black/20 backdrop-blur-md rounded-lg p-6 border ${borderColor}`}>
              <div className="text-sm text-gray-400 mb-2">주기능 (Dominant)</div>
              <h4 className="text-xl font-bold text-white mb-2">{detail.cognitiveFunctions.dominant.name}</h4>
              <p className="text-gray-300 text-sm">{detail.cognitiveFunctions.dominant.description}</p>
            </div>
            
            {/* Auxiliary */}
            <div className={`bg-black/20 backdrop-blur-md rounded-lg p-6 border ${borderColor}`}>
              <div className="text-sm text-gray-400 mb-2">보조기능 (Auxiliary)</div>
              <h4 className="text-xl font-bold text-white mb-2">{detail.cognitiveFunctions.auxiliary.name}</h4>
              <p className="text-gray-300 text-sm">{detail.cognitiveFunctions.auxiliary.description}</p>
            </div>
            
            {/* Tertiary */}
            <div className={`bg-black/20 backdrop-blur-md rounded-lg p-6 border ${borderColor} opacity-80`}>
              <div className="text-sm text-gray-400 mb-2">3차기능 (Tertiary)</div>
              <h4 className="text-lg font-bold text-white mb-2">{detail.cognitiveFunctions.tertiary.name}</h4>
              <p className="text-gray-300 text-sm">{detail.cognitiveFunctions.tertiary.description}</p>
            </div>
            
            {/* Inferior */}
            <div className={`bg-black/20 backdrop-blur-md rounded-lg p-6 border ${borderColor} opacity-70`}>
              <div className="text-sm text-gray-400 mb-2">열등기능 (Inferior)</div>
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
              강점
            </h3>
            <ul className="space-y-2">
              {detail.strengths.map((strength, index) => (
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
              약점
            </h3>
            <ul className="space-y-2">
              {detail.weaknesses.map((weakness, index) => (
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
            직업 추천
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recommended */}
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-green-500/30">
              <h4 className="text-lg font-bold text-green-400 mb-4">✓ 추천 직업</h4>
              <div className="space-y-4">
                {detail.careers.recommended.map((career, index) => (
                  <div key={index} className="border-b border-gray-700 pb-3 last:border-0">
                    <h5 className="font-semibold text-white mb-1">{career.job}</h5>
                    <p className="text-gray-400 text-sm">{career.reason}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Avoid */}
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-red-500/30">
              <h4 className="text-lg font-bold text-red-400 mb-4">⚠ 피해야 할 직업</h4>
              <div className="space-y-4">
                {detail.careers.avoid.map((career, index) => (
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
            연애 및 관계 스타일
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-2">연애 스타일</h4>
              <p className="text-gray-300">{detail.relationships.datingStyle}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-2">소통 방식</h4>
              <p className="text-gray-300">{detail.relationships.communicationStyle}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-2">러브 랭귀지</h4>
              <div className="flex flex-wrap gap-2">
                {detail.relationships.loveLanguage.map((language, index) => (
                  <span key={index} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-2">이상적인 파트너</h4>
              <p className="text-gray-300">{detail.relationships.idealPartner}</p>
            </div>
          </div>
        </section>

        {/* Stress Management Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">🧘</span>
            스트레스 관리
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-yellow-500/30">
              <h4 className="text-lg font-bold text-yellow-400 mb-3">스트레스 원인</h4>
              <ul className="space-y-2">
                {detail.stressManagement.stressSources.map((source, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    {source}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-blue-500/30">
              <h4 className="text-lg font-bold text-blue-400 mb-3">대처 방법</h4>
              <ul className="space-y-2">
                {detail.stressManagement.copingMethods.map((method, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    {method}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-red-500/30">
              <h4 className="text-lg font-bold text-red-400 mb-3">경고 신호</h4>
              <ul className="space-y-2">
                {detail.stressManagement.warningSigns.map((sign, index) => (
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
            성장 포인트
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h4 className="text-lg font-bold text-purple-400 mb-3">발전시킬 강점</h4>
              <ul className="space-y-2">
                {detail.growthPoints.strengthsToDevelop.map((strength, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-purple-400 mr-2">↑</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-orange-500/30">
              <h4 className="text-lg font-bold text-orange-400 mb-3">도전 과제</h4>
              <ul className="space-y-2">
                {detail.growthPoints.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-orange-400 mr-2">!</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-green-500/30">
              <h4 className="text-lg font-bold text-green-400 mb-3">발전 팁</h4>
              <ul className="space-y-2">
                {detail.growthPoints.developmentTips.map((tip, index) => (
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
            유명인 사례
          </h3>
          
          <div className="space-y-6">
            {detail.celebrities.map((celebrity, index) => (
              <div key={index} className="border-l-4 border-gray-600 pl-4">
                <h4 className="text-lg font-bold text-white mb-1">{celebrity.name}</h4>
                <p className="text-gray-300 text-sm">{celebrity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Type Navigation Grid */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">다른 MBTI 유형 살펴보기</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {mbtiTypes.map((type) => (
              <Link
                key={type}
                href={`/types/${type}`}
                className={`text-center py-2 px-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                  type === typeCode
                    ? "bg-white text-black"
                    : "bg-black/20 text-gray-400 hover:bg-black/40 hover:text-white border border-white/10"
                }`}
              >
                {type}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              당신의 MBTI 유형을 확인해보세요
            </h3>
            <p className="text-gray-400 mb-6">
              40개의 과학적 질문으로 정확한 성격 유형을 분석합니다.
            </p>
            <Link href="/test">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
                무료 테스트 시작하기
              </button>
            </Link>
          </div>
        </section>

        {/* Related Links */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link href="/celebrities" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:bg-black/30 hover:border-purple-400 transition-all duration-300 text-center">
              <h4 className="text-lg font-semibold text-white group-hover:text-purple-400">
                유명인 MBTI
              </h4>
              <p className="text-gray-400 text-sm mt-1">각 유형의 대표 인물들</p>
            </div>
          </Link>
          
          <Link href="/compatibility" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:bg-black/30 hover:border-pink-400 transition-all duration-300 text-center">
              <h4 className="text-lg font-semibold text-white group-hover:text-pink-400">
                MBTI 궁합
              </h4>
              <p className="text-gray-400 text-sm mt-1">성격 유형별 호환성</p>
            </div>
          </Link>
          
          <Link href="/usage" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:bg-black/30 hover:border-blue-400 transition-all duration-300 text-center">
              <h4 className="text-lg font-semibold text-white group-hover:text-blue-400">
                실용적 활용
              </h4>
              <p className="text-gray-400 text-sm mt-1">직업, 연애, 일상 적용</p>
            </div>
          </Link>
        </section>

        {/* Back to Types */}
        <div className="text-center">
          <Link href="/types">
            <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
              ← 모든 유형 보기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
