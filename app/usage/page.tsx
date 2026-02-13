import Link from "next/link";

const careerData = [
  {
    type: "INTJ",
    name: "전략가",
    careers: ["소프트웨어 아키텍트", "전략 기획자", "연구원", "투자 분석가", "시스템 엔지니어"],
    strengths: "체계적 계획 수립, 장기적 비전 제시, 복잡한 문제 해결",
    workStyle: "독립적이고 효율적인 업무 환경 선호"
  },
  {
    type: "INTP",
    name: "논리술사",
    careers: ["연구원", "수학자", "프로그래머", "발명가", "데이터 분석가"],
    strengths: "논리적 사고력, 창의적 문제 해결, 독립적 연구 능력",
    workStyle: "자율적이고 지적 자극이 있는 업무 환경 선호"
  },
  {
    type: "ENTJ",
    name: "통솔자",
    careers: ["CEO", "프로젝트 매니저", "컨설턴트", "투자 은행가", "경영 컨설턴트"],
    strengths: "리더십, 전략적 계획 수립, 효율적 조직 관리",
    workStyle: "책임감 있고 도전적인 업무 환경 선호"
  },
  {
    type: "ENTP",
    name: "변론가",
    careers: ["기업가", "컨설턴트", "발명가", "벤처 투자자", "마케팅 전략가"],
    strengths: "혁신적 아이디어 개발, 전략적 사고, 문제 해결 능력",
    workStyle: "도전적이고 변화하는 업무 환경 선호"
  },
  {
    type: "INFJ",
    name: "옹호자",
    careers: ["심리 상담사", "작가", "교사", "비영리단체 리더", "인사 담당자"],
    strengths: "깊은 공감 능력, 장기적 비전 제시, 윤리적 가치 추구",
    workStyle: "의미 있고 목적 있는 업무 환경 선호"
  },
  {
    type: "INFP",
    name: "중재자",
    careers: ["작가", "심리 상담사", "그래픽 디자이너", "번역가", "환경 운동가"],
    strengths: "창의적 표현력, 깊은 공감, 개인적 가치 추구",
    workStyle: "자율적이고 의미 있는 업무 환경 선호"
  },
  {
    type: "ENFJ",
    name: "선도자",
    careers: ["교사", "코치", "인사 관리자", "상담사", "커뮤니티 리더"],
    strengths: "탁월한 리더십, 공감 능력, 사람들 동기부여",
    workStyle: "협력적이고 사람 중심의 업무 환경 선호"
  },
  {
    type: "ENFP",
    name: "활동가",
    careers: ["마케팅 전문가", "카운슬러", "이벤트 기획자", "크리에이티브 디렉터", "언론인"],
    strengths: "새로운 아이디어 창출, 사람들과의 네트워킹, 열정적인 프레젠테이션",
    workStyle: "창의적이고 자유로운 업무 환경 선호"
  },
  {
    type: "ISTJ",
    name: "현실주의자",
    careers: ["회계사", "프로젝트 매니저", "품질 관리자", "의료기사", "법무 담당자"],
    strengths: "세부사항 철저 관리, 신뢰할 수 있는 업무 처리, 체계적 문서화",
    workStyle: "안정적이고 예측 가능한 업무 환경 선호"
  },
  {
    type: "ISFJ",
    name: "수호자",
    careers: ["간호사", "교사", "사서", "사회복지사", "행정 담당자"],
    strengths: "세심한 배려, 신뢰성, 실용적 문제 해결",
    workStyle: "안정적이고 의미 있는 업무 환경 선호"
  },
  {
    type: "ESTJ",
    name: "경영자",
    careers: ["프로젝트 매니저", "은행장", "판사", "군 장교", "품질 관리자"],
    strengths: "효율적 관리, 체계적 조직화, 실용적 의사결정",
    workStyle: "구조화되고 책임감 있는 업무 환경 선호"
  },
  {
    type: "ESFJ",
    name: "집정관",
    careers: ["간호사", "교사", "이벤트 플래너", "고객 서비스", "인사 관리자"],
    strengths: "탁월한 고객 서비스, 협력적 태도, 실용적 지원",
    workStyle: "사람 중심의 협력적 업무 환경 선호"
  },
  {
    type: "ISTP",
    name: "장인",
    careers: ["기계공", "파일럿", "포렌식 과학자", "소프트웨어 테스터", "응급구조사"],
    strengths: "실용적 문제 해결, 손재주, 위기 대처 능력",
    workStyle: "자율적이고 실용적인 업무 환경 선호"
  },
  {
    type: "ISFP",
    name: "모험가",
    careers: ["그래픽 디자이너", "사진작가", "음악가", "물리치료사", "수의사"],
    strengths: "예술적 감성, 개인적 표현, 조용한 헌신",
    workStyle: "자율적이고 창의적인 업무 환경 선호"
  },
  {
    type: "ESTP",
    name: "사업가",
    careers: ["영업 사원", "기업가", "응급구조사", "스포츠 코치", "경매인"],
    strengths: "빠른 의사결정, 실용적 접근, 위기 대처 능력",
    workStyle: "활동적이고 도전적인 업무 환경 선호"
  },
  {
    type: "ESFP",
    name: "연예인",
    careers: ["영업 사원", "이벤트 코디네이터", "패션 디자이너", "요리사", "사회복지사"],
    strengths: "즉흥적 문제 해결, 사람들과의 원활한 소통, 실용적 접근",
    workStyle: "활기차고 사람들과 함께하는 업무 환경 선호"
  }
];

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

const dailyLifeTips = [
  {
    title: "스트레스 관리",
    content: "각 유형별로 효과적인 스트레스 해소 방법을 알아보세요",
    examples: [
      "I 유형: 혼자만의 시간 확보",
      "E 유형: 친구들과의 소셜 활동",
      "N 유형: 미래 계획 수립",
      "S 유형: 일상 루틴 유지"
    ]
  },
  {
    title: "시간 관리",
    content: "유형별 시간 관리 방법을 적용해보세요",
    examples: [
      "J 유형: 상세한 일정 계획",
      "P 유형: 유연한 시간 활용",
      "I 유형: 집중 시간 확보",
      "E 유형: 소셜 스케줄링"
    ]
  },
  {
    title: "의사결정",
    content: "각 유형의 장점을 살린 의사결정 방법을 사용하세요",
    examples: [
      "T 유형: 논리적 분석 우선",
      "F 유형: 감정적 영향 고려",
      "S 유형: 과거 경험 참조",
      "N 유형: 미래 가능성 탐색"
    ]
  }
];

export default function Usage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center gap-6 px-4 text-center pt-25 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter mb-4">
            실용적 활용
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
            일상생활, 직장, 관계에서 MBTI를 효과적으로 활용하는 방법을 알아보자
          </p>
        </div>

        {/* Career Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-8">
            직업 추천
          </h2>

          {/* 분석가형 (NT) */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              분석가형 (NT) - 합리성과 지적 능력
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerData.filter(item => ['INTJ', 'INTP', 'ENTJ', 'ENTP'].includes(item.type)).map((item, index) => (
                <div
                  key={index}
                  className="bg-black/20 backdrop-blur-md rounded-lg p-6 border-2 border-cyan-400 shadow-lg shadow-cyan-400/20 hover:bg-black/30 hover:border-cyan-500 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-center">
                    <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {item.type} - {item.name}
                    </h4>
                    <div className="text-left mb-4">
                      <h5 className="font-semibold text-white mb-2">추천 직업:</h5>
                      <div className="flex flex-wrap gap-1">
                        {item.careers.map((career, careerIndex) => (
                          <span
                            key={careerIndex}
                            className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-left mb-3">
                      <h5 className="font-semibold text-white mb-1">강점:</h5>
                      <p className="text-gray-300 text-sm">{item.strengths}</p>
                    </div>
                    <div className="text-left">
                      <h5 className="font-semibold text-white mb-1">업무 스타일:</h5>
                      <p className="text-gray-300 text-sm">{item.workStyle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 외교관형 (NF) */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent mb-6">
              외교관형 (NF) - 공감과 이상주의
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerData.filter(item => ['INFJ', 'INFP', 'ENFJ', 'ENFP'].includes(item.type)).map((item, index) => (
                <div
                  key={index}
                  className="bg-black/20 backdrop-blur-md rounded-lg p-6 border-2 border-pink-400 shadow-lg shadow-pink-400/20 hover:bg-black/30 hover:border-pink-500 hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-center">
                    <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent mb-2">
                      {item.type} - {item.name}
                    </h4>
                    <div className="text-left mb-4">
                      <h5 className="font-semibold text-white mb-2">추천 직업:</h5>
                      <div className="flex flex-wrap gap-1">
                        {item.careers.map((career, careerIndex) => (
                          <span
                            key={careerIndex}
                            className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded text-xs"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-left mb-3">
                      <h5 className="font-semibold text-white mb-1">강점:</h5>
                      <p className="text-gray-300 text-sm">{item.strengths}</p>
                    </div>
                    <div className="text-left">
                      <h5 className="font-semibold text-white mb-1">업무 스타일:</h5>
                      <p className="text-gray-300 text-sm">{item.workStyle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 관리자형 (SJ) */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent mb-6">
              관리자형 (SJ) - 질서와 안정성
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerData.filter(item => ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'].includes(item.type)).map((item, index) => (
                <div
                  key={index}
                  className="bg-black/20 backdrop-blur-md rounded-lg p-6 border-2 border-green-400 shadow-lg shadow-green-400/20 hover:bg-black/30 hover:border-green-500 hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-center">
                    <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-2">
                      {item.type} - {item.name}
                    </h4>
                    <div className="text-left mb-4">
                      <h5 className="font-semibold text-white mb-2">추천 직업:</h5>
                      <div className="flex flex-wrap gap-1">
                        {item.careers.map((career, careerIndex) => (
                          <span
                            key={careerIndex}
                            className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-left mb-3">
                      <h5 className="font-semibold text-white mb-1">강점:</h5>
                      <p className="text-gray-300 text-sm">{item.strengths}</p>
                    </div>
                    <div className="text-left">
                      <h5 className="font-semibold text-white mb-1">업무 스타일:</h5>
                      <p className="text-gray-300 text-sm">{item.workStyle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 탐험가형 (SP) */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-6">
              탐험가형 (SP) - 즉흥성과 유연성
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerData.filter(item => ['ISTP', 'ISFP', 'ESTP', 'ESFP'].includes(item.type)).map((item, index) => (
                <div
                  key={index}
                  className="bg-black/20 backdrop-blur-md rounded-lg p-6 border-2 border-orange-400 shadow-lg shadow-orange-400/20 hover:bg-black/30 hover:border-orange-500 hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-center">
                    <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                      {item.type} - {item.name}
                    </h4>
                    <div className="text-left mb-4">
                      <h5 className="font-semibold text-white mb-2">추천 직업:</h5>
                      <div className="flex flex-wrap gap-1">
                        {item.careers.map((career, careerIndex) => (
                          <span
                            key={careerIndex}
                            className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-left mb-3">
                      <h5 className="font-semibold text-white mb-1">강점:</h5>
                      <p className="text-gray-300 text-sm">{item.strengths}</p>
                    </div>
                    <div className="text-left">
                      <h5 className="font-semibold text-white mb-1">업무 스타일:</h5>
                      <p className="text-gray-300 text-sm">{item.workStyle}</p>
                    </div>
                  </div>
                </div>
              ))}
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

        {/* Daily Life Tips */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-8">
            일상생활 활용
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dailyLifeTips.map((tip, index) => (
              <div
                key={index}
                className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{tip.content}</p>
                <div className="space-y-2">
                  {tip.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">✓</span>
                      <span className="text-gray-400 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning */}
        <div className="bg-yellow-500/10 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20 mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-yellow-400 text-xl">⚠️</span>
            <h3 className="text-lg font-bold text-yellow-300">중요 안내</h3>
          </div>
          <p className="text-yellow-200 text-sm leading-relaxed">
            MBTI는 참고용 도구일 뿐입니다. 자신의 성격을 완벽하게 설명하지 못하며,
            상황에 따라 행동이 달라질 수 있습니다. 전문적인 상담이 필요한 경우
            관련 전문가에게 도움을 청하세요.
          </p>
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