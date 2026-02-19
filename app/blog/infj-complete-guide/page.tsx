import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "INFJ 완벽 가이드: 제창자 유형의 모든 것 | MBTI 블로그",
  description: "INFJ(제창자)는 가장 희귀한 성격 유형 중 하나입니다. 이 유형의 특징, 강점, 약점, 그리고 인간관계와 커리어에서 성공하는 방법을 소개합니다.",
  keywords: ["INFJ", "INFJ 완벽 가이드", "제창자", "INFJ 강점", "INFJ 약점", "INFJ 커리어", "INFJ 관계"],
  openGraph: {
    title: "INFJ 완벽 가이드: 제창자 유형의 모든 것",
    description: "INFJ의 특징, 강점, 약점과 인간관계, 커리어 성공 방법을 알아보세요.",
    type: "article",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="hover:text-white transition-colors">홈</Link></li>
            <li>&gt;</li>
            <li><Link href="/blog" className="hover:text-white transition-colors">블로그</Link></li>
            <li>&gt;</li>
            <li className="text-white">INFJ 완벽 가이드</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">심리학</span>
            <span className="text-gray-500 text-sm">9분 소요</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            INFJ 완벽 가이드: 제창자 유형의 모든 것
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            가장 희귀하고 신비한 성격 유형 INFJ(제창자). 이 유형의 독특한 특성, 강점과 약점, 
            그리고 인간관계와 커리어에서 성공하는 방법을 심층적으로 다룹니다.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
          <h2 className="text-lg font-bold text-white mb-4">목차</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#overview" className="hover:text-white transition-colors">1. INFJ란 무엇인가?</a></li>
            <li><a href="#characteristics" className="hover:text-white transition-colors">2. INFJ의 핵심 특성</a></li>
            <li><a href="#strengths" className="hover:text-white transition-colors">3. INFJ의 강점</a></li>
            <li><a href="#weaknesses" className="hover:text-white transition-colors">4. INFJ의 약점과 도전</a></li>
            <li><a href="#relationships" className="hover:text-white transition-colors">5. 인간관계에서 INFJ</a></li>
            <li><a href="#career" className="hover:text-white transition-colors">6. INFJ와 커리어</a></li>
            <li><a href="#growth" className="hover:text-white transition-colors">7. 성장을 위한 조언</a></li>
          </ul>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. INFJ란 무엇인가?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ는 Myers-Briggs Type Indicator(MBTI)에서 16가지 성격 유형 중 하나이며, 
              &ldquo;제창자(Advocate)&rdquo;라는 별명을 가진 가장 희귀한 유형입니다. 
              전체 인구의 약 1.5%만 이 유형에 속할 정도로 찾아보기 어려운 특질입니다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ는 네 가지 심리적 선호도의 조합으로 이루어집니다:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>I (Introversion/내향):</strong> 내면의 세계에서 에너지를 얻음</li>
              <li><strong>N (Intuition/직관):</strong> 구체적 사실보다 가능성과 패턴을 선호</li>
              <li><strong>F (Feeling/감정):</strong> 논리보다 가치와 인간관계를 중시</li>
              <li><strong>J (Judging/판단):</strong> 계획성과 질서를 선호</li>
            </ul>
            <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
              <p className="text-green-200 text-sm">
                <strong>핵심 포인트:</strong> INFJ는 &ldquo;외모와 달리 강한 내면적 신념을 가진 이상주의자&rdquo;입니다.
                이들은 타인의 잠재력을 보고 격려하며, 더 나은 세상을 만들기 위해 헌신합니다.
              </p>
            </div>
          </section>

          <section id="characteristics" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. INFJ의 핵심 특성</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ들은 여러 독특한 특성을 가지고 있습니다. 이들의 핵심적 성향은 다음과 같습니다:
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">2.1 깊은 직관력</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ는 타인의 감정과 동기를 읽는 능력이 뛰어납니다. 
              무의식적으로 다른 사람의 미묘한 감정 변화나 언외의 뜻을 감지합니다. 
              이로 인해 다른 사람들이 심각하게 받아들이지 않는 상황에서 문제의 근본 원인을 파악하기도 합니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">2.2 강력한 직관</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              구체적인 현실보다 가능성과 미래에 초점을 맞춥니다. 
              &ldquo;보이는 것을 보는 것이 아니라, 보이지 않는 것을 본다&rdquo;는 말이 INFJ에게 어울립니다. 
              이들은 장기적인 비전을 가지고 있으며, 그 비전을 현실로 만들기 위해 노력합니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">2.3 깊은 공감 능력</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              타인의 감정에 진정으로 공감하는 능력이 있습니다. 
              단순히 타인의 아픔을 느끼는 것을 넘어, 그 사람이 어떤 경험을 하고 있는지 
              마치 자신의 것처럼 체감할 수 있습니다. 이 때문에 INFJ는 좋은 상담사나 치료사가 됩니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">2.4 강력한 가치관</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ는 명확한 내적 가치 체계를 가지고 있습니다. 
              이 가치관은 쉽게 흔들리지 않으며, 양심에 반하는 일은 하기 어렵습니다. 
              이러한 원칙성은 때로 고립감을 느끼게하기도 하지만, 동시에 그들에게 존엄성을 줍니다.
            </p>
          </section>

          <section id="strengths" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. INFJ의 강점</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ는 여러 방면에서 독보적인 강점을 가지고 있습니다:
            </p>

            <h3 className="text-xl font-bold text-white mb-3">3.1 창의적 사고력</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              복잡한 문제를 해결할 때, 기존의 방법론에 국한되지 않고 창의적인 해결방안을 찾아냅니다. 
              이는 예술, 연구, 개발 등 다양한 분야에서 가치 있는 결과를 만듭니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">3.2 헌신적인 우정의 중요성</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ는 소수의 깊은 관계를 얕은 관계보다 선호합니다. 
              한 번 형성된 관계에서는 매우 헌신적이고 충성스럽습니다. 
              친구가 어려울 때 끝까지 함께하는 타입입니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">3.3 격려하는 힘</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              타인의 잠재력을 보는 능력이 뛰어납니다. 
              다른 사람들이 자신만의 가치를 인식하도록 돕고, 
              더 나은 버전의 자신이 될 수 있도록 격려합니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">3.4 결단력</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              일단 목표를 정하면, 그 목표를 달성하기 위해 헌신합니다. 
              장기적인 비전을 가지고 있으며, 그 비전 실현을 위해 인내심 있게 노력합니다.
            </p>
          </section>

          <section id="weaknesses" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. INFJ의 약점과 도전</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              모든 유형처럼 INFJ에도 약점이 있습니다. 이를 인식하고 극복하는 것이 성장의 열쇠입니다:
            </p>

            <h3 className="text-xl font-bold text-white mb-3">4.1 극단적 완벽주의</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ는 자신과 주변에 높은 기준을 적용합니다. 
              완벽주의는 동력이 될 수 있지만, 동시에 과도한 스트레스와 자기비난의 원인이 됩니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">4.2 방어적인 태도</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              강한 가치관으로 인해 비판적으로 보이는 피드백에 민감하게 반응할 수 있습니다. 
              또한 자신의 감정을 드러내는 것을 어려워하여, 내면의 갈등을 홀로 감당하기도 합니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">4.3 번아웃 (Burnout)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              타인의 문제에 지나치게 공감하고 부담을 지면, 정서적 고갈에 빠질 수 있습니다. 
              자기 돌봄이 특히 중요합니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">4.4 현실과의 괴리</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              이상주의적 성향으로 인해 현실에 실망하거나 좌절감을 느끼기도 합니다. 
              완벽한 비전과 불완전한 현실 사이의 괴리를 관리하는 것이 과제입니다.
            </p>
          </section>

          <section id="relationships" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 인간관계에서 INFJ</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ는 인간관계에서 매우 깊은 의미를 부여합니다:
            </p>

            <h3 className="text-xl font-bold text-white mb-3">5.1 사랑에서</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ는 깊은 정신적 연결을 추구합니다. 
              육체적 매력보다 지적, 감정적 유대가 더 중요합니다. 
              사랑에 빠지면 매우 헌신적이며, 관계를 위해 많은 것을 합니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">5.2 우정에서</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              소수의 친한 친구 관계를 소중히 여깁니다. 
              많은 인맥을 만들기보다 몇 명의 깊은 관계를 형성하는 것을 선호합니다. 
              친구의 아픔을 진정으로 공감하고, 실질적인 도움을 제공합니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">5.3 가장 잘 맞는 유형</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ와 가장 잘 맞는 유형으로는 ENFP, INFP, 그리고 INTJ가 있습니다. 
              이들과의 관계에서 정신적 깊이와 상호 존중을 찾을 수 있습니다.
            </p>
          </section>

          <section id="career" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. INFJ와 커리어</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ는 특정 분야에서 특히 뛰어난 역량을 보입니다:
            </p>

            <h3 className="text-xl font-bold text-white mb-3">6.1 적합한 직업</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>상담심리사, 심리치료사</li>
              <li>작가, 시나리오 작가</li>
              <li>비영리단체 활동가</li>
              <li>교육자, 교수</li>
              <li>디자이너 (특히 UX/UI)</li>
              <li>인사/인적자원개발</li>
              <li>목회자, 사회복지사</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">6.2 피해야 할 환경</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              지나치게 경쟁적인 조직 문화, 반복적인 업무, 
              타인을 다루는 도구로 취급받는 환경은 INFJ에게 부적합합니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">6.3 커리어 팁</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              자신의 비전과 가치관에 부합하는 직장을 선택하세요. 
              타인을 돕고 의미 있는 일에 참여할 때 가장 큰 만족을 느낍니다. 
              또한 독자적으로 일하는 시간이 확보되는 것이 중요합니다.
            </p>
          </section>

          <section id="growth" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. 성장을 위한 조언</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ가 더 건강하고 행복한 삶을 위한 조언입니다:
            </p>

            <div className="space-y-4">
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">1. 자기 돌봄을 우선하세요</p>
                <p className="text-gray-300 text-sm">
                  타인의 문제에 공감하다 보면 자신의 감정을 무시하기 쉽습니다. 
                  정기적인 휴식과 자기 시간을 확보하세요.
                </p>
              </div>

              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">2. 완벽주의를 내려놓으세요</p>
                <p className="text-gray-300 text-sm">
                  완벽함은 구미의 이상입니다. 완벽을 추구하다 보면 
                  실행을 망설이게 됩니다. &ldquo;좋은 것&rdquo;이 &ldquo;완벽한 것&rdquo;의 적입니다.
                </p>
              </div>

              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">3. 경계를 설정하세요</p>
                <p className="text-gray-300 text-sm">
                  모든 사람의 문제에 책임감을 느끼지 마세요. 
                  타인을 돕는 것은 좋지만, 자신의 한계를 인식하고 
                  &ldquo;아니오&rdquo;라고 말하는 것도 배워야 합니다.
                </p>
              </div>

              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">4. 현실적 기대를 가지세요</p>
                <p className="text-gray-300 text-sm">
                  이상주의적 성향은 좌절의 원인이 됩니다. 
                  타인과 세계를 있는 그대로 수용하면서도, 
                  더 나은 방향으로 영향을 미칠 수 있다는 희망을 놓지 마세요.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Author/Date */}
        <div className="border-t border-gray-800 pt-6 mb-10">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>작성일: 2026년 2월 15일</span>
            <span>카테고리: 심리학</span>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">관련 글</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/mbti-scientific-basis" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
                <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">
                  MBTI의 과학적 기반과 한계
                </h4>
                <p className="text-gray-400 text-sm">심리학자들이 말하는 진실</p>
              </div>
            </Link>
            <Link href="/blog/stress-management-by-type" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
                <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">
                  각 유형별 스트레스 관리 가이드
                </h4>
                <p className="text-gray-400 text-sm">나만의 힐링법</p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
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
      </article>
    </div>
  );
}
