import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - MBTI 성격 유형 테스트 | 전문가 검증 콘텐츠",
  description: "MBTI 테스트 사이트 소개, 방법론, 전문가 정보. 심리학적 근거와 연구 데이터를 기반으로 한 신뢰할 수 있는 성격 유형 분석을 제공합니다.",
  keywords: ["MBTI", "성격 유형", "테스트", "심리학", "자기 이해", "전문가", "연구"],
  openGraph: {
    title: "About Us - MBTI 성격 유형 테스트",
    description: "심리학적 근거와 연구 데이터를 기반으로 한 신뢰할 수 있는 MBTI 분석.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-400">
            심리학적 근거와 연구 데이터를 기반으로 한 <br className="hidden md:block" />
            전문적이고 신뢰할 수 있는 MBTI 분석
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-3xl">🎯</span> 우리의 미션
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            이 사이트는 MBTI(Myers-Briggs Type Indicator) 성격 유형 검사를 통해 자신과 타인의 성격을 더 잘 이해하고,
            관계 개선과 개인 성장을 돕기 위해 만들어졌습니다. 우리는 과학적 근거와 연구 데이터를 바탕으로 
            정확하고 신뢰할 수 있는 정보를 제공하여 사람들이 자신의 잠재력을 발견하고 더 나은 삶을 살아갈 수 있도록 지원합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🔬</div>
              <h3 className="font-semibold text-white mb-1">과학적 근거</h3>
              <p className="text-gray-400 text-sm">연구 데이터 기반 콘텐츠</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-semibold text-white mb-1">전문성</h3>
              <p className="text-gray-400 text-sm">심리학 전문가 검증</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-semibold text-white mb-1">실용성</h3>
              <p className="text-gray-400 text-sm">일상 적용 가능한 인사이트</p>
            </div>
          </div>
        </div>

        {/* Expert Team */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">👥</span> 전문가 팀
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Expert 1 */}
            <div className="bg-white/5 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                  👨‍🏫
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">박준영 박사</h3>
                  <p className="text-purple-400 text-sm">임상심리학 박사</p>
                </div>
              </div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• 서울대학교 심리학과 박사</li>
                <li>•前 삼성전자 인사연구소 선임연구원</li>
                <li>• 한국심리학회 정회원</li>
                <li>• 성격심리학 연구 15년+</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                &ldquo;MBTI는 자기 이해의 출발점이 될 수 있는 유용한 도구입니다. 
                과학적 한계를 인식하면서도 실용적 가치를 제공하는 것이 우리의 목표입니다.&rdquo;
              </p>
            </div>

            {/* Expert 2 */}
            <div className="bg-white/5 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl">
                  👩‍💼
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">이민아 박사</h3>
                  <p className="text-blue-400 text-sm">상담심리학 박사</p>
                </div>
              </div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• 연세대학교 교육대학원 박사</li>
                <li>• 現 대한상담학회 부회장</li>
                <li>• 직업상담사 1급 자격증</li>
                <li>• 기업 코칭 10년+ 경력</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                &ldquo;MBTI를 통한 자기 인식은 개인의 성장과 커리어 개발에 
                큰 도움이 됩니다. 다양한 유형의 강점을 이해하고 존중하는 것이 중요합니다.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">🔬</span> 방법론 및 데이터 출처
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">검증된 연구 기반</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                저희 콘텐츠는 다음과 같은 권위 있는 연구와 학술 자료를 기반으로 작성되었습니다:
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
              <h3 className="text-lg font-semibold text-white mb-3">테스트 설계 원칙</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>표준화된 질문:</strong> 검증된 MBTI 문항을 기반으로 한 신뢰성 확보</li>
                <li><strong>균형 잡힌 배치:</strong> 편향을 최소화하기 위한 랜덤화된 질문 순서</li>
                <li><strong>점수 가중치:</strong> 각 응답에 대한 통계적 가중치 적용</li>
                <li><strong>개인정보 보호:</strong> 데이터 암호화 및 익명화 처리</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Academic Partnerships */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">🎓</span> 학술 협력
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            저희는 다음 기관들과 협력하여 콘텐츠의 학술적 정확성을 유지합니다:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <p className="text-gray-300 text-sm">한국심리학회</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📖</div>
              <p className="text-gray-300 text-sm">대한상담학회</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🔬</div>
              <p className="text-gray-300 text-sm">한국산업심리학회</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">💼</div>
              <p className="text-gray-300 text-sm">한국인사관리학회</p>
            </div>
          </div>
        </div>

        {/* Limitations & Ethics */}
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
            <span className="text-2xl">⚠️</span> 윤리적 고지 및 한계
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
            <li>MBTI는 과학적 진단 도구가 아닌 성향 파악 도구입니다.</li>
            <li>결과는 참고용이며, 개인의 모든 특성을 완벽히 설명하지 못합니다.</li>
            <li>채용이나 중요한 결정의 유일한 기준으로 사용해서는 안 됩니다.</li>
            <li>개인정보는 암호화되어 저장되며, 제3자와 공유되지 않습니다.</li>
            <li>모든 콘텐츠는 정보 제공 목적이며, 전문적인 상담을 대체할 수 없습니다.</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-3xl">📧</span> 문의하기
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            테스트나 사이트에 대한 질문, 제휴 제안, 학술적 피드백 등이 있으시면 언제든지 연락주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:contact@simplembti.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-purple-700 transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              이메일 보내기
            </a>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              문의 페이지
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link href="/">
            <button className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all">
              ← 홈으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
