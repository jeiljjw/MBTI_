"use client";

import { useTranslations } from 'next-intl';
import { Quote, Sparkles, BookOpen, Target, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function ReviewsSection() {
  const t = useTranslations('home');

  const reviews = [
    {
      id: 1,
      name: "S. Kim",
      type: "ENFP",
      content: "단순한 성향 파악을 넘어, 관계 패턴 분석 칼럼을 통해 제가 관계 속에서 에너지를 소모하던 방식을 객관적으로 성찰할 수 있었습니다. 덕분에 저만의 소통 리듬을 찾게 되었네요.",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />
    },
    {
      id: 2,
      name: "J. Lee",
      type: "INTJ",
      content: "그동안 모호하게 느껴졌던 커리어적 고민들이 데이터 기반의 심층 리포트와 전문 칼럼을 통해 명확한 논리로 설명되는 경험이었습니다. 성장에 실질적인 나침반이 되어주었습니다.",
      icon: <BookOpen className="w-5 h-5 text-blue-400" />
    },
    {
      id: 3,
      name: "M. Park",
      type: "INFJ",
      content: "학술적 근거를 바탕으로 한 정갈한 심리 분석들을 읽으며 저 자신에 대한 신뢰를 회복하는 여정을 경험했습니다. 단순한 진단 이상의 깊은 통찰을 얻을 수 있어 좋았습니다.",
      icon: <Target className="w-5 h-5 text-amber-400" />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6 uppercase tracking-widest">
            <Quote className="w-3 h-3 fill-current" />
            Insights
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('reviews.title')}
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/[0.04] transition-all duration-500 group relative"
              variants={itemVariants}
            >
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-white" />
              </div>

              <div className="mb-6 p-2 bg-white/[0.03] rounded-xl w-fit">
                {review.icon}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-8 leading-relaxed font-light text-lg">
                &ldquo;{review.content}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/5">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{review.name}</div>
                  <div className="text-purple-400 text-[10px] font-bold tracking-tighter uppercase">{review.type} Reader</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
