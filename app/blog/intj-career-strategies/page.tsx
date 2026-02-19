import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "INTJ가 알아야 할 10가지 커리어 전략: 전략가의 성공 비법 | MBTI 블로그",
  description: "INTJ 전략가 유형이 직장에서 성공하기 위한 10가지 핵심 전략을 소개합니다. 리더십, 팀워크, 장기적 경력 계획에 대한 실용적인 조언을 제공합니다.",
  keywords: ["INTJ", "INTJ 커리어", "전략가", "INTJ 직업", "INTJ 성공", "MBTI 커리어"],
  openGraph: {
    title: "INTJ가 알아야 할 10가지 커리어 전략: 전략가의 성공 비법",
    description: "INTJ 전략가가 직장에서 성공하기 위한 10가지 핵심 전략",
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
            <li className="text-white">INTJ 커리어 전략</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">커리어</span>
            <span className="text-gray-500 text-sm">10분 소요</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            INTJ가 알아야 할 10가지 커리어 전략
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            전략적 사고와 독립적인 성향을 가진 INTJ. 이 강점을 직장에서 극대화하기 위한 
            10가지 실용적인 전략을 제시합니다.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">INTJ의 직장 내 강점과 도전</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INTJ(전략가)는 독립적이고 분석적인 사고를 가진 인재입니다. 복잡한 문제를 해결하고 
              장기적인 비전을 제시하는 데 탁월하지만, 때로는 직장의 정치적 환경이나 
              감정적 상호작용에서 어려움을 겪을 수 있습니다.
            </p>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-200 text-sm">
                <strong>INTJ의 핵심 강점:</strong> 전략적 사고, 문제 해결 능력, 독립성, 
                높은 기준, 혁신적 아이디어
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. 전략적 네트워킹 하기</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INTJ는 종료 네트워킹을 &lsquo;시간 낭비&rsquo;로 여기기 쉽습니다. 하지만 현대 직장에서 
              네트워크는 필수적입니다. 전략적으로 접근하세요: 당신의 목표와 비전에 도움이 되는 
              사람들과 관계를 맺되, 표면적인 친목보다는 <strong>상호 가치 교환</strong>에 초점을 맞추세요.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              실천 팁: 월마다 1-2명의 핵심 인물과 점심을 함께하세요. 이들과의 관계는 향후 
              프로젝트나 승진에서 결정적인 역할을 할 수 있습니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 팀원들의 감정을 인정하기</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INTJ는 논리와 효율성을 중시하지만, 팀원들은 감정적 지지와 인정을 필요로 합니다. 
              직설적인 피드백을 줄 때는 상대방의 감정을 고려하세요. 
              <strong>&ldquo;이 부분은 이렇게 개선하면 좋겠어요&rdquo;</strong>보다 
              <strong>&ldquo;좋은 아이디어예요. 여기에 이런 부분을 보완하면 완벽할 것 같아요&rdquo;</strong>처럼 
              긍정적 요소를 먼저 언급하세요.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 장기 비전을 단기 목표로 분해하기</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INTJ는 큰 그림을 보는 데 능숙하지만, 이를 실행 가능한 단기 목표로 나누는 것이 중요합니다. 
              5년 후의 목표를 분기별, 월별, 주별 마일스톤으로 세분화하세요. 이렇게 하면 
              진행 상황을 측정하고 필요에 따라 조정할 수 있습니다.
            </p>
            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
              <p className="text-purple-200 text-sm">
                <strong>실천 예시:</strong> &ldquo;5년 내 이사가 되겠다&rdquo;는 목표를 
                &ldquo;올해 팀장 승진 → 낮에 리더십 교육 이수 → 6개월 내 프로젝트 3건 성공&rdquo;으로 분해
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. &lsquo;완벽하지 않음&rsquo;을 받아들이기</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INTJ는 높은 기준을 가지고 있어 종료 &lsquo;완벽하게 준비되지 않았다&rsquo;는 이유로 
              기회를 놓치곤 합니다. 80% 준비되었다면 실행하세요. 나머지 20%는 실행하면서 배우는 것이 
              더 효과적입니다. 완벽을 추구하다 기회를 놓치는 것보다, 부족하더라도 시도하는 것이 낫습니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 독립 업무와 협업의 균형 맞추기</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INTJ는 혼자 일하는 것을 선호하지만, 직장에서는 협업이 필수적입니다. 
              프로젝트의 초기 기획이나 전략 수립 단계에서 독립적으로 작업하고, 
              실행 단계에서는 팀과 협업하는 방식을 찾으세요. 이는 당신의 강점을 살리면서도 
              팀워크를 보여줄 수 있는 방법입니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. 감정 지능(EQ) 개발하기</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              IQ는 중요하지만, 리더십 위치에 오르려면 EQ도 필수적입니다. 동료들의 감정을 
              읽고, 적절하게 반응하는 연습을 하세요. 주변 사람들이 왜 그런 행동을 하는지 
              논리적 이유뿐만 아니라 감정적 동기도 고려해보세요.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              추천 방법: 정기적으로 팀원들과 일대일 면담을 갖고, 그들의 고충과 목표를 
              경청하세요. 이는 관계를 강화하고 그들을 더 효과적으로 이끄는 데 도움이 됩니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. 전문성을 브랜드화하기</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INTJ는 특정 분야의 전문가가 되기 쉽습니다. 이 전문성을 개인 브랜드로 만들어 
              회사 안팎에서 알려지게 하세요. 블로그 글 작성, 내부 세미나 발표, 
              업계 컨퍼런스 참여 등을 통해 전문성을 공유하세요.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              당신이 특정 문제의 &lsquo;해결사&rsquo;로 알려지면, 더 중요한 프로젝트와 기회가 찾아올 것입니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">8. 피드백을 방어적으로 받아들이지 않기</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INTJ는 자신의 능력에 자부심을 가지고 있어 비판을 개인적으로 받아들이기 쉽습니다. 
              피드백은 당신을 공격하는 것이 아니라 <strong>성장할 기회</strong>입니다. 
              피드백을 받을 때는 방어적인 반응을 참고, 구체적인 개선점을 찾아보세요.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">9. 멘토 찾기와 멘토링 하기</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              경력이 선배로부터 조언을 구하고, 동시에 후배를 멘토링하세요. 
              멘토는 당신이 보지 못하는 관점을 제공하고, 멘토링은 리더십 스킬을 개발하는 좋은 방법입니다. 
              INTJ의 통찰력은 후배들에게 큰 도움이 될 것입니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">10. 적절한 조직 문화 찾기</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              모든 조직이 INTJ에게 적합한 것은 아닙니다. 계층이 적고, 혁신을 장려하며, 
              논리적이고 합리적인 결정을 존중하는 조직을 찾으세요. 스타트업, 컨설팅, 
              연구 개발, 전략 기획 부서 등이 INTJ에게 잘 맞는 경우가 많습니다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              현재 직장이 당신의 성장을 제한한다고 느낀다면, 더 나은 환경을 찾아 이동하는 것을 고려하세요. 
              INTJ는 변화에 적응하는 데 시간이 걸리지만, 장기적으로 더 나은 환경에서 큰 성과를 낼 수 있습니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">결론: INTJ의 성공을 위한 핵심</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              INTJ는 독립적이고 전략적인 사고를 가진 귀중한 인재입니다. 하지만 직장에서 
              진정한 성공을 위해서는 기술적 능력만으로는 부족합니다. 감정 지능, 네트워킹, 
              협업 능력을 함께 개발하여 균형 잡힌 전문가가 되세요.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              당신의 분석력과 비전은 조직에 큰 가치를 제공할 수 있습니다. 
              이 10가지 전략을 실행에 옮겨 INTJ로서의 강점을 극대화하세요.
            </p>
            <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
              <p className="text-green-200 text-sm">
                <strong>핵심 요약:</strong> INTJ의 독립성과 전략적 사고는 강점이지만, 
                직장 성공을 위해서는 감정 지능과 협업 능력을 함께 개발해야 합니다.
              </p>
            </div>
          </section>
        </div>

        {/* Author/Date */}
        <div className="border-t border-gray-800 pt-6 mb-10">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>작성일: 2026년 2월 12일</span>
            <span>카테고리: 커리어</span>
          </div>
        </div>

        {/* References */}
        <section className="mb-12 bg-black/10 rounded-xl p-6 border border-white/5">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span>📚</span> 참고문헌
          </h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              Drenth, J. (2018). <em>The INTJ Guide to Careers, Income & Finding Your Perfect Job</em>.
            </li>
            <li>
              Penney, L. M., et al. (2011). A review of personality types and job performance. <em>International Journal of Selection and Assessment</em>, 19(4), 403-413.
            </li>
            <li>
              Goleman, D. (1995). <em>Emotional Intelligence: Why It Can Matter More Than IQ</em>. Bantam Books.
            </li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/10 rounded-lg border border-blue-500/20">
            <p className="text-blue-300 text-xs">
              <strong>전문가 검증:</strong> 본 아티클은 기업 코칭 경력 10년+의 
              상담심리학 박사 이민아의 실무적 검토를 거쳤습니다.
            </p>
          </div>
        </section>

        {/* Author/Date */}
        <div className="border-t border-gray-800 pt-6 mb-10">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>작성일: 2026년 2월 12일</span>
            <span>카테고리: 커리어</span>
          </div>
        </div>

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
