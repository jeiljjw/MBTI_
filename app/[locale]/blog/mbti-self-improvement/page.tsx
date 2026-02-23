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
    ? "MBTI Self-Improvement Guide: Growth Strategies by Type | MBTI Blog"
    : "MBTI 자기계발 가이드: 유형별 성장 전략과 발전 방법 | MBTI 블로그";
  const description = isEn
    ? "Self-improvement methods differ for each MBTI type. Learn customized growth strategies that leverage your strengths and compensate for weaknesses."
    : "각 MBTI 유형별로 자기계발 방법이 다릅니다. 자신의 강점을 살리고 약점을 보완하는 맞춤형 성장 전략을 알아봅니다.";
  return {
    title,
    description,
    keywords: isEn
      ? ["MBTI self-improvement", "personal growth", "MBTI development", "growth strategy"]
      : ["MBTI 자기계발", "개인 성장", "MBTI 발전", "성장 전략"],
    openGraph: { title, description, type: "article" },
  };
}

function SelfImprovementKo({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">MBTI 자기계발 가이드</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">심리학</span>
          <span className="text-gray-500 text-sm">10분 {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          MBTI 자기계발 가이드: 유형별 성장 전략
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          각 MBTI 유형별로 자기계발 방법이 다릅니다. 자신의 강점을 살리고 약점을 보완하는 맞춤형 성장 전략을 알아봅니다.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#overview" className="hover:text-white transition-colors">1. MBTI와 자기계발의 관계</a></li>
          <li><a href="#analysts" className="hover:text-white transition-colors">2. 분석가 유형 (NT): 혁신과 전략</a></li>
          <li><a href="#diplomats" className="hover:text-white transition-colors">3. 외교관 유형 (NF): 공감과 영감</a></li>
          <li><a href="#sentinels" className="hover:text-white transition-colors">4. 관리자 유형 (SJ): 안정과 책임</a></li>
          <li><a href="#explorers" className="hover:text-white transition-colors">5. 탐험가 유형 (SP): 적응과 행동</a></li>
          <li><a href="#tips" className="hover:text-white transition-colors">6. 지속적 성장의 비결</a></li>
        </ul>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <section id="overview" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. MBTI와 자기계발의 관계</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI는 단순히 자신의 성격을 파악하는 도구를 넘어, 개인의 성장과 발전을 위한 가이드라인을 제공합니다. 
            각 유형은 자연스럽게 잘 하는 영역과 노력이 필요한 영역이 있습니다. 이것은 우열이 있는 것이 아니라, 
            단순히 각 유형마다 다른 강점과 도전과제가 있다는 것을 의미합니다.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            자기계발의 핵심은 자신의 강점을 최대한 활용하면서, 약점을 보완하는 것입니다. 
            MBTI를 이해하면 어디에 노력을 집중해야 할지 명확해집니다. 모든 유형이 동일한 방식으로 성장하는 것이 아니라, 
            각자의 특성에 맞는 접근 방법이 필요합니다.
          </p>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-200 text-sm">
              <strong>핵심 포인트:</strong> 자기계발은 나만의 속도와 방식으로 진행되어야 합니다. 
              다른 사람의 방법을 그대로 따르기보다는 자신의 유형에 맞는 전략을 개발하세요.
            </p>
          </div>
        </section>

        <section id="analysts" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 분석가 유형 (NT): 혁신과 전략</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">2.1 INTJ (건축가)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 장기적 비전, 논리적 분석, 전략적 사고
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>복잡한 문제를 체계적으로 해결하는 능력</li>
            <li>미래 지향적인 목표 설정과 실행</li>
            <li>효율성과 혁신을 추구하는 성향</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 감정적 표현을 훈련하고, 팀원들의 기여를 인정하는 습관을 기르세요. 
            또한 완벽주의에서 벗어나는 것도 중요합니다.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">2.2 INTP (논리술사)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 창의적 문제 해결, 추상적 사고, 유연성
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>새로운 아이디어와 개념을 창출하는 능력</li>
            <li>복잡한 시스템을 이해하고 분석하는 재능</li>
            <li>다양한 관점에서 문제를 바라보는 시각</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 실행력 향상에 집중하세요. 아이디어를 생각대로 현실로 구현하는 능력을 키우는 것이 중요합니다.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">2.3 ENTJ (통솔자)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 리더십, 의사결정, 목표 달성
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>명확한 방향 제시와 팀 통합 능력</li>
            <li>복잡한 상황에서의 빠른 의사결정</li>
            <li>도전적 목표 설정과 달성</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 다른 사람의 감정과 의견을 더 많이 경청하는 것을 배우세요. 
            또한 인내심을 기르고 완벽주의에서 벗어나는 것이 도움됩니다.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">2.4 ENTP (변론가)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 혁신, 변론, 다방면적 사고
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>새로운 아이디어와 가능성을 발견하는 능력</li>
            <li>타인과 토론하고 논리적으로 설득하는 재능</li>
            <li>변화에 대한 적응력과 유연성</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 시작한 일을 끝까지 마무리하는 습관을 기르세요. 
            또한 하나의 프로젝트에 집중하는 능력을 키우는 것이 중요합니다.
          </p>
        </section>

        <section id="diplomats" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 외교관 유형 (NF): 공감과 영감</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">3.1 INFJ (제창자)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 통찰력, 헌신, 공감 능력
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>타인의 잠재력을 발견하고 성장시키는 능력</li>
            <li>명확한 가치와 비전 제시</li>
            <li>깊은 공감 능력과 이해력</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 자기 자신도 돌보는 것을 잊지 마세요. 또한 비판적인 사고도 개발하면 더 균형 잡힌 성장할 수 있습니다.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">3.2 INFP (중재자)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 창의성,이상주의, 공감
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>창의적 표현과 예술적 재능</li>
            <li>타인의 감정을 깊이 이해하는 능력</li>
            <li>자신의 가치와 신념에 대한 충성심</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 현실적 한계와 deadlines도 인식하세요. 또한 갈등 상황을 회피하지 않고 직시하는 것이 중요합니다.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">3.3 ENFJ (주인)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 리더십, 동기부여, 대인관계
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>타인을 영감시키고 성장시키는 능력</li>
            <li>명확한 비전 제시와 팀 통합</li>
            <li>타인의 잠재력을 끌어내는 재능</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 때로는 자신의 필요도 우선시해야 합니다. 또한 모든 사람을 만족시키려 노력하기보다는 
            중요한 결정을 내리는 용기를 가지세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">3.4 ENFP (활동가)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 열정, 창의성, inspiration
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>새로운 아이디어와 가능성에 대한 enthusiasm</li>
            <li>타인과 깊은 유대를 형성하는 능력</li>
            <li>변화와 도전에 대한 적응력</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 집중력과 지속성을 기르세요. 또한 세부 사항과 실행 계획에도 더 많은 관심을 기울이세요.
          </p>
        </section>

        <section id="sentinels" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 관리자 유형 (SJ): 안정과 책임</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">4.1 ISTJ (논리주의자)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 책임감, 신뢰성, 체계성
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>명확한 절차와 기준 설정</li>
            <li>신뢰할 수 있고 일관된 업무 처리</li>
            <li>세부 사항에 대한 주의와 품질 관리</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 변화와 새로운 방법에 더 개방적으로 대응하세요. 또한 타인의 감정적 필요도 고려하는 것이 도움됩니다.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">4.2 ISFJ (수호자)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 헌신, 돌봄, 실용성
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>타인의 필요를 세심하게 배려하는 능력</li>
            <li>안정적이고 지지적인 환경 조성</li>
            <li>세부 사항에 대한 철저함</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 자신의 의견도 적극적으로 표현하세요. 또한 변화에도 더 유연하게 대응하면 더 성장할 수 있습니다.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">4.3 ESTJ (경영자)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 조직력, 리더십, 실행력
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>명확한 목표 설정과 효율적 조직</li>
            <li>빠른 의사결정과 실행</li>
            <li>결과와 성과에 대한 집중</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 타인의 감정과 의견을 더 많이 경청하세요. 또한 유연성과 창의성도 개발하면 더 좋은 리더가 됩니다.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">4.4 ESFJ (집정관)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 협력, 돌봄, 조화
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>팀의 조화와 협력을 증진하는 능력</li>
            <li>타인의 필요에 대한 세심한 관심</li>
            <li>명확한 소통과 피드백 제공</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 갈등 상황을 회피하지 마세요. 또한 때로는 자신의 필요도 우선시하는 것이 중요합니다.
          </p>
        </section>

        <section id="explorers" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 탐험가 유형 (SP): 적응과 행동</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">5.1 ISTP (만능재주꾼)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 실용성, 문제 해결, 조율
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>실용적이고 효율적인 해결책 제시</li>
            <li>도구와 시스템 조작 능력</li>
            <li>위기 상황에서 침착하게 대응</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 장기적인 관점도 발달시키세요. 또한 감정 표현과 사람들과의 관계에도 더 관심을 기울이세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">5.2 ISFP (모험가)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 예술성, 적응력, 예술적 감각
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>창의적 표현과 예술적 재능</li>
            <li>변화에 대한 유연한 적응</li>
            <li>현재 순간을 즐기는 능력</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 장기 계획과 목표 설정도 중요합니다. 또한 어려운 피드백을 받거나 주는 것도 배우세요.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">5.3 ESTP (사업가)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 행동력, 현실적 사고, 에너지
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>빠른 의사결정과 즉각적 실행</li>
            <li>위기 상황에서의 효과적 대응</li>
            <li>타인을 끌어들이는 카리스마</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 장기 계획도 세우세요. 또한 타인의 감정과 의견도 고려하는 것이 중요합니다.
          </p>

          <h3 className="text-xl font-bold text-white mb-3">5.4 ESFP (연예인)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>강점:</strong> 에너지, 열정, 표현력
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>팀의 분위기를 밝게 만드는 능력</li>
            <li>타인과 즉각적으로 친해지는 재능</li>
            <li>행동을 통한 영감주기</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>성장 팁:</strong> 계획성과 장기적 목표 설정도 발달시키세요. 또한 집중력과 책임감도 중요합니다.
          </p>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. 지속적 성장의 비결</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">1. 자신의 유형을 정확히 이해하세요</p>
              <p className="text-gray-300 text-sm">
                MBTI를 통해 자신의 강점과 약점을 객관적으로 파악하고, 그에 맞는 성장 전략을 세우세요.
              </p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">2. 작은 목표에서 시작하세요</p>
              <p className="text-gray-300 text-sm">
                큰 변화를 한 번에 추구하기보다는 매일 조금씩 발전하는 것을 목표로 하세요. 작은 성공이 모여 큰 성장이 됩니다.
              </p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">3. 피드백을 적극적으로 구하세요</p>
              <p className="text-gray-300 text-sm">
                주변에서 운영하는 피드백을 구하고, 그를 바탕으로 성장해나가는 것이 중요합니다.
              </p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">4. 자신의 강점을 활용하세요</p>
              <p className="text-gray-300 text-sm">
                약점을 보완하는 것도 중요하지만, 무엇보다 자신의 강점을 최대한 활용하는 것이 더 큰 성과를 만듭니다.
              </p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">5. 인내심을 가지세요</p>
              <p className="text-gray-300 text-sm">
                성장은 즉각적으로 이루어지지 않습니다. 지속적으로 노력하면 결국 큰 발전을 이룰 수 있습니다.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: 2026년 2월 22일</span>
          <span>{t("category")}: 심리학</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/mbti-learning-styles" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">MBTI 학습 스타일</h4>
              <p className="text-gray-400 text-sm">유형별 가장 효과적인 공부 방법</p>
            </div>
          </Link>
          <Link href="/blog/emotional-intelligence-mbti" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">감정지능(EQ)과 MBTI</h4>
              <p className="text-gray-400 text-sm">정서적 성장을 위한 안내</p>
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

function SelfImprovementEn({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">MBTI Self-Improvement Guide</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Psychology</span>
          <span className="text-gray-500 text-sm">10 min {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          MBTI Self-Improvement Guide: Growth Strategies by Type
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Self-improvement methods differ for each MBTI type. Learn customized growth strategies that leverage your strengths and compensate for weaknesses.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#overview" className="hover:text-white transition-colors">1. MBTI and Self-Improvement</a></li>
          <li><a href="#analysts" className="hover:text-white transition-colors">2. Analysts (NT): Innovation & Strategy</a></li>
          <li><a href="#diplomats" className="hover:text-white transition-colors">3. Diplomats (NF): Empathy & Inspiration</a></li>
          <li><a href="#sentinels" className="hover:text-white transition-colors">4. Sentinels (SJ): Stability & Responsibility</a></li>
          <li><a href="#explorers" className="hover:text-white transition-colors">5. Explorers (SP): Adaptation & Action</a></li>
          <li><a href="#tips" className="hover:text-white transition-colors">6. Keys to Continuous Growth</a></li>
        </ul>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <section id="overview" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. MBTI and Self-Improvement</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MBTI goes beyond just identifying your personality type - it provides a roadmap for personal growth and development. 
            Each type has natural strengths and areas that need effort. This doesn&apos;t mean some types are better than others; 
            it simply means each type has different strengths and challenges.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The key to self-improvement is maximizing your strengths while addressing your weaknesses. 
            Understanding your MBTI type helps clarify where to focus your efforts. Growth doesn&apos;t happen the same way for everyone - 
            each type requires a tailored approach.
          </p>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-200 text-sm">
              <strong>Key Point:</strong> Self-improvement should progress at your own pace and in your own way. 
              Instead of copying others&apos; methods, develop strategies that fit your type.
            </p>
          </div>
        </section>

        <section id="analysts" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Analysts (NT): Innovation & Strategy</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Analysts excel in logical thinking and strategic planning. They thrive on solving complex problems and generating innovative ideas.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>INTJ:</strong> Long-term vision, strategic thinking - Practice expressing emotions and recognizing others&apos; contributions</li>
            <li><strong>INTP:</strong> Creative problem-solving - Focus on execution and following through on ideas</li>
            <li><strong>ENTJ:</strong> Leadership and decision-making - Practice listening more and being patient</li>
            <li><strong>ENTP:</strong> Innovation and debate - Learn to complete projects you start</li>
          </ul>
        </section>

        <section id="diplomats" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Diplomats (NF): Empathy & Inspiration</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Diplomats are known for their empathy, creativity, and ability to inspire others.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>INFJ:</strong> Insight and dedication - Don&apos;t forget to take care of yourself</li>
            <li><strong>INFP:</strong> Creativity and idealism - Recognize practical limits and deadlines</li>
            <li><strong>ENFJ:</strong> Leadership and motivation - Prioritize your own needs sometimes</li>
            <li><strong>ENFP:</strong> Enthusiasm and creativity - Develop focus and follow-through</li>
          </ul>
        </section>

        <section id="sentinels" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Sentinels (SJ): Stability & Responsibility</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Sentinels value tradition, responsibility, and creating stable environments.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>ISTJ:</strong> Reliability and organization - Be more open to change</li>
            <li><strong>ISFJ:</strong> Devotion and care - Express your opinions more assertively</li>
            <li><strong>ESTJ:</strong> Leadership and execution - Listen more to others&apos; feelings</li>
            <li><strong>ESFJ:</strong> Cooperation and harmony - Address conflicts directly</li>
          </ul>
        </section>

        <section id="explorers" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Explorers (SP): Adaptation & Action</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Explorers are practical, adaptable, and excel at responding to immediate situations.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>ISTP:</strong> Practical problem-solving - Develop long-term perspective</li>
            <li><strong>ISFP:</strong> Artistic expression - Set long-term goals</li>
            <li><strong>ESTP:</strong> Action and energy - Plan for the future</li>
            <li><strong>ESFP:</strong> Energy and expression - Develop responsibility and focus</li>
          </ul>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. Keys to Continuous Growth</h2>
          <div className="space-y-4">
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">1. Understand your type accurately</p>
              <p className="text-gray-300 text-sm">Use MBTI to objectively identify your strengths and weaknesses, then create a growth strategy that fits.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">2. Start with small goals</p>
              <p className="text-gray-300 text-sm">Instead of pursuing big changes at once, aim to improve a little every day. Small successes lead to big growth.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">3. Seek feedback actively</p>
              <p className="text-gray-300 text-sm">Ask for honest feedback from those around you and use it to grow.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">4. Leverage your strengths</p>
              <p className="text-gray-300 text-sm">While improving weaknesses matters, maximizing your strengths leads to greater achievements.</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-blue-200 font-semibold mb-1">5. Be patient</p>
              <p className="text-gray-300 text-sm">Growth doesn&apos;t happen overnight. With consistent effort, you&apos;ll achieve significant development.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: February 22, 2026</span>
          <span>{t("category")}: Psychology</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/mbti-learning-styles" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">MBTI Learning Styles</h4>
              <p className="text-gray-400 text-sm">Most effective study methods by type</p>
            </div>
          </Link>
          <Link href="/blog/emotional-intelligence-mbti" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">Emotional Intelligence (EQ) and MBTI</h4>
              <p className="text-gray-400 text-sm">Guide to emotional growth</p>
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
        {isEn ? <SelfImprovementEn t={t} /> : <SelfImprovementKo t={t} />}
      </article>
    </div>
  );
}
