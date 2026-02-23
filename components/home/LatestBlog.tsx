"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export function LatestBlog() {
  const t = useTranslations('home');
  const locale = useLocale() as 'ko' | 'en';

  const latestPosts = locale === 'ko' ? [
    {
      slug: "mbti-love-and-relationships",
      title: "MBTI 사랑과 관계: 유형별 연애 패턴과 관계 구축법",
      excerpt: "16가지 MBTI 유형별 연애 스타일을 분석합니다. 사랑의 언어, 관계에서의 필요, 더 깊은 유대 형성 방법을 알아봅니다.",
      category: "관계",
      readTime: "11분",
    },
    {
      slug: "emotional-intelligence-mbti",
      title: "감정지능(EQ)과 MBTI의 상관관계: 정서적 성장을 위한 안내",
      excerpt: "감정지능과 MBTI는 어떻게 연결될까요? 각 유형의 감정적 특성과 EQ를 높이는 방법을 과학적 관점에서 분석합니다.",
      category: "심리학",
      readTime: "8분",
    },
    {
      slug: "mbti-conflict-resolution",
      title: "MBTI 직장에서의 갈등 해결: 유형별 갈등 관리 전략",
      excerpt: "직장 갈등을 효과적으로 해결하는 방법을 MBTI 유형별로 분석합니다. 유형 차이를 이해하고 더 나은 커뮤니케이션하는 법을 알아봅니다.",
      category: "커리어",
      readTime: "12분",
    },
  ] : [
    {
      slug: "mbti-love-and-relationships",
      title: "MBTI Love & Relationships: Dating Patterns by Type",
      excerpt: "Analyze the dating styles of all 16 MBTI types. Learn about love languages, needs in relationships, and how to build deeper connections.",
      category: "Relationships",
      readTime: "11 min",
    },
    {
      slug: "emotional-intelligence-mbti",
      title: "Emotional Intelligence (EQ) and MBTI: Guide to Emotional Growth",
      excerpt: "How are emotional intelligence and MBTI connected? Analyze each type's emotional characteristics and how to increase EQ from a scientific perspective.",
      category: "Psychology",
      readTime: "8 min",
    },
    {
      slug: "mbti-conflict-resolution",
      title: "MBTI Workplace Conflict Resolution: Conflict Management by Type",
      excerpt: "Analyze effective ways to resolve workplace conflicts by MBTI type. Understand type differences and learn better communication strategies.",
      category: "Career",
      readTime: "12 min",
    },
  ];

  const categoryColors: Record<string, string> = {
    "관계": "bg-pink-500/20 text-pink-300",
    "심리학": "bg-blue-500/20 text-blue-300",
    "커리어": "bg-emerald-500/20 text-emerald-300",
    "Relationships": "bg-pink-500/20 text-pink-300",
    "Psychology": "bg-blue-500/20 text-blue-300",
    "Career": "bg-emerald-500/20 text-emerald-300",
  };

  return (
    <section className="w-full py-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            📝 {t('latestBlog.title')}
          </h2>
          <p className="text-gray-400">{t('latestBlog.subtitle')}</p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post, _index) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <article className="group bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${categoryColors[post.category] || 'bg-gray-500/20 text-gray-300'}`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                      {t('latestBlog.readMore')} →
                    </span>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link href="/blog">
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all duration-300">
              {t('latestBlog.viewAll')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
