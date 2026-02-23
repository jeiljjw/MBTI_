"use client";

import { useTranslations } from 'next-intl';

export function ReviewsSection() {
  const t = useTranslations('home');

  const reviews = [
    {
      id: 1,
      name: "김*수",
      type: "ENFP",
      content: "처음 해본 MBTI 테스트였는데, 결과가 너무 정확했어요! 제가 생각했던 제 모습하고 정말 똑같았고, 저도 몰랐던 저의 또 다른면을 발견하게 됐습니다. 친구들한테도 다 추천했어요. 테스트 과정이 재미있고, 결과 분석도 너무 상세해서 만족스러웠습니다.",
      rating: 5,
    },
    {
      id: 2,
      name: "이*현",
      type: "INTJ",
      content: "이제까지 여러 MBTI 테스트 해봤지만 여기 것들이 가장 정확했어요. 단순히 유형만 알려주는 게 아니라, 왜 그런 성격인지 그 이유까지 설명해주네요. 연애와 업무 양쪽 모두에 도움이 되는 팁이 많아서 좋았습니다. 강추합니다!",
      rating: 5,
    },
    {
      id: 3,
      name: "박*민",
      type: "INFJ",
      content: "결과지를 받고 나서 한참을 읽었어요. 저에 대해 이렇게 자세하게 알려주는 테스트는 처음이었어요. 자신의 장점과 단점을 객관적으로 볼 수 있게 도와주었고, 제가 앞으로 어떻게 성장할 수 있는지 힌트를 얻었답니다. 모든 사람에게 추천하고 싶습니다!",
      rating: 5,
    },
  ];

  const stars = Array(5).fill("★");

  return (
    <section className="w-full py-16 bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            💬 {t('reviews.title')}
          </h2>
          <p className="text-gray-400">{t('reviews.subtitle')}</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {stars.map((star, i) => (
                  <span key={i} className="text-yellow-400">{star}</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-200 mb-4 leading-relaxed">
                {review.content}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-medium">{review.type}</span>
                <span className="text-gray-500 text-sm">{review.name}님</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
