import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MBTI 직장에서의 갈등 해결: 유형별 갈등 관리 전략 | MBTI 블로그",
  description: "16가지 MBTI 유형별 갈등 해결 방식을 분석합니다. 직장에서의 갈등을 효과적으로 관리하고, 유형 차이를 이해하여 더 나은 커뮤니케이션을 하는 방법을 알아봅니다.",
  keywords: ["MBTI 갈등", "직장 갈등 해결", "유형별 갈등 관리", "MBTI 커뮤니케이션", "직장 갈등"],
  openGraph: {
    title: "MBTI 직장에서의 갈등 해결: 유형별 갈등 관리 전략",
    description: "16가지 MBTI 유형별 갈등 해결 방식과 커뮤니케이션 전략을 알아보세요.",
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
            <li className="text-white">직장 갈등 해결</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">커리어</span>
            <span className="text-gray-500 text-sm">12분 소요</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            MBTI 직장에서의 갈등 해결: 유형별 갈등 관리 전략
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            직장에서의 갈등은 피할 수 없습니다. 하지만 각 MBTI 유형은 갈등을 다르게 인식하고, 
            다르게 반응합니다. 유형별 갈등 해결 방식을 이해하면 더 효과적으로 커뮤니케이션할 수 있습니다.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
          <h2 className="text-lg font-bold text-white mb-4">목차</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#conflict-basics" className="hover:text-white transition-colors">1. 갈등과 MBTI의 관계</a></li>
            <li><a href="#nt-conflict" className="hover:text-white transition-colors">2. 분석가 유형 (NT)의 갈등 처리</a></li>
            <li><a href="#nf-conflict" className="hover:text-white transition-colors">3. 외교관 유형 (NF)의 갈등 처리</a></li>
            <li><a href="#sj-conflict" className="hover:text-white transition-colors">4. 관리자 유형 (SJ)의 갈등 처리</a></li>
            <li><a href="#sp-conflict" className="hover:text-white transition-colors">5. 탐험가 유형 (SP)의 갈등 처리</a></li>
            <li><a href="#cross-type" className="hover:text-white transition-colors">6. 유형 간 갈등 패턴</a></li>
            <li><a href="#resolution-strategies" className="hover:text-white transition-colors">7. 효과적인 갈등 해결 전략</a></li>
          </ul>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section id="conflict-basics" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. 갈등과 MBTI의 관계</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              갈등은 모든 직장 환경에서 발생합니다. 프로젝트 방향에 대한 의견 차이, 커뮤니케이션 스타일의 충돌, 
              또는 가치관의 마찰 등 그 형태는 다양합니다. MBTI는 이러한 갈등을 이해하고 해결하는 데 
              가치 있는 프레임워크를 제공합니다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              갈등과 관련된 MBTI의 네 가지 지각:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>외향(E) vs 내향(I)</strong>: 갈등 표현 방식, 소통 속도와 방식</li>
              <li><strong>감각(S) vs 직관(N)</strong>: 갈등 원인에 대한 인식, 해결책 접근 방식</li>
              <li><strong>사고(T) vs 감정(F)</strong>: 갈등 해결 우선순위, 의사결정 기준</li>
              <li><strong>판단(J) vs 인식(P)</strong>: 갈등 해결 속도, 구조 vs 유연성</li>
            </ul>
            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
              <p className="text-purple-200 text-sm">
                <strong>핵심 포인트:</strong> 갈등은 나쁜 것이 아닙니다. 효과적으로 해결되면 
                더 나은 해결책, 더 강한 유대, 더 깊은 이해로 이어질 수 있습니다.
              </p>
            </div>
          </section>

          <section id="nt-conflict" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 분석가 유형 (NT)의 갈등 처리</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
분석가 유형은 논리적이고 분석적인 접근을 좋아합니다. 이들은 갈등을 해결해야 하는 문제로 
보며, 효율적인 해결책을 찾으려고 합니다.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">INTJ - 건축가</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 냉정하고 논리적입니다. 감정적 반응보다는 문제 해결에 집중하며, 
                장기적인 관점에서 갈등을 바라봅니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 비효율성, 무능한 리더십, 논리 없는 결정, 감정적 압박
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 논리적 근거를 제시하고, 감정적 압박을 피하세요. 
                장기적 관점에서의 해결책을 함께 논의하세요.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">INTP - 논리술사</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 분석적이고 중립적입니다. 갈등의 &quot;왜&quot;를 이해하려 하고, 
                때로는 과도한 분석으로 인해 해결이 늦어질 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 제한이 많은 규칙, 의미 없는 절차, 감정적 소통 요구
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 시간과 공간을 주고, 분석적 논의를 즐기게 하세요. 
                감정적 접근보다는 사실과 데이터로 접근하세요.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ENTJ - 통솔자</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 직접적이고 결단력 있습니다. 갈등을 빠르게 해결하려 하고, 
                때로는 너무 강압적일 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 능력 부족, 효율성 저하, 모호한 목표, 개인주의
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 명확한 목표와 기대를 제시하고, 효율적으로 소통하세요. 
                그들의 결단력을 인정하고, 하지만 감정적 측면도 언급하세요.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ENTP - 변론가</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 토론을 사랑합니다. 갈등을 지적 도전으로 받아들이며, 
                때로는 논쟁을 즐기는 것처럼 보일 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 제한이 많은 규칙, 지루함, 창의력 저하, 전통에 갇힘
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 열린 토론을 시도하고, 창의적 해결책을 함께 논의하세요. 
                개인적인 공격보다는 아이디어에 집중하도록 유도하세요.
              </p>
            </div>
          </section>

          <section id="nf-conflict" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 외교관 유형 (NF)의 갈등 처리</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              외교관 유형은 갈등을 대인관계의 관점에서 봅니다. 이들은 조화와 관계 유지를 중요시하며, 
              갈등이 감정적 영향을 미칠 것 같습니다.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">INFJ - 제창자</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 조화롭고 은유적입니다. 갈등을 피하려 하고, 
                하지만 참을 수 없는 수준이 되면 강하게 표현할 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 가치관의 충돌, 비인간적 환경, 허위, 개인적 무례
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 개인적으로 대화하고, 그들의 가치관을 존중하세요. 
                감정적 지원과 함께 논리적 해결책을 제시하세요.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">INFP - 중재자</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 내면에서 갈등을 처리합니다. 외부에서는 침착해 보이지만, 
                내면에서는 강한 감정적 반응을 가질 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 가치관의 침해, 비진정성, 자유의 제한, 조화 파괴
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 개인적인 대화를 시도하고, 그들의 가치관을 인정하세요. 
                강제보다는 설득으로 접근하세요.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ENFJ - 주인공</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 갈등 중재자 역할을 자처합니다. 다른 사람의 갈등을 해결하려 하고, 
                때로는 자신의 필요를 뒤에 놓을 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 팀 내 불화, 인정 부족, 비진정성, 가치관의 충돌
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 그들의 헌신을 인정하고, 그들도 돌볼 시간을 갖도록 격려하세요. 
                개인적인 감정도 중요하다는 것을 기억하게 하세요.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ENFP - 활동가</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 즉흥적이고 에너지 넘칩니다. 갈등을 회피하거나, 
                때로는 크게 표현하며 분노를 터뜨릴 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 제한이 많은 절차, 의미 없음, 창의성 억압, 개인적 자유 침해
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 유연성을 보이고, 긍정적 방안을 함께 논의하세요. 
                그들을 비판하기보다는 지지하는 태도를 취하세요.
              </p>
            </div>
          </section>

          <section id="sj-conflict" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 관리자 유형 (SJ)의 갈등 처리</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              관리자 유형은 갈등을 시스템과 규칙의 관점에서 봅니다. 이들은 전통과 질서를 중시하며, 
              갈등이 이러한 가치를 위협한다고 느낄 때 불편함을 느낍니다.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">ISTJ - 논리주의자</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 신중하고 전통적입니다. 갈등을 체계적으로 해결하려 하고, 
                하지만 변화에는 어려움을 느낍니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 규칙 위반, 신뢰 저하, 예측 불가능한 변화, 책임 회피
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 전통과 절차를 존중하고, 사실에 기반한 피드백을 제공하세요. 
                서두르지 말고, 신중하게 접근하세요.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ISFJ - 수호자</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 갈등을 피하려 하고, 참을성 있습니다. 그러나 불공정을 느끼면 
                강하게 저항할 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 인정 없는 노동, 가치 없는 기여, 조화 파괴, 도움 요청 무시
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 그들의 헌신에 감사를 표현하고, 개인적으로 대화하세요. 
                부드럽게 접근하고, 그들의 감정도 인정하세요.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ESTJ - 경영자</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 직접적이고 효율적입니다. 갈등을 빠르게 해결하려 하고, 
                때로는 너무 빠르게 감정적 측면을 놓칠 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 무능력, 규정 위반, 예측 불가능성, 질서 혼란
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 명확하고 직접적으로 소통하고, 사실에 기반한 피드백을 제공하세요. 
                그들의 결정에 존경을 표하세요.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ESFJ - 집정관</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 조화와 관계를 중시합니다. 갈등을 피하려 하고, 
                다른 사람의 필요를 자신의 앞에 놓을 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 팀 내 불화, 인정 부족, 감사 없는 태도, 조화 파괴
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 감사를 자주 표현하고, 개인적인 관계를 구축하세요. 
                그들도 자신의 필요를 표현하도록 격려하세요.
              </p>
            </div>
          </section>

          <section id="sp-conflict" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 탐험가 유형 (SP)의 갈등 처리</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              탐험가 유형은 갈등을 실용적이고 현실적인 관점에서 봅니다. 이들은 이론이나 원칙보다는 
              즉각적인 상황과 결과에 집중합니다.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">ISTP - 만능재주꾼</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 침착하고 분석적입니다. 감정적으로 반응하기보다는 
                문제 해결에 집중하며, 때로는 무관심해 보일 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 과도한 규칙, 자유 제한, 의미 없는 절차, 감정적 압박
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 그들의 공간을 존중하고, 논리적 근거를 제시하세요. 
                감정적 압박을 피하고, 실용적 해결책에 집중하세요.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ISFP - 모험가</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 조용하고 유연합니다. 갈등을 피하려 하고, 
                강제보다는 영향을 통해 변화를 이끌어냅니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 자유 제한, 아름다운 것의 파괴, 강제, 조화 침해
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 부드럽게 접근하고, 선택의 자유를 주세요. 
                그들의 가치와 예술적 감각을 존중하세요.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ESTP - 사업가</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 에너지 있고 적극적입니다. 갈등을 빨리 해결하려 하고, 
                때로는 충동적으로 반응할 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 의미 없음, 지루함, 절차의 지연, 자유 제한
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 빠르게 소통하고, 즉각적인 해결책을 논의하세요. 
                그들의 에너지와 문제를 해결하려는 적극성을 인정하세요.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ESFP - 연예인</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등 스타일:</strong> 즉흥적이고 감정적입니다. 갈등을 크게 표현하거나, 
                때로는 피하려 하고 회피할 수 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>갈등의 원인:</strong> 자유 제한, 의미 없음, 비판, 조화 파괴
              </p>
              <p className="text-yellow-400 text-sm">
                <strong>상대방을 위한 팁:</strong> 긍정적이고 격려하는 태도를 취하고, 개인적으로 대화하세요. 
                재미있는 해결책을 함께 논의하세요.
              </p>
            </div>
          </section>

          <section id="cross-type" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. 유형 간 갈등 패턴</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              특정 유형 조합에서 갈등이 자주 발생합니다. 이를 이해하면 갈등을 예방할 수 있습니다.
            </p>
            
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">흔한 갈등 패턴</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-white font-semibold">E vs I 갈등</p>
                  <p className="text-gray-400 text-sm">
                    &quot;너무 조용해&quot; vs &quot;너무 시끄러워&quot; - 소통 방식과 에너지 수준 차이
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-white font-semibold">S vs N 갈등</p>
                  <p className="text-gray-400 text-sm">
                    &quot;구체적으로 말해&quot; vs &quot;큰 그림을 보여줘&quot; - 정보 처리 방식 차이
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-white font-semibold">T vs F 갈등</p>
                  <p className="text-gray-400 text-sm">
                    &quot;논리적으로&quot; vs &quot;감정적으로&quot; - 의사결정 기준 차이
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-white font-semibold">J vs P 갈등</p>
                  <p className="text-gray-400 text-sm">
                    &quot;계획대로 해&quot; vs &quot;유연하게 해&quot; - 구조와 자유 사이의 긴장
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="resolution-strategies" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. 효과적인 갈등 해결 전략</h2>
            
            <div className="space-y-4">
              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4">
                <p className="text-purple-200 font-semibold mb-1">1. 자신의 유형을 인식하세요</p>
                <p className="text-gray-300 text-sm">
                  갈등 상황에서 어떻게 반응하는지 이해하면, 자신의 약점을 파악하고 
                  의식적으로 조절할 수 있습니다.
                </p>
              </div>

              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4">
                <p className="text-purple-200 font-semibold mb-1">2. 상대방의 유형을 이해하세요</p>
                <p className="text-gray-300 text-sm">
                  같은 사건도 다른 유형에게는 다르게 보입니다. 상대방의 관점을 이해하려 
                  노력하면 공감대가 형성됩니다.
                </p>
              </div>

              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4">
                <p className="text-purple-200 font-semibold mb-1">3. 감정과 문제를 분리하세요</p>
                <p className="text-gray-300 text-sm">
                  감정적 반응은 갈등을 복잡하게 만듭니다. 깊게 호흡하고, 문제의 본질에 
                  집중하세요.
                </p>
              </div>

              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4">
                <p className="text-purple-200 font-semibold mb-1">4. 맞는 소통 방식을 선택하세요</p>
                <p className="text-gray-300 text-sm">
                  사고형(T)은 사실과 데이터로, 감정형(F)은 공감과 가치로 소통하는 것이 
                  효과적입니다. 상대의 유형에 맞추세요.
                </p>
              </div>

              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4">
                <p className="text-purple-200 font-semibold mb-1">5. win-win을 찾아하세요</p>
                <p className="text-gray-300 text-sm">
                  갈등은 누가 이기는 문제가 아닙니다. 양측 모두 만족할 수 있는 
                  해결책을 함께 모색하세요.
                </p>
              </div>

              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4">
                <p className="text-purple-200 font-semibold mb-1">6. 전문가의 도움을 받으세요</p>
                <p className="text-gray-300 text-sm">
                  갈등이 너무 복잡하거나 오래 지속되면, 중재자나 전문가의 도움을 
                  받는 것도 좋은 방법입니다.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Author/Date */}
        <div className="border-t border-gray-800 pt-6 mb-10">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>작성일: 2026년 2월 20일</span>
            <span>카테고리: 커리어</span>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">관련 글</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/mbti-leadership" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-purple-400 transition-all">
                <h4 className="font-semibold text-white group-hover:text-purple-400 mb-1">
                  MBTI로 보는 리더십 스타일
                </h4>
                <p className="text-gray-400 text-sm">유형별 소통과 영향력</p>
              </div>
            </Link>
            <Link href="/blog/mbti-compatibility-truth" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
                <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">
                  MBTI 궁합의 진실
                </h4>
                <p className="text-gray-400 text-sm">통계적 분석으로 알아본 호환성</p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              나의 MBTI 유형으로 갈등 스타일 확인하기
            </h3>
            <p className="text-gray-400 mb-6">
              테스트로 나의 유형을 알아보고 갈등 관리 전략을 확인하세요.
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
