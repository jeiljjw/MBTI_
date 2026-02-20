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
    ? "Complete INFJ Guide: Everything About the Advocate Type | MBTI Blog"
    : "INFJ 완벽 가이드: 제창자 유형의 모든 것 | MBTI 블로그";
  const description = isEn
    ? "INFJ (Advocate) is one of the rarest personality types. Learn about this type's traits, strengths, weaknesses, and how to succeed in relationships and career."
    : "INFJ(제창자)는 가장 희귀한 성격 유형 중 하나입니다. 이 유형의 특징, 강점, 약점, 그리고 인간관계와 커리어에서 성공하는 방법을 소개합니다.";
  return {
    title,
    description,
    keywords: isEn
      ? ["INFJ", "INFJ guide", "Advocate", "INFJ strengths", "INFJ career"]
      : ["INFJ", "INFJ 완벽 가이드", "제창자", "INFJ 강점", "INFJ 커리어", "INFJ 관계"],
    openGraph: { title, description, type: "article" },
  };
}

function InfjContentKo({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">INFJ 완벽 가이드</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">심리학</span>
          <span className="text-gray-500 text-sm">9분 {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          INFJ 완벽 가이드: 제창자 유형의 모든 것
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          가장 희귀하고 신비한 성격 유형 INFJ(제창자). 이 유형의 독특한 특성, 강점과 약점,
          그리고 인간관계와 커리어에서 성공하는 방법을 심층적으로 다룹니다.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
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
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.2 강력한 직관</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            구체적인 현실보다 가능성과 미래에 초점을 맞춥니다.
            이들은 장기적인 비전을 가지고 있으며, 그 비전을 현실로 만들기 위해 노력합니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.3 깊은 공감 능력</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            타인의 감정에 진정으로 공감하는 능력이 있습니다. 이 때문에 INFJ는 좋은 상담사나 치료사가 됩니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.4 강력한 가치관</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            INFJ는 명확한 내적 가치 체계를 가지고 있으며, 양심에 반하는 일은 하기 어렵습니다.
          </p>
        </section>
        <section id="strengths" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. INFJ의 강점</h2>
          <p className="text-gray-300 leading-relaxed mb-4">INFJ는 여러 방면에서 독보적인 강점을 가지고 있습니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">3.1 창의적 사고력</h3>
          <p className="text-gray-300 leading-relaxed mb-4">복잡한 문제를 창의적인 해결방안으로 해결합니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">3.2 헌신적인 우정</h3>
          <p className="text-gray-300 leading-relaxed mb-4">소수의 깊은 관계를 선호하며, 한 번 형성된 관계에서는 매우 헌신적입니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">3.3 격려하는 힘</h3>
          <p className="text-gray-300 leading-relaxed mb-4">타인의 잠재력을 보고 더 나은 버전이 되도록 격려합니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">3.4 결단력</h3>
          <p className="text-gray-300 leading-relaxed mb-4">목표를 정하면 헌신하며, 장기적인 비전을 위해 인내심 있게 노력합니다.</p>
        </section>
        <section id="weaknesses" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. INFJ의 약점과 도전</h2>
          <p className="text-gray-300 leading-relaxed mb-4">모든 유형처럼 INFJ에도 약점이 있습니다. 이를 인식하고 극복하는 것이 성장의 열쇠입니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">4.1 극단적 완벽주의</h3>
          <p className="text-gray-300 leading-relaxed mb-4">완벽주의는 동력이 될 수 있지만, 과도한 스트레스와 자기비난의 원인이 됩니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">4.2 방어적인 태도</h3>
          <p className="text-gray-300 leading-relaxed mb-4">비판적 피드백에 민감하고, 감정을 드러내는 것을 어려워합니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">4.3 번아웃</h3>
          <p className="text-gray-300 leading-relaxed mb-4">타인의 문제에 지나치게 공감하면 정서적 고갈에 빠질 수 있습니다. 자기 돌봄이 중요합니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">4.4 현실과의 괴리</h3>
          <p className="text-gray-300 leading-relaxed mb-4">이상주의적 성향으로 현실에 실망하기도 합니다. 비전과 현실 사이의 괴리를 관리하는 것이 과제입니다.</p>
        </section>
        <section id="relationships" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 인간관계에서 INFJ</h2>
          <p className="text-gray-300 leading-relaxed mb-4">INFJ는 깊은 정신적 연결을 추구하며, 사랑에 빠지면 매우 헌신적입니다.</p>
          <p className="text-gray-300 leading-relaxed mb-4">소수의 친한 친구 관계를 소중히 여기며, ENFP, INFP, INTJ와 가장 잘 맞습니다.</p>
        </section>
        <section id="career" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. INFJ와 커리어</h2>
          <p className="text-gray-300 leading-relaxed mb-4">적합한 직업: 상담심리사, 작가, 비영리 활동가, 교육자, UX/UI 디자이너, 인사·HR, 사회복지사 등.</p>
          <p className="text-gray-300 leading-relaxed mb-4">지나치게 경쟁적인 조직 문화나 반복 업무는 피하는 것이 좋습니다. 비전에 부합하는 직장에서 타인을 돕는 일에 참여할 때 만족이 큽니다.</p>
        </section>
        <section id="growth" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. 성장을 위한 조언</h2>
          <div className="space-y-4">
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">1. 자기 돌봄을 우선하세요</p>
              <p className="text-gray-300 text-sm">정기적인 휴식과 자기 시간을 확보하세요.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">2. 완벽주의를 내려놓으세요</p>
              <p className="text-gray-300 text-sm">&ldquo;좋은 것&rdquo;이 &ldquo;완벽한 것&rdquo;의 적입니다.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">3. 경계를 설정하세요</p>
              <p className="text-gray-300 text-sm">자신의 한계를 인식하고 &ldquo;아니오&rdquo;라고 말하는 것도 배우세요.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">4. 현실적 기대를 가지세요</p>
              <p className="text-gray-300 text-sm">타인과 세계를 있는 그대로 수용하면서도 희망을 놓지 마세요.</p>
            </div>
          </div>
        </section>
      </div>
      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: 2026년 2월 15일</span>
          <span>{t("category")}: 심리학</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/mbti-scientific-basis" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">MBTI의 과학적 기반과 한계</h4>
              <p className="text-gray-400 text-sm">심리학자들이 말하는 진실</p>
            </div>
          </Link>
          <Link href="/blog/stress-management-by-type" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">각 유형별 스트레스 관리 가이드</h4>
              <p className="text-gray-400 text-sm">나만의 힐링법</p>
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

function InfjContentEn({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">Complete INFJ Guide</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Psychology</span>
          <span className="text-gray-500 text-sm">9 min {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          The Complete INFJ Guide: Everything About the Advocate Type
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          INFJ (Advocate) is one of the rarest and most mysterious personality types. This guide covers their unique traits, strengths and weaknesses, and how to succeed in relationships and career.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#overview" className="hover:text-white transition-colors">1. What is INFJ?</a></li>
          <li><a href="#characteristics" className="hover:text-white transition-colors">2. Core Characteristics</a></li>
          <li><a href="#strengths" className="hover:text-white transition-colors">3. INFJ Strengths</a></li>
          <li><a href="#weaknesses" className="hover:text-white transition-colors">4. Weaknesses and Challenges</a></li>
          <li><a href="#relationships" className="hover:text-white transition-colors">5. INFJ in Relationships</a></li>
          <li><a href="#career" className="hover:text-white transition-colors">6. INFJ and Career</a></li>
          <li><a href="#growth" className="hover:text-white transition-colors">7. Tips for Growth</a></li>
        </ul>
      </div>
      <div className="prose prose-invert prose-lg max-w-none">
        <section id="overview" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. What is INFJ?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            INFJ is one of the 16 personality types in the Myers-Briggs Type Indicator (MBTI), often called the &ldquo;Advocate.&rdquo; It is one of the rarest types, with only about 1.5% of the population belonging to it.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            INFJ is a combination of four psychological preferences:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>I (Introversion):</strong> Draw energy from the inner world</li>
            <li><strong>N (Intuition):</strong> Prefer possibilities and patterns over concrete facts</li>
            <li><strong>F (Feeling):</strong> Value relationships and values over pure logic</li>
            <li><strong>J (Judging):</strong> Prefer structure and order</li>
          </ul>
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
            <p className="text-green-200 text-sm">
              <strong>Key point:</strong> INFJs are idealists with strong inner convictions. They see potential in others, encourage them, and dedicate themselves to making the world a better place.
            </p>
          </div>
        </section>
        <section id="characteristics" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Core Characteristics</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            INFJs have several distinctive traits. Their core tendencies include:
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.1 Deep Intuition</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            INFJs are skilled at reading others&apos; emotions and motivations. They unconsciously pick up on subtle emotional shifts and unspoken meanings, often spotting the root cause of problems that others overlook.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.2 Strong Vision</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            They focus on possibilities and the future rather than concrete reality. The saying &ldquo;seeing what isn&apos;t there yet&rdquo; fits INFJs well. They hold long-term visions and work to make them real.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.3 Deep Empathy</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            They genuinely empathize with others&apos; feelings and can feel what someone else is going through as if it were their own. This makes INFJs effective counselors and therapists.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">2.4 Strong Values</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            INFJs have a clear inner value system. These values are not easily shaken, and they find it hard to act against their conscience. This principle can sometimes lead to isolation but also gives them dignity.
          </p>
        </section>
        <section id="strengths" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. INFJ Strengths</h2>
          <p className="text-gray-300 leading-relaxed mb-4">INFJs have unique strengths in many areas:</p>
          <h3 className="text-xl font-bold text-white mb-3">3.1 Creative Thinking</h3>
          <p className="text-gray-300 leading-relaxed mb-4">When solving complex problems, they find creative solutions beyond conventional methods, producing valuable results in art, research, and development.</p>
          <h3 className="text-xl font-bold text-white mb-3">3.2 Devoted Friendship</h3>
          <p className="text-gray-300 leading-relaxed mb-4">They prefer a few deep relationships over many shallow ones. Once a bond is formed, they are highly devoted and loyal, and stand by friends in hard times.</p>
          <h3 className="text-xl font-bold text-white mb-3">3.3 Ability to Encourage</h3>
          <p className="text-gray-300 leading-relaxed mb-4">They are good at seeing others&apos; potential and helping them recognize their own value and become a better version of themselves.</p>
          <h3 className="text-xl font-bold text-white mb-3">3.4 Determination</h3>
          <p className="text-gray-300 leading-relaxed mb-4">Once they set a goal, they commit fully. They have a long-term vision and work patiently to make it a reality.</p>
        </section>
        <section id="weaknesses" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Weaknesses and Challenges</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Like all types, INFJs have weaknesses. Recognizing and overcoming them is key to growth.</p>
          <h3 className="text-xl font-bold text-white mb-3">4.1 Extreme Perfectionism</h3>
          <p className="text-gray-300 leading-relaxed mb-4">They apply high standards to themselves and others. Perfectionism can be motivating but also leads to stress and self-criticism.</p>
          <h3 className="text-xl font-bold text-white mb-3">4.2 Defensiveness</h3>
          <p className="text-gray-300 leading-relaxed mb-4">Strong values can make them sensitive to critical feedback. They may also struggle to show their emotions and handle inner conflict alone.</p>
          <h3 className="text-xl font-bold text-white mb-3">4.3 Burnout</h3>
          <p className="text-gray-300 leading-relaxed mb-4">Over-empathizing with others&apos; problems can lead to emotional exhaustion. Self-care is especially important.</p>
          <h3 className="text-xl font-bold text-white mb-3">4.4 Disconnect from Reality</h3>
          <p className="text-gray-300 leading-relaxed mb-4">Idealistic tendencies can lead to disappointment with reality. Managing the gap between ideal vision and imperfect reality is an ongoing challenge.</p>
        </section>
        <section id="relationships" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. INFJ in Relationships</h2>
          <p className="text-gray-300 leading-relaxed mb-4">INFJs place deep meaning on relationships. They seek deep mental and emotional connection rather than surface attraction, and are highly devoted when in love.</p>
          <p className="text-gray-300 leading-relaxed mb-4">They value a few close friendships over a wide network, and truly empathize with friends while offering practical support. Types that tend to match well with INFJ include ENFP, INFP, and INTJ, where they can find depth and mutual respect.</p>
        </section>
        <section id="career" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. INFJ and Career</h2>
          <p className="text-gray-300 leading-relaxed mb-4">INFJs excel in certain fields. Suitable careers include: counselor, therapist, writer, screenwriter, nonprofit work, educator, professor, UX/UI designer, HR and people development, clergy, and social worker.</p>
          <p className="text-gray-300 leading-relaxed mb-4">Environments to avoid: overly competitive cultures, repetitive work, or roles where people are treated as tools. Choose workplaces that align with your vision and values; INFJs find the greatest satisfaction when helping others and doing meaningful work, and need time to work independently.</p>
        </section>
        <section id="growth" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. Tips for Growth</h2>
          <div className="space-y-4">
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">1. Prioritize self-care</p>
              <p className="text-gray-300 text-sm">When you empathize with others, it&apos;s easy to neglect your own feelings. Make time for regular rest and time alone.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">2. Let go of perfectionism</p>
              <p className="text-gray-300 text-sm">Perfection is an ideal. Chasing it can keep you from taking action. &ldquo;Good enough&rdquo; is the enemy of &ldquo;perfect.&rdquo;</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">3. Set boundaries</p>
              <p className="text-gray-300 text-sm">You don&apos;t have to take responsibility for everyone&apos;s problems. Helping is good, but learn to recognize your limits and say no.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">4. Have realistic expectations</p>
              <p className="text-gray-300 text-sm">Idealism can lead to frustration. Accept people and the world as they are while keeping hope that you can still make a positive impact.</p>
            </div>
          </div>
        </section>
      </div>
      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: February 15, 2026</span>
          <span>{t("category")}: Psychology</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/mbti-scientific-basis" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">The Scientific Basis and Limitations of MBTI</h4>
              <p className="text-gray-400 text-sm">What psychologists say</p>
            </div>
          </Link>
          <Link href="/blog/stress-management-by-type" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">Stress Management Guide by Type</h4>
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
        {isEn ? <InfjContentEn t={t} /> : <InfjContentKo t={t} />}
      </article>
    </div>
  );
}
