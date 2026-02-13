import Link from "next/link";
import { CompatibilityChecker } from "@/components/compatibility/CompatibilityChecker";

const mbtiTypes = [
  { code: 'INTJ', name: '전략가', color: 'from-blue-500 to-purple-600', group: '분석가형' },
  { code: 'INTP', name: '논리술사', color: 'from-blue-500 to-purple-600', group: '분석가형' },
  { code: 'ENTJ', name: '통솔자', color: 'from-blue-500 to-purple-600', group: '분석가형' },
  { code: 'ENTP', name: '변론가', color: 'from-blue-500 to-purple-600', group: '분석가형' },
  { code: 'INFJ', name: '옹호자', color: 'from-pink-500 to-rose-600', group: '외교관형' },
  { code: 'INFP', name: '중재자', color: 'from-pink-500 to-rose-600', group: '외교관형' },
  { code: 'ENFJ', name: '선도자', color: 'from-pink-500 to-rose-600', group: '외교관형' },
  { code: 'ENFP', name: '활동가', color: 'from-pink-500 to-rose-600', group: '외교관형' },
  { code: 'ISTJ', name: '현실주의자', color: 'from-green-500 to-teal-600', group: '관리자형' },
  { code: 'ISFJ', name: '수호자', color: 'from-green-500 to-teal-600', group: '관리자형' },
  { code: 'ESTJ', name: '경영자', color: 'from-green-500 to-teal-600', group: '관리자형' },
  { code: 'ESFJ', name: '집정관', color: 'from-green-500 to-teal-600', group: '관리자형' },
  { code: 'ISTP', name: '장인', color: 'from-orange-500 to-red-600', group: '탐험가형' },
  { code: 'ISFP', name: '모험가', color: 'from-orange-500 to-red-600', group: '탐험가형' },
  { code: 'ESTP', name: '사업가', color: 'from-orange-500 to-red-600', group: '탐험가형' },
  { code: 'ESFP', name: '연예인', color: 'from-orange-500 to-red-600', group: '탐험가형' },
];

const compatibilityData: Record<string, Record<string, { score: number; level: string; description: string; advice: string }>> = {
  'INTJ': {
    'ENFP': { score: 95, level: '천생연분', description: '창의적 ENFP가 INTJ의 세계에 색다른 영감을 제공합니다.', advice: 'ENFP의 즉흥성을 INTJ의 계획으로 균형있게 조화시키세요.' },
    'ENTP': { score: 90, level: '최고의 파트너', description: '지적인 대화와 혁신적인 아이디어가 넘치는 관계입니다.', advice: '서로의 아이디어를 존중하며 실행 가능성을 함께 검토하세요.' },
    'INTJ': { score: 85, level: '깊은 이해', description: '서로를 완벽하게 이해하며 성장하는 관계입니다.', advice: '같은 유형끼리는 강점도 약점도 함께하므로 다양한 시각을 위해 다른 사람들과도 교류하세요.' },
  }
};

const relationshipTips = [
  {
    category: "연인 관계",
    icon: "💕",
    tips: [
      "상대방의 사랑 표현 방식을 이해하세요 (말로 표현 vs 행동으로 표현)",
      "갈등 시 서로의 차이점을 인정하고 타협점을 찾으세요",
      "공통 관심사를 개발하고 함께 즐길 수 있는 활동을 찾아보세요"
    ]
  },
  {
    category: "부부 관계",
    icon: "💑",
    tips: [
      "가정 내 역할 분담 시 각자의 강점을 고려하세요",
      "의사소통 스타일의 차이를 인정하고 적응하세요",
      "정기적으로 서로의 감정과 생각을 공유하는 시간을 가지세요"
    ]
  },
  {
    category: "자녀 양육",
    icon: "👨‍👩‍👧‍👦",
    tips: [
      "아이의 MBTI를 고려한 교육 방법을 선택하세요",
      "강요보다는 격려와 지지를 통해 성장을 도와주세요",
      "아이의 성격 유형에 맞는 학습 스타일을 찾아주세요"
    ]
  }
];

export default function Compatibility() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter mb-4">
            MBTI 궁합
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
            두 유형의 궁합을 확인하고 관계 팁을 알아보세요
          </p>
        </div>

        {/* Interactive Compatibility Checker - Client Component */}
        <CompatibilityChecker mbtiTypes={mbtiTypes} compatibilityData={compatibilityData} />

        {/* Compatibility Levels Explanation */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-8 text-center">
            궁합도별 안내
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-emerald-400/50 hover:border-emerald-400 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">💚</span>
                <h4 className="text-lg font-bold text-emerald-300">90-100점</h4>
              </div>
              <p className="text-emerald-400 font-semibold mb-2">천생연분</p>
              <p className="text-gray-300 text-sm">
                성격이 매우 잘 맞습니다. 서로를 이해하고 보완하는 이상적인 관계입니다.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-green-400/50 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">💚</span>
                <h4 className="text-lg font-bold text-green-300">80-89점</h4>
              </div>
              <p className="text-green-400 font-semibold mb-2">훌륭한 궁합</p>
              <p className="text-gray-300 text-sm">
                서로 잘 맞으며 함께 성장할 수 있는 관계입니다.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-yellow-400/50 hover:border-yellow-400 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">💛</span>
                <h4 className="text-lg font-bold text-yellow-300">70-79점</h4>
              </div>
              <p className="text-yellow-400 font-semibold mb-2">좋은 관계</p>
              <p className="text-gray-300 text-sm">
                차이점이 있지만 노력하면 좋은 관계를 유지할 수 있습니다.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-red-400/50 hover:border-red-400 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">❤️</span>
                <h4 className="text-lg font-bold text-red-300">70점 미만</h4>
              </div>
              <p className="text-red-400 font-semibold mb-2">노력 필요</p>
              <p className="text-gray-300 text-sm">
                많은 차이점이 있습니다. 서로 이해하고 존중하는 태도가 중요합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Relationship Tips */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent mb-8 text-center">
            인간관계 팁
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relationshipTips.map((category, index) => (
              <div
                key={index}
                className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-black/30 hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-2">
                      <span className="text-pink-400 mt-1">✓</span>
                      <span className="text-gray-300 text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Famous Couples Examples */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
            유명한 궁합 사례
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-bold">INTJ</span>
                  <span className="text-gray-400">💕</span>
                  <span className="px-3 py-1 rounded-full bg-pink-500 text-white text-sm font-bold">ENFP</span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">전략가 × 활동가</h4>
              <p className="text-emerald-300 text-sm mb-3">95점 - 천생연분</p>
              <p className="text-gray-300 text-sm">
                전략적 사고(INTJ)와 창의적 에너지(ENFP)의 완벽한 조합. 서로의 강점을 극대화합니다.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-green-500 text-white text-sm font-bold">ISTJ</span>
                  <span className="text-gray-400">💕</span>
                  <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-sm font-bold">ESFP</span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">현실주의자 × 연예인</h4>
              <p className="text-emerald-300 text-sm mb-3">92점 - 최고의 궁합</p>
              <p className="text-gray-300 text-sm">
                안정성(ISTJ)과 에너지(ESFP)의 균형. 서로의 부족한 부분을 채워줍니다.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-green-400/30 hover:border-green-400/60 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-pink-500 text-white text-sm font-bold">INFJ</span>
                  <span className="text-gray-400">💕</span>
                  <span className="px-3 py-1 rounded-full bg-pink-500 text-white text-sm font-bold">ENFP</span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">옹호자 × 활동가</h4>
              <p className="text-green-300 text-sm mb-3">88점 - 훌륭한 궁합</p>
              <p className="text-gray-300 text-sm">
                깊은 공감과 이상주의의 조화. 서로의 감정을 잘 이해하고 지지합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
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
