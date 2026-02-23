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
    ? "MBTI Parenting Guide: Customized Education Strategies by Child Type | MBTI Blog"
    : "MBTI 육아 가이드: 자녀 유형별 맞춤 교육 전략 | MBTI 블로그";
  const description = isEn
    ? "Different parenting approaches are needed based on your child's MBTI type. Learn education methods and communication strategies suited for each type."
    : "자녀의 MBTI 유형에 따라 다른 육아 접근이 필요합니다. 각 유형의 아이에게 맞는 교육 방법과 소통 전략을 알아봅니다.";
  return {
    title,
    description,
    keywords: isEn
      ? ["MBTI parenting", "child development", "education strategy", "parent-child communication"]
      : ["MBTI 육아", "자녀 교육", "교육 전략", "부모자녀 소통"],
    openGraph: { title, description, type: "article" },
  };
}

function ParentingKo({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">MBTI 육아 가이드</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">관계</span>
          <span className="text-gray-500 text-sm">12분 {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          MBTI 육아 가이드: 자녀 유형별 맞춤 교육
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          자녀의 MBTI 유형에 따라 다른 육아 접근이 필요합니다. 각 유형의 아이에게 맞는 교육 방법과 소통 전략을 알아봅니다.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#overview" className="hover:text-white transition-colors">1. MBTI와 육아의 관계</a></li>
          <li><a href="#analysts" className="hover:text-white transition-colors">2. 분석가 유형 아이 (NT)</a></li>
          <li><a href="#diplomats" className="hover:text-white transition-colors">3. 외교관 유형 아이 (NF)</a></li>
          <li><a href="#sentinels" className="hover:text-white transition-colors">4. 관리자 유형 아이 (SJ)</a></li>
          <li><a href="#explorers" className="hover:text-white transition-colors">5. 탐험가 유형 아이 (SP)</a></li>
          <li><a href="#tips" className="hover:text-white transition-colors">6. 효과적 육아의 비결</a></li>
        </ul>
      </div>

      <div className="vert prose-lg maxprose prose-in-w-none">
        <section id="overview" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. MBTI와 육아의 관계</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            자녀를 이해하는 가장 좋은 방법 중 하나는 MBTI입니다. 각 유형의 아이는 다른 관심사를 가지고,
            다르게 배우고, 다른 방식으로 소통합니다. 이는 단순히 부모의 편의를 위한 것이 아니라, 
            자녀의 특성을 제대로 이해하고 맞춤형 교육을 제공하기 위함입니다.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            부모가 자녀의 성격 유형을 이해하면 그들의 강점을 기반으로 교육할 수 있고, 
            약점을 보완하도록 도울 수 있습니다. 이는 더 효과적인 육아와 더 강한 부모자녀 유대감을 만들어냅니다.
            모든 아이가 같은 방식으로 자라고 성장하는 것이 아니라는 것을 이해하는 것이 중요합니다.
          </p>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-200 text-sm">
              <strong>핵심 포인트:</strong> 육아는 정답이 없습니다. 자녀의 MBTI 유형을 이해하고, 
              그에 맞는 방식으로 접근하는 것이 가장 효과적인 육아 방법입니다.
            </p>
          </div>
        </section>

        <section id="analysts" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 분석가 유형 아이 (NT)</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">2.1 INTJ (건축가) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 독립적 사고, 장기적 계획, 논리적 분석
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>스스로 생각하고 문제를 해결하는 것을 좋아함</li>
            <li>효율성과 체계성을 추구</li>
            <li>장기적 목표 설정에 능함</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 사실과 근거에 기반한 설명이 효과적입니다. 
            &quot;왜&quot;를 항상 설명해주고, 다양한 관점을 탐색할 수 있게 해주세요. 그러나 감정적 지원도 잊지 마세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">2.2 INTP (논리술사) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 창의적 사고, 추상적 개념에 대한 관심, 유연성
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>복잡한 아이디어와 개념에 흥미를 보임</li>
            <li>스스로 문제를 해결하는 것을 즐김</li>
            <li>새로운 방법에 대한 관심</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 이론과 개념을 탐색할 기회를 주세요. 
            그러나 실행력과 마감일의 중요성도 가르쳐주세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">2.3 ENTJ (통솔자) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 리더십, 목표 지향적, 결단력
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>리더 역할을 자연스럽게 함</li>
            <li>목표 달성을 향해 나아감</li>
            <li>결정과 실행이 빠름</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 도전적인 목표를 제시하고, 
            달성할 때 인정해주세요. 그러나 다른 사람의 감정도 가르쳐주시고, 이기는 것보다 중요한 것이 있다는 것도 알려주세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">2.4 ENTP (변론가) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 혁신적 사고, 토론 좋아함, 다방면적 관심
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>새로운 아이디어를 만들어냄</li>
            <li>토론하고 논쟁하는 것을 즐김</li>
            <li>다양한 분야에 관심</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 토론과 논쟁의 기회를 주세요. 
            시작한 것을 끝까지 마무리하는 것도 가르쳐주세요.
          </p>
        </section>

        <section id="diplomats" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 외교관 유형 아이 (NF)</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">3.1 INFJ (제창자) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 이상주의, 공감 능력, 깊은 사고
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>타인의 감정을 민감하게 인식</li>
            <li>이상과 가치에 대한 관심이 강함</li>
            <li>스스로에게 높은 기준을 맞춤</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 공감과 격려가 중요합니다. 
            그들의 감정을 인정해주고, 창구를 표현할 수 있는 기회를 주세요. 또한 완벽주의에 대한 부담을 줄여주세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">3.2 INFP (중재자) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 창의성, 이상주의, 개인주의
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>창의적 표현을 중요시함</li>
            <li>자신만의 가치와 신념을 가짐</li>
            <li>내면 세계가 풍부함</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 창구적인 표현의 기회를 다양하게 제공하세요. 
            그러나 현실적인 마감일과 규칙의 중요성도 가르쳐주세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">3.3 ENFJ (주인) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 카리스마,타인 영감, 리더십
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>타인과 쉽게 친해짐</li>
            <li>타인을 도우고 싶어함</li>
            <li>팀을 하나로 모으는 재능</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 다른 사람과 함께 활동할 기회를 주세요. 
            그러나 자신만의 시간과 공간의 중요성도 알려주세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">3.4 ENFP (활동가) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 열정, 창의성, 에너지
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>새로운 가능성에 흥분됨</li>
            <li>다양한 활동에 참여하고 싶어함</li>
            <li>타인과 깊은 유대를 형성함</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 다양한 경험을 해볼 기회를 주세요. 
            그러나 집중력과 책임감도 가르쳐주세요.
          </p>
        </section>

        <section id="sentinels" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 관리자 유형 아이 (SJ)</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">4.1 ISTJ (논리주의자) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 책임감, 신뢰성, 전통 중시
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>규칙과 절차를 따르는 것을 좋아함</li>
            <li>책임을 성실하게 수행</li>
            <li>신뢰할 수 있음</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 일관된 규칙과 기대를 제시하세요. 
            그러나 유연성과 변화에 대한 적응도 가르쳐주세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">4.2 ISFJ (수호자) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 헌신, 돌봄, 현실적
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>타인을 돌보고 싶어함</li>
            <li>가족과 친구에게 충성함</li>
            <li>세부 사항을 놓치지 않음</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 사랑과 관심을 표현해주시고, 
            그들의 노력을 인정해주세요. 그러나 자기 자신도 돌보는 것을 가르쳐주세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">4.3 ESTJ (경영자) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 조직력, 현실적, 리더십
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>명확한 목표와 구조를 원함</li>
            <li>리더 역할을 자진해서 함</li>
            <li>결과와 성과에 집중</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 명확한 기대와 목표를 제시하세요. 
            그러나 타인의 감정도 고려하는 것을 가르쳐주세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">4.4 ESFJ (집정관) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 협력, 돌봄, 조화
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>팀의 조화를 중요시함</li>
            <li>타인을 돌보고 싶어함</li>
            <li>타인의 기대에 부응하려고 함</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 협력과 조화를 장려해주세요. 
            그러나 갈등을 피하지 마르고, 자신의 필요도 표현할 수 있도록 가르쳐주세요.
          </p>
        </section>

        <section id="explorers" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 탐험가 유형 아이 (SP)</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">5.1 ISTP (만능재주꾼) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 실용적, 문제 해결, 조율
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>손으로 만들고 실험하는 것을 좋아함</li>
            <li>위기 상황에서 침착함</li>
            <li>유연하고 적응력이 좋음</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 실천적인 경험을 해볼 기회를 주세요. 
            그러나 장기적인 계획의 중요성도 가르쳐주세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">5.2 ISFP (모험가) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 예술적, 감각적, 현재 집중
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>예술과 창구적인 표현을 좋아함</li>
            <li>현재를 즐기는 것을 중요시함</li>
            <li>자유의 가치를 중요시함</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 예술적이고 창구적인 경험을 제공하세요. 
            그러나 책임감과 약속의 중요성도 가르쳐주세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">5.3 ESTP (사업가) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 행동적, 현실적, 에너지
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>활동적이고 움직이는 것을 좋아함</li>
            <li>위기 상황에서 능력이 뛰어남</li>
            <li>타인과 쉽게 친해짐</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 활동적이고 실천적인 배움을 제공하세요. 
            그러나 생각하고 계획하는 것도 가르쳐주세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">5.4 ESFP (연예인) 아이</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>특성:</strong> 에너지, 표현력, 현재 집중
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>타인을 즐겁게 하는 것을 좋아함</li>
            <li>표현력과 카리스마가 뛰어남</li>
            <li>현재를 즐김</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>교육 팁:</strong> 이 유형의 아이에게는 표현하고 발휘할 기회를 주세요. 
            그러나 계획성과 장기적인 사고도 가르쳐주세요.
          </p>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. 효과적 육아의 비결</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">1. 자녀의 유형을 관찰하세요</p>
              <p className="text-gray-300 text-sm">
                아이가 어떻게 반응하고, 무엇에 흥미를 갖는지 관찰하세요. MBTI는 도구일 뿐, 아이를 이해하는 시작점입니다.
              </p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">2. 유연하게 대응하세요</p>
              <p className="text-gray-300 text-sm">
                모든 아이가 같은 방식으로 반응하지 않습니다. 자녀의 반응을 관찰하고 그에 맞게 접근 방법을 조정하세요.
              </p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">3. 강점을 강화하세요</p>
              <p className="text-gray-300 text-sm">
                자녀의 장점을 보고 인정해주세요. 약점보다 강점에 집중하는 것이 더 효과적인 교육을 만듭니다.
              </p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">4. 열린 소통을 유지하세요</p>
              <p className="text-gray-300 text-sm">
                아이가 자신의 생각을 표현할 수 있는 환경을 만들어주세요. 자녀의 의견도 중요하게 들려주세요.
              </p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">5. 인내심을 가지세요</p>
              <p className="text-gray-300 text-sm">
                육아는.marathon입니다. 하루하루 자녀와 함께 성장하는 것을 즐기세요.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: 2026년 2월 23일</span>
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
          <Link href="/blog/mbti-learning-styles" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">MBTI 학습 스타일</h4>
              <p className="text-gray-400 text-sm">유형별 가장 효과적인 공부 방법</p>
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

function ParentingEn({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">MBTI Parenting Guide</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Relationships</span>
          <span className="text-gray-500 text-sm">12 min {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          MBTI Parenting Guide: Customized Education by Child Type
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Different parenting approaches are needed based on your child&apos;s MBTI type. Learn education methods and communication strategies suited for each type.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#overview" className="hover:text-white transition-colors">1. MBTI and Parenting</a></li>
          <li><a href="#analysts" className="hover:text-white transition-colors">2. Analyst Children (NT)</a></li>
          <li><a href="#diplomats" className="hover:text-white transition-colors">3. Diplomat Children (NF)</a></li>
          <li><a href="#sentinels" className="hover:text-white transition-colors">4. Sentinel Children (SJ)</a></li>
          <li><a href="#explorers" className="hover:text-white transition-colors">5. Explorer Children (SP)</a></li>
          <li><a href="#tips" className="hover:text-white transition-colors">6. Keys to Effective Parenting</a></li>
        </ul>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <section id="overview" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. MBTI and Parenting</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            One of the best ways to understand your child is through MBTI. Children of each type have different interests,
            learn differently, and communicate in different ways. This isn&apos;t just for parental convenience - 
            it&apos;s about understanding your child&apos;s characteristics and providing tailored education.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            When parents understand their child&apos;s personality type, they can educate based on their strengths and
            help compensate for weaknesses. This creates more effective parenting and stronger parent-child bonds.
            Understanding that not all children grow up the same way is crucial.
          </p>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-200 text-sm">
              <strong>Key Point:</strong> There&apos;s no one right answer to parenting. Understanding your child&apos;s MBTI type and approaching them in the way that suits them is the most effective parenting method.
            </p>
          </div>
        </section>

        <section id="analysts" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Analyst Children (NT)</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Analyst type children are interested in logical thinking and knowledge. They enjoy solving complex problems and creating new ideas.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>INTJ:</strong> Independent thinking, long-term planning - Provide fact-based explanations</li>
            <li><strong>INTP:</strong> Creative thinking, abstract concepts - Allow exploration of theories</li>
            <li><strong>ENTJ:</strong> Leadership, goal-oriented - Set challenging goals and acknowledge achievements</li>
            <li><strong>ENTP:</strong> Innovation, debate - Provide opportunities for discussion</li>
          </ul>
        </section>

        <section id="diplomats" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Diplomat Children (NF)</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Diplomat type children are interested in people and relationships. They are creative, idealistic, and sensitive to others&apos; emotions.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>INFJ:</strong> Idealism, empathy - Acknowledge their feelings and provide creative outlets</li>
            <li><strong>INFP:</strong> Creativity, idealism - Provide diverse creative expression opportunities</li>
            <li><strong>ENFJ:</strong> Charisma, inspiring others - Provide opportunities to work with others</li>
            <li><strong>ENFP:</strong> Enthusiasm, creativity - Provide diverse experiences</li>
          </ul>
        </section>

        <section id="sentinels" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Sentinel Children (SJ)</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Sentinel type children value tradition and rules. They are responsible, organized, and practical.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>ISTJ:</strong> Responsibility, reliability - Provide consistent rules</li>
            <li><strong>ISFJ:</strong> Devotion, care - Express love and acknowledge efforts</li>
            <li><strong>ESTJ:</strong> Organization, leadership - Set clear expectations</li>
            <li><strong>ESFJ:</strong> Cooperation, harmony - Encourage teamwork but teach conflict resolution</li>
          </ul>
        </section>

        <section id="explorers" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Explorer Children (SP)</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Explorer type children live in the moment and are practical. They are action-oriented, adaptable, and enjoy new experiences.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>ISTP:</strong> Practical, problem-solving - Provide hands-on experiences</li>
            <li><strong>ISFP:</strong> Artistic, sensitive - Provide artistic experiences and teach responsibility</li>
            <li><strong>ESTP:</strong> Action-oriented, energetic - Provide active, practical learning</li>
            <li><strong>ESFP:</strong> Energy, expression - Provide opportunities to express themselves</li>
          </ul>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. Keys to Effective Parenting</h2>
          <div className="space-y-4">
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">1. Observe your child&apos;s type</p>
              <p className="text-gray-300 text-sm">Watch how they react and what interests them. MBTI is just a tool - a starting point for understanding your child.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">2. Be flexible</p>
              <p className="text-gray-300 text-sm">Not all children respond the same way. Observe your child&apos;s responses and adjust your approach accordingly.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">3. Strengthen strengths</p>
              <p className="text-gray-300 text-sm">Notice and acknowledge your child&apos;s strengths. Focusing on strengths is more effective than fixing weaknesses.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">4. Maintain open communication</p>
              <p className="text-gray-300 text-sm">Create an environment where your child can express their thoughts. Take their opinions seriously.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">5. Be patient</p>
              <p className="text-gray-300 text-sm">Parenting is a marathon. Enjoy growing together with your child day by day.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: February 23, 2026</span>
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
          <Link href="/blog/mbti-learning-styles" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">MBTI Learning Styles</h4>
              <p className="text-gray-400 text-sm">Most effective study methods by type</p>
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
        {isEn ? <ParentingEn t={t} /> : <ParentingKo t={t} />}
      </article>
    </div>
  );
}
