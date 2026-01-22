import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - MBTI 성격 유형 테스트",
  description: "MBTI 테스트 사이트 소개, 방법론, 저자 정보. 과학적으로 검증된 MBTI 검사로 성격 유형을 정확하게 분석합니다.",
  keywords: ["MBTI", "성격 유형", "테스트", "심리학", "자기 이해", "About"],
  openGraph: {
    title: "About Us - MBTI 성격 유형 테스트",
    description: "MBTI 테스트 사이트 소개와 방법론. 정확하고 신뢰할 수 있는 성격 유형 검사.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">사이트 소개</h2>
           <p className="text-white leading-relaxed">
            이 사이트는 MBTI(Myers-Briggs Type Indicator) 성격 유형 검사를 통해 자신과 타인의 성격을 더 잘 이해하고,
            관계 개선과 개인 성장을 돕기 위해 만들어졌습니다. 우리는 정확하고 신뢰할 수 있는 MBTI 테스트를 제공하여
            사람들이 자신의 잠재력을 발견하고 더 나은 삶을 살아갈 수 있도록 지원합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">MBTI란 무엇인가?</h2>
          <p className="text-white leading-relaxed mb-4">
            MBTI는 Isabel Briggs Myers와 Katharine Cook Briggs가 개발한 성격 유형 지표로,
            Carl Jung의 심리학 이론을 기반으로 합니다. 이 검사는 네 가지 선호 영역에서
            사람들의 성격 차이를 측정합니다:
          </p>
          <ul className="list-disc list-inside text-white space-y-2">
            <li><strong>E/I:</strong> 외향성(Extraversion) vs 내향성(Introversion)</li>
            <li><strong>S/N:</strong> 감각(Sensing) vs 직관(Intuition)</li>
            <li><strong>T/F:</strong> 사고(Thinking) vs 감정(Feeling)</li>
            <li><strong>J/P:</strong> 판단(Judging) vs 인식(Perceiving)</li>
          </ul>
          <p className="text-white leading-relaxed mt-4">
            이 네 가지 차원의 조합으로 16가지 성격 유형이 만들어지며,
            각 유형은 고유한 강점과 특징을 가지고 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">우리의 방법론</h2>
          <p className="text-white leading-relaxed mb-4">
            저희 테스트는 과학적으로 검증된 MBTI 질문들을 기반으로 하며,
            다음과 같은 원칙을 따르고 있습니다:
          </p>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>표준화된 질문 사용으로 신뢰성 확보</li>
            <li>균형 잡힌 질문 배치로 정확한 측정</li>
            <li>개인정보 보호 및 데이터 보안 준수</li>
            <li>결과 해석을 위한 상세한 설명 제공</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">저자 소개</h2>
           <p className="text-white leading-relaxed">
            이 사이트는 심리학에 관심 있는 개발자들이 모여 만든 프로젝트입니다.
            우리는 MBTI가 단순한 재미 요소가 아닌, 개인 성장과 인간관계 개선을 위한
            유용한 도구라고 믿습니다. 앞으로도 더 정확하고 유익한 콘텐츠를 제공하기 위해
            지속적으로 연구하고 개선하겠습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">문의하기</h2>
           <p className="text-white leading-relaxed">
            테스트나 사이트에 대한 질문이 있으시면 언제든지 연락주세요.
            여러분의 피드백이 더 나은 서비스를 만드는 데 큰 도움이 됩니다.
          </p>
        </section>
      </div>
    </div>
  );
}