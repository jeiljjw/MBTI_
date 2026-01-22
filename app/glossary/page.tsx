"use client";

import Link from "next/link";

const glossaryTerms = [
  // 기본 개념
  {
    term: "MBTI (Myers-Briggs Type Indicator)",
    definition: "심리학자 칼 융의 심리 유형론을 기반으로 캐서린 브릭스와 이사벨 마이어스가 개발한 성격 유형 검사 도구입니다. 사람들의 성격을 16가지 유형으로 분류하여 각 유형의 특징과 행동 패턴을 설명합니다.",
    category: "기본 개념"
  },
  {
    term: "성격 유형 (Personality Type)",
    definition: "4가지 이분법(E/I, S/N, T/F, J/P)의 조합으로 만들어지는 16가지 고유한 성격 패턴입니다. 각 유형은 고유한 강점, 약점, 행동 방식, 의사소통 스타일을 가지고 있습니다.",
    category: "기본 개념"
  },
  {
    term: "선호도(Preference)",
    definition: "각 이분법에서 어느 쪽을 더 선호하는지를 나타내는 정도입니다. 절대적인 것이 아니라 상대적인 개념으로, 상황에 따라 유연하게 변할 수 있습니다.",
    category: "기본 개념"
  },
  {
    term: "융의 심리 유형론",
    definition: "MBTI의 기초가 되는 이론으로, 칼 융이 제시한 심리적 기능과 태도의 개념입니다. 인식 기능(감각/직관)과 판단 기능(사고/감정), 그리고 태도(외향/내향)를 기반으로 합니다.",
    category: "역사 및 이론"
  },

  // 4가지 이분법
  {
    term: "외향형 (E) vs 내향형 (I)",
    definition: "외향형은 사람들과의 상호작용에서 에너지를 얻고, 외부 세계에 더 관심이 많습니다. 내향형은 혼자만의 시간에서 에너지를 얻고, 내부 세계에 더 집중합니다.",
    category: "4가지 이분법"
  },
  {
    term: "감각형 (S) vs 직관형 (N)",
    definition: "감각형은 현재의 사실과 구체적인 정보를 선호하며 실용적입니다. 직관형은 미래의 가능성과 추상적인 개념, 패턴을 선호하며 창의적입니다.",
    category: "4가지 이분법"
  },
  {
    term: "사고형 (T) vs 감정형 (F)",
    definition: "사고형은 논리적이고 객관적인 판단을 우선하며 진실과 공정성을 중시합니다. 감정형은 사람들의 감정과 가치를 고려한 판단을 우선하며 조화를 중시합니다.",
    category: "4가지 이분법"
  },
  {
    term: "판단형 (J) vs 인식형 (P)",
    definition: "판단형은 계획적이고 체계적인 접근을 선호하며 마감 기한을 준수합니다. 인식형은 유연하고 즉흥적인 접근을 선호하며 새로운 가능성을 탐구합니다.",
    category: "4가지 이분법"
  },

  // 인지 기능
  {
    term: "인지 기능 (Cognitive Functions)",
    definition: "MBTI에서 각 유형이 정보를 처리하고 판단하는 방식을 설명하는 8가지 기능입니다. 감각(Se/Si), 직관(Ne/Ni), 사고(Te/Ti), 감정(Fe/Fi)으로 나뉩니다.",
    category: "인지 기능"
  },
  {
    term: "주기능 (Dominant Function)",
    definition: "각 유형에서 가장 잘 발달되고 자주 사용하는 인지 기능입니다. 성격의 핵심적인 부분을 형성하며, 가장 자연스럽게 사용됩니다.",
    category: "인지 기능"
  },
  {
    term: "보조기능 (Auxiliary Function)",
    definition: "주기능을 지원하는 두 번째로 발달된 인지 기능입니다. 주기능과 균형을 이루어 성격을 완성합니다.",
    category: "인지 기능"
  },
  {
    term: "열등기능 (Inferior Function)",
    definition: "가장 덜 발달된 인지 기능으로, 스트레스를 받을 때 나타날 수 있습니다. 성장의 잠재력을 가지고 있습니다.",
    category: "인지 기능"
  },
  {
    term: "외향 감각 (Extraverted Sensing - Se)",
    definition: "현재 순간의 감각적 경험과 물리적 현실에 집중하는 기능입니다. 즉흥적이고 모험적인 성향을 가지고 있습니다.",
    category: "인지 기능"
  },
  {
    term: "내향 감각 (Introverted Sensing - Si)",
    definition: "과거의 경험과 기억을 비교하며 안정성과 전통을 중시하는 기능입니다. 세부사항과 일관성을 중요시합니다.",
    category: "인지 기능"
  },
  {
    term: "외향 직관 (Extraverted Intuition - Ne)",
    definition: "가능성과 연결점을 탐구하며 새로운 아이디어를 창출하는 기능입니다. 유연하고 혁신적인 사고를 합니다.",
    category: "인지 기능"
  },
  {
    term: "내향 직관 (Introverted Intuition - Ni)",
    definition: "미래의 패턴과 의미를 예측하며 통찰력을 발휘하는 기능입니다. 전략적이고 비전을 가지고 있습니다.",
    category: "인지 기능"
  },
  {
    term: "외향 사고 (Extraverted Thinking - Te)",
    definition: "논리적 체계를 세우고 효율성을 추구하는 기능입니다. 조직화와 계획 수립에 강합니다.",
    category: "인지 기능"
  },
  {
    term: "내향 사고 (Introverted Thinking - Ti)",
    definition: "내부 논리 체계를 구축하고 정확성을 추구하는 기능입니다. 분석적이고 체계적인 사고를 합니다.",
    category: "인지 기능"
  },
  {
    term: "외향 감정 (Extraverted Feeling - Fe)",
    definition: "다른 사람들의 감정을 고려하며 조화를 추구하는 기능입니다. 공감능력이 뛰어나고 사회적 관계를 중시합니다.",
    category: "인지 기능"
  },
  {
    term: "내향 감정 (Introverted Feeling - Fi)",
    definition: "개인적인 가치관과 신념에 따라 판단하는 기능입니다. 진정성과 개인적 가치를 중시합니다.",
    category: "인지 기능"
  },

  // 심화 개념
  {
    term: "섀도우 기능(Shadow Functions)",
    definition: "평소에 잘 사용하지 않는 반대쪽 기능들로, 스트레스를 받을 때 나타날 수 있는 행동 패턴입니다. 무의식적으로 억압된 부분을 나타냅니다.",
    category: "심화 개념"
  },
  {
    term: "유형 역학(Type Dynamics)",
    definition: "각 유형 내에서 4가지 인지 기능(주기능, 보조기능, 제3기능, 열등기능)이 어떻게 상호작용하는지를 설명하는 개념입니다.",
    category: "심화 개념"
  },
  {
    term: "루프(Loop)",
    definition: "스트레스 상황에서 주기능과 열등기능만을 반복적으로 사용할 때 발생하는 부정적인 상태입니다. 균형 잡힌 사고가 어려워집니다.",
    category: "심화 개념"
  },
  {
    term: "그립(Grip)",
    definition: "극심한 스트레스로 인해 평소 억압된 열등기능이 갑자기 나타나는 현상입니다. 평소와 다른 행동 패턴을 보일 수 있습니다.",
    category: "심화 개념"
  },
  {
    term: "그리핑(Gripping)",
    definition: "열등기능이 갑작스럽게 나타나는 스트레스 반응으로, 평소의 성격과 다른 행동을 보이게 됩니다.",
    category: "심화 개념"
  },
  {
    term: "인식의 오류(Perceiving Error)",
    definition: "새로운 정보를 처리할 때 기존의 틀에 맞추려는 경향으로 인해 발생하는 인지적 오류입니다. 편견이나 고정관념이 생길 수 있습니다.",
    category: "심화 개념"
  },
  {
    term: "판단의 오류(Judging Error)",
    definition: "충분한 정보를 모으지 않고 성급하게 결론을 내리는 오류입니다. 충동적인 결정이나 편향된 판단을 초래할 수 있습니다.",
    category: "심화 개념"
  },

  // MBTI 유형별 특징
  {
    term: "INTJ (전략가)",
    definition: "독립적이고 전략적인 사고를 하는 유형입니다. 장기적 계획 수립과 효율성 추구에 강점이 있으며, 복잡한 문제 해결에 탁월합니다.",
    category: "유형별 특징"
  },
  {
    term: "ENFP (활동가)",
    definition: "열정적이고 창의적인 성격으로, 새로운 아이디어를 탐구하고 사람들과의 소통을 즐깁니다. 이상주의적이며 영감을 주는 리더입니다.",
    category: "유형별 특징"
  },
  {
    term: "INFJ (옹호자)",
    definition: "공감능력이 뛰어나고 이상주의적인 유형입니다. 다른 사람들을 돕고 세상을 더 나아지게 하려는 강한 신념을 가지고 있습니다.",
    category: "유형별 특징"
  },
  {
    term: "ENFJ (선도자)",
    definition: "카리스마 있고 영감을 주는 리더입니다. 다른 사람들의 성장을 돕고 조화를 추구하며, 뛰어난 의사소통 능력을 가지고 있습니다.",
    category: "유형별 특징"
  },

  // 역사 및 발전
  {
    term: "MBTI의 역사",
    definition: "1920년대 칼 융의 심리 유형론을 기반으로 1940년대 Isabel Briggs Myers와 Katharine Cook Briggs가 개발했습니다. 1962년 상업화되었으며, 현재 전 세계적으로 널리 사용되는 성격 검사입니다.",
    category: "역사 및 발전"
  },
  {
    term: "신뢰도와 타당도",
    definition: "MBTI의 검사 결과는 시간의 흐름에 따라 일관되게 나타나는 신뢰도를 가지고 있습니다. 그러나 과학적 타당도에 대해서는 논의가 계속되고 있습니다.",
    category: "역사 및 발전"
  },

  // 실용적 개념
  {
    term: "유형의 성장(Growth)",
    definition: "MBTI 유형은 고정된 것이 아니라 성장과 환경에 따라 발전할 수 있습니다. 특히 열등기능을 발전시키는 것이 중요합니다.",
    category: "실용적 개념"
  },
  {
    term: "유형의 강점 활용",
    definition: "각 유형의 고유한 강점을 인식하고 이를 일상생활과 직업에서 효과적으로 활용하는 것이 중요합니다.",
    category: "실용적 개념"
  },
  {
    term: "유형 간 의사소통",
    definition: "서로 다른 유형 간의 효과적인 의사소통을 위해 상대방의 선호도를 이해하고 적응하는 것이 필요합니다.",
    category: "실용적 개념"
  }
];

const categories = [
  "기본 개념",
  "4가지 이분법",
  "인지 기능",
  "심화 개념",
  "유형별 특징",
  "역사 및 발전",
  "실용적 개념"
];

export default function Glossary() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center gap-6 px-4 text-center pt-25 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter mb-4">
            용어사전
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
            MBTI 관련 용어와 개념을 쉽게 이해해보세요
          </p>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-full hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {glossaryTerms.map((term, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-left">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {term.term}
                  </h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs rounded-full">
                    {term.category}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {term.definition}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10 mb-12">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            빠른 참고 가이드
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-bold text-white mb-3">외향 vs 내향</h4>
              <div className="space-y-2 text-sm">
                <div className="text-cyan-300">E: 외부 세계에서 에너지 얻음</div>
                <div className="text-purple-300">I: 내부 세계에서 에너지 얻음</div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-white mb-3">감각 vs 직관</h4>
              <div className="space-y-2 text-sm">
                <div className="text-cyan-300">S: 현재 사실에 집중</div>
                <div className="text-purple-300">N: 미래 가능성 탐색</div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-white mb-3">사고 vs 감정</h4>
              <div className="space-y-2 text-sm">
                <div className="text-cyan-300">T: 논리적 판단</div>
                <div className="text-purple-300">F: 감정적 판단</div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-white mb-3">판단 vs 인식</h4>
              <div className="space-y-2 text-sm">
                <div className="text-cyan-300">J: 계획적 접근</div>
                <div className="text-purple-300">P: 유연한 접근</div>
              </div>
            </div>
          </div>
        </div>

        {/* Study Tips */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-lg p-8 border border-purple-500/20 mb-12">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
            MBTI 공부 가이드
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">📚</span>
                초보자를 위한
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 4가지 이분법의 기본 개념부터 익히세요</li>
                <li>• 자신의 유형을 정확히 파악하세요</li>
                <li>• 유형별 특징을 반복해서 읽어보세요</li>
                <li>• 가까운 사람들의 유형을 함께 분석해보세요</li>
                <li>• MBTI 결과를 절대적 진리로 받아들이지 마세요</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">🔬</span>
                심화 학습
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 인지 기능의 개념을 깊이 공부하세요</li>
                <li>• 각 유형의 기능 스택을 이해하세요</li>
                <li>• 스트레스 상황에서의 행동 패턴을 관찰하세요</li>
                <li>• 다양한 유형의 사람들과 교류하며 학습하세요</li>
                <li>• MBTI의 한계점과 오해를 공부하세요</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                실전 적용
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 의사소통 시 상대방의 유형을 고려하세요</li>
                <li>• 갈등 상황에서 유형별 대처법을 적용하세요</li>
                <li>• 직업 선택 시 자신의 강점을 활용하세요</li>
                <li>• 인간관계에서 서로의 차이를 존중하세요</li>
                <li>• 지속적인 자기 성찰을 실천하세요</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">⚠️</span>
                주의사항
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• MBTI는 과학적 진단 도구가 아닙니다</li>
                <li>• 사람을 단순히 라벨로 분류하지 마세요</li>
                <li>• 상황과 성장에 따라 유형이 변할 수 있습니다</li>
                <li>• 전문적인 상담을 대신할 수 없습니다</li>
                <li>• 지속적인 학습과 유연한 사고가 중요합니다</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-8 text-center">
            더 자세히 알아보기
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/types" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 hover:scale-105 transition-all duration-300 text-center cursor-pointer">
                <h4 className="text-lg font-semibold text-white group-hover:text-gray-200 mb-2">
                  MBTI 유형
                </h4>
                <p className="text-gray-400 text-sm">
                  16가지 성격 유형의 특징
                </p>
              </div>
            </Link>
            <Link href="/celebrities" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 hover:scale-105 transition-all duration-300 text-center cursor-pointer">
                <h4 className="text-lg font-semibold text-white group-hover:text-gray-200 mb-2">
                  유명인 MBTI
                </h4>
                <p className="text-gray-400 text-sm">
                  각 유형별 대표적인 인물들
                </p>
              </div>
            </Link>
            <Link href="/compatibility" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 hover:scale-105 transition-all duration-300 text-center cursor-pointer">
                <h4 className="text-lg font-semibold text-white group-hover:text-gray-200 mb-2">
                  MBTI 궁합
                </h4>
                <p className="text-gray-400 text-sm">
                  성격 유형별 호환성 분석
                </p>
              </div>
            </Link>
            <Link href="/usage" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 hover:scale-105 transition-all duration-300 text-center cursor-pointer">
                <h4 className="text-lg font-semibold text-white group-hover:text-gray-200 mb-2">
                  실용적 활용
                </h4>
                <p className="text-gray-400 text-sm">
                  직업, 연애, 일상생활 적용
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/">
            <button className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-gray-700 transition-all duration-300 transform hover:scale-105">
              홈으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}