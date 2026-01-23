"use client";

import Link from "next/link";

// 16가지 MBTI 유형 리스트
// const mbtiTypes = [
//   "INTJ", "INTP", "ENTJ", "ENTP",
//   "INFJ", "INFP", "ENFJ", "ENFP",
//   "ISTJ", "ISFJ", "ESTJ", "ESFJ",
//   "ISTP", "ISFP", "ESTP", "ESFP"
// ];

// 궁합도 계산 함수 - 인터넷 검색 결과 기반 개선
// const getCompatibilityScore = (type1: string, type2: string) => {
//   // 같은 유형은 완벽 궁합
//   if (type1 === type2) {
//     return { score: "완벽", color: "from-purple-400 to-purple-600", bgColor: "bg-purple-500/20", textColor: "text-purple-300" };
//   }

//   // 인터넷 검색 결과 기반 매우 좋은 궁합 조합들
//   const excellentMatches = [
//     // INTJ 궁합
//     ['INTJ', 'ENFP'], ['ENFP', 'INTJ'],
//     ['INTJ', 'ENTP'], ['ENTP', 'INTJ'],
//     // INFJ 궁합
//     ['INFJ', 'ENFP'], ['ENFP', 'INFJ'],
//     ['INFJ', 'ENTP'], ['ENTP', 'INFJ'],
//     // INTP 궁합
//     ['INTP', 'ENTJ'], ['ENTJ', 'INTP'],
//     // ENFJ 궁합
//     ['ENFJ', 'INFP'], ['INFP', 'ENFJ'],
//     ['ENFJ', 'INTP'], ['INTP', 'ENFJ'],
//     // ISTJ 궁합
//     ['ISTJ', 'ESFP'], ['ESFP', 'ISTJ'],
//     ['ISTJ', 'ESTP'], ['ESTP', 'ISTJ'],
//     // ISFJ 궁합
//     ['ISFJ', 'ESFP'], ['ESFP', 'ISFJ'],
//     ['ISFJ', 'ESTP'], ['ESTP', 'ISFJ'],
//     // ESTJ 궁합
//     ['ESTJ', 'INTP'], ['INTP', 'ESTJ'],
//     // ESFJ 궁합
//     ['ESFJ', 'ISFP'], ['ISFP', 'ESFJ'],
//     ['ESFJ', 'ISTP'], ['ISTP', 'ESFJ']
//   ];

//   if (excellentMatches.some(match => match[0] === type1 && match[1] === type2)) {
//     return { score: "매우 좋음", color: "from-emerald-400 to-emerald-600", bgColor: "bg-emerald-500/20", textColor: "text-emerald-300" };
//   }

//   // 그룹 내 좋은 궁합들
//   const goodGroupMatches = [
//     // NT 그룹 내
//     ['INTJ', 'INTP'], ['INTP', 'INTJ'],
//     ['ENTJ', 'ENTP'], ['ENTP', 'ENTJ'],
//     // NF 그룹 내
//     ['INFJ', 'INFP'], ['INFP', 'INFJ'],
//     ['ENFJ', 'ENFP'], ['ENFP', 'ENFJ'],
//     // SJ 그룹 내
//     ['ISTJ', 'ISFJ'], ['ISFJ', 'ISTJ'],
//     ['ESTJ', 'ESFJ'], ['ESFJ', 'ESTJ'],
//     // SP 그룹 내
//     ['ISTP', 'ISFP'], ['ISFP', 'ISTP'],
//     ['ESTP', 'ESFP'], ['ESFP', 'ESTP']
//   ];

//   if (goodGroupMatches.some(match => match[0] === type1 && match[1] === type2)) {
//     return { score: "좋음", color: "from-green-400 to-green-600", bgColor: "bg-green-500/20", textColor: "text-green-300" };
//   }

//   // 기본 궁합 계산 (보완 관계 우선)
//   // E/I: 서로 반대가 좋음 (에너지 보완)
//   const e_i_score = (type1.includes('E') !== type2.includes('E')) ? 0 : 1;

//   // S/N: 서로 반대가 좋음 (관점 보완)
//   const s_n_score = (type1.includes('S') !== type2.includes('N')) ? 0 : 1;

//   // T/F: 서로 반대가 좋음 (의사결정 보완)
//   const t_f_score = (type1.includes('T') !== type2.includes('F')) ? 0 : 1;

//   // J/P: 서로 반대가 좋음 (생활 방식 보완)
//   const j_p_score = (type1.includes('J') !== type2.includes('P')) ? 0 : 1;

//   const total_score = e_i_score + s_n_score + t_f_score + j_p_score;

//   if (total_score <= 1) {
//     return { score: "좋음", color: "from-green-400 to-green-600", bgColor: "bg-green-500/20", textColor: "text-green-300" };
//   }
//   if (total_score <= 2) {
//     return { score: "보통", color: "from-yellow-400 to-yellow-600", bgColor: "bg-yellow-500/20", textColor: "text-yellow-300" };
//   }
//   return { score: "주의 필요", color: "from-red-400 to-red-600", bgColor: "bg-red-500/20", textColor: "text-red-300" };
// };

const relationshipTips = [
  {
    category: "연인 관계",
    tips: [
      "상대방의 사랑 표현 방식을 이해하세요 (말로 표현 vs 행동으로 표현)",
      "갈등 시 서로의 차이점을 인정하고 타협점을 찾으세요",
      "공통 관심사를 개발하고 함께 즐길 수 있는 활동을 찾아보세요"
    ]
  },
  {
    category: "부부 관계",
    tips: [
      "가정 내 역할 분담 시 각자의 강점을 고려하세요",
      "의사소통 스타일의 차이를 인정하고 적응하세요",
      "정기적으로 서로의 감정과 생각을 공유하는 시간을 가지세요"
    ]
  },
  {
    category: "자녀 양육",
    tips: [
      "아이의 MBTI를 고려한 교육 방법을 선택하세요",
      "강요보다는 격려와 지지를 통해 성장을 도와주세요",
      "아이의 성격 유형에 맞는 학습 스타일을 찾아주세요"
    ]
  }
];

export default function Compatibility() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center gap-6 px-4 text-center pt-25 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter mb-4">
            MBTI 궁합
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
            성격 유형별 호환성과 관계 팁을 알아보세요
          </p>
        </div>



        {/* Compatibility Details */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-8">
            궁합도별 상세 설명
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-emerald-400/50">
              <h4 className="text-lg font-bold text-emerald-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">💚</span>
                매우 좋음 (0-1점 차이)
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                성격 유형이 매우 유사하거나 보완적입니다. 자연스러운 이해와 공감이 이루어지며,
                장기적인 관계에서 안정감을 줍니다. 서로의 생각과 감정을 쉽게 이해할 수 있습니다.
              </p>
              <div className="text-xs text-gray-400 mb-3">
                <strong>예시:</strong> INTJ ↔ INTP, ENFJ ↔ INFJ, ISTJ ↔ ISFJ
              </div>
              <div className="bg-emerald-500/10 p-3 rounded">
                <strong className="text-emerald-300 text-xs">강점:</strong>
                <p className="text-gray-300 text-xs mt-1">원활한 의사소통, 공감 능력, 안정적인 관계 유지</p>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-green-400/50">
              <h4 className="text-lg font-bold text-green-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">💚</span>
                좋음 (2점 차이)
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                서로 다른 점이 있지만 이를 극복할 수 있는 균형 잡힌 궁합입니다.
                서로의 강점을 보완하며 성장할 수 있습니다.
              </p>
              <div className="text-xs text-gray-400 mb-3">
                <strong>예시:</strong> ENTJ ↔ ENTP, ISFJ ↔ ESFJ, INFJ ↔ ENFJ
              </div>
              <div className="bg-green-500/10 p-3 rounded">
                <strong className="text-green-300 text-xs">강점:</strong>
                <p className="text-gray-300 text-xs mt-1">상호 보완, 성장 기회, 역동적인 관계</p>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-yellow-400/50">
              <h4 className="text-lg font-bold text-yellow-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">💛</span>
                보통 (3점 차이)
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                차이점이 있지만 서로 노력하면 좋은 관계를 유지할 수 있습니다.
                서로의 차이점을 이해하고 적응하는 과정이 필요합니다.
              </p>
              <div className="text-xs text-gray-400 mb-3">
                <strong>예시:</strong> ISTJ ↔ ENFP, INFP ↔ ESTJ, ESFJ ↔ INTJ
              </div>
              <div className="bg-yellow-500/10 p-3 rounded">
                <strong className="text-yellow-300 text-xs">주의점:</strong>
                <p className="text-gray-300 text-xs mt-1">의사소통 노력 필요, 서로 이해하기 위한 시간 투자</p>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-red-400/50">
              <h4 className="text-lg font-bold text-red-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">❤️</span>
                주의 필요 (4점 차이)
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                많은 차이점이 있어 갈등이 생길 가능성이 높습니다.
                특별한 노력이 필요하며, 서로의 가치관을 존중하는 태도가 중요합니다.
              </p>
              <div className="text-xs text-gray-400 mb-3">
                <strong>예시:</strong> INTJ ↔ ESFP, INTP ↔ ESFJ, ISTP ↔ ENFJ
              </div>
              <div className="bg-red-500/10 p-3 rounded">
                <strong className="text-red-300 text-xs">개선 방법:</strong>
                <p className="text-gray-300 text-xs mt-1">대화 증가, 타협점 찾기, 전문가 상담 고려</p>
              </div>
            </div>
          </div>
        </div>

        {/* Famous Couples Examples */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">
            유명인 궁합 사례
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-emerald-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">👫</div>
                <div>
                  <div className="text-white font-bold">INTJ + ENFP</div>
                  <div className="text-emerald-300 text-sm">매우 좋은 궁합</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                전략적 사고(INTJ)와 창의적 에너지(ENFP)의 완벽한 조합.
                서로의 강점을 극대화하는 파트너십을 형성합니다.
              </p>
              <div className="text-xs text-gray-400">
                <strong>팁:</strong> ENFP의 열정을 INTJ의 계획력으로 뒷받침하세요.
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-emerald-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">💑</div>
                <div>
                  <div className="text-white font-bold">ISTJ + ESFP</div>
                  <div className="text-emerald-300 text-sm">매우 좋은 궁합</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                실용적 안정성(ISTJ)과 밝은 에너지(ESFP)의 균형 잡힌 조합.
                서로의 부족한 부분을 채워주는 이상적인 파트너십입니다.
              </p>
              <div className="text-xs text-gray-400">
                <strong>팁:</strong> ISTJ의 안정성과 ESFP의 즐거움을 함께 누리세요.
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-green-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">👩‍❤️‍👨</div>
                <div>
                  <div className="text-white font-bold">INFJ + ENFP</div>
                  <div className="text-green-300 text-sm">좋은 궁합</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                깊은 공감(INFJ)과 밝은 이상주의(ENFP)의 조화로운 관계.
                서로의 감정을 잘 이해하고 지지하는 소울메이트 같은 궁합입니다.
              </p>
              <div className="text-xs text-gray-400">
                <strong>팁:</strong> 서로의 이상을 공유하며 함께 성장하세요.
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-green-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">💕</div>
                <div>
                  <div className="text-white font-bold">ENTJ + INTP</div>
                  <div className="text-green-300 text-sm">좋은 궁합</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                리더십(ENTJ)과 깊은 사고력(INTP)의 시너지를 발휘하는 조합.
                서로의 아이디어를 실행으로 옮기는 탁월한 파트너십입니다.
              </p>
              <div className="text-xs text-gray-400">
                <strong>팁:</strong> INTP의 아이디어를 ENTJ의 실행력으로 실현하세요.
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-yellow-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <div className="text-white font-bold">ENFJ + ISFP</div>
                  <div className="text-yellow-300 text-sm">보통 궁합</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                카리스마(ENFJ)와 섬세한 예술성(ISFP)의 독특한 조합.
                서로의 차이점을 극복하면 아름다운 관계가 형성됩니다.
              </p>
              <div className="text-xs text-gray-400">
                <strong>팁:</strong> 서로의 강점을 인정하고 타협점을 찾으세요.
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-red-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">⚠️</div>
                <div>
                  <div className="text-white font-bold">INTJ + ESFP</div>
                  <div className="text-red-300 text-sm">주의 필요</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                전략적 사고(INTJ)와 즉흥적 성향(ESFP)의 극과 극 조합.
                서로의 차이점을 이해하기 위해 많은 노력이 필요합니다.
              </p>
              <div className="text-xs text-gray-400">
                <strong>팁:</strong> 서로의 의사소통 방식을 배우고 적응하세요.
              </div>
            </div>
          </div>
        </div>

        {/* Relationship Tips */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent mb-8">
            인간관계 팁
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relationshipTips.map((category, index) => (
              <div
                key={index}
                className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-2">
                      <span className="text-pink-400 mt-1">💝</span>
                      <span className="text-gray-300 text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* MBTI 궁합의 과학적 기반 */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-8">
            MBTI 궁합의 과학적 기반
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
              <h4 className="text-lg font-bold text-cyan-300 mb-3">좋은 궁합의 4가지 패턴</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">E↔I:</span>
                  <span className="text-gray-300">에너지 보완 (외향↔내향)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">S↔N:</span>
                  <span className="text-gray-300">관점 보완 (감각↔직관)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">T↔F:</span>
                  <span className="text-gray-300">의사결정 보완 (사고↔감정)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">J↔P:</span>
                  <span className="text-gray-300">생활 방식 보완 (판단↔인식)</span>
                </div>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
              <h4 className="text-lg font-bold text-purple-300 mb-3">궁합도 결정 요인</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-purple-400 font-bold">1.</span>
                  <span className="text-gray-300">인지 기능의 호환성</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-purple-400 font-bold">2.</span>
                  <span className="text-gray-300">의사소통 스타일의 유사성</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-purple-400 font-bold">3.</span>
                  <span className="text-gray-300">가치관과 목표의 일치도</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-purple-400 font-bold">4.</span>
                  <span className="text-gray-300">스트레스 대처 방식의 보완성</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* General Tips */}
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10 mb-12">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-6">
            궁합의 비밀 (인터넷 검색 기반)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">성공적인 관계를 위한 Tip</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 서로의 MBTI 선호도를 정확히 파악하세요</li>
                <li>• 의사소통 방식을 서로 맞춰보세요 (E/I, T/F 차이 고려)</li>
                <li>• 공통 관심사와 목표를 함께 설정하세요</li>
                <li>• 갈등 시 MBTI 관점에서 서로의 행동을 이해하세요</li>
                <li>• MBTI를 관계 개선 도구로 적극 활용하세요</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">MBTI 궁합의 현실적 한계</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 궁합은 통계적 확률일 뿐, 과학적 증거가 부족합니다</li>
                <li>• 개인의 성장 단계와 환경이 더 큰 영향을 미칩니다</li>
                <li>• 같은 유형이라도 성격 차이로 갈등이 발생할 수 있습니다</li>
                <li>• 다른 유형이라도 사랑과 노력으로 극복 가능합니다</li>
                <li>• MBTI는 고정된 것이 아니라 변화할 수 있습니다</li>
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
            <Link href="/glossary" className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 hover:scale-105 transition-all duration-300 text-center cursor-pointer">
                <h4 className="text-lg font-semibold text-white group-hover:text-gray-200 mb-2">
                  용어사전
                </h4>
                <p className="text-gray-400 text-sm">
                  MBTI 개념과 용어 설명
                </p>
              </div>
            </Link>
          </div>
        </div>

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