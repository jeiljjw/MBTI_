import Link from "next/link";
import { BeamsBackground } from "@/components/ui/beams-background";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MBTI 성격 유형 테스트 - 무료 온라인 검사",
  description: "나의 성격 유형을 정확하게 알아보는 MBTI 테스트. 40개의 과학적 질문으로 16가지 성격 유형을 분석합니다.",
  keywords: ["MBTI", "성격 유형 테스트", "무료 검사", "심리 테스트", "성격 분석"],
  openGraph: {
    title: "MBTI 성격 유형 테스트 - 무료 온라인 검사",
    description: "나의 성격 유형을 알아보는 정확한 MBTI 테스트를 해보세요.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "MBTI란 무엇인가요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MBTI(Myers-Briggs Type Indicator)는 Isabel Briggs Myers와 Katharine Cook Briggs가 개발한 성격 유형 검사로, Carl Jung의 심리학 이론을 기반으로 합니다. 사람들의 성격을 16가지 유형으로 분류합니다."
                }
              },
              {
                "@type": "Question",
                "name": "MBTI 검사는 얼마나 정확한가요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MBTI 검사는 통계적 확률에 기반한 성격 유형 분석 도구입니다. 절대적인 진단 도구가 아니며, 상황에 따라 행동이 달라질 수 있습니다. 참고용으로 활용해 주세요."
                }
              },
              {
                "@type": "Question",
                "name": "테스트는 얼마나 걸리나요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "저희 MBTI 테스트는 40개의 질문을 통해 진행되며, 약 10-15분 정도 소요됩니다. 각 질문에 대해 1-7점 척도로 답변하시면 됩니다."
                }
              }
            ]
          }),
        }}
      />
      <BeamsBackground>
      <div className="flex flex-col items-center justify-center gap-6 px-4 text-center min-h-screen pt-20 pb-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter">
          MBTI 성격 유형<br className="sm:hidden" /> 테스트
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl">
        나의 성격 유형을 알아보세요
        </p>
        <Link href="/test">
          <button className="gradient-button px-8 py-3 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </BeamsBackground>
    </>
  );
}
