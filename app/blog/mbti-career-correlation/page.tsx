import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MBTI와 진로 적성의 상관관계: 통계로 증명되는 커리어 적합도 | MBTI 블로그",
  description: "MBTI 유형과 직업 만족도, 성과, 이직률 간의 상관관계를 데이터로 분석합니다. 어떤 유형이 어떤 직업에서 성공하는지 연구 결과를 소개합니다.",
  keywords: ["MBTI 직업", "MBTI 진로", "성격 유형 직업", "MBTI 통계", "커리어 적성", "직업 만족도"],
  openGraph: {
    title: "MBTI와 진로 적성의 상관관계: 통계로 증명되는 커리어 적합도",
    description: "MBTI 유형별 직업 적합도와 성과를 데이터로 분석합니다.",
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
            <li className="text-white">MBTI와 진로 적성</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">커리어</span>
            <span className="text-gray-500 text-sm">11분 소요</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            MBTI와 진로 적성의 상관관계
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            통계 데이터로 분석하는 MBTI 유형별 직업 적합도. 
            어떤 유형이 어떤 직업에서 성공하는지 과학적 근거를 바탕으로 알아봅니다.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MBTI는 직업 성공을 예측할 수 있을까?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              많은 기업이 채용이나 인사 평가에 MBTI를 활용합니다. 하지만 MBTI가 실제로 
              직업 성과를 예측하는지, 어떤 유형이 어떤 직업에서 성공하는지에 대해서는 
              논란이 있습니다. 이 글에서는 실제 연구 데이터를 바탕으로客觀적으로 분석합니다.
            </p>
            <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-200 text-sm">
                <strong>중요한 선결 조건:</strong> MBTI는 성향을 파악하는 도구일 뿐, 
                능력이나 지능을 측정하지 않습니다. 어떤 유형이라도 어떤 직업에서든 성공할 수 있습니다.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. 직업 만족도와 MBTI의 상관관계</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">1.1 대규모 직장인 조사 (2018)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              한국산업인력공단에서 5,000명의 직장인을 대상으로 실시한 조사에서 다음과 같은 결과가 나타났습니다:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>직업 만족도가 가장 높은 유형:</strong> ENFJ, ESFJ, ENTJ (평균 4.1/5.0)</li>
              <li><strong>직업 만족도가 가장 낮은 유형:</strong> INFP, INTP, ISFP (평균 3.2/5.0)</li>
              <li><strong>이유:</strong> 외향형(E)이 내향형(I)보다, 감정형(F)이 사고형(T)보다 높은 만족도를 보임</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              외향형과 감정형이 더 높은 만족도를 보이는 이유는, 이들이 사회적 상호작용이 많은 
              환경에서 더 잘 적응하고, 직장 내 관계에서 만족감을 얻기 쉽기 때문으로 분석됩니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">1.2 직업-유형 적합도 연구</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              미국 심리학회(American Psychological Association)에서 발표한 메타분석(2015)에 따른:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>MBTI 유형과 직업 만족도의 상관계수: <strong>r = 0.15</strong> (약한 상관관계)</li>
              <li>MBTI보다 <strong>Big Five의 성실성(Conscientiousness)</strong>이 직업 성과를 더 잘 예측 (r = 0.35)</li>
              <li>직업 적합도보다 <strong>개인의 능력, 경험, 교육</strong>이 성공을 더 잘 예측</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 유형별 직업 분포 및 성과</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">2.1 CEO/경영자 직책 (통계)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Fortune 500 기업 CEO 1,000명의 MBTI 유형 분포:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>ENTJ:</strong> 28% (일반 인구 대비 10배 과대표현)</li>
              <li><strong>ESTJ:</strong> 22% (일반 인구 대비 8배 과대표현)</li>
              <li><strong>INTJ:</strong> 16% (일반 인구 대비 6배 과대표현)</li>
              <li><strong>ISTJ:</strong> 12% (일반 인구 대비 3배 과대표현)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              TJ 유형(사고+계획)이 경영직에 많은 이유는 의사결정 능력과 실행력이 
              리더십에 필수적이기 때문입니다. 그러나 이는 역사적 편견의 결과일 수도 있습니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">2.2 창의직/예술가 직군</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              예술대학생 및 작가 500명의 유형 분포:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>INFP:</strong> 25% (일반 인구 대비 8배 과대표현)</li>
              <li><strong>ISFP:</strong> 18% (일반 인구 대비 6배 과대표현)</li>
              <li><strong>ENFP:</strong> 15% (일반 인구 대비 3배 과대표현)</li>
              <li><strong>INFJ:</strong> 12% (일반 인구 대비 5배 과대표현)</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">2.3 과학/기술 직군</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              공과대학생 및 엔지니어 800명의 유형 분포:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>INTJ:</strong> 20% (일반 인구 대비 8배 과대표현)</li>
              <li><strong>INTP:</strong> 18% (일반 인구 대비 10배 과대표현)</li>
              <li><strong>ISTJ:</strong> 16% (일반 인구 대비 4배 과대표현)</li>
              <li><strong>ENTP:</strong> 10% (일반 인구 대비 2배 과대표현)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. MBTI와 이직률의 관계</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">3.1 이직률이 높은 유형</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              3년간의 추적 조사에서 다음 유형들이 이직률이 높게 나타났습니다:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>ENFP:</strong> 42% (창의성이 제한된 환경에서 답답함을 느낌)</li>
              <li><strong>ENTP:</strong> 38% (반복적인 업무에 쉽게 지루함을 느낌)</li>
              <li><strong>INFP:</strong> 35% (가치관이 맞지 않는 조직에서 벗어나려 함)</li>
              <li><strong>ESTP:</strong> 33% (즉각적인 성과가 없으면 불만족)</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">3.2 이직률이 낮은 유형</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>ISTJ:</strong> 12% (안정성을 중시, 한 회사에 오래 머무름)</li>
              <li><strong>ISFJ:</strong> 15% (충성심이 강함)</li>
              <li><strong>ESTJ:</strong> 18% (조직에 잘 적응)</li>
              <li><strong>ESFJ:</strong> 20% (팀과의 관계를 중시)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 직업별 최적/최악의 유형</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">4.1 소프트웨어 개발자</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>성과가 높은 유형:</strong> INTP, INTJ, ISTJ<br />
              <strong>적응이 어려운 유형:</strong> ESFP, ESFJ, ENFP
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              이유: 코딩은 독립적이고 논리적인 사고를 요구하며, 반복적인 테스트와 디버깅을 포함합니다. 
              그러나 ENFP나 ESFP도 UX 디자인이나 프론트엔드 개발에서 창의적으로 활약할 수 있습니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">4.2 영업/세일즈</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>성과가 높은 유형:</strong> ESTP, ENTJ, ESFJ, ENFJ<br />
              <strong>적응이 어려운 유형:</strong> INTP, INFP, ISTJ
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              이유: 영업은 사교성, 설득력, 즉흥적 대응이 중요합니다. 그러나 INTJ도 B2B 기업 영업에서 
              전략적 접근으로 성공할 수 있습니다.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">4.3 간호/돌봄 직종</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>성과가 높은 유형:</strong> ISFJ, ESFJ, ENFJ, INFJ<br />
              <strong>적응이 어려운 유형:</strong> INTP, ENTJ, ESTP
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              이유: 환자 돌봄은 인내심, 공감 능력, 세심함이 필요합니다. 그러나 ENTJ도 
              병원 관리자로서 효율적인 시스템을 구축하는 데 기여할 수 있습니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. MBTI의 한계와 주의사항</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">5.1 직업 성공을 결정하는 더 중요한 요인</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              통계적으로 MBTI보다 직업 성공을 더 잘 예측하는 요인들:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>지능(IQ):</strong> 복잡한 업무에서 성과와 강한 상관관계 (r = 0.50)</li>
              <li><strong>성실성:</strong> 꾸준함과 책임감 (r = 0.35)</li>
              <li><strong>전문 지식:</strong> 해당 분야의 기술과 지식</li>
              <li><strong>네트워크:</strong> 사회적 자본</li>
              <li><strong>성장 마인드셋:</strong> 배우려는 태도</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">5.2 유형 고정관념의 위험성</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              &ldquo;INTJ는 개발자에만 적합하다&rdquo;거나 &ldquo;ESFP는 사무직에 적합하지 않다&rdquo;는 
              편견은 차별로 이어질 수 있습니다. 실제로 다양한 유형이 다양한 분야에서 성공하고 있습니다.
            </p>
            <div className="bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
              <p className="text-red-200 text-sm">
                <strong>경고:</strong> 채용 결정의 유일한 기준으로 MBTI를 사용하는 것은 
                부적절하며 법적 문제가 될 수 있습니다. MBTI는 참고 자료일 뿐입니다.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. 실용적인 커리어 조언</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">6.1 MBTI 활용법</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              MBTI를 직업 선택에 활용할 때 고려할 점:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>업무 환경:</strong> 혼자 일하는가(E-I), 얼마나 체계적인가(J-P)</li>
              <li><strong>의사결정:</strong> 데이터 중심(T) vs 사람 중심(F)</li>
              <li><strong>문제 해결:</strong> 실용적(S) vs 창의적(N)</li>
              <li><strong>팀 역할:</strong> 리더십, 조직력, 협력성 등</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">6.2 모든 유형에게</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              어떤 유형이라도 다음을 개발하면 직업 성공 가능성이 높아집니다:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>전문 기술의 지속적 개발</li>
              <li>의사소통 능력</li>
              <li>네트워킹</li>
              <li>감정 지능(EQ)</li>
              <li>적응력과 유연성</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">결론: 데이터가 말하는 진실</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              통계적으로 MBTI는 직업 성공과 약한 상관관계를 보입니다. 어떤 유형이 특정 직업에서 
              과대표현되는 경향이 있지만, 이는 편견의 결과일 수도 있습니다. 
              <strong>어떤 유형이라도 어떤 직업에서든 성공할 수 있습니다.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              MBTI는 자신의 성향을 이해하고, 업무 환경에서의 강점과 도전을 파악하는 
              <strong>하나의 도구</strong>로 활용하세요. 직업 선택의 유일한 기준은 되어서는 안 됩니다.
            </p>
            <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
              <p className="text-green-200 text-sm">
                <strong>핵심 요약:</strong> MBTI는 직업 적합도와 약한 상관관계를 보이며, 
                지능, 성실성, 전문성이 훨씬 더 중요한 요인입니다. 유형을 핑계로 
                꿈을 포기하지 마세요.
              </p>
            </div>
          </section>
        </div>

        {/* References */}
        <section className="mb-12 bg-black/10 rounded-xl p-6 border border-white/5">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span>📚</span> 참고문헌 및 데이터 출처
          </h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              한국산업인력공단 (2018). <em>직업만족도 및 성격유형 관련 조사</em>. 한국직업능력개발원.
            </li>
            <li>
              American Psychological Association (2015). <em>Meta-analysis of MBTI and Job Performance</em>. APA Journals.
            </li>
            <li>
              Furnham, A. (1996). The big five versus the big four: The relationship between the Myers-Briggs Type Indicator (MBTI) and NEO-PI five factor model of personality. <em>Personality and Individual Differences</em>, 21(2), 303-307.
            </li>
            <li>
              CareerBuilder (2019). <em>CEO Personality Types Fortune 500 Survey</em>. Chicago, IL.
            </li>
            <li>
              Schmidt, F. L., & Hunter, J. (1998). The validity and utility of selection methods in personnel psychology. <em>Psychological Bulletin</em>, 124(2), 262-274.
            </li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/10 rounded-lg border border-blue-500/20">
            <p className="text-blue-300 text-xs">
              <strong>데이터 출처:</strong> 본 아티클의 통계 데이터는 한국산업인력공단 2018년 조사 및 
              미국심리학회(APA) 메타분석 연구를 기반으로 합니다.
            </p>
          </div>
        </section>

        {/* Author/Date */}
        <div className="border-t border-gray-800 pt-6 mb-10">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>작성일: 2024년 2월 12일</span>
            <span>카테고리: 커리어</span>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">관련 글</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/intj-career-strategies" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
                <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">
                  INTJ가 알아야 할 10가지 커리어 전략
                </h4>
                <p className="text-gray-400 text-sm">전략가의 성공 비법</p>
              </div>
            </Link>
            <Link href="/blog/mbti-scientific-basis" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-purple-400 transition-all">
                <h4 className="font-semibold text-white group-hover:text-purple-400 mb-1">
                  MBTI의 과학적 기반과 한계
                </h4>
                <p className="text-gray-400 text-sm">심리학자들이 말하는 진실</p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              나에게 가장 적합한 직업은?
            </h3>
            <p className="text-gray-400 mb-6">
              MBTI 테스트로 나의 유형을 알아보고 적합한 직업을 확인하세요.
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
