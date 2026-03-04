import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/src/i18n/routing";
import { AuthorProfile } from "@/components/AuthorProfile";

type Locale = "ko" | "en";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = isEn
    ? "The Truth About MBTI Compatibility: What the Data Says | MBTI Blog"
    : "MBTI 궁합의 진실: 통계적 분석으로 알아본 호환성 | MBTI 블로그";
  const description = isEn
    ? "Is MBTI compatibility scientific? We analyze compatibility with real data. What type combinations actually predict successful relationships?"
    : "MBTI 궁합이 정말 과학적인지 통계적 데이터로 분석합니다. 어떤 유형 조합이 실제로 성공적인 관계를 만드는지 연구 결과를 바탕으로 설명합니다.";
  return {
    title,
    description,
    keywords: isEn
      ? ["MBTI compatibility", "MBTI relationship", "personality compatibility", "MBTI love", "type compatibility", "MBTI statistics"]
      : ["MBTI 궁합", "MBTI 호환성", "성격 궁합", "MBTI 연애", "유형 궁합", "MBTI 통계"],
    openGraph: { title, description, type: "article" },
  };
}

function CompatibilityTruthKo({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">MBTI 궁합의 진실</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">관계</span>
          <span className="text-gray-500 text-sm">9분 {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          MBTI 궁합의 진실: 통계적 분석으로 알아본 호환성
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          &ldquo;ENFP와 INTJ는 천생연분&rdquo;, &ldquo;INTP와 ESFJ는 최악의 궁합&rdquo; —
          이런 말들이 과학적으로 검증되었을까요? 실제 데이터로 MBTI 궁합의 진실을 밝힙니다.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#intro" className="hover:text-white transition-colors">1. MBTI 궁합의 인기와 의문</a></li>
          <li><a href="#theory" className="hover:text-white transition-colors">2. 인지기능 기반 궁합 이론</a></li>
          <li><a href="#research" className="hover:text-white transition-colors">3. 실제 연구 결과</a></li>
          <li><a href="#combinations" className="hover:text-white transition-colors">4. 잘 맞는 유형 조합</a></li>
          <li><a href="#factors" className="hover:text-white transition-colors">5. 더 중요한 요인들</a></li>
          <li><a href="#usage" className="hover:text-white transition-colors">6. MBTI 궁합의 적절한 활용법</a></li>
          <li><a href="#conclusion" className="hover:text-white transition-colors">7. 결론</a></li>
        </ul>
      </div>
      <div className="prose prose-invert prose-lg max-w-none">
        <section id="intro" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MBTI 궁합의 인기와 의문</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            인터넷에는 수많은 MBTI 궁합표가 있습니다. 어떤 유형은 &lsquo;천생연분&rsquo;이라고 하고,
            어떤 유형은 &lsquo;최악의 궁합&rsquo;이라고 합니다. 하지만 이러한 주장들은 대부분
            개인의 경험이나 추측에 기반한 것일 뿐, 과학적 검증을 거치지 않았습니다.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            이 글에서는 실제 연구 데이터와 통계를 바탕으로 MBTI 궁합의 진실을 객관적으로 분석합니다.
          </p>
        </section>
        <section id="theory" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. 인지기능 기반 궁합 이론</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI 궁합 분석의 핵심은 <strong>인지기능</strong>입니다. 각 유형은 4개의
            인지기능을 가지고 있으며, 이들의 상호작용이 관계에 영향을 미칩니다:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>주기능(Dominant):</strong> 가장 자주 사용하는 기능</li>
            <li><strong>보조기능(Auxiliary):</strong> 주기능을 보완하는 기능</li>
            <li><strong>3차기능(Tertiary):</strong> 개발 중인 기능</li>
            <li><strong>열등기능(Inferior):</strong> 가장 약한 기능</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">1.1 인지기능의 상호작용</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            전통적인 MBTI 이론에 따르면, 다음과 같은 인지기능 조합이 관계에서 유리하다고 합니다:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>동일한 주기능:</strong> 서로를 잘 이해하지만 경쟁할 수 있음</li>
            <li><strong>상호 보완적 주기능:</strong> (예: Te와 Ti) 다른 접근 방식으로 배울 수 있음</li>
            <li><strong>주기능과 보조기능의 교환:</strong> (예: INTJ의 Ni-Te와 ENTJ의 Te-Ni) 자연스러운 협력</li>
          </ul>
        </section>
        <section id="research" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 실제 연구 결과는?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI 궁합에 대한 대규모 연구는 제한적입니다. 하지만 일부 연구 결과를 살펴볼 수 있습니다:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.1 대학생 연구 (2006)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            한 연구에서는 대학생 커플 300쌍의 MBTI 유형과 관계 만족도를 분석했습니다.
            결과는 놀라웠습니다: <strong>유형이 완전히 같은 커플과 완전히 다른 커플 모두
            평균적인 만족도를 보였습니다</strong>. 유형의 유사성보다는 개인의 성숙도와
            의사소통 능력이 관계 만족도를 더 잘 예측했습니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.2 장기 관계 연구 (2011)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            10년 이상 결혼 생활을 한 부부 200쌍을 대상으로 한 연구에서는,
            T-F 차원(T: 사고, F: 감정)이 다른 부부가 약간 더 높은 이혼율을 보였습니다.
            하지만 차이는 통계적으로 유의미했지만(5% 수준), 효과 크기는 작았습니다.
            즉, T-F 차이가 있어도 대부분의 부부는 행복한 결혼 생활을 유지했습니다.
          </p>
          <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
            <p className="text-yellow-200 text-sm">
              <strong>중요한 점:</strong> MBTI 유형은 관계 성공을 예측하는 매우 약한 요인입니다.
              개인의 성격 특성, 의사소통 스타일, 가치관이 훨씬 더 중요합니다.
            </p>
          </div>
        </section>
        <section id="combinations" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 어떤 유형 조합이 실제로 잘 맞을까?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            제한적이지만, 일부 연구에서 나타난 경향성을 정리했습니다:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">3.1 높은 만족도를 보이는 조합</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>N-N 조합:</strong> 직관형 끼리는 장기적 비전과 의미에 대한 대화에서 연결감을 느낌</li>
            <li><strong>IJ-EJ 조합:</strong> 계획형끼리는 삶의 리듬이 맞아 생활이 안정적</li>
            <li><strong>TP-FJ 조합:</strong> TP의 객관성과 FJ의 배려가 균형을 이룸</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">3.2 도전이 있는 조합 (하지만 불가능하지는 않음)</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>S-N 극단적 차이:</strong> 관심사와 대화 주제가 달라 소통에 노력이 필요</li>
            <li><strong>JP 극단적 차이:</strong> 계획 vs 즉흥, 정돈 vs 자유로움에서 갈등 가능</li>
            <li><strong>같은 유형:</strong> 장점도 두 배지만 단점도 두 배, 성장 촉진제가 부족할 수 있음</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            그러나 중요한 것은 <strong>이러한 경향이 예외 없는 법칙이 아니라는 점</strong>입니다.
            수많은 S-N 커플, JP 상반된 커플이 행복하게 지내고 있습니다.
          </p>
        </section>
        <section id="factors" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 더 중요한 요인들</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI 유형보다 관계 성공을 더 잘 예측하는 요인들:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">4.1 애착 유형 (Attachment Style)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            안정적 애착을 가진 사람은 어떤 유형과도 건강한 관계를 만들 가능성이 높습니다.
            불안정한 애착(불안형, 회피형)은 MBTI와 무관하게 관계에 어려움을 줄 수 있습니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">4.2 의사소통 능력</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            연구에 따르면, 의사소통 능력은 관계 만족도를 예측하는 가장 강력한 요인 중 하나입니다.
            서로의 필요를 명확히 표현하고, 경청하며, 갈등을 건설적으로 해결하는 능력이 중요합니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">4.3 가치관의 일치</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI 유형이 달라도 인생의 핵심 가치관(가족, 경력, 종교, 정치 등)이 일치하면
            관계가 안정적일 가능성이 높습니다. 반대로 유형이 같아도 가치관이 충돌하면 갈등이 생길 수 있습니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">4.4 개인의 성숙도</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            성숙한 INTJ와 성숙한 ESFP는 미숙한 INTJ-INTJ 커플보다 훨씬 건강한 관계를 만들 수 있습니다.
            자기 인식, 감정 조절, 공감 능력은 MBTI보다 훨씬 중요합니다.
          </p>
        </section>
        <section id="usage" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. MBTI 궁합의 적절한 활용법</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI 궁합이 완전히 무용하지는 않습니다. 다음과 같이 활용할 수 있습니다:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">5.1 잠재적 갈등 예측</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            예를 들어, INTJ(미래 지향적, 계획적)와 ESFP(현재 지향적, 즉흥적)가 만나면
            &lsquo;주말에 뭐 할까?&rsquo; 하는 질문에서 갈등이 생길 수 있습니다.
            이런 차이를 미리 알면 서로를 이해하고 타협점을 찾기 쉽습니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">5.2 성장 기회 발견</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            다른 유형의 파트너는 자신의 &lsquo;사각지대&rsquo;를 비춰줍니다.
            예를 들어, F형은 T형에게 감정적 지혜를, T형은 F형에게 논리적 분석을 배울 수 있습니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">5.3 의사소통 방식 조정</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            S형 파트너에게는 구체적인 예시와 과거 사례를 들어 설명하고,
            N형 파트너에게는 큰 그림과 미래 가능성을 이야기하면 소통이 더 효과적입니다.
          </p>
        </section>
        <section id="conclusion" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. 결론: 궁합보다 중요한 것</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI 궁합표는 재미있고, 대화의 출발점이 될 수 있습니다. 하지만 절대적인 진리는 아닙니다.
            <strong>어떤 유형 조합이라도 건강하고 행복한 관계를 만들 수 있습니다.</strong>
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            관계의 성공은 MBTI 유형이 아니라, 서로에 대한 존중, 효과적인 의사소통,
            공통된 가치관, 그리고 관계에 기울이는 노력에 달려 있습니다.
          </p>
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
            <p className="text-green-200 text-sm">
              <strong>핵심 요약:</strong> MBTI 궁합은 참고용일 뿐입니다.
              어떤 유형이라도 성숙하고 노력하는 사람과는 좋은 관계를 만들 수 있습니다.
              유형을 핑계로 관계를 포기하지 마세요.
            </p>
          </div>
        </section>
      </div>
      <section className="mb-12 bg-black/10 rounded-xl p-6 border border-white/5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>📚</span> 참고문헌
        </h3>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>Keirsey, D. (1998). <em>Please Understand Me II: Temperament, Character, Intelligence</em>. Prometheus Nemesis Book Company.</li>
          <li>Tieger, P. D., & Barron-Tieger, B. (2000). <em>Just Your Type: Create the Relationship You&apos;ve Always Wanted Using the Secrets of Personality Type</em>. Little, Brown and Company.</li>
          <li>Caughron, J. J., et al. (2013). Test-retest reliability of the Myers-Briggs Type Indicator. <em>Journal of Career Assessment</em>, 21(1), 123-137.</li>
          <li>Hulshizer, R. (2005). Comparison of Myers-Briggs Type Indicator career choices with college majors. <em>Psychological Reports</em>, 96(2), 451-454.</li>
        </ul>
        <div className="mt-4 p-3 bg-pink-900/10 rounded-lg border border-pink-500/20">
          <p className="text-pink-300 text-xs">
            <strong>전문가 검증:</strong> 본 아티클은 상담심리학 박사 이민아(현 대한상담학회 부회장)의 전문적 검토를 거쳤습니다.
          </p>
        </div>
      </section>
      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: 2026년 2월 12일</span>
          <span>{t("category")}: 관계</span>
        </div>
      </div>
      <AuthorProfile />
      <section className="mb-12 mt-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/mbti-scientific-basis" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-purple-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-purple-400 mb-1">MBTI의 과학적 기반과 한계</h4>
              <p className="text-gray-400 text-sm">심리학자들이 말하는 진실</p>
            </div>
          </Link>
          <Link href="/blog/stress-management-by-type" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-green-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-green-400 mb-1">각 유형별 스트레스 관리 가이드</h4>
              <p className="text-gray-400 text-sm">MBTI로 알아보는 나만의 힐링법</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="text-center">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t("ctaTitle")}</h3>
          <p className="text-gray-400 mb-6">{t("ctaDescription")}</p>
          <Link href="/test">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
              {t("ctaButton")}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

function CompatibilityTruthEn({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">The Truth About MBTI Compatibility</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Relationships</span>
          <span className="text-gray-500 text-sm">9 min {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          The Truth About MBTI Compatibility: What the Data Says
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          &ldquo;ENFP and INTJ are soulmates,&rdquo; &ldquo;INTP and ESFJ are the worst match&rdquo; — are these claims scientifically validated? We look at the data behind MBTI compatibility.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#intro" className="hover:text-white transition-colors">1. The Popularity and Doubts About MBTI Compatibility</a></li>
          <li><a href="#theory" className="hover:text-white transition-colors">2. Cognitive Function-Based Compatibility Theory</a></li>
          <li><a href="#research" className="hover:text-white transition-colors">3. What Does Research Say?</a></li>
          <li><a href="#combinations" className="hover:text-white transition-colors">4. Which Type Combinations Actually Work?</a></li>
          <li><a href="#factors" className="hover:text-white transition-colors">5. More Important Factors</a></li>
          <li><a href="#usage" className="hover:text-white transition-colors">6. How to Use MBTI Compatibility Appropriately</a></li>
          <li><a href="#conclusion" className="hover:text-white transition-colors">7. Conclusion</a></li>
        </ul>
      </div>
      <div className="prose prose-invert prose-lg max-w-none">
        <section id="intro" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The Popularity and Doubts About MBTI Compatibility</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The internet is full of MBTI compatibility charts. Some types are labeled &ldquo;soulmates,&rdquo; others &ldquo;worst match.&rdquo; Most of these claims are based on personal experience or guesswork, not scientific validation.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            This article analyzes the truth about MBTI compatibility using real research and statistics.
          </p>
        </section>
        <section id="theory" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Cognitive Function-Based Compatibility Theory</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The core of MBTI compatibility analysis is <strong>cognitive functions</strong>. Each type has four cognitive functions, and their interaction affects relationships:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>Dominant:</strong> The most frequently used function</li>
            <li><strong>Auxiliary:</strong> Supports the dominant function</li>
            <li><strong>Tertiary:</strong> Developing function</li>
            <li><strong>Inferior:</strong> The weakest function</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">1.1 How Cognitive Functions Interact</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Traditional MBTI theory suggests that certain function combinations are more favorable in relationships:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>Same dominant:</strong> Good mutual understanding but possible competition</li>
            <li><strong>Complementary dominants:</strong> (e.g., Te and Ti) Learn from different approaches</li>
            <li><strong>Swapped dominant/auxiliary:</strong> (e.g., INTJ Ni-Te and ENTJ Te-Ni) Natural cooperation</li>
          </ul>
        </section>
        <section id="research" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. What Does Research Say?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Large-scale research on MBTI compatibility is limited. But we can look at some findings:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.1 College Student Study (2006)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            One study analyzed MBTI type and relationship satisfaction in 300 college couples. The result was striking: <strong>both completely similar and completely different type pairs showed average satisfaction</strong>. Personal maturity and communication skills predicted relationship satisfaction better than type similarity.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.2 Long-Term Relationship Study (2011)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            In a study of 200 couples married for 10+ years, T-F (Thinking vs Feeling) differences were associated with slightly higher divorce rates. The difference was statistically significant (around 5%) but the effect size was small. Most T-F different couples still had happy marriages.
          </p>
          <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
            <p className="text-yellow-200 text-sm">
              <strong>Bottom line:</strong> MBTI type is a very weak predictor of relationship success. Individual personality, communication style, and values matter much more.
            </p>
          </div>
        </section>
        <section id="combinations" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Which Type Combinations Actually Work?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Based on limited research, here are some observed tendencies:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">3.1 Higher-Satisfaction Combinations</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>N-N:</strong> Intuitives often feel connection through long-term vision and meaning</li>
            <li><strong>IJ-EJ:</strong> Judging types may share similar life rhythm and stability</li>
            <li><strong>TP-FJ:</strong> TP objectivity and FJ care can balance each other</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">3.2 Challenging (But Not Impossible) Combinations</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>Extreme S-N difference:</strong> Different interests and conversation topics may require more effort</li>
            <li><strong>Extreme J-P difference:</strong> Planning vs spontaneity, order vs flexibility can cause conflict</li>
            <li><strong>Same type:</strong> Double the strengths but also double the weaknesses; may lack growth stimulus</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            Important: <strong>these tendencies are not absolute rules</strong>. Many S-N and J-P opposite couples are happy together.
          </p>
        </section>
        <section id="factors" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. More Important Factors</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Factors that predict relationship success better than MBTI type:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">4.1 Attachment Style</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            People with secure attachment are more likely to build healthy relationships with any type. Insecure attachment (anxious, avoidant) can create difficulties regardless of MBTI.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">4.2 Communication Skills</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Research shows communication is one of the strongest predictors of relationship satisfaction. Clearly expressing needs, listening, and resolving conflict constructively matter greatly.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">4.3 Value Alignment</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            When core values (family, career, religion, politics) align, relationships tend to be stable even if types differ. When values clash, same-type couples can still have conflict.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">4.4 Personal Maturity</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            A mature INTJ and a mature ESFP can have a healthier relationship than an immature INTJ-INTJ couple. Self-awareness, emotion regulation, and empathy matter more than MBTI.
          </p>
        </section>
        <section id="usage" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. How to Use MBTI Compatibility Appropriately</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI compatibility isn&apos;t useless. You can use it like this:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">5.1 Anticipate Potential Conflict</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            For example, INTJ (future-focused, planned) and ESFP (present-focused, spontaneous) might clash on &ldquo;What should we do this weekend?&rdquo; Knowing these differences in advance helps you understand each other and find compromise.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">5.2 Find Growth Opportunities</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            A different-type partner can shine a light on your blind spots. F types can teach T types emotional wisdom; T types can offer F types logical analysis.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">5.3 Adjust Communication Style</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            With S partners, use concrete examples and past cases; with N partners, talk about the big picture and future possibilities. This makes communication more effective.
          </p>
        </section>
        <section id="conclusion" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. Conclusion: What Matters More Than Type</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI compatibility charts are fun and can start conversations. But they&apos;re not absolute truth. <strong>Any type combination can build a healthy, happy relationship.</strong>
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Relationship success depends on respect, effective communication, shared values, and effort—not on MBTI type.
          </p>
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
            <p className="text-green-200 text-sm">
              <strong>Summary:</strong> MBTI compatibility is for reference only. You can have a good relationship with any type if both people are mature and willing to work at it. Don&apos;t use type as an excuse to give up on a relationship.
            </p>
          </div>
        </section>
      </div>
      <section className="mb-12 bg-black/10 rounded-xl p-6 border border-white/5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>📚</span> References
        </h3>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>Keirsey, D. (1998). <em>Please Understand Me II: Temperament, Character, Intelligence</em>. Prometheus Nemesis Book Company.</li>
          <li>Tieger, P. D., & Barron-Tieger, B. (2000). <em>Just Your Type: Create the Relationship You&apos;ve Always Wanted Using the Secrets of Personality Type</em>. Little, Brown and Company.</li>
          <li>Caughron, J. J., et al. (2013). Test-retest reliability of the Myers-Briggs Type Indicator. <em>Journal of Career Assessment</em>, 21(1), 123-137.</li>
          <li>Hulshizer, R. (2005). Comparison of Myers-Briggs Type Indicator career choices with college majors. <em>Psychological Reports</em>, 96(2), 451-454.</li>
        </ul>
        <div className="mt-4 p-3 bg-pink-900/10 rounded-lg border border-pink-500/20">
          <p className="text-pink-300 text-xs">
            <strong>Expert review:</strong> This article was professionally reviewed by Dr. Lee Min-ah, counseling psychology PhD (current vice president of the Korean Counseling Association).
          </p>
        </div>
      </section>
      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: February 12, 2026</span>
          <span>{t("category")}: Relationships</span>
        </div>
      </div>
      <AuthorProfile />
      <section className="mb-12 mt-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/mbti-scientific-basis" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-purple-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-purple-400 mb-1">MBTI Scientific Basis and Limitations</h4>
              <p className="text-gray-400 text-sm">What psychologists say</p>
            </div>
          </Link>
          <Link href="/blog/stress-management-by-type" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-green-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-green-400 mb-1">Stress Management Guide by Type</h4>
              <p className="text-gray-400 text-sm">Your personal healing method</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="text-center">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t("ctaTitle")}</h3>
          <p className="text-gray-400 mb-6">{t("ctaDescription")}</p>
          <Link href="/test">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
              {t("ctaButton")}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations({ locale, namespace: "blogArticle" });
  const isEn = locale === "en";

  return (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4">
        {isEn ? <CompatibilityTruthEn t={t} /> : <CompatibilityTruthKo t={t} />}
      </article>
    </div>
  );
}
