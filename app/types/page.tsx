"use client";

import Link from "next/link";

const mbtiTypes = [
  {
    group: "분석가형 (NT)",
    groupDesc: "직관형(N)·사고형(T)의 성격 유형으로, 합리성, 공정성, 탁월한 지적 능력으로 잘 알려져 있습니다.",
    groupColor: "from-blue-500 to-purple-600",
    types: [
      {
        code: "INTJ",
        name: "전략가",
        icon: "🧠",
        description: "모든 일에 대해 계획을 세우는 상상력이 풍부한 전략가입니다. 독립적이고 분석적인 성향을 가지고 있습니다.",
        traits: ["계획적", "독립적", "분석적"]
      },
      {
        code: "INTP",
        name: "논리술사",
        icon: "🔬",
        description: "지식을 끝없이 갈망하는 혁신적인 발명가입니다. 호기심이 많고 이론적인 사고를 즐깁니다.",
        traits: ["호기심", "논리적", "창의적"]
      },
      {
        code: "ENTJ",
        name: "통솔자",
        icon: "👑",
        description: "항상 문제 해결 방법을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강력한 지도자입니다.",
        traits: ["리더십", "결단력", "효율적"]
      },
      {
        code: "ENTP",
        name: "변론가",
        icon: "💡",
        description: "지적 도전을 즐기는 영리하고 호기심이 많은 사색가입니다. 새로운 아이디어를 탐구하는 것을 좋아합니다.",
        traits: ["창의적", "토론가", "적응력"]
      }
    ]
  },
  {
    group: "외교관형 (NF)",
    groupDesc: "직관형(N)·감정형(F)의 성격 유형으로, 공감 능력, 사교 능력, 열정적인 이상주의로 잘 알려져 있습니다.",
    groupColor: "from-pink-500 to-rose-600",
    types: [
      {
        code: "INFJ",
        name: "옹호자",
        icon: "🛡️",
        description: "차분하고 신비한 분위기를 풍기는 성격으로, 다른 사람들에게 의욕을 불어넣는 이상주의자입니다.",
        traits: ["이상주의", "공감력", "신념강함"]
      },
      {
        code: "INFP",
        name: "중재자",
        icon: "🌸",
        description: "항상 선을 행할 준비가 되어 있는 부드럽고 친절한 이타주의자입니다. 창의적이고 이상주의적입니다.",
        traits: ["이타심", "창의성", "개인적가치"]
      },
      {
        code: "ENFJ",
        name: "선도자",
        icon: "🌟",
        description: "청중을 사로잡고 의욕을 불어넣는 카리스마 넘치는 지도자입니다. 공감능력이 뛰어납니다.",
        traits: ["카리스마", "영향력", "배려심"]
      },
      {
        code: "ENFP",
        name: "활동가",
        icon: "🎭",
        description: "열정적이고 창의적인 성격으로, 긍정적으로 삶을 바라보는 사교적이면서도 자유로운 영혼입니다.",
        traits: ["열정적", "자유로움", "사교성"]
      }
    ]
  },
  {
    group: "관리자형 (SJ)",
    groupDesc: "관찰형(S)·계획형(J)의 성격 유형으로, 질서, 안전, 안정성에 집중하는 성향과 실용성으로 잘 알려져 있습니다.",
    groupColor: "from-green-500 to-teal-600",
    types: [
      {
        code: "ISTJ",
        name: "현실주의자",
        icon: "⚖️",
        description: "사실을 중시하고 실용적인 성향을 지닌 믿음직한 현실주의자입니다. 체계적이고 신뢰할 수 있습니다.",
        traits: ["신뢰성", "실용성", "체계적"]
      },
      {
        code: "ISFJ",
        name: "수호자",
        icon: "🤗",
        description: "주변 사람들을 보호할 준비가 되어 있는 헌신적이고 따뜻한 보호자입니다. 배려심이 많습니다.",
        traits: ["헌신적", "배려심", "따뜻함"]
      },
      {
        code: "ESTJ",
        name: "경영자",
        icon: "📊",
        description: "사물과 사람을 관리하는 데 뛰어난 능력을 지닌 경영자입니다. 실용적이고 효율적입니다.",
        traits: ["관리능력", "효율성", "실용적"]
      },
      {
        code: "ESFJ",
        name: "집정관",
        icon: "👥",
        description: "배려심이 넘치고 항상 다른 사람들을 도울 준비가 되어 있는 성격으로, 인기가 많고 사교성이 뛰어납니다.",
        traits: ["사교성", "배려심", "협력적"]
      }
    ]
  },
  {
    group: "탐험가형 (SP)",
    groupDesc: "관찰형(S)·탐구형(P)의 성격 유형으로, 즉흥성, 독창성, 유연성으로 잘 알려져 있습니다.",
    groupColor: "from-orange-500 to-red-600",
    types: [
      {
        code: "ISTP",
        name: "장인",
        icon: "🔧",
        description: "대담하면서도 현실적인 성격으로, 모든 종류의 도구를 자유자재로 다루는 장인입니다. 실용적입니다.",
        traits: ["실용적", "대담함", "적응력"]
      },
      {
        code: "ISFP",
        name: "모험가",
        icon: "🎨",
        description: "항상 새로운 경험을 추구하는 유연하고 매력 넘치는 예술가입니다. 감성적이고 자유롭습니다.",
        traits: ["예술적", "자유로움", "감성적"]
      },
      {
        code: "ESTP",
        name: "사업가",
        icon: "💼",
        description: "영리하고 에너지 넘치며 관찰력이 뛰어난 성격으로, 스릴 넘치는 삶을 진정으로 즐기는 성격입니다.",
        traits: ["에너지", "관찰력", "실행력"]
      },
      {
        code: "ESFP",
        name: "연예인",
        icon: "🎪",
        description: "즉흥적이고 넘치는 에너지와 열정으로 주변 사람들을 즐겁게 하는 성격입니다. 사교적입니다.",
        traits: ["즉흥적", "열정적", "사교성"]
      }
    ]
  }
];

export default function MBTITypes() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center gap-6 px-4 text-center pt-25 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter mb-4">
            MBTI 16가지 성격 유형
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
            4가지 그룹으로 분류된 각 유형의 특징과 설명을 알아보세요
          </p>
        </div>

        {/* MBTI Groups */}
        <div className="space-y-12">
          {mbtiTypes.map((group, groupIndex) => (
            <div key={groupIndex} className="group-section">
              {/* Group Header */}
              <div className="text-center mb-8">
                <h2 className={`inline-block text-2xl md:text-3xl font-bold bg-gradient-to-r ${group.groupColor} bg-clip-text text-transparent mb-4`}>
                  {group.group}
                </h2>
                <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                  {group.groupDesc}
                </p>
              </div>

              {/* Types Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.types.map((type, typeIndex) => {
                  const borderColor = group.group === "분석가형 (NT)" ? "border-cyan-400 shadow-lg shadow-cyan-400/20"
                    : group.group === "외교관형 (NF)" ? "border-pink-400 shadow-lg shadow-pink-400/20"
                    : group.group === "관리자형 (SJ)" ? "border-green-400 shadow-lg shadow-green-400/20"
                    : "border-orange-400 shadow-lg shadow-orange-400/20";

                  return (
                    <div
                      key={typeIndex}
                      className={`bg-black/20 backdrop-blur-md rounded-lg p-6 border-2 ${borderColor} hover:bg-black/30 transition-all duration-300 transform hover:scale-105`}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-4">{type.icon}</div>
                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-1">
                          {type.code}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-300 mb-4">
                          {type.name}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[3rem]">
                          {type.description}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {type.traits.map((trait, traitIndex) => (
                            <span
                              key={traitIndex}
                              className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Related Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-8 text-center">
            더 자세히 알아보기
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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