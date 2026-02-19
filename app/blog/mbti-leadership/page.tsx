import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MBTI로 보는 리더십 스타일: 유형별 소통과 영향력 | MBTI 블로그",
  description: "16가지 MBTI 유형별로 다른 리더십 스타일과 소통 방식을 분석합니다. 팀을 효과적으로 이끌기 위한 유형별 맞춤 전략을 알아봅니다.",
  keywords: ["MBTI 리더십", "리더십 스타일", "MBTI 유형별 리더십", "팀 리더십", "소통 방식"],
  openGraph: {
    title: "MBTI로 보는 리더십 스타일: 유형별 소통과 영향력",
    description: "16가지 MBTI 유형별 리더십 스타일과 효과적인 팀 관리 전략을 알아보세요.",
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
            <li className="text-white">MBTI로 보는 리더십 스타일</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">커리어</span>
            <span className="text-gray-500 text-sm">10분 소요</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            MBTI로 보는 리더십 스타일: 유형별 소통과 영향력
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            리더십은 한 가지 방식으로만 작동하지 않습니다. MBTI 성격 유형에 따라 리더십 스타일, 
            소통 방식, 팀 관리 접근법이 크게 달라집니다. 각 유형의 강점을 살린 효과적인 리더십 전략을 알아봅니다.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
          <h2 className="text-lg font-bold text-white mb-4">목차</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#overview" className="hover:text-white transition-colors">1. 리더십과 MBTI의 관계</a></li>
            <li><a href="#analysts" className="hover:text-white transition-colors">2. 분석가 유형 (NT): 전략적 리더</a></li>
            <li><a href="#diplomats" className="hover:text-white transition-colors">3. 외교관 유형 (NF): 비전 제시자</a></li>
            <li><a href="#sentinels" className="hover:text-white transition-colors">4. 관리자 유형 (SJ): 안정적 리더</a></li>
            <li><a href="#explorers" className="hover:text-white transition-colors">5. 탐험가 유형 (SP): 혁신적 리더</a></li>
            <li><a href="#communication" className="hover:text-white transition-colors">6. 유형별 소통 전략</a></li>
            <li><a href="#tips" className="hover:text-white transition-colors">7. 효과적인 리더십을 위한 조언</a></li>
          </ul>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. 리더십과 MBTI의 관계</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              리더십은 타고난 것이 아니라 개발할 수 있는 기술입니다. 하지만 각 성격 유형은 자연스럽게 
              특정 리더십 스타일에 더 편안함을 느끼고, 그 스타일에서 더 효과적일 수 있습니다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              MBTI는 리더가 자신의 강점을 인식하고, 약점을 보완하며, 팀원들의 다양한 성격 유형을 이해하는 
              데 도움을 줍니다. 효과적인 리더는 자신의 스타일을 알고, 필요할 때 다른 접근 방식을 채택할 수 있습니다.
            </p>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-200 text-sm">
                <strong>핵심 포인트:</strong> 모든 MBTI 유형이 리더가 될 수 있습니다. 
                중요한 것은 자신의 유형에 맞는 리더십 스타일을 개발하고, 팀의 다양성을 존중하는 것입니다.
              </p>
            </div>
          </section>

          <section id="analysts" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 분석가 유형 (NT): 전략적 리더</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">2.1 INTJ (건축가)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 비전 제시형, 장기 전략가
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>명확한 장기 비전을 제시하고 체계적으로 실행</li>
              <li>효율성과 혁신을 중시하는 리더십</li>
              <li>팀원의 자율성을 존중하되, 명확한 목표와 기준 제시</li>
              <li>감정보다 논리와 데이터에 기반한 의사결정</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 팀원의 감정적 필요를 더 고려하고, 피드백을 구하는 습관을 기르세요.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">2.2 INTP (논리술사)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 혁신 지향형, 문제 해결자
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>복잡한 문제를 창의적으로 해결하는 능력</li>
              <li>팀원의 아이디어를 자유롭게 표현하도록 장려</li>
              <li>유연하고 적응력 있는 리더십</li>
              <li>전통보다 혁신을 선호</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 일정 관리와 실행 계획을 더 체계화하고, 팀원과의 정기적 소통을 늘리세요.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">2.3 ENTJ (통솔자)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 카리스마형, 목표 지향적
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>명확한 목표 설정과 빠른 의사결정</li>
              <li>팀을 효율적으로 조직하고 동기부여</li>
              <li>도전적 목표를 설정하고 달성하는 능력</li>
              <li>장기 전략과 단기 실행을 균형있게 관리</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 팀원의 감정과 의견을 더 경청하고, 칭찬과 인정을 자주 표현하세요.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">2.4 ENTP (변론가)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 혁신 촉진형, 변화 주도자
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>새로운 아이디어와 기회를 적극적으로 추진</li>
              <li>팀의 창의성과 혁신을 이끌어냄</li>
              <li>유연하고 적응력 있는 리더십</li>
              <li>에너지 넘치는 동기부여 능력</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 한 번에 너무 많은 프로젝트를 시작하지 말고, 완료까지 책임을 지는 습관을 기르세요.
            </p>
          </section>

          <section id="diplomats" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 외교관 유형 (NF): 비전 제시자</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">3.1 INFJ (제창자)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 비전 공유형, 개인 성장 촉진자
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>팀원의 잠재력을 보고 발전시키는 능력</li>
              <li>명확한 가치와 비전을 제시</li>
              <li>개인의 성장과 팀의 목표를 연결</li>
              <li>공감 능력으로 팀의 분위기를 조성</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 어려운 결정을 내릴 때 감정보다 논리도 고려하고, 자신의 필요도 표현하세요.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">3.2 INFP (중재자)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 가치 중심형, 협력 촉진자
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>팀원의 개성을 존중하고 자율성 부여</li>
              <li>공동의 가치와 목적을 강조</li>
              <li>창의적이고 혁신적인 환경 조성</li>
              <li>갈등 해결과 조화를 중시</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 비판과 어려운 피드백을 주는 것을 배우고, 구조와 일정을 더 명확히 하세요.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">3.3 ENFJ (주인)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 카리스마형, 팀 빌더
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>팀원의 동기부여와 성장에 뛰어남</li>
              <li>명확한 비전을 공유하고 팀을 하나로 통합</li>
              <li>소통 능력이 뛰어나고 갈등 해결에 능함</li>
              <li>팀의 분위기와 문화를 긍정적으로 조성</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 모든 사람을 만족시키려 하지 말고, 때로는 어려운 결정을 내리는 용기를 가지세요.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">3.4 ENFP (활동가)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 영감 주는형, 혁신 촉진자
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>에너지 넘치는 열정으로 팀을 동기부여</li>
              <li>새로운 아이디어와 가능성을 제시</li>
              <li>팀원의 창의성을 자유롭게 발휘하도록 장려</li>
              <li>유연하고 적응력 있는 리더십</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 집중력과 지속성을 기르고, 세부사항과 실행 계획을 더 체계화하세요.
            </p>
          </section>

          <section id="sentinels" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 관리자 유형 (SJ): 안정적 리더</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">4.1 ISTJ (논리주의자)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 체계적 관리형, 신뢰성 중심
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>명확한 절차와 기준을 설정하고 준수</li>
              <li>신뢰할 수 있고 일관된 리더십</li>
              <li>세부사항을 꼼꼼히 관리하고 품질을 보장</li>
              <li>전통과 검증된 방법을 중시</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 변화와 혁신에 더 개방적이고, 팀원의 감정적 필요를 더 고려하세요.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">4.2 ISFJ (수호자)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 지원 중심형, 팀 케어
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>팀원의 개인적 필요를 세심하게 배려</li>
              <li>안정적이고 지지적인 환경 조성</li>
              <li>팀의 조화와 협력을 중시</li>
              <li>실용적이고 현실적인 해결책 제시</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 자신의 의견을 더 적극적으로 표현하고, 변화에 더 유연하게 대응하세요.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">4.3 ESTJ (경영자)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 효율 지향형, 실행 중심
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>명확한 목표와 역할 분담으로 효율성 극대화</li>
              <li>빠른 의사결정과 실행력</li>
              <li>체계적이고 조직적인 관리</li>
              <li>결과와 성과를 중시</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 팀원의 감정과 의견을 더 경청하고, 유연성과 창의성을 더 인정하세요.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">4.4 ESFJ (집정관)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 협력 촉진형, 팀 통합자
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>팀의 조화와 협력을 중시</li>
              <li>명확한 소통과 피드백 제공</li>
              <li>팀원의 성과를 인정하고 칭찬</li>
              <li>실용적이고 현실적인 접근</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 갈등을 회피하지 말고 직접적으로 다루며, 때로는 어려운 결정을 내리는 용기를 가지세요.
            </p>
          </section>

          <section id="explorers" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 탐험가 유형 (SP): 혁신적 리더</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">5.1 ISTP (만능재주꾼)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 실용적 문제 해결형, 자율성 존중
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>실용적이고 효율적인 해결책 제시</li>
              <li>팀원의 자율성과 독립성을 존중</li>
              <li>위기 상황에서 침착하게 대응</li>
              <li>유연하고 적응력 있는 리더십</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 장기 계획을 더 세우고, 팀원과의 정기적 소통을 늘리세요.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">5.2 ISFP (모험가)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 개인 중심형, 창의적 환경 조성
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>팀원의 개성과 창의성을 존중</li>
              <li>유연하고 개방적인 환경 조성</li>
              <li>협력적이고 지지적인 리더십</li>
              <li>현재에 집중하고 실용적 접근</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 구조와 계획을 더 명확히 하고, 어려운 피드백을 주는 것을 배우세요.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">5.3 ESTP (사업가)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 행동 지향형, 위기 관리자
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>빠른 의사결정과 즉각적인 실행</li>
              <li>위기 상황에서 효과적으로 대응</li>
              <li>에너지 넘치고 동기부여하는 능력</li>
              <li>실용적이고 현실적인 접근</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 장기 계획을 더 세우고, 팀원의 감정과 의견을 더 고려하세요.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">5.4 ESFP (연예인)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>리더십 스타일:</strong> 열정 주입형, 분위기 메이커
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>팀의 에너지와 열정을 불러일으킴</li>
              <li>긍정적이고 활기찬 분위기 조성</li>
              <li>팀원의 개성을 인정하고 장려</li>
              <li>유연하고 적응력 있는 리더십</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>개선 포인트:</strong> 장기 계획과 구조를 더 세우고, 어려운 결정을 내리는 것을 배우세요.
            </p>
          </section>

          <section id="communication" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. 유형별 소통 전략</h2>
            
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">6.1 사고형(T) vs 감정형(F)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">사고형 리더가 감정형 팀원과 소통할 때:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>논리뿐만 아니라 가치와 영향도 언급</li>
                    <li>팀원의 감정을 인정하고 공감 표현</li>
                    <li>개인적 관계를 중시하는 점 이해</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">감정형 리더가 사고형 팀원과 소통할 때:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>명확하고 직접적인 피드백 제공</li>
                    <li>논리와 데이터로 의사결정 설명</li>
                    <li>효율성과 객관성을 중시하는 점 이해</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">6.2 내향형(I) vs 외향형(E)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">내향형 리더가 외향형 팀원과 소통할 때:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>토론과 브레인스토밍 시간을 충분히 제공</li>
                    <li>팀원의 아이디어를 적극적으로 경청</li>
                    <li>에너지 넘치는 소통 방식을 존중</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">외향형 리더가 내향형 팀원과 소통할 때:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>사전에 주제를 알려주고 준비 시간 제공</li>
                    <li>일대일 소통 기회를 자주 마련</li>
                    <li>침묵을 존중하고 강요하지 않음</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="tips" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. 효과적인 리더십을 위한 조언</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">1. 자신의 스타일을 인식하세요</p>
                <p className="text-gray-300 text-sm">
                  자신의 MBTI 유형과 자연스러운 리더십 스타일을 이해하면, 강점을 활용하고 약점을 보완할 수 있습니다.
                </p>
              </div>

              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">2. 팀의 다양성을 존중하세요</p>
                <p className="text-gray-300 text-sm">
                  팀원들은 각자 다른 성격 유형을 가지고 있습니다. 각 유형의 강점을 인정하고, 
                  다양한 소통 방식을 이해하는 것이 효과적인 리더십의 핵심입니다.
                </p>
              </div>

              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">3. 유연성을 기르세요</p>
                <p className="text-gray-300 text-sm">
                  상황과 팀원에 따라 리더십 스타일을 조정할 수 있는 능력이 중요합니다. 
                  한 가지 방식에만 집착하지 말고, 필요에 따라 다른 접근 방식을 시도하세요.
                </p>
              </div>

              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">4. 지속적으로 학습하세요</p>
                <p className="text-gray-300 text-sm">
                  리더십은 계속 발전하는 기술입니다. 피드백을 구하고, 자신의 리더십을 평가하며, 
                  새로운 방법을 배우는 것을 두려워하지 마세요.
                </p>
              </div>

              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">5. 팀원의 성장을 지원하세요</p>
                <p className="text-gray-300 text-sm">
                  효과적인 리더는 팀원의 성장과 발전을 돕습니다. 각자의 강점을 인정하고, 
                  성장 기회를 제공하며, 필요한 지원을 아끼지 않습니다.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Author/Date */}
        <div className="border-t border-gray-800 pt-6 mb-10">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>작성일: 2026년 2월 18일</span>
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
            <Link href="/blog/mbti-career-correlation" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
                <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">
                  MBTI와 진로 적성의 상관관계
                </h4>
                <p className="text-gray-400 text-sm">통계로 증명되는 커리어 적합도</p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              나의 MBTI 유형을 알아보세요
            </h3>
            <p className="text-gray-400 mb-6">
              40개의 과학적 질문으로 정확한 성격 유형을 분석합니다.
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
