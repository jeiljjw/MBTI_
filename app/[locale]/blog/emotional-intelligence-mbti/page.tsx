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
    ? "Emotional Intelligence (EQ) and MBTI: A Guide to Emotional Growth | MBTI Blog"
    : "감정지능(EQ)과 MBTI의 상관관계: 정서적 성장을 위한 안내 | MBTI 블로그";
  const description = isEn
    ? "How are emotional intelligence and MBTI connected? We analyze each type's emotional traits and ways to improve EQ from a scientific perspective."
    : "감정지능과 MBTI는 어떻게 연결될까요? 각 유형의 감정적 특성과 EQ를 높이는 방법을 과학적 관점에서 분석합니다.";
  return {
    title,
    description,
    keywords: isEn
      ? ["emotional intelligence", "EQ", "MBTI", "emotional growth", "emotion management"]
      : ["감정지능", "EQ", "MBTI", "정서적 지능", "감정 관리", "MBTI 감정"],
    openGraph: { title, description, type: "article" },
  };
}

function EmotionalIntelligenceKo({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">감정지능과 MBTI</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">심리학</span>
          <span className="text-gray-500 text-sm">8분 {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          감정지능(EQ)과 MBTI의 상관관계: 정서적 성장을 위한 안내
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          감정지능(Emotional Intelligence, EQ)은 성공과 행복에 중요한 역할을 합니다.
          MBTI 성격 유형과 감정지능은 어떻게 연결될까요? 각 유형의 감정적 특성과
          EQ를 높이는 실용적인 방법을 과학적 관점에서 분석합니다.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#overview" className="hover:text-white transition-colors">1. 감정지능(EQ)이란?</a></li>
          <li><a href="#mbti-eq" className="hover:text-white transition-colors">2. MBTI와 감정지능의 관계</a></li>
          <li><a href="#by-type" className="hover:text-white transition-colors">3. 유형별 감정지능 특성</a></li>
          <li><a href="#development" className="hover:text-white transition-colors">4. 유형별 EQ 향상 전략</a></li>
          <li><a href="#practical" className="hover:text-white transition-colors">5. 실용적인 감정 관리 기법</a></li>
          <li><a href="#conclusion" className="hover:text-white transition-colors">6. 결론: 성장하는 감정지능</a></li>
        </ul>
      </div>
      <div className="prose prose-invert prose-lg max-w-none">
        <section id="overview" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. 감정지능(EQ)이란?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            감정지능(Emotional Intelligence, EQ)은 자신과 타인의 감정을 인식하고, 이해하며,
            효과적으로 관리하는 능력입니다. 다니엘 골먼(Daniel Goleman)에 따르면, 감정지능은
            다음 네 가지 핵심 요소로 구성됩니다:
          </p>
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">감정지능의 4가지 요소</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">1. 자기 인식 (Self-Awareness)</h4>
                <p className="text-gray-300 text-sm">
                  자신의 감정을 정확히 인식하고, 그것이 자신의 생각과 행동에 어떤 영향을 미치는지 이해하는 능력
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">2. 자기 관리 (Self-Management)</h4>
                <p className="text-gray-300 text-sm">
                  감정을 효과적으로 조절하고, 충동을 통제하며, 변화에 적응하는 능력
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">3. 사회 인식 (Social Awareness)</h4>
                <p className="text-gray-300 text-sm">
                  타인의 감정을 읽고 이해하며, 사회적 상황을 파악하는 능력 (공감 능력 포함)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">4. 관계 관리 (Relationship Management)</h4>
                <p className="text-gray-300 text-sm">
                  타인과의 관계를 효과적으로 관리하고, 갈등을 해결하며, 협력을 촉진하는 능력
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            연구에 따르면, 감정지능은 직장에서의 성과, 인간관계의 질, 그리고 전반적인 행복감과
            밀접한 관련이 있습니다. IQ만으로는 설명할 수 없는 성공의 요인 중 상당 부분이 감정지능과 관련되어 있습니다.
          </p>
        </section>
        <section id="mbti-eq" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. MBTI와 감정지능의 관계</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI는 감정지능과 직접적으로 연결되어 있지는 않지만, 각 성격 유형은 특정 감정적
            경향과 강점을 가지고 있습니다. 예를 들어:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>감정형(F):</strong> 일반적으로 타인의 감정을 인식하고 공감하는 능력이 뛰어납니다</li>
            <li><strong>사고형(T):</strong> 감정보다 논리를 중시하지만, 이는 감정을 무시하는 것이 아니라 객관적으로 다루는 것입니다</li>
            <li><strong>내향형(I):</strong> 자신의 내면 감정에 더 잘 접근할 수 있습니다</li>
            <li><strong>외향형(E):</strong> 타인과의 상호작용을 통해 감정을 처리하는 경향이 있습니다</li>
          </ul>
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
            <p className="text-green-200 text-sm">
              <strong>중요한 점:</strong> 모든 MBTI 유형이 높은 감정지능을 가질 수 있습니다.
              유형은 선호도를 나타낼 뿐이며, 감정지능은 학습하고 발전시킬 수 있는 기술입니다.
            </p>
          </div>
        </section>
        <section id="by-type" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 유형별 감정지능 특성</h2>
          <h3 className="text-xl font-bold text-white mb-3">3.1 감정형 유형 (F)의 감정지능</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>강점:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>타인의 감정을 빠르게 인식하고 공감하는 능력</li>
            <li>인간관계에서의 조화와 협력을 중시</li>
            <li>감정을 표현하고 소통하는 데 자연스러움</li>
            <li>갈등 상황에서 타인의 입장을 이해하려는 노력</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>발전 영역:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>객관적이고 논리적인 의사결정 능력</li>
            <li>어려운 피드백을 주고받는 능력</li>
            <li>감정에 휘둘리지 않고 균형을 유지하는 능력</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">3.2 사고형 유형 (T)의 감정지능</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>강점:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>감정을 객관적으로 분석하고 이해하는 능력</li>
            <li>논리적이고 공정한 의사결정</li>
            <li>감정에 휘둘리지 않고 목표에 집중하는 능력</li>
            <li>갈등을 논리적으로 해결하려는 접근</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>발전 영역:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>타인의 감정을 인식하고 공감하는 능력</li>
            <li>자신의 감정을 표현하고 소통하는 능력</li>
            <li>인간관계에서의 감정적 연결을 중시하는 태도</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">3.3 내향형 유형 (I)의 감정지능</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>강점:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>자신의 내면 감정에 깊이 접근할 수 있는 능력</li>
            <li>감정을 깊이 있게 성찰하고 이해하는 능력</li>
            <li>독립적으로 감정을 처리하는 능력</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>발전 영역:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>감정을 타인과 공유하고 소통하는 능력</li>
            <li>사회적 상황에서의 감정 인식 능력</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">3.4 외향형 유형 (E)의 감정지능</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>강점:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>타인과의 상호작용을 통한 감정 처리</li>
            <li>사회적 상황에서의 감정 인식 능력</li>
            <li>감정을 표현하고 소통하는 데 자연스러움</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>발전 영역:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>내면의 감정을 깊이 있게 성찰하는 능력</li>
            <li>혼자만의 시간을 통해 감정을 처리하는 능력</li>
          </ul>
        </section>
        <section id="development" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 유형별 EQ 향상 전략</h2>
          <div className="space-y-6">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">감정형(F) 유형을 위한 전략</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>객관성 기르기:</strong> 중요한 결정을 내릴 때 감정뿐만 아니라 논리와 데이터도 고려하세요</li>
                <li><strong>경계 설정:</strong> 타인의 감정에 지나치게 공감하지 말고, 자신의 감정적 한계를 인식하세요</li>
                <li><strong>건설적 피드백:</strong> 어려운 피드백을 주고받는 연습을 하세요. 이것도 관계를 위한 것입니다</li>
              </ul>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">사고형(T) 유형을 위한 전략</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>감정 인식 연습:</strong> 매일 자신의 감정을 체크하고 명명하는 습관을 기르세요</li>
                <li><strong>공감 능력 개발:</strong> 타인의 감정을 이해하려고 노력하고, &ldquo;당신이 어떻게 느끼는지 이해합니다&rdquo;라고 표현하세요</li>
                <li><strong>감정 표현 연습:</strong> 자신의 감정을 타인과 공유하는 것을 배우세요. 이것은 약점이 아니라 강점입니다</li>
              </ul>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">내향형(I) 유형을 위한 전략</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>감정 공유:</strong> 신뢰하는 사람과 자신의 감정을 공유하는 연습을 하세요</li>
                <li><strong>사회적 관찰:</strong> 타인의 비언어적 단서(표정, 몸짓)를 관찰하고 해석하는 연습을 하세요</li>
                <li><strong>작은 상호작용:</strong> 작은 대화에서도 감정을 인식하고 반응하는 연습을 하세요</li>
              </ul>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">외향형(E) 유형을 위한 전략</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>성찰 시간:</strong> 하루 중 조용한 시간을 만들어 자신의 감정을 성찰하세요</li>
                <li><strong>일기 쓰기:</strong> 감정을 글로 표현하는 것이 내면을 이해하는 데 도움이 됩니다</li>
                <li><strong>깊은 대화:</strong> 표면적인 대화를 넘어 깊이 있는 감정적 대화를 나누세요</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="practical" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 실용적인 감정 관리 기법</h2>
          <h3 className="text-xl font-bold text-white mb-3">5.1 감정 인식 연습</h3>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-blue-200 font-semibold mb-2">감정 체크인 (Emotion Check-in)</p>
            <p className="text-gray-300 text-sm">
              하루에 세 번, 자신에게 &ldquo;지금 나는 어떤 감정을 느끼고 있나?&rdquo;라고 물어보세요.
              감정을 명확히 인식하는 것이 감정 관리의 첫 단계입니다.
            </p>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">5.2 감정 명명하기</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            감정을 단순히 &ldquo;좋다&rdquo; 또는 &ldquo;나쁘다&rdquo;로 표현하지 말고,
            더 구체적으로 명명해보세요. 예를 들어:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>&ldquo;좋다&rdquo; → 기쁨, 희망, 자랑, 만족, 감사, 흥분</li>
            <li>&ldquo;나쁘다&rdquo; → 슬픔, 분노, 두려움, 불안, 좌절, 수치심</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            감정을 정확히 명명하면, 그것을 더 잘 이해하고 관리할 수 있습니다.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">5.3 감정 일기 쓰기</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            매일 자신의 감정을 기록하는 것은 감정지능을 높이는 효과적인 방법입니다.
            다음을 포함하여 일기를 써보세요:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>오늘 느낀 주요 감정들</li>
            <li>그 감정을 일으킨 상황이나 사건</li>
            <li>그 감정이 자신의 생각과 행동에 어떤 영향을 미쳤는지</li>
            <li>다음에는 어떻게 다르게 대응할 수 있을지</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">5.4 공감 연습</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            타인의 감정을 이해하는 능력을 기르기 위해, 다음을 연습해보세요:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>대화할 때 상대방의 감정에 집중하세요</li>
            <li>&ldquo;당신이 화가 난 것 같아요&rdquo;처럼 감정을 반영해주세요</li>
            <li>상대방의 입장에서 상황을 바라보려고 노력하세요</li>
            <li>판단하지 말고 이해하려고 하세요</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">5.5 감정 조절 기법</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-white mb-2">즉각적인 기법</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>깊게 숨쉬기 (4초 들이쉬기, 4초 내쉬기)</li>
                <li>5-4-3-2-1 감각 인식 (보는 것, 듣는 것, 느끼는 것 나열)</li>
                <li>잠시 휴식하고 물 마시기</li>
              </ul>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-white mb-2">장기적인 기법</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>정기적인 운동과 충분한 수면</li>
                <li>명상이나 마음챙김 연습</li>
                <li>취미 활동을 통한 스트레스 해소</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="conclusion" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. 결론: 성장하는 감정지능</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            감정지능은 타고난 것이 아니라 개발할 수 있는 기술입니다. MBTI 유형은 우리가 감정을
            어떻게 처리하는지에 대한 선호도를 보여주지만, 모든 유형이 높은 감정지능을 가질 수 있습니다.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            중요한 것은 자신의 유형의 강점을 인식하고, 약점을 보완하며, 지속적으로 감정지능을
            개발하는 것입니다. 작은 실천부터 시작하여, 매일 조금씩 감정을 더 잘 이해하고 관리하는
            능력을 기르세요.
          </p>
          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
            <p className="text-purple-200 text-sm">
              <strong>기억하세요:</strong> 감정지능은 성공과 행복의 핵심 요소입니다.
              자신과 타인의 감정을 이해하고 관리하는 능력을 기르면, 더 나은 인간관계,
              더 높은 직업적 성과, 그리고 더 큰 행복감을 얻을 수 있습니다.
            </p>
          </div>
        </section>
      </div>
      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: 2026년 2월 20일</span>
          <span>{t("category")}: 심리학</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/stress-management-by-type" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">각 유형별 스트레스 관리 가이드</h4>
              <p className="text-gray-400 text-sm">나만의 힐링법</p>
            </div>
          </Link>
          <Link href="/blog/mbti-scientific-basis" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">MBTI의 과학적 기반과 한계</h4>
              <p className="text-gray-400 text-sm">심리학자들이 말하는 진실</p>
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

function EmotionalIntelligenceEn({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">Emotional Intelligence &amp; MBTI</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Psychology</span>
          <span className="text-gray-500 text-sm">8 min {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          Emotional Intelligence (EQ) and MBTI: A Guide to Emotional Growth
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Emotional Intelligence (EQ) plays a key role in success and well-being. How are MBTI personality types and emotional intelligence connected? We analyze each type&apos;s emotional traits and practical ways to improve EQ from a scientific perspective.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#overview" className="hover:text-white transition-colors">1. What is Emotional Intelligence (EQ)?</a></li>
          <li><a href="#mbti-eq" className="hover:text-white transition-colors">2. MBTI and Emotional Intelligence</a></li>
          <li><a href="#by-type" className="hover:text-white transition-colors">3. EQ Traits by Type</a></li>
          <li><a href="#development" className="hover:text-white transition-colors">4. EQ Improvement Strategies by Type</a></li>
          <li><a href="#practical" className="hover:text-white transition-colors">5. Practical Emotion Management</a></li>
          <li><a href="#conclusion" className="hover:text-white transition-colors">6. Conclusion: Growing Your EQ</a></li>
        </ul>
      </div>
      <div className="prose prose-invert prose-lg max-w-none">
        <section id="overview" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. What is Emotional Intelligence (EQ)?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Emotional Intelligence (EQ) is the ability to recognize, understand, and manage your own and others&apos; emotions. According to Daniel Goleman, EQ consists of four core elements:
          </p>
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">The Four Elements of EQ</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">1. Self-Awareness</h4>
                <p className="text-gray-300 text-sm">Accurately recognizing your emotions and understanding how they affect your thoughts and behavior.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">2. Self-Management</h4>
                <p className="text-gray-300 text-sm">Regulating emotions, controlling impulses, and adapting to change.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">3. Social Awareness</h4>
                <p className="text-gray-300 text-sm">Reading and understanding others&apos; emotions and navigating social situations (including empathy).</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">4. Relationship Management</h4>
                <p className="text-gray-300 text-sm">Managing relationships effectively, resolving conflict, and fostering collaboration.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Research shows that EQ is closely linked to job performance, relationship quality, and overall well-being. A large part of success that IQ alone cannot explain is related to emotional intelligence.
          </p>
        </section>
        <section id="mbti-eq" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. MBTI and Emotional Intelligence</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI is not directly tied to EQ, but each personality type has certain emotional tendencies and strengths. For example:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>Feeling (F):</strong> Generally strong at recognizing and empathizing with others&apos; emotions.</li>
            <li><strong>Thinking (T):</strong> Values logic over emotion but deals with emotions objectively rather than ignoring them.</li>
            <li><strong>Introversion (I):</strong> Often better access to inner emotions.</li>
            <li><strong>Extraversion (E):</strong> Tends to process emotions through interaction with others.</li>
          </ul>
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
            <p className="text-green-200 text-sm">
              <strong>Key point:</strong> Every MBTI type can develop high emotional intelligence. Type reflects preference; EQ is a learnable skill.
            </p>
          </div>
        </section>
        <section id="by-type" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. EQ Traits by Type</h2>
          <h3 className="text-xl font-bold text-white mb-3">3.1 Feeling (F) Types</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Strengths:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Quick recognition and empathy for others&apos; emotions</li>
            <li>Value harmony and cooperation in relationships</li>
            <li>Natural at expressing and communicating emotions</li>
            <li>Try to understand the other side in conflict</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Areas to develop:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Objective, logical decision-making</li>
            <li>Giving and receiving difficult feedback</li>
            <li>Staying balanced without being swept by emotions</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">3.2 Thinking (T) Types</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Strengths:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Analyzing and understanding emotions objectively</li>
            <li>Logical, fair decisions</li>
            <li>Staying focused on goals despite emotions</li>
            <li>Approaching conflict with logic</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Areas to develop:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Recognizing and empathizing with others&apos; emotions</li>
            <li>Expressing and communicating your own emotions</li>
            <li>Valuing emotional connection in relationships</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">3.3 Introverted (I) Types</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Strengths:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Deep access to inner emotions</li>
            <li>Reflecting on and understanding emotions</li>
            <li>Processing emotions independently</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Areas to develop:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Sharing and communicating emotions with others</li>
            <li>Reading emotions in social situations</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">3.4 Extraverted (E) Types</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Strengths:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Processing emotions through interaction</li>
            <li>Reading emotions in social settings</li>
            <li>Natural at expressing and communicating emotions</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Areas to develop:</strong></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Reflecting deeply on inner emotions</li>
            <li>Processing emotions through alone time</li>
          </ul>
        </section>
        <section id="development" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. EQ Improvement Strategies by Type</h2>
          <div className="space-y-6">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Strategies for Feeling (F) Types</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Build objectivity:</strong> Consider logic and data as well as emotions when making important decisions.</li>
                <li><strong>Set boundaries:</strong> Avoid over-empathizing; recognize your emotional limits.</li>
                <li><strong>Constructive feedback:</strong> Practice giving and receiving difficult feedback; it serves the relationship.</li>
              </ul>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Strategies for Thinking (T) Types</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Emotion check-ins:</strong> Build a habit of naming and checking your emotions daily.</li>
                <li><strong>Develop empathy:</strong> Try to understand others&apos; feelings and say things like &ldquo;I understand how you feel.&rdquo;</li>
                <li><strong>Express emotions:</strong> Learn to share your emotions with others; it&apos;s a strength, not a weakness.</li>
              </ul>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Strategies for Introverted (I) Types</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Share emotions:</strong> Practice sharing your feelings with people you trust.</li>
                <li><strong>Social observation:</strong> Practice observing and interpreting others&apos; nonverbal cues (facial expressions, gestures).</li>
                <li><strong>Small interactions:</strong> Practice recognizing and responding to emotions in small conversations.</li>
              </ul>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Strategies for Extraverted (E) Types</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Reflection time:</strong> Create quiet time each day to reflect on your emotions.</li>
                <li><strong>Journaling:</strong> Writing about emotions helps you understand your inner world.</li>
                <li><strong>Deeper conversation:</strong> Go beyond small talk to have meaningful emotional conversations.</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="practical" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Practical Emotion Management</h2>
          <h3 className="text-xl font-bold text-white mb-3">5.1 Emotion Check-in</h3>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-blue-200 font-semibold mb-2">Emotion Check-in</p>
            <p className="text-gray-300 text-sm">Three times a day, ask yourself: &ldquo;What am I feeling right now?&rdquo; Clearly recognizing emotions is the first step to managing them.</p>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">5.2 Naming Emotions</h3>
          <p className="text-gray-300 leading-relaxed mb-4">Instead of labeling feelings as just &ldquo;good&rdquo; or &ldquo;bad,&rdquo; name them more specifically, e.g.:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>&ldquo;Good&rdquo; → joy, hope, pride, satisfaction, gratitude, excitement</li>
            <li>&ldquo;Bad&rdquo; → sadness, anger, fear, anxiety, frustration, shame</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">Accurate naming helps you understand and manage emotions better.</p>
          <h3 className="text-xl font-bold text-white mb-3">5.3 Emotion Journaling</h3>
          <p className="text-gray-300 leading-relaxed mb-4">Recording your emotions daily is an effective way to boost EQ. Include:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Main emotions you felt today</li>
            <li>Situations or events that triggered them</li>
            <li>How those emotions affected your thoughts and behavior</li>
            <li>How you might respond differently next time</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">5.4 Empathy Practice</h3>
          <p className="text-gray-300 leading-relaxed mb-4">To build empathy, try:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Focusing on the other person&apos;s emotions in conversation</li>
            <li>Reflecting feelings: e.g. &ldquo;It seems like you&apos;re upset&rdquo;</li>
            <li>Seeing the situation from their perspective</li>
            <li>Seeking to understand, not to judge</li>
          </ul>
          <h3 className="text-xl font-bold text-white mb-3">5.5 Emotion Regulation</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-white mb-2">Immediate techniques</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Deep breathing (4 sec in, 4 sec out)</li>
                <li>5-4-3-2-1 grounding (name things you see, hear, feel)</li>
                <li>Short break and a drink of water</li>
              </ul>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-white mb-2">Long-term techniques</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Regular exercise and enough sleep</li>
                <li>Meditation or mindfulness</li>
                <li>Stress relief through hobbies</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="conclusion" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. Conclusion: Growing Your EQ</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Emotional intelligence is not fixed; it can be developed. MBTI shows how we prefer to process emotions, but every type can have high EQ.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            What matters is recognizing your type&apos;s strengths, working on weaknesses, and steadily developing EQ. Start with small steps and build your ability to understand and manage emotions a little each day.
          </p>
          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
            <p className="text-purple-200 text-sm">
              <strong>Remember:</strong> EQ is central to success and happiness. Building the ability to understand and manage your own and others&apos; emotions leads to better relationships, higher performance, and greater well-being.
            </p>
          </div>
        </section>
      </div>
      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: February 20, 2026</span>
          <span>{t("category")}: Psychology</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/stress-management-by-type" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">Stress Management Guide by Type</h4>
              <p className="text-gray-400 text-sm">Your personal healing method</p>
            </div>
          </Link>
          <Link href="/blog/mbti-scientific-basis" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">The Scientific Basis and Limitations of MBTI</h4>
              <p className="text-gray-400 text-sm">What psychologists say</p>
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
        {isEn ? <EmotionalIntelligenceEn t={t} /> : <EmotionalIntelligenceKo t={t} />}
      </article>
    </div>
  );
}
