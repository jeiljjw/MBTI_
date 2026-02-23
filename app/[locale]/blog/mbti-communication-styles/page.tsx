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
    ? "MBTI Communication Styles: Customized Communication Guide | MBTI Blog"
    : "MBTI 소통 스타일: 유형별 맞춤 커뮤니케이션 가이드 | MBTI 블로그";
  const description = isEn
    ? "Effective communication methods vary by MBTI type. Learn about each type's communication style and conflict prevention strategies."
    : "타인과 효과적으로 소통하는 방법은 MBTI 유형에 따라 다릅니다. 각 유형의 소통 스타일과 갈등 예방법을 알아봅니다.";
  return {
    title,
    description,
    keywords: isEn
      ? ["MBTI communication", "communication style", "interpersonal communication", "conflict prevention"]
      : ["MBTI 소통", "소통 스타일", "대인관계 소통", "갈등 예방"],
    openGraph: { title, description, type: "article" },
  };
}

function CommunicationKo({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">MBTI 소통 스타일</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">관계</span>
          <span className="text-gray-500 text-sm">12분 {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          MBTI 소통 스타일: 유형별 맞춤 커뮤니케이션
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          타인과 효과적으로 소통하는 방법은 MBTI 유형에 따라 다릅니다. 각 유형의 소통 스타일과 갈등 예방법을 알아봅니다.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#overview" className="hover:text-white transition-colors">1. 소통과 MBTI의 관계</a></li>
          <li><a href="#energy" className="hover:text-white transition-colors">2. 에너지 방향: 외향형 vs 내향형</a></li>
          <li><a href="#sensing" className="hover:text-white transition-colors">3. 정보 수집: 감각형 vs 직관형</a></li>
          <li><a href="#decision" className="hover:text-white transition-colors">4. 의사결정: 사고형 vs 감정형</a></li>
          <li><a href="#structure" className="hover:text-white transition-colors">5. 구조 선호: 판단형 vs 인식형</a></li>
          <li><a href="#tips" className="hover:text-white transition-colors">6. 효과적 소통을 위한 전략</a></li>
        </ul>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <section id="overview" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. 소통과 MBTI의 관계</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            소통은 대인관계의 핵심입니다. 같은 내용의 메시지도 전달 방식이 다르면 다르게 받아들여질 수 있습니다. 
            MBTI는 각 유형이 선호하는 소통 방식을 이해하는 데 도움을 줍니다.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            자신의 소통 스타일을 이해하고, 다른 유형과 어떻게 효과적으로 소통할 수 있는지 배우면 
            갈등을 예방하고 더 깊은 유대를 형성할 수 있습니다. 이는 개인적인 관계뿐만 아니라 
            직장, 가족, 친구 관계에서 모두 중요한 기술입니다.
          </p>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-200 text-sm">
              <strong>핵심 포인트:</strong> 효과적인 소통은 자신의 스타일을 아는 것에서 시작합니다. 
              그리고 타인의 스타일을 이해하고 그에 맞게 소통 방식을 조정하는 것이 중요합니다.
            </p>
          </div>
        </section>

        <section id="energy" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 에너지 방향: 외향형 vs 내향형</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">2.1 외향형 (E) 의 소통 특성</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            외향형 사람들은 외부 세계에서 에너지를 얻습니다. 이들은 말로 생각정을 표현하고, 
            대화을 통해 아이디어를 발전시키는 것을 좋아합니다.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>생각을 말로 표현하면서 정리하는 경향</li>
            <li>대화하고 토론하는 것을 통해 영감을 받음</li>
            <li>짧고 직접적인 피드백을 선호</li>
            <li>공개적인 장소에서 소통하는 것을 선호</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>외향형과 소통하는 팁:</strong> 충분한 대화 시간을 마련하고, 아이디어를 함께 토론하는 시간을 가지세요. 
            이들은 말하는 도중 끊어지는 것을 싫어하므로, 말할 기회를 충분히 주세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">2.2 내향형 (I) 의 소통 특성</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            내향형 사람들은 내부 세계에서 에너지를 얻습니다. 이들은 말하기 전에 생각을 정리하는 것을 선호하고, 
            글이나 일대일 대화를 통해 더 잘 소통합니다.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>말하기 전에 생각을 정리하고 싶은 욕구</li>
            <li>글을 통한 소통이나 일대일 대화를 선호</li>
            <li>깊이 있는 대화를 선호</li>
            <li>충분한 생각할 시간을 필요로 함</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>내향형과 소통하는 팁:</strong> 충분한 생각할 시간을 주고, 급하게 대답을 강요하지 마세요. 
            이들은 침묵을 comfortable하게 여기므로, 강요하지 않는 것이 중요합니다.
          </p>
        </section>

        <section id="sensing" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 정보 수집: 감각형 vs 직관형</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">3.1 감각형 (S) 의 소통 특성</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            감각형 사람들은 구체적이고 현실적인 정보를 선호합니다. 이들은 사실과 세부 사항에 집중하고, 
            실천적인 접근을 좋아합니다.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>구체적인 사실과 데이터에 기반한 소통을 선호</li>
            <li>경험과 실천적인 예를 통해 이해</li>
            <li>명확하고 정확한 표현을 선호</li>
            <li>이론보다는 현실에 집중</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>감각형과 소통하는 팁:</strong> 추상적인 개념보다는 구체적인 예를 들어주고, 
            명확한 사실과 데이터를 제시하세요. 이들은 모호하거나 이론적인 논쟁을 싫어할 수 있습니다.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">3.2 직관형 (N) 의 소통 특성</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            직관형 사람들은 가능성과 전체 그림에 집중합니다. 이들은 패턴과 연결고리를 찾고, 
            미래 지향적인 사고를 합니다.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>가능성과 잠재력에 집중</li>
            <li>전체 그림과 큰 개념을 먼저 파악</li>
            <li>새로운 아이디어와 가능성을 탐색</li>
            <li>상상력과 혁신적인 사고를 중요시</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>직관형과 소통하는 팁:</strong> 전체 맥락과 가능성을 먼저 설명하고, 
            세부 사항보다는 큰 그림을 보여주세요. 이들은 한 가지일에 제한되지 않고 다양한 선택지를 열어 두고 싶어합니다.
          </p>
        </section>

        <section id="decision" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 의사결정: 사고형 vs 감정형</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">4.1 사고형 (T) 의 소통 특성</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            사고형 사람들은 논리와 분석에 기반하여 의사결정합니다. 이들은 근거와 데이터를 제시하면 잘 받아들이며, 
            감정적 표현보다 사실에 집중하는 경향이 있습니다.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>논리적이고 분석적인 접근을 선호</li>
            <li>명확한 근거와 데이터를 제시</li>
            <li>공정성과 일관성을 중시</li>
            <li>감정보다 사실에 집중</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>사고형과 소통하는 팁:</strong> 감정적 호소보다는 논리적 근거와 데이터를 제시하세요. 
            이들은 개인적인 선호보다는 객관적인 분석을 중요시합니다. 그러나 감정도 완전히 무시하지는 마세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">4.2 감정형 (F) 의 소통 특성</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            감정형 사람들은 가치와 사람에 영향을 받아 의사결정합니다. 이들은 다른 사람의 의견을 고려하고, 
            결정이 사람에게 미치는 영향을 중요시합니다.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>가치와 사람에 영향을 받아 결정</li>
            <li>타인의 의견과 감정을 고려</li>
            <li>공감과 인정이 소통의 핵심</li>
            <li>조화와 관계를 중시</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>감정형과 소통하는 팁:</strong> 공감과 인정을 먼저 표현하고, 결정이 사람들에게 미치는 영향을 설명하세요. 
            이들은 개인적인 관계와 가치를 중요시하므로, 그를 고려한 접근이 효과적입니다.
          </p>
        </section>

        <section id="structure" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 구조 선호: 판단형 vs 인식형</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">5.1 판단형 (J) 의 소통 특성</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            판단형 사람들은 계획과 구조를 선호합니다. 이들은 명확한 기한과 목표가 있으면 안정을 느끼며, 
            사전에 계획된 접근을 좋아합니다.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>명확한 계획과 일정을 선호</li>
            <li>기한과 목표가 있으면 안정</li>
            <li>결정을 빠르게 내림</li>
            <li>정리되고 체계적인 것을 선호</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>판단형과 소통하는 팁:</strong> 명확한 일정과 기한을 제시하고, 계획된 접근을 하세요. 
            이들은 즉흥적인 변화보다는 미리 알려준 변화를 선호합니다. 말한 것을 실천하는 것이 중요합니다.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">5.2 인식형 (P) 의 소통 특성</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            인식형 사람들은 유연성과 적응성을 선호합니다. 이들은 선택지를 열어 두고 다양한 가능성을 탐색하는 것을 좋아하며, 
            상황에 따라 조정하는 것을 선호합니다.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>유연성과 적응성을 중시</li>
            <li>다양한 선택지를 열어 두고 싶어함</li>
            <li>즉흥적인 변화에 적응</li>
            <li>현재 상황에 집중</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>인식형과 소통하는 팁:</strong> 고정된 계획보다는 상황에 따른 조정을 허용하세요. 
            이들은 융통성있는 접근을 선호하며, 너무 엄격한 일정은 스트레스가 될 수 있습니다.
          </p>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. 효과적 소통을 위한 전략</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">1. 타인의 유형을 이해하세요</p>
              <p className="text-gray-300 text-sm">
                상대방의 MBTI 유형을 고려하여 소통 방식을 조정하세요. 모든 사람이 같은 방식으로 소통하는 것이 아닙니다.
              </p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">2. 유연성을 가지세요</p>
              <p className="text-gray-300 text-sm">
                자신의 선호 방식만 고집하지 말고, 상황과 상대방에 따라             소통 방식을 바꾸세요. 효과적인 소통은 적응력에서 비롯됩니다.
              </p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">3. 적극적으로 경청하세요</p>
              <p className="text-gray-300 text-sm">
                상대방이 어떻게 생각하고 느끼는지 궁금해하고, 그들의 관점을 이해하려 노력하세요. 들어주는 것만으로도 깊은 유대가 형성됩니다.
              </p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">4. 피드백을 구하세요</p>
              <p className="text-gray-300 text-sm">
                자신의 소통 방식이 어떻게 받아들여지는지 물어보고, 지속적으로 개선해나가세요. 소통은 끊임없는 학습입니다.
              </p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">5. 맥락을 고려하세요</p>
              <p className="text-gray-300 text-sm">
                상황과 관계에 따라 소통 방식이 달라져야 합니다. 업무Meeting과 친구와의 대화는 다른 접근이 필요합니다.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: 2026년 2월 22일</span>
          <span>{t("category")}: 관계</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/mbti-love-and-relationships" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">MBTI 사랑과 관계</h4>
              <p className="text-gray-400 text-sm">유형별 연애 패턴과 관계 구축법</p>
            </div>
          </Link>
          <Link href="/blog/mbti-conflict-resolution" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">MBTI 갈등 해결</h4>
              <p className="text-gray-400 text-sm">직장에서의 갈등 관리 전략</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="text-center">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t("ctaTitle")}</h3>
          <p className="text-gray-400 mb-6">{t("ctaDescription")}</p>
          <Link href="/test">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">{t("ctaButton")}</button>
          </Link>
        </div>
      </section>
    </>
  );
}

function CommunicationEn({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">MBTI Communication Styles</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Relationships</span>
          <span className="text-gray-500 text-sm">12 min {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          MBTI Communication Styles: Customized Communication Guide
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Effective communication methods vary by MBTI type. Learn about each type&apos;s communication style and conflict prevention strategies.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#overview" className="hover:text-white transition-colors">1. Communication and MBTI</a></li>
          <li><a href="#energy" className="hover:text-white transition-colors">2. Energy Direction: Extrovert vs Introvert</a></li>
          <li><a href="#sensing" className="hover:text-white transition-colors">3. Information Gathering: Sensing vs Intuition</a></li>
          <li><a href="#decision" className="hover:text-white transition-colors">4. Decision Making: Thinking vs Feeling</a></li>
          <li><a href="#structure" className="hover:text-white transition-colors">5. Structure Preference: Judging vs Perceiving</a></li>
          <li><a href="#tips" className="hover:text-white transition-colors">6. Strategies for Effective Communication</a></li>
        </ul>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <section id="overview" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Communication and MBTI</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Communication is the foundation of relationships. The same message can be received differently depending on how it&apos;s delivered.
            MBTI helps understand each type&apos;s preferred communication style.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            By understanding your own communication style and learning how to effectively communicate with different types,
            you can prevent conflicts and build deeper connections. This skill is important not only in personal relationships
            but also in workplace, family, and friend relationships.
          </p>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-200 text-sm">
              <strong>Key Point:</strong> Effective communication starts with knowing your own style. 
              And understanding others&apos; styles and adapting your approach accordingly is crucial.
            </p>
          </div>
        </section>

        <section id="energy" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Energy Direction: Extrovert vs Introvert</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Extroverts (E)</strong> get energy from the external world. They express thoughts through speaking and develop ideas through conversation.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Think out loud and organize thoughts through talking</li>
            <li>Get energy from discussions and debates</li>
            <li>Prefer short, direct feedback</li>
            <li>Comfortable with public communication</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Tips for communicating with Extroverts:</strong> Allow plenty of discussion time and brainstorm together. Give them space to speak without interruption.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Introverts (I)</strong> get energy from the internal world. They prefer to organize thoughts before speaking and communicate better through writing or one-on-one conversations.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Need time to think before responding</li>
            <li>Prefer written communication or one-on-one talks</li>
            <li>Value deep conversations</li>
            <li>Need adequate thinking time</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Tips for communicating with Introverts:</strong> Give them adequate thinking time and don&apos;t rush their responses. They are comfortable with silence, so don&apos;t force them to speak.
          </p>
        </section>

        <section id="sensing" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Information Gathering: Sensing vs Intuition</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Sensing types (S)</strong> prefer concrete, practical information. They focus on facts and details, and prefer practical approaches.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Prefer communication based on facts and data</li>
            <li>Understand through experience and practical examples</li>
            <li>Prefer clear, precise expressions</li>
            <li>Focus on reality over theory</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Tips for communicating with Sensing types:</strong> Use concrete examples rather than abstract concepts. Present clear facts and data. They may dislike vague or theoretical discussions.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Intuition types (N)</strong> focus on possibilities and the big picture. They find patterns and connections, and think in future-oriented ways.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Focus on possibilities and potential</li>
            <li>Grasp the overall picture first</li>
            <li>Explore new ideas and possibilities</li>
            <li>Value imagination and innovative thinking</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Tips for communicating with Intuition types:</strong> Explain the overall context and possibilities first. Show the big picture before details. They want to keep options open rather than being limited to one thing.
          </p>
        </section>

        <section id="decision" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Decision Making: Thinking vs Feeling</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Thinking types (T)</strong> make decisions based on logic and analysis. They respond well to evidence and data, and tend to focus on facts over emotional expression.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Prefer logical, analytical approach</li>
            <li>Present clear evidence and data</li>
            <li>Value fairness and consistency</li>
            <li>Focus on facts over emotions</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Tips for communicating with Thinking types:</strong> Present logical reasons and data rather than emotional appeals. They value objective analysis over personal preferences. But don&apos;t completely ignore emotions.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Feeling types (F)</strong> are influenced by values and people in decision-making. They consider others&apos; opinions and care about how decisions impact people.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Make decisions influenced by values and people</li>
            <li>Consider others&apos; opinions and feelings</li>
            <li>Empathy and acknowledgment are key to communication</li>
            <li>Value harmony and relationships</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Tips for communicating with Feeling types:</strong> First express empathy and acknowledgment. Explain how decisions affect people. They value personal relationships and values, so consider these in your approach.
          </p>
        </section>

        <section id="structure" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Structure Preference: Judging vs Perceiving</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Judging types (J)</strong> prefer planning and structure. They feel comfortable with clear deadlines and goals, and prefer planned approaches.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Prefer clear plans and schedules</li>
            <li>Feel stability with deadlines and goals</li>
            <li>Make decisions quickly</li>
            <li>Prefer organized, systematic approaches</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Tips for communicating with Judging types:</strong> Present clear schedules and deadlines. Use planned approaches. They prefer advance notice of changes. Keeping your word is important.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Perceiving types (P)</strong> prefer flexibility and adaptability. They like to keep options open and explore various possibilities, preferring to adapt to situations.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Value flexibility and adaptability</li>
            <li>Like to keep options open</li>
            <li>Adapt well to spontaneous changes</li>
            <li>Focus on the present situation</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Tips for communicating with Perceiving types:</strong> Allow adjustments according to the situation rather than rigid plans. They prefer flexible approaches. Too strict schedules may cause them stress.
          </p>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. Strategies for Effective Communication</h2>
          <div className="space-y-4">
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">1. Understand others&apos; types</p>
              <p className="text-gray-300 text-sm">Adjust your communication style based on the other person&apos;s MBTI type. Not everyone communicates the same way.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">2. Be flexible</p>
              <p className="text-gray-300 text-sm">Don&apos;t insist on your preferred method only - adapt to the situation and person. Effective communication comes from adaptability.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">3. Listen actively</p>
              <p className="text-gray-300 text-sm">Be curious about how others think and feel, and try to understand their perspective. Just listening can build deep bonds.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">4. Ask for feedback</p>
              <p className="text-gray-300 text-sm">Ask how your communication is being received and continuously improve. Communication is ongoing learning.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">5. Consider the context</p>
              <p className="text-gray-300 text-sm">Communication style should vary depending on the situation and relationship. A business meeting needs a different approach than talking with friends.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: February 22, 2026</span>
          <span>{t("category")}: Relationships</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/mbti-love-and-relationships" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">MBTI Love and Relationships</h4>
              <p className="text-gray-400 text-sm">Dating patterns and relationship building by type</p>
            </div>
          </Link>
          <Link href="/blog/mbti-conflict-resolution" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">MBTI Conflict Resolution</h4>
              <p className="text-gray-400 text-sm">Workplace conflict management strategies</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="text-center">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t("ctaTitle")}</h3>
          <p className="text-gray-400 mb-6">{t("ctaDescription")}</p>
          <Link href="/test">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">{t("ctaButton")}</button>
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
        {isEn ? <CommunicationEn t={t} /> : <CommunicationKo t={t} />}
      </article>
    </div>
  );
}
