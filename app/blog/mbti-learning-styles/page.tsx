import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MBTI 학습 스타일: 유형별로 가장 효과적인 공부법 | MBTI 블로그",
  description: "16가지 MBTI 유형별로 가장 효과적인 학습 방법을 분석합니다. 각 유형의 장점을 살린 맞춤형 공부 전략과 학습 도우니를 알아봅니다.",
  keywords: ["MBTI 학습", "유형별 공부법", "학습 스타일", "MBTI 교육", "효과적인 공부"],
  openGraph: {
    title: "MBTI 학습 스타일: 유형별로 가장 효과적인 공부법",
    description: "16가지 MBTI 유형별 맞춤형 학습 방법을 알아보세요.",
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
            <li className="text-white">MBTI 학습 스타일</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">심리학</span>
            <span className="text-gray-500 text-sm">10분 소요</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            MBTI 학습 스타일: 유형별로 가장 효과적인 공부법
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            모든 사람이 같은 방식으로 배우는 것은 아닙니다. MBTI 유형에 따라 선호하는 학습 방법과 
            가장 효과적인 공부가 다릅니다. 당신의 유형에 맞는 학습 전략을 알아보세요.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
          <h2 className="text-lg font-bold text-white mb-4">목차</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#learning-basics" className="hover:text-white transition-colors">1. 학습과 MBTI의 기초</a></li>
            <li><a href="#nt-learners" className="hover:text-white transition-colors">2. 분석가 유형 (NT)의 학습</a></li>
            <li><a href="#nf-learners" className="hover:text-white transition-colors">3. 외교관 유형 (NF)의 학습</a></li>
            <li><a href="#sj-learners" className="hover:text-white transition-colors">4. 관리자 유형 (SJ)의 학습</a></li>
            <li><a href="#sp-learners" className="hover:text-white transition-colors">5. 탐험가 유형 (SP)의 학습</a></li>
            <li><a href="#study-tips" className="hover:text-white transition-colors">6. 유형별 학습 팁</a></li>
            <li><a href="#optimal-environment" className="hover:text-white transition-colors">7. 최적의 학습 환경</a></li>
          </ul>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section id="learning-basics" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. 학습과 MBTI의 기초</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              학습은 단순히 정보를 받는 것이 아닙니다. 각 사람은 정보를 처리하고, 저장하고, 적용하는 
              방식이 다릅니다. MBTI는 이러한 차이를 이해하는 데 도움을 주는 프레임워크입니다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              학습과 관련된 MBTI의 네 가지 지각 기능:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>외향(E) vs 내향(I)</strong>: 사회적 학습 환경 선호도, 학습 파트너 필요 여부</li>
              <li><strong>감각(S) vs 직관(N)</strong>: 구체적 사실 vs 개념적 이해, 실용적 적용 vs 이론적 탐구</li>
              <li><strong>사고(T) vs 감정(F)</strong>: 논리적 분석 vs 개인적 의미, 객관적 기준 vs 주관적 평가</li>
              <li><strong>판단(J) vs 인식(P)</strong>: 구조화된 학습 vs 유연한 탐구, 계획적 vs 즉흥적</li>
            </ul>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-200 text-sm">
<strong>핵심 포인트:</strong> 자신의 학습 스타일을 이해하면 더 효율적으로 공부하고, 
약점을 보완하며, 장점을 최대화할 수 있습니다.
              </p>
            </div>
          </section>

          <section id="nt-learners" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 분석가 유형 (NT)의 학습</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
분석가 유형은 지적 도전을 좋아하고, 깊이 있는 이해를 추구합니다. 이들은 단순히 무엇을 배우는지가 아니라 
왜 그것이 되는지 알고 싶어 합니다.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">INTJ - 건축가</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 장기적인 목표를 가지고 체계적으로 학습합니다. 
                복잡한 시스템을 이해하는 것을 좋아하며, 효율적인 방법을 추구합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
<strong>최적의 공부법:</strong> 독학, 자기 주도 학습, 프로젝트 기반 학습. 
교과서의 전체 그림을 먼저 파악한 후 세부 사항으로 진행.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 온라인 강의, 논리적 퍼즐, 전략 게임
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">INTP - 논리술사</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 호기심이 왕입니다. 흥미로운 주제는 끝없이 탐구하지만, 
                지루한 과목은 어려워합니다. 이론적 이해에 강합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 토론과 질의응답, 독립적 연구, 다양한 출처 탐구. 
                개념을 자신의 방식으로 재해석하는 것이 좋습니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 학술 논문, 다큐멘터리, 온라인 포럼
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ENTJ - 통솔자</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 목표 지향적이고 효율적입니다. 빠른 의사결정과 실행을 좋아하며, 
                명확한 결과물을 원합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 명확한 목표 설정, 체계적인 계획, 경쟁적 환경. 
                리더십 역할이나 프로젝트 관리와 결합된 학습이 효과적입니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 목표 설정 앱, 스터디 그룹, 멘토링
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ENTP - 변론가</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 다양한 주제를 동시에 탐구합니다. 토론과 브레인스토밍을 통해 
                배우는 것을 좋아하며, 새로운 아이디어에 열광합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
<strong>최적의 공부법:</strong> 토론형 학습, 프로젝트 기반 학습, 학제 간 탐구. 
경쟁이나 게임화된 학습도 효과적입니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 디베이트 클럽, 브레인스토밍 앱, 퀴즈 게임
              </p>
            </div>
          </section>

          <section id="nf-learners" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 외교관 유형 (NF)의 학습</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              외교관 유형은 개인적 의미와 가치관을 학습과 연결짓습니다. 이들은 학습이 개인의 성장과 
              다른 사람에 대한 이해에 어떻게 기여하는지 중요시합니다.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">INFJ - 제창자</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 깊은 통찰을 추구합니다. 표면적인 정보보다 근본적인 의미를 
                이해하려 하고, 학습이 다른 사람에게 어떻게 도움이 되는지 알고 싶어 합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 독학, 글쓰기를 통한 학습, 명상과의 결합. 
                개인적인 연결을 맺을 수 있는 주제를 선호합니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 일기, 저널링, 심리학/철학 서적
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">INFP - 중재자</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 창의적이고 이상주의적입니다. 개인적으로 의미 있는 주제에 
                열정을 느끼며, 자유로운 탐구를 좋아합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 창의적 표현, 예술적 통합, 자신의 속도와 방식대로 학습. 
                의무감보다 영감에 의해 학습하는 것이 효과적입니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 예술 활동, 창작물, 창의적 글쓰기 도구
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ENFJ - 주인공</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 다른 사람을 가르치는 것을 통해 배웁니다. 사회적 학습 환경을 
                선호하며, 다른 사람의 성장에 기여하는 것을 좋아합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 스터디 그룹, 튜토링, 그룹 토론. 
                다른 사람을 가르치는 것이 가장 효과적인 학습 방법입니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 스터디 그룹, 멘토링 플랫폼, 그룹 학습 앱
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ENFP - 활동가</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 에너지가 넘치고 새로운 것을 탐구합니다. 다양한 주제를 
                빠르게 학습하지만, 깊이 있게 파고들기는 어려워합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 대화형 학습, 새로운 경험, 프로젝트 기반 학습. 
                다양한 방식으로 정보를 제시받으면 집중력이 올라갑니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 인터랙티브 강의, 게임화 학습, 토론
              </p>
            </div>
          </section>

          <section id="sj-learners" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 관리자 유형 (SJ)의 학습</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              관리자 유형은 체계적이고 실용적인 학습을 선호합니다. 이들은 전통적인 학습 방법에 
              익숙하며, 명확한 구조와 기대를 가지고 싶어 합니다.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">ISTJ - 논리주의자</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 근면하고 체계적입니다. 계획에 따라 차근차근 학습하며, 
                검증된 방법을 선호합니다. 세부 사항을 중요시합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 체계적인 커리큘럼, 반복 학습, 실용적 적용. 
                전통적인 학습 방법(교과서, 문제집)이 효과적입니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 플래너, 문제집, 체크리스트
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ISFJ - 수호자</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 성실하고 세부 사항에 주의를 기울입니다. 다른 사람을 
                도와주는 학습(튜터링)을 통해 잘 배웁니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 일대일 학습, 실용적 예제, 조용한 환경. 
                타인을 가르치면서 자신의 학습을 깊이 있게 합니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 복습 노트, 플래시카드, 학습 파트너
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ESTJ - 경영자</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 효율적이고 결과 지향적입니다. 명확한 목표를 가지고 
                체계적으로 진행하며, 실제 적용 가능한 것을 선호합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 구조화된 계획, 실용적 프로젝트, 경쟁적 환경. 
                빠른 진도와 명확한 피드백을 원합니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 목표 설정 도구, 프로젝트 관리, 성과 추적
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ESFJ - 집정관</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 사회적이고 협력적입니다. 다른 사람과 함께 학습하는 것을 
                좋아하며, 인정과 격려에 의해 동기가 부여됩니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 스터디 그룹, 협력적 학습, 실용적 적용. 
                다른 사람과 함께 목표를 설정하고 진행하는 것이 효과적입니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 그룹 스터디, 플래너, 격려 시스템
              </p>
            </div>
          </section>

          <section id="sp-learners" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 탐험가 유형 (SP)의 학습</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              탐험가 유형은 실용적이고 경험적 학습을 선호합니다. 이들은 이론보다 실천을, 
              책보다 경험을 통해 배우는 것을 좋아합니다.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">ISTP - 만능재주꾼</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 실용적이고 분석적입니다. 직접 해보면서 배우는 것을 
                좋아하며, 복잡한 문제를 해결하는 데 재능이 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 실험적 학습, 실습, 문제 해결 중심. 
                손으로 직접 만져보며 학습하는 것이 가장 효과적입니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 실험 키트, 시뮬레이션, 실습 도구
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ISFP - 모험가</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 예술적이고 감각적입니다. 예술적 감각을 가지고 있으며, 
                아름답게 학습하는 것을 선호합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 창의적 통합, 예술적 표현, 조용하고 아름다운 환경. 
                개인적으로 의미 있는 방식으로 학습합니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 예술 도구, 디자인 도구, 자연 환경
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ESTP - 사업가</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 에너지가 넘치고 행동 지향적입니다. 빠른 학습을 
                선호하며, 실용적이고 즉시 적용 가능한 것을 좋아합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 대화형 학습, 실습 중심, 경쟁적 환경. 
                즉시 피드백을 받으며 빠르게 진행하는 것이 효과적입니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 대화형 강의, 실습 워크숍, 게임
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">ESFP - 연예인</h3>
            <div className="bg-black/20 rounded-xl p-5 border border-white/10 mb-4">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>학습 특성:</strong> 밝고 사회적이며, 경험을 통해 배웁니다. 표현하고 
                보여주는 것을 좋아하며, 재미있는 학습을 선호합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong>최적의 공부법:</strong> 그룹 활동, 발표, 역동적 학습. 
                다른 사람들과 함께하고 에너지 있는 환경에서 잘 배웁니다.
              </p>
              <p className="text-green-400 text-sm">
                <strong>권장 도구:</strong> 그룹 프로젝트, 발표 도구, 게임화 학습
              </p>
            </div>
          </section>

          <section id="study-tips" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. 유형별 학습 팁</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-900/20 rounded-xl p-5 border border-blue-500/30">
                <h3 className="font-bold text-blue-400 mb-2">E를 I로 바꾸기</h3>
                <p className="text-gray-300 text-sm">
                  외향형(E)은 사회적 학습을 선호하지만, 가끔은 조용한 환경에서 
                  집중해보세요. 내향형(I)은 반대입니다.
                </p>
              </div>
              
              <div className="bg-green-900/20 rounded-xl p-5 border border-green-500/30">
                <h3 className="font-bold text-green-400 mb-2">N과 S의 균형</h3>
                <p className="text-gray-300 text-sm">
                  직관형(N)은 큰 그림을 보지만, 구체적 사실도 확인하세요. 
                  감각형(S)은 세부 사항에 집중하면서도 전체 맥락을 놓치지 마세요.
                </p>
              </div>
              
              <div className="bg-purple-900/20 rounded-xl p-5 border border-purple-500/30">
                <h3 className="font-bold text-purple-400 mb-2">T와 F의 조화</h3>
                <p className="text-gray-300 text-sm">
                  사고형(T)은 논리적 분석에 집중하지만, 감정적 의미도 생각해 보세요. 
                  감정형(F)은 개인적 연결 이외에도 객관적 평가도 중요합니다.
                </p>
              </div>
              
              <div className="bg-orange-900/20 rounded-xl p-5 border border-orange-500/30">
                <h3 className="font-bold text-orange-400 mb-2">J와 P의 절충</h3>
                <p className="text-gray-300 text-sm">
                  판단형(J)은 계획이 중요하지만, 유연성도 필요하다. 
                  인식형(P)은 자유로우나 구조를 조금 더 도입해보세요.
                </p>
              </div>
            </div>
          </section>

          <section id="optimal-environment" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. 최적의 학습 환경</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              학습 환경도 성과에 큰 영향을 미칩니다. 자신의 유형에 맞는 환경을 만들어보세요.
            </p>
            
            <div className="space-y-4">
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">조용한 공간 vs 활동적인 공간</p>
                <p className="text-gray-300 text-sm">
                  내향형(I)은 조용한 개인 공간에서, 외향형(E)은 카페나스터디 그룹 등 활동적인 환경에서 더 잘 집중합니다.
                </p>
              </div>

              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">구조 vs 유연성</p>
                <p className="text-gray-300 text-sm">
                  판단형(J)은 명확한 계획과 일정이, 인식형(P)은 유연하고 즉흥적인 학습 환경이 더 효과적입니다.
                </p>
              </div>

              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">디지털 vs 아날로그</p>
                <p className="text-gray-300 text-sm">
                  직관형(N)은 디지털 도구를 활용한 창의적 학습을, 감각형(S)은 필기나 실물 도구를 활용한 구체적 학습을 선호합니다.
                </p>
              </div>

              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4">
                <p className="text-blue-200 font-semibold mb-1">독학 vs 협력</p>
                <p className="text-gray-300 text-sm">
                  유형에 따라 독학이나 그룹 학습 중 자신에게 맞는 방법을 선택하세요. 경우에 따라 두 가지 모두 시도해보세요.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Author/Date */}
        <div className="border-t border-gray-800 pt-6 mb-10">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>작성일: 2026년 2월 20일</span>
            <span>카테고리: 심리학</span>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-white mb-4">관련 글</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/mbti-scientific-basis" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
                <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">
                  MBTI의 과학적 기반과 한계
                </h4>
                <p className="text-gray-400 text-sm">심리학자들이 말하는 진실</p>
              </div>
            </Link>
            <Link href="/blog/mbti-career-correlation" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-purple-400 transition-all">
                <h4 className="font-semibold text-white group-hover:text-purple-400 mb-1">
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
              나의 MBTI 유형으로 학습 스타일 확인하기
            </h3>
            <p className="text-gray-400 mb-6">
              테스트로 나의 유형을 알아보고 맞춤형 학습 전략을 확인하세요.
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
