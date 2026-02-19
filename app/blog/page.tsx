import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MBTI 블로그 - 심리학, 커리어, 관계에 대한 심층 분석",
  description: "MBTI 성격 유형에 대한 전문적인 인사이트와 분석. 과학적 기반, 커리어 전략, 관계 조언, 스트레스 관리 등 다양한 주제를 다룹니다.",
  keywords: ["MBTI 블로그", "성격 유형 분석", "MBTI 커리어", "MBTI 관계", "심리학"],
  openGraph: {
    title: "MBTI 블로그 - 전문적인 인사이트와 분석",
    description: "MBTI 성격 유형에 대한 심층 분석과 전문적인 조언을 제공합니다.",
    type: "website",
  },
};

const articles = [
  {
    slug: "mbti-scientific-basis",
    title: "MBTI의 과학적 기반과 한계: 심리학자들이 말하는 진실",
    excerpt: "MBTI가 과학적으로 검증되었는지, 어떤 한계가 있는지 심층 분석합니다. Myers-Briggs Type Indicator의 역사와 현대 심리학계의 평가를 알아보세요.",
    category: "심리학",
    readTime: "8분",
    date: "2026-02-12",
  },
  {
    slug: "intj-career-strategies",
    title: "INTJ가 알아야 할 10가지 커리어 전략: 전략가의 성공 비법",
    excerpt: "INTJ 전략가 유형이 직장에서 성공하기 위한 10가지 핵심 전략을 소개합니다. 리더십, 팀워크, 장기적 경력 계획에 대한 실용적인 조언을 제공합니다.",
    category: "커리어",
    readTime: "10분",
    date: "2026-02-12",
  },
  {
    slug: "mbti-compatibility-truth",
    title: "MBTI 궁합의 진실: 통계적 분석으로 알아본 호환성",
    excerpt: "MBTI 궁합이 정말 과학적인지 통계적 데이터로 분석합니다. 어떤 유형 조합이 실제로 성공적인 관계를 만드는지 연구 결과를 바탕으로 설명합니다.",
    category: "관계",
    readTime: "9분",
    date: "2026-02-12",
  },
  {
    slug: "stress-management-by-type",
    title: "각 유형별 스트레스 관리 가이드: MBTI로 알아보는 나만의 힐링법",
    excerpt: "16가지 MBTI 유형별로 효과적인 스트레스 관리 방법을 제시합니다. 각 유형의 스트레스 원인과 최적의 대처 전략을 심층적으로 분석합니다.",
    category: "웰빙",
    readTime: "12분",
    date: "2026-02-12",
  },
  {
    slug: "mbti-career-correlation",
    title: "MBTI와 진로 적성의 상관관계: 통계로 증명되는 커리어 적합도",
    excerpt: "MBTI 유형과 직업 만족도, 성과, 이직률 간의 상관관계를 데이터로 분석합니다. 어떤 유형이 어떤 직업에서 성공하는지 연구 결과를 소개합니다.",
    category: "커리어",
    readTime: "11분",
    date: "2026-02-12",
  },
  {
    slug: "infj-complete-guide",
    title: "INFJ 완벽 가이드: 제창자 유형의 모든 것",
    excerpt: "INFJ(제창자)는 가장 희귀한 성격 유형 중 하나입니다. 이 유형의 특징, 강점, 약점, 그리고 인간관계와 커리어에서 성공하는 방법을 상세히 소개합니다.",
    category: "심리학",
    readTime: "9분",
    date: "2026-02-15",
  },
  {
    slug: "mbti-leadership",
    title: "MBTI로 보는 리더십 스타일: 유형별 소통과 영향력",
    excerpt: "16가지 MBTI 유형별로 다른 리더십 스타일과 소통 방식을 분석합니다. 팀을 효과적으로 이끌기 위한 유형별 맞춤 전략을 알아봅니다.",
    category: "커리어",
    readTime: "10분",
    date: "2026-02-18",
  },
  {
    slug: "emotional-intelligence-mbti",
    title: "감정지능(EQ)과 MBTI의 상관관계: 정서적 성장을 위한 안내",
    excerpt: "감정지능과 MBTI는 어떻게 연결될까요? 각 유형의 감정적 특성과 EQ를 높이는 방법을 과학적 관점에서 분석합니다.",
    category: "심리학",
    readTime: "8분",
    date: "2026-02-20",
  },
  {
    slug: "mbti-love-and-relationships",
    title: "MBTI 사랑과 관계: 유형별 연애 패턴과 관계 구축법",
    excerpt: "16가지 MBTI 유형별 연애 스타일을 분석합니다. 사랑의 언어, 관계에서의 필요, 더 깊은 유대 형성 방법을 알아봅니다.",
    category: "관계",
    readTime: "11분",
    date: "2026-02-20",
  },
  {
    slug: "mbti-learning-styles",
    title: "MBTI 학습 스타일: 유형별로 가장 효과적인 공부법",
    excerpt: "각 MBTI 유형별 가장 효과적인 학습 방법을 분석합니다. 자신의 장점을 살린 맞춤형 공부 전략을 알아봅니다.",
    category: "심리학",
    readTime: "10분",
    date: "2026-02-20",
  },
  {
    slug: "mbti-conflict-resolution",
    title: "MBTI 직장에서의 갈등 해결: 유형별 갈등 관리 전략",
    excerpt: "직장 갈등을 효과적으로 해결하는 방법을 MBTI 유형별로 분석합니다. 유형 차이를 이해하고 더 나은 커뮤니케이션하는 법을 알아봅니다.",
    category: "커리어",
    readTime: "12분",
    date: "2026-02-20",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            MBTI 블로그
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            성격 유형에 대한 전문적인 인사이트와 심층 분석을 제공합니다
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <Link href={`/blog/${articles[0].slug}`} className="group block">
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {articles[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{articles[0].readTime} 소요</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="mt-4 text-purple-400 font-medium group-hover:text-purple-300">
                    읽어보기 →
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {articles.slice(1).map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
              <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-gray-400 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-xs">{article.readTime} 소요</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">카테고리</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["심리학", "커리어", "관계", "웰빙"].map((category) => (
              <div key={category} className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 text-center">
                <span className="text-gray-300 font-medium">{category}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              나의 MBTI 유형을 알아보세요
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
      </div>
    </div>
  );
}
