import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MBTI 사랑과 관계: 유형별 연애 패턴과 관계 구축법 | MBTI 블로그",
  description: "16가지 MBTI 유형별 연애 스타일과 사랑의 표현 방식을 분석합니다. 각 유형이 관계에서 어떻게 행동하는지, 더 깊은 유대를 형성하는 방법을 알아봅니다.",
  keywords: ["MBTI 연애", "유형별 연애 스타일", "MBTI 사랑", "관계 구축", "연애 패턴"],
  openGraph: {
    title: "MBTI 사랑과 관계: 유형별 연애 패턴과 관계 구축법",
    description: "16가지 MBTI 유형별 연애 스타일과 사랑의 표현 방식을 알아보세요.",
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
            <li className="text-white">MBTI 사랑과 관계</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">관계</span>
            <span className="text-gray-500 text-sm">11분 소요</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            MBTI 사랑과 관계: 유형별 연애 패턴과 관계 구축법
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            사랑은 모든 사람의 욕구이지만, 표현하고 경험하는 방식은 제각기 다릅니다. 
            MBTI 유형이 연애 스타일, 사랑의 언어, 관계에서의 필요에 어떻게 영향을 미치는지 알아봅니다.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
          <h2 className="text-lg font-bold text-white mb-4">목차</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#understanding-love" className="hover:text-white transition-colors">1. 사랑과 MBTI의 관계</a></li>
            <li><a href="#nt-types" className="hover:text-white transition-colors">2. 분석가 유형 (NT)의 사랑</a></li>
            <li><a href="#nf-types" className="hover:text-white transition-colors">3. 외교관 유형 (NF)의 사랑</a></li>
            <li><a href="#sj-types" className="hover:text-white transition-colors">4. 관리자 유형 (SJ)의 사랑</a></li>
            <li><a href="#sp-types" className="hover:text-white transition-colors">5. 탐험가 유형 (SP)의 사랑</a></li>
            <li><a href="#love-language" className="hover:text-white transition-colors">6. 유형별 사랑의 언어</a></li>
            <li><a href="#building-bonds" className="hover:text-white transition-colors">7. 더 깊은 유대 형성하기</a></li>
          </ul>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section id="understanding-love" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. 사랑과 MBTI의 관계</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              연애와 관계는 단순한 개인의 문제가 아닙니다. 우리가 누군가를 사랑하는 방식, 
              관계에서 필요로 하는 것, 그리고 파트너에게 보이는 행동은 우리의 성격과 깊이 연결되어 있습니다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              MBTI는 네 가지 주요 지각 기능을 기반으로 각 유형이 관계를 경험하는 방식을 설명합니다:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>외향(E) vs 내향(I)</strong>: 사회적 에너지와 친밀도 형성 방식</li>
              <li><strong>감각(S) vs 직관(N)</strong>: 파트너를 보는 관점과 관계의 우선순위</li>
              <li><strong>사고(T) vs 감정(F)</strong>: 의사결정 방식과 갈등 해결 접근법</li>
              <li><strong>판단(J) vs 인식(P)</strong>: 관계에서의 구조와 유연성</li>
            </ul>
            <div className="bg-pink-900/20 border-l-4 border-pink-500 p-4 my-6">
              <p className="text-pink-200 text-sm">
                <strong>핵심 포인트:</strong> 어떤 유형이 "좋은" 연인인 것은 아닙니다. 
                중요한 것은 자신의 유형을 이해하고, 파트너의 필요를 인식하며, 서로의 차이를 존중하는 것입니다.
              </p>
            </div>
          </section>

          <section id="nt-types" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 분석가 유형 (NT)의 사랑</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">INTJ - 전략가</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              INTJ는 연애에서도 전략적입니다. 이들은 깊은 관계를 형성하는 데 시간이 걸리지만, 
              한 번 정하면 매우 헌신적입니다. 감정 표현이 서투울 수 있지만, 행동으로 사랑을 증명합니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 행동을 통한 사랑, 지적 대화</li>
              <li><strong>관계에서 원하는 것:</strong> 지적 교감, 독립성 존중, 장기적 호환성</li>
              <li><strong>도전 과제:</strong> 감정 표현 어려움, 완벽주의로 인한 스트레스</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">INTP - 논리술사</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              INTP는 연애에서 이상주의적입니다. 완벽한 파트너를 찾으려 하고, 관계의 '
              왜'를 분석하려 합니다. 친밀한 관계에서는 내향적이고 수줍어 보일 수 있습니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 지적 교감, 공간 제공, 창의적 활동</li>
              <li><strong>관계에서 원하는 것:</strong> 자율성, 깊은 대화, 이해심</li>
              <li><strong>도전 과제:</strong> 감정적 연결 어려움, 우선순위 설정 어려움</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">ENTJ - 통솔자</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              ENTJ는 관계에서도 리더십을 발휘합니다. 명확한 기대를 가지고, 관계를 발전시키기 위해 
              적극적으로 노력합니다. 직접적이고 솔직한 편이지만, 이것이 파트너에게 피로울 수 있습니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 실질적 지원, 목표 설정, 존중</li>
              <li><strong>관계에서 원하는 것:</strong> 파트너의 성장 지원, 효율적인 소통</li>
              <li><strong>도전 과제:</strong> 지배적 태도, 감정적 부드러움 부족</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">ENTP - 변론가</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              ENTP는 연애에서 에너지가 넘치고, 지적 도전을 사랑합니다. 토론과 웃음을 통해 유대감을 형성하고, 
              파트너와 함께 새로운 경험을 추구합니다. 장기적 헌신은 어려운 편입니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 지적 대화, 새로운 경험, 유연성</li>
              <li><strong>관계에서 원하는 것:</strong> 지적 자극, 자유, 창의적 파트너</li>
              <li><strong>도전 과제:</strong> 장기적 헌신 어려움, 집중력 부족</li>
            </ul>
          </section>

          <section id="nf-types" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 외교관 유형 (NF)의 사랑</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">INFJ - 제창자</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFJ는 깊은 감정적 연결을 추구합니다. 질보다 양을 중요시하며, 진정한 친밀감을 원합니다. 
              이들은 연애에서 매우 헌신적이며, 종종 파트너의 필요를 자신의 것보다 앞에 놓습니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 질적인 시간, 깊은 대화, 헌신</li>
              <li><strong>관계에서 원하는 것:</strong> 깊은 감정적 연결, 의미 있는 관계</li>
              <li><strong>도전 과제:</strong> 자기 희생, 이상주의로 인한 실망</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">INFP - 중재자</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              INFP는 로맨틱하고 이상주의적입니다. 영혼의 동반자를 찾으려 하고, 깊은 감정적 연결을 소중히 합니다. 
              이들은 관계에서 진정성을 중요시하며, 가면 없이 행동할 수 있는 사람을 찾습니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 깊은 공감, 진정성, 창의적 표현</li>
              <li><strong>관계에서 원하는 것:</strong> 정서적 연결, 가치관의 공유</li>
              <li><strong>도전 과제:</strong> 현실 도피, 자기 가치 하락</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">ENFJ - 주인공</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              ENFJ는 연애에서도 타인을 돌보고 지원하는 성향을 유지합니다. 이들은 파트너의 잠재력을 보고 
              끌어올리며, 관계를 위해 헌신합니다. 그러나 타인의 기대를 맞추려하다 번아웃 될 수 있습니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 헌신, 확언, 깊은 대화</li>
              <li><strong>관계에서 원하는 것:</strong> 파트너의 성장, 감정적 교감</li>
              <li><strong>도전 과제:</strong> 과도한 헌신, 경계 설정 어려움</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">ENFP - 활동가</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
ENFP는 연애에서 열정적이고 매력적입니다. 새로운 경험을 함께 하기를 좋아하고, 
파트너에게 영감을 줍니다. 그러나 깊이 있는 감정적 연결보다는 표면적인 교류를 선호할 수 있습니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 새로운 경험, 확언, 유연성</li>
              <li><strong>관계에서 원하는 것:</strong> 지적 자극, 자유, 영감</li>
              <li><strong>도전 과제:</strong> 장기적 헌신 어려움, 산만함</li>
            </ul>
          </section>

          <section id="sj-types" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 관리자 유형 (SJ)의 사랑</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">ISTJ - 논리주의자</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
ISTJ는 관계에서 헌신적이고 신뢰할 수 있습니다. 이들은 약속을 잘 지키고, 
파트너를 돌보는 것을 자연스럽게 여깁니다. 감정 표현은 서투르지만, 행동으로 사랑을 보입니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 행동을 통한 사랑, 안정성, 헌신</li>
              <li><strong>관계에서 원하는 것:</strong> 안정성, 전통적인 가치, 신뢰</li>
              <li><strong>도전 과제:</strong> 감정 표현 어려움, 변화 저항</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">ISFJ - 수호자</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              ISFJ는 매우 헌신적이고 돌봐주는 파트너입니다. 파트너의 필요를 세심하게 파악하고, 
              희생적인 사랑을 합니다. 그러나 자신의 필요를 표현하는 것은 어려워합니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 돌봄, 헌신, 세세한 관심</li>
              <li><strong>관계에서 원하는 것:</strong> 안정성, 감사, 장기적 헌신</li>
              <li><strong>도전 과제:</strong> 자기 돌봄 부족, 경계 설정 어려움</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">ESTJ - 경영자</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              ESTJ는 관계에서도 조직적이고 실용적입니다. 명확한 기대를 가지고, 계획을 세우고 실행합니다. 
              전통적인 관계 모델을 선호하며, 파트너에게 질서를 원합니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 실질적 지원, 안정성, 전통</li>
              <li><strong>관계에서 원하는 것:</strong> 명확한 역할, 효율적 소통</li>
              <li><strong>도전 과제:</strong> 유연성 부족, 감정적 표현 어려움</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">ESFJ - 집정관</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
ESFJ는 사회적이고 돌봐주는 파트너입니다. 관계의 화목을 중시하고, 
파트너와 함께 사회적 활동을 즐깁니다. 타인의 기대에 민감하고, 인정받고자 합니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 돌봄, 인정, 사회적 활동</li>
              <li><strong>관계에서 원하는 것:</strong> 사회적 조화, 친밀감</li>
              <li><strong>도전 과제:</strong> 타인 기대에 영향, 자기 돌봄 부족</li>
            </ul>
          </section>

          <section id="sp-types" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 탐험가 유형 (SP)의 사랑</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">ISTP - 만능재주꾼</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
ISTP는 독립적이고 행동 지향적입니다. 감정 표현보다는 행동으로 사랑을 보이며, 
함께 활동하는 것을 좋아합니다. 깊은 감정적 연결보다는 표면적인 교류를 선호할 수 있습니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 행동을 통한 사랑, 함께 활동, 공간</li>
              <li><strong>관계에서 원하는 것:</strong> 자율성, 실용적 공유</li>
              <li><strong>도전 과제:</strong> 감정적 연결 어려움, 장기적 계획 부족</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">ISFP - 모험가</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
ISFP는 예술적이고 감성적입니다. 예술적 감각을 가지고, 아름다운 경험을 추구합니다. 
이들은 조용하지만 깊은 감정적 연결을 형성하며, 자신의 가치를 존중해 주는 파트너를 원합니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 깊은 공감, 함께 활동, 감각적 경험</li>
              <li><strong>관계에서 원하는 것:</strong> 자유, 진정성, 예술적 교감</li>
              <li><strong>도전 과제:</strong> 갈등 회피, 장기적 계획 어려움</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">ESTP - 사업가</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
ESTP는 에너지가 넘치고 행동 지향적입니다. 즉흥적이고 모험을 좋아하며, 
파트너와 함께 자극적인 경험을 추구합니다. 장기적인 관계보다 현재를 살아갑니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 함께 활동, 즉흥적 경험, 실용적 지원</li>
              <li><strong>관계에서 원하는 것:</strong> 에너지, 행동, 현재에 집중</li>
              <li><strong>도전 과제:</strong> 장기적 헌신 어려움, 감정 표현 부족</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">ESFP - 연예인</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
ESFP는 밝고 사회적이며, 연애에서 재미를 추구합니다. 파트너와 함께 즐기고, 
다른 사람들 앞에서 사랑을 표현하는 것을 좋아합니다. 현재를 즐기는 것을 중요시합니다.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>사랑 언어:</strong> 함께 활동, 인정, 사회적 경험</li>
              <li><strong>관계에서 원하는 것:</strong> 재미, 사회적 교제, 에너지</li>
              <li><strong>도전 과제:</strong> 장기적 계획 어려움, 깊은 감정 연결 부족</li>
            </ul>
          </section>

          <section id="love-language" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. 유형별 사랑의 언어</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              게리 채프먼의 5가지 사랑의 언어 이론을 MBTI와 결합하면, 각 유형이 사랑을 표현하고 받는 방식이 더 명확해집니다.
            </p>
            
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">유형별 주요 사랑의 언어</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-pink-400 mb-2">분석가 유형 (NT)</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>행동을 통한 사랑</li>
                    <li>질적인 대화</li>
                    <li>함께 성장하기</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-400 mb-2">외교관 유형 (NF)</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>확언의 말</li>
                    <li>질적인 시간</li>
                    <li>깊은 감정적 연결</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-400 mb-2">관리자 유형 (SJ)</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>행동을 통한 사랑</li>
                    <li>안정성</li>
                    <li>헌신과 전통</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-400 mb-2">탐험가 유형 (SP)</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>함께 활동하기</li>
                    <li>새로운 경험</li>
                    <li>실용적 도움</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="building-bonds" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. 더 깊은 유대 형성하기</h2>
            
            <div className="space-y-4">
              <div className="bg-pink-900/20 border-l-4 border-pink-500 p-4">
                <p className="text-pink-200 font-semibold mb-1">1. 파트너의 사랑의 언어를 배우세요</p>
                <p className="text-gray-300 text-sm">
                  당신의 사랑의 언어와 다를 수 있습니다. 파트너가 사랑을 표현하고 받기를 원하는 방식을 이해하면, 
                  더 깊은 연결을 형성할 수 있습니다.
                </p>
              </div>

              <div className="bg-pink-900/20 border-l-4 border-pink-500 p-4">
                <p className="text-pink-200 font-semibold mb-1">2. 차이를 존중하세요</p>
                <p className="text-gray-300 text-sm">
당신과 다른 유형의 파트너와 관계를 맺으면, 그들의 필요와 방식이 너와 다를 것입니다. 
이것을 문제로 보기보다는 학습의 기회로 보세요.
                </p>
              </div>

              <div className="bg-pink-900/20 border-l-4 border-pink-500 p-4">
                <p className="text-pink-200 font-semibold mb-1">3. 열린 소통을 하세요</p>
                <p className="text-gray-300 text-sm">
                  관계에서 문제와 필요를 솔직하게 표현하는 것이 중요합니다. 특히 감정형(F) 파트너에게는 
                  사고형(T) 파트너보다 감정적 표현이 더 중요할 수 있습니다.
                </p>
              </div>

              <div className="bg-pink-900/20 border-l-4 border-pink-500 p-4">
                <p className="text-pink-200 font-semibold mb-1">4. 개인의 공간을 존중하세요</p>
                <p className="text-gray-300 text-sm">
내향형(I) 파트너는 혼자만의 시간이 필요합니다. 외향형(E) 파트너는 사회적 시간이 필요합니다. 
서로의 필요를 이해하고 조율하세요.
                </p>
              </div>

              <div className="bg-pink-900/20 border-l-4 border-pink-500 p-4">
                <p className="text-pink-200 font-semibold mb-1">5. 함께 성장하세요</p>
                <p className="text-gray-300 text-sm">
좋은 관계는 양쪽 모두의 개인적 성장을 지지합니다. MBTI는 자기 이해의 도구이며, 
이를 바탕으로 더 나은 파트너가 될 수 있습니다.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Author/Date */}
        <div className="border-t border-gray-800 pt-6 mb-10">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>작성일: 2026년 2월 20일</span>
            <span>카테고리: 관계</span>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">관련 글</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/mbti-compatibility-truth" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
                <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">
                  MBTI 궁합의 진실
                </h4>
                <p className="text-gray-400 text-sm">통계적 분석으로 알아본 호환성</p>
              </div>
            </Link>
            <Link href="/blog/stress-management-by-type" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-green-400 transition-all">
                <h4 className="font-semibold text-white group-hover:text-green-400 mb-1">
                  유형별 스트레스 관리
                </h4>
                <p className="text-gray-400 text-sm">MBTI로 알아보는 나만의 힐링법</p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              나의 MBTI 유형으로 관계 스타일 확인하기
            </h3>
            <p className="text-gray-400 mb-6">
              테스트로 나의 유형을 알아보고 연애 스타일을 확인하세요.
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
