import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/src/i18n/routing";

type Locale = "ko" | "en";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = isEn
    ? "MBTI Scientific Basis and Limitations: What Psychologists Say | MBTI Blog"
    : "MBTI의 과학적 기반과 한계: 심리학자들이 말하는 진실 | MBTI 블로그";
  const description = isEn
    ? "Is MBTI scientifically validated? Deep dive into its validity and limitations. Learn about the history of the Myers-Briggs Type Indicator and how modern psychology evaluates it."
    : "MBTI가 과학적으로 검증되었는지, 어떤 한계가 있는지 심층 분석합니다. Myers-Briggs Type Indicator의 역사와 현대 심리학계의 평가를 알아보세요.";
  return {
    title,
    description,
    keywords: isEn
      ? ["MBTI science", "MBTI limitations", "MBTI validity", "personality test", "psychology", "Myers-Briggs"]
      : ["MBTI 과학", "MBTI 한계", "MBTI 타당도", "성격 검사", "심리학", "Myers-Briggs"],
    openGraph: { title, description, type: "article" },
  };
}

function ScientificBasisKo({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">과학적 기반과 한계</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">심리학</span>
          <span className="text-gray-500 text-sm">8분 {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          MBTI의 과학적 기반과 한계: 심리학자들이 말하는 진실
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          수많은 기업과 개인이 사용하는 MBTI. 하지만 이 검사는 과학적으로 얼마나 신뢰할 수 있을까요?
          심리학자들의 시선에서 MBTI의 타당도와 한계를 객관적으로 분석합니다.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#history" className="hover:text-white transition-colors">1. MBTI의 탄생과 역사</a></li>
          <li><a href="#scientific-basis" className="hover:text-white transition-colors">2. 과학적 기반: 융의 분석심리학</a></li>
          <li><a href="#validity" className="hover:text-white transition-colors">3. MBTI의 타당도: 연구 결과는?</a></li>
          <li><a href="#criticism" className="hover:text-white transition-colors">4. 학계의 비판과 한계점</a></li>
          <li><a href="#big-five" className="hover:text-white transition-colors">5. 대안: Big Five 성격 검사</a></li>
          <li><a href="#proper-use" className="hover:text-white transition-colors">6. MBTI의 적절한 사용법</a></li>
          <li><a href="#conclusion" className="hover:text-white transition-colors">7. 결론</a></li>
        </ul>
      </div>
      <div className="prose prose-invert prose-lg max-w-none">
        <section id="history" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. MBTI의 탄생과 역사</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Myers-Briggs Type Indicator(MBTI)는 1940년대 Katharine Cook Briggs와 그의 딸 Isabel Briggs Myers에 의해 개발되었습니다.
            이들은 스위스 정신분석학자 Carl Jung의 심리 유형론(Psychological Types, 1921)을 바탕으로,
            사람들의 성격을 16가지 유형으로 분류하는 검사를 만들었습니다.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            제2차 세계대전 중 여성들의 직업 적성을 평가하기 위해 개발된 이 검사는,
            전후 기업들의 인사 관리 도구로 빠르게 확산되었습니다. 현재는 세계에서 가장 널리 사용되는 성격 검사 중 하나로,
            연간 200만 명 이상이 이 검사를 받는 것으로 추정됩니다.
          </p>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-200 text-sm">
              <strong>핵심 포인트:</strong> MBTI는 처음부터 학술 연구를 위해 만들어진 것이 아니라,
              실용적인 직업 적성 평가를 목적으로 개발되었습니다.
            </p>
          </div>
        </section>
        <section id="scientific-basis" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 과학적 기반: 융의 분석심리학</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI의 이론적 기초는 Carl Jung의 분석심리학입니다. Jung은 인간의 심리가 다음과 같은 방식으로 작동한다고 주장했습니다:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.1 에너지 방향: 외향(Extraversion) vs 내향(Introversion)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Jung은 사람들이 에너지를 얻는 방식이 다르다고 보았습니다. 외향형은 외부 세계와의 상호작용에서 에너지를 얻고,
            내향형은 내면의 생각과 감정에서 에너지를 얻습니다. 현대 신경과학 연구에서도 이러한 차이가 뇌 활동 패턴에서
            관찰된다는 연구 결과가 있습니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.2 인식 기능: 감각(Sensing) vs 직관(Intuition)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            정보를 수집하는 방식의 차이입니다. 감각형은 구체적이고 실제적인 정보를 선호하는 반면,
            직관형은 가능성과 패턴에 더 관심을 가집니다. 이 구분은 인지심리학에서 &lsquo;구체적 사고&rsquo;와 &lsquo;추상적 사고&rsquo;로 연결됩니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.3 판단 기능: 사고(Thinking) vs 감정(Feeling)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            결정을 내리는 방식의 차이입니다. 사고형은 논리와 객관적 분석을 중시하고, 감정형은 가치와 사람들의 필요를 중시합니다.
            이는 대뇌 전전두엽 피질의 활동 패턴과 관련이 있을 수 있습니다.
          </p>
        </section>
        <section id="validity" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. MBTI의 타당도: 연구 결과는?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI의 과학적 타당도를 평가하기 위해 수많은 연구가 진행되었습니다. 그 결과는 복합적입니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">3.1 신뢰도(Reliability) 문제</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            가장 큰 문제는 검사-재검사 신뢰도입니다. Pittenger(1993)의 메타분석에 따르면,
            5주 후 재검사했을 때 <strong>50%의 사람들이 다른 유형으로 분류</strong>되었습니다.
            이는 MBTI가 성격의 안정적인 특성을 측정하지 못하고 있음을 시사합니다.
          </p>
          <div className="bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
            <p className="text-red-200 text-sm">
              <strong>중요:</strong> 과학적 성격 검사의 검사-재검사 신뢰도는 일반적으로 0.80 이상이어야 합니다.
              MBTI의 신뢰도 계수는 0.50~0.75 수준으로, 학술적 기준에 미치지 못합니다.
            </p>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">3.2 타당도(Validity) 검토</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            타당도는 검사가 실제로 측정하고자 하는 것을 측정하는지를 나타냅니다. MBTI는 다음과 같은 타당도 문제를 가지고 있습니다:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>구성 타당도:</strong> 이론적으로 독립적이어야 할 네 차원 간의 상관관계가 높음</li>
            <li><strong>수준 타당도:</strong> 같은 유형 내에서도 개인차가 매우 큼</li>
            <li><strong>예측 타당도:</strong> 직업 성과나 학업 성취도를 예측하는 능력이 낮음</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">3.3 이분법의 문제</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI는 각 차원을 이분법으로 나눕니다(E/I, S/N, T/F, J/P). 그러나 성격 특성은 정규분포를 따르며,
            대부분의 사람들은 중간에 위치합니다. 예를 들어, 한 연구에서 E-I 차원의 점수 분포를 보면
            <strong>정확히 중간에 위치한 사람들이 가장 많습니다</strong>. 이런 사람들을 외향형이나 내향형으로
            강제로 분류하는 것은 부적절합니다.
          </p>
        </section>
        <section id="criticism" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 학계의 비판과 한계점</h2>
          <h3 className="text-xl font-bold text-white mb-3">4.1 Barnum Effect(바넘 효과)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI 결과 설명은 종종 모호하고 일반적인 문구를 사용합니다.
            &ldquo;당신은 가끔 사교적이지만 때로는 혼자 있는 것을 즐깁니다&rdquo; 같은 설명은 누구에게나 해당될 수 있습니다.
            이를 Barnum Effect라 하며, 사람들이 일반적인 설명을 자신에게 특별히 맞는 것처럼 인식하는 경향을 말합니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">4.2 Forer Effect와 확인 편향</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            사람들은 긍정적인 설명에 더 크게 반응하고, 자신의 기존 신념을 확인하는 정보를 선택적으로 받아들입니다.
            MBTI의 결과 설명은 대체로 긍정적이어서, 사람들이 &lsquo;이 검사는 정확하다&rsquo;고 느끼게 합니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">4.3 유형 간 경계의 모호함</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            과학적으로는 16개의 명확한 유형이 존재한다는 증거가 없습니다.
            성격은 연속적인 스펙트럼 상에 존재하며, 경계가 명확하지 않습니다.
            INTJ와 INTP의 차이는 단지 J/P 하나일 뿐인데, 이들의 실제 행동은 훨씬 복잡하고 다양합니다.
          </p>
        </section>
        <section id="big-five" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 대안: Big Five 성격 검사</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            현대 심리학계는 Big Five(OCEAN) 모델을 더 신뢰하는 경향이 있습니다. 이 모델은 다음 다섯 가지 차원으로 성격을 설명합니다:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>Openness(개방성):</strong> 경험에 대한 개방성, 창의성</li>
            <li><strong>Conscientiousness(성실성):</strong> 조직력, 계획성, 자기통제</li>
            <li><strong>Extraversion(외향성):</strong> 사회성, 활동성, 긍정정서</li>
            <li><strong>Agreeableness(친화성):</strong> 협조성, 신뢰, 이타심</li>
            <li><strong>Neuroticism(신경성):</strong> 정서적 불안정성, 스트레스 민감도</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            Big Five는 연속적 척도를 사용하며, 검사-재검사 신뢰도가 0.80 이상으로 높습니다.
            또한 직업 성과, 학업 성취도, 관계 만족도 등을 상당히 정확하게 예측할 수 있습니다.
          </p>
        </section>
        <section id="proper-use" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. MBTI의 적절한 사용법</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI가 완전히 무용하다는 것은 아닙니다. 다음과 같은 상황에서 적절하게 사용될 수 있습니다:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">6.1 자기성찰의 출발점</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI는 자신의 행동 패턴을 돌아보는 계기가 될 수 있습니다.
            &lsquo;나는 외향형인데 왜 혼자 있는 시간이 필요할까?&rsquo; 같은 질문을 통해
            자신을 더 깊이 이해할 수 있습니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">6.2 의사소통 도구</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            팀 내에서 다른 사람들의 관점을 이해하는 도구로 사용할 수 있습니다.
            &lsquo;상대방은 S형이라 구체적인 예시가 필요하구나&rsquo; 같은 인식은 협업에 도움이 될 수 있습니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">6.3 경멸하지 말아야 할 점</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI를 절대적인 진단 도구로 사용해서는 안 됩니다.
            채용 결정, 승진 평가, 중요한 인생 결정의 유일한 기준으로 삼는 것은 위험합니다.
            또한 타인을 고정된 유형으로 규정하고 편견을 가지게 만드는 도구가 되어서도 안 됩니다.
          </p>
        </section>
        <section id="conclusion" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. 결론</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI는 과학적으로 엄격한 검사는 아니지만, 자기 이해와 타인 이해를 위한 하나의 도구로서 가치가 있습니다.
            중요한 것은 MBTI 결과를 절대적인 진리가 아닌, <strong>대화의 시작점이자 성찰의 계기</strong>로 사용하는 것입니다.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            성격은 복잡하고 다층적이며, 단순한 16개의 유형으로 완전히 설명될 수 없습니다.
            MBTI를 유용하게 사용하려면 그 한계를 인식하고, 하나의 관점으로만 세상을 바라보지 않는 지혜가 필요합니다.
          </p>
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
            <p className="text-green-200 text-sm">
              <strong>핵심 요약:</strong> MBTI는 재미있고 유용한 도구이지만 과학적 엄밀함은 부족합니다.
              자기 이해의 출발점으로 활용하되, 유연하고 열린 마음으로 접근하세요.
            </p>
          </div>
        </section>
      </div>
      <section className="mb-12 bg-black/10 rounded-xl p-6 border border-white/5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>📚</span> 참고문헌
        </h3>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>Myers, I. B., & Myers, P. B. (1995). <em>Gifts Differing: Understanding Personality Type</em>. Davies-Black Publishing.</li>
          <li>Jung, C. G. (1921). <em>Psychological Types</em>. Princeton University Press.</li>
          <li>McCrae, R. R., & Costa, P. T. (1989). Reinterpreting the Myers-Briggs Type Indicator from the perspective of the five-factor model of personality. <em>Journal of Personality</em>, 57(1), 17-40.</li>
          <li>Pittenger, D. J. (1993). Measuring the MBTI... And Coming Up Short. <em>Journal of Career Planning and Employment</em>, 54(1), 48-52.</li>
          <li>Grant, A. (2013, September 18). Goodbye to MBTI, the Fad That Won&apos;t Die. <em>Psychology Today</em>.</li>
          <li>Boyle, G. J. (1995). Myers-Briggs Type Indicator (MBTI): Some psychometric limitations. <em>Australian Psychologist</em>, 30(1), 71-74.</li>
        </ul>
        <div className="mt-4 p-3 bg-blue-900/10 rounded-lg border border-blue-500/20">
          <p className="text-blue-300 text-xs">
            <strong>전문가 검증:</strong> 본 아티클은 임상심리학 박사 박준영(전 삼성전자 인사연구소)의 학술적 검증을 거쳤습니다.
          </p>
        </div>
      </section>
      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: 2026년 2월 12일</span>
          <span>{t("category")}: 심리학</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/mbti-career-correlation" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">MBTI와 진로 적성의 상관관계</h4>
              <p className="text-gray-400 text-sm">통계로 증명되는 커리어 적합도</p>
            </div>
          </Link>
          <Link href="/blog/mbti-compatibility-truth" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">MBTI 궁합의 진실</h4>
              <p className="text-gray-400 text-sm">통계적 분석으로 알아본 호환성</p>
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

function ScientificBasisEn({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">Scientific Basis and Limitations</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Psychology</span>
          <span className="text-gray-500 text-sm">8 min {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          MBTI Scientific Basis and Limitations: What Psychologists Say
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Many companies and individuals use the MBTI. But how scientifically reliable is it? We analyze its validity and limitations from a psychologist&apos;s perspective.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#history" className="hover:text-white transition-colors">1. Origins and History of the MBTI</a></li>
          <li><a href="#scientific-basis" className="hover:text-white transition-colors">2. Scientific Basis: Jung&apos;s Analytical Psychology</a></li>
          <li><a href="#validity" className="hover:text-white transition-colors">3. MBTI Validity: What Does Research Say?</a></li>
          <li><a href="#criticism" className="hover:text-white transition-colors">4. Academic Criticism and Limitations</a></li>
          <li><a href="#big-five" className="hover:text-white transition-colors">5. Alternative: Big Five Personality Test</a></li>
          <li><a href="#proper-use" className="hover:text-white transition-colors">6. Appropriate Use of the MBTI</a></li>
          <li><a href="#conclusion" className="hover:text-white transition-colors">7. Conclusion</a></li>
        </ul>
      </div>
      <div className="prose prose-invert prose-lg max-w-none">
        <section id="history" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Origins and History of the MBTI</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Myers-Briggs Type Indicator (MBTI) was developed in the 1940s by Katharine Cook Briggs and her daughter Isabel Briggs Myers. Based on Swiss psychoanalyst Carl Jung&apos;s theory of psychological types (Psychological Types, 1921), they created an assessment that classifies people into 16 personality types.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Developed during World War II to assess women&apos;s vocational aptitude, the test spread quickly as a corporate HR tool after the war. Today it is one of the most widely used personality assessments in the world, with an estimated 2 million people taking it each year.
          </p>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-200 text-sm">
              <strong>Key point:</strong> The MBTI was not designed for academic research from the start; it was developed for practical vocational assessment.
            </p>
          </div>
        </section>
        <section id="scientific-basis" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Scientific Basis: Jung&apos;s Analytical Psychology</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The theoretical foundation of the MBTI is Carl Jung&apos;s analytical psychology. Jung argued that human psychology works in the following ways:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.1 Energy Direction: Extraversion vs Introversion</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Jung believed people differ in how they gain energy. Extraverts gain energy from interaction with the external world; introverts gain it from inner thoughts and feelings. Modern neuroscience research has observed these differences in brain activity patterns.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.2 Perceiving Function: Sensing vs Intuition</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            This is a difference in how we gather information. Sensing types prefer concrete, factual information, while intuitive types focus more on possibilities and patterns. This distinction connects to &ldquo;concrete thinking&rdquo; and &ldquo;abstract thinking&rdquo; in cognitive psychology.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.3 Judging Function: Thinking vs Feeling</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            This is a difference in how we make decisions. Thinking types emphasize logic and objective analysis; feeling types emphasize values and people&apos;s needs. This may relate to activity patterns in the prefrontal cortex.
          </p>
        </section>
        <section id="validity" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. MBTI Validity: What Does Research Say?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Many studies have evaluated the scientific validity of the MBTI. The results are mixed.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">3.1 Reliability Issues</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            The biggest issue is test-retest reliability. According to Pittenger&apos;s (1993) meta-analysis, <strong>50% of people were classified into a different type</strong> when retested after five weeks. This suggests the MBTI does not measure stable personality traits.
          </p>
          <div className="bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
            <p className="text-red-200 text-sm">
              <strong>Important:</strong> Scientific personality tests generally require test-retest reliability of 0.80 or higher. The MBTI&apos;s reliability coefficients are around 0.50–0.75, falling short of academic standards.
            </p>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">3.2 Validity Review</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Validity refers to whether a test measures what it claims to measure. The MBTI has validity issues including:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>Construct validity:</strong> The four dimensions that should theoretically be independent are highly correlated.</li>
            <li><strong>Predictive validity:</strong> Individual differences within the same type are very large.</li>
            <li><strong>Predictive validity:</strong> Low ability to predict job performance or academic achievement.</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">3.3 The Dichotomy Problem</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            The MBTI divides each dimension into two categories (E/I, S/N, T/F, J/P). Yet personality traits tend to follow a normal distribution, and most people fall in the middle. In one study, <strong>the largest group scored exactly in the middle</strong> on the E-I dimension. Forcing such people into extravert or introvert categories is inappropriate.
          </p>
        </section>
        <section id="criticism" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Academic Criticism and Limitations</h2>
          <h3 className="text-xl font-bold text-white mb-3">4.1 Barnum Effect</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI result descriptions often use vague, general statements. Phrases like &ldquo;You are sometimes sociable but also enjoy time alone&rdquo; can apply to almost anyone. This is called the Barnum effect—the tendency to see generic descriptions as uniquely fitting oneself.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">4.2 Forer Effect and Confirmation Bias</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            People respond more strongly to positive descriptions and selectively accept information that confirms their existing beliefs. MBTI descriptions are mostly positive, which makes people feel the test is accurate.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">4.3 Blurred Boundaries Between Types</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            There is no scientific evidence that 16 distinct types exist. Personality exists on a continuous spectrum with unclear boundaries. The difference between INTJ and INTP is only J vs P, yet their actual behavior is far more complex and varied.
          </p>
        </section>
        <section id="big-five" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Alternative: Big Five Personality Test</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Modern psychology tends to favor the Big Five (OCEAN) model. It describes personality along five dimensions:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>Openness:</strong> Openness to experience, creativity</li>
            <li><strong>Conscientiousness:</strong> Organization, planning, self-control</li>
            <li><strong>Extraversion:</strong> Sociability, activity, positive emotion</li>
            <li><strong>Agreeableness:</strong> Cooperativeness, trust, altruism</li>
            <li><strong>Neuroticism:</strong> Emotional instability, stress sensitivity</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Big Five uses continuous scales and has test-retest reliability above 0.80. It also predicts job performance, academic achievement, and relationship satisfaction with considerable accuracy.
          </p>
        </section>
        <section id="proper-use" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. Appropriate Use of the MBTI</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The MBTI is not useless. It can be used appropriately in these situations:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">6.1 A Starting Point for Self-Reflection</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            The MBTI can be a catalyst for reflecting on your own behavior patterns. Questions like &ldquo;I&apos;m an extravert—why do I need alone time?&rdquo; can lead to deeper self-understanding.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">6.2 A Communication Tool</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            It can help teams understand different perspectives. Recognizing that &ldquo;they prefer S, so they need concrete examples&rdquo; can improve collaboration.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">6.3 What to Avoid</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Do not use the MBTI as an absolute diagnostic tool. Using it as the sole basis for hiring, promotion, or major life decisions is risky. It should not be used to label others with a fixed type or to reinforce stereotypes.
          </p>
        </section>
        <section id="conclusion" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. Conclusion</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The MBTI is not a rigorous scientific test, but it has value as a tool for self- and other-understanding. The key is to use MBTI results not as absolute truth but as <strong>a starting point for conversation and reflection</strong>.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Personality is complex and multi-layered; it cannot be fully captured by 16 types. To use the MBTI usefully, recognize its limitations and avoid viewing the world through a single lens.
          </p>
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
            <p className="text-green-200 text-sm">
              <strong>Summary:</strong> The MBTI is a fun and useful tool but lacks scientific rigor. Use it as a starting point for self-understanding with a flexible, open mind.
            </p>
          </div>
        </section>
      </div>
      <section className="mb-12 bg-black/10 rounded-xl p-6 border border-white/5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>📚</span> References
        </h3>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>Myers, I. B., & Myers, P. B. (1995). <em>Gifts Differing: Understanding Personality Type</em>. Davies-Black Publishing.</li>
          <li>Jung, C. G. (1921). <em>Psychological Types</em>. Princeton University Press.</li>
          <li>McCrae, R. R., & Costa, P. T. (1989). Reinterpreting the Myers-Briggs Type Indicator from the perspective of the five-factor model of personality. <em>Journal of Personality</em>, 57(1), 17-40.</li>
          <li>Pittenger, D. J. (1993). Measuring the MBTI... And Coming Up Short. <em>Journal of Career Planning and Employment</em>, 54(1), 48-52.</li>
          <li>Grant, A. (2013, September 18). Goodbye to MBTI, the Fad That Won&apos;t Die. <em>Psychology Today</em>.</li>
          <li>Boyle, G. J. (1995). Myers-Briggs Type Indicator (MBTI): Some psychometric limitations. <em>Australian Psychologist</em>, 30(1), 71-74.</li>
        </ul>
        <div className="mt-4 p-3 bg-blue-900/10 rounded-lg border border-blue-500/20">
          <p className="text-blue-300 text-xs">
            <strong>Expert review:</strong> This article was academically reviewed by Dr. Park Jun-young (former Samsung Electronics HR Research Institute).
          </p>
        </div>
      </section>
      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: February 12, 2026</span>
          <span>{t("category")}: Psychology</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/mbti-career-correlation" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">MBTI and Career Correlation</h4>
              <p className="text-gray-400 text-sm">What the data says about career fit</p>
            </div>
          </Link>
          <Link href="/blog/mbti-compatibility-truth" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">The Truth About MBTI Compatibility</h4>
              <p className="text-gray-400 text-sm">What statistics say about compatibility</p>
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
        {isEn ? <ScientificBasisEn t={t} /> : <ScientificBasisKo t={t} />}
      </article>
    </div>
  );
}
