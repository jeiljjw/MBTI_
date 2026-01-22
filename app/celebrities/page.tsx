"use client";

import Link from "next/link";

const celebrities = [
  {
    type: "INTJ",
    name: "전략가",
    people: [
      { name: "아이작 뉴턴", description: "물리학자, 수학자", image: "🧑‍🔬" },
      { name: "니콜라 테슬라", description: "발명가, 전기공학자", image: "⚡" },
      { name: "스티브 잡스", description: "애플 창업자", image: "📱" },
      { name: "일론 머스크", description: "테슬라 CEO", image: "🚀" }
    ]
  },
  {
    type: "INTP",
    name: "논리술사",
    people: [
      { name: "알버트 아인슈타인", description: "물리학자", image: "⚛️" },
      { name: "빌 게이츠", description: "마이크로소프트 창업자", image: "💻" },
      { name: "스티븐 호킹", description: "물리학자", image: "🌌" },
      { name: "린지 로한", description: "작가", image: "📖" }
    ]
  },
  {
    type: "ENTJ",
    name: "통솔자",
    people: [
      { name: "나폴레옹 보나파르트", description: "프랑스 황제", image: "👑" },
      { name: "마가렛 대처", description: "영국 총리", image: "🇬🇧" },
      { name: "잭 웰치", description: "GE CEO", image: "🏢" },
      { name: "빈스 롬바르디", description: "미식축구 코치", image: "🏈" }
    ]
  },
  {
    type: "ENTP",
    name: "변론가",
    people: [
      { name: "토마스 에디슨", description: "발명가", image: "💡" },
      { name: "마크 트웨인", description: "작가", image: "📚" },
      { name: "리처드 파인먼", description: "물리학자", image: "🔬" },
      { name: "케빈 하트", description: "코미디언", image: "🎤" }
    ]
  },
  {
    type: "INFJ",
    name: "옹호자",
    people: [
      { name: "넬슨 만델라", description: "남아프리카 대통령", image: "🕊️" },
      { name: "마틴 루터 킹", description: "인권 운동가", image: "✊" },
      { name: "모한다스 간디", description: "독립 운동가", image: "🇮🇳" },
      { name: "오프라 윈프리", description: "방송인", image: "📺" }
    ]
  },
  {
    type: "INFP",
    name: "중재자",
    people: [
      { name: "윌리엄 셰익스피어", description: "극작가", image: "🎭" },
      { name: "조니 뎁", description: "배우", image: "🎬" },
      { name: "프리다 칼로", description: "화가", image: "🎨" },
      { name: "헤밍웨이", description: "작가", image: "📝" }
    ]
  },
  {
    type: "ENFJ",
    name: "선도자",
    people: [
      { name: "바락 오바마", description: "미국 대통령", image: "🇺🇸" },
      { name: "달라이 라마", description: "티베트 종교 지도자", image: "🕊️" },
      { name: "오프라 윈프리", description: "방송인", image: "📺" },
      { name: "넬슨 만델라", description: "남아프리카 대통령", image: "🇿🇦" }
    ]
  },
  {
    type: "ENFP",
    name: "활동가",
    people: [
      { name: "롭 로우", description: "배우, 프로듀서", image: "🎭" },
      { name: "줄리아 로버츠", description: "배우", image: "💃" },
      { name: "톰 행크스", description: "배우", image: "🎬" },
      { name: "휘트니 휴스턴", description: "가수", image: "🎤" }
    ]
  },
  {
    type: "ISTJ",
    name: "현실주의자",
    people: [
      { name: "조지 워싱턴", description: "미국 초대 대통령", image: "🇺🇸" },
      { name: "앙겔라 메르켈", description: "독일 총리", image: "🇩🇪" },
      { name: "워렌 버핏", description: "투자자", image: "📊" },
      { name: "조지 S. 패튼", description: "장군", image: "🎖️" }
    ]
  },
  {
    type: "ISFJ",
    name: "수호자",
    people: [
      { name: "마더 테레사", description: "수녀, 인도주의자", image: "🙏" },
      { name: "모니카 루이스", description: "간호사", image: "🏥" },
      { name: "조지 루카스", description: "영화 감독", image: "🎥" },
      { name: "빈스 본", description: "배우", image: "🎬" }
    ]
  },
  {
    type: "ESTJ",
    name: "경영자",
    people: [
      { name: "빌 게이츠", description: "마이크로소프트 창업자", image: "💻" },
      { name: "마가렛 대처", description: "영국 총리", image: "🇬🇧" },
      { name: "존 F. 케네디", description: "미국 대통령", image: "🇺🇸" },
      { name: "콘돌리자 라이스", description: "외무장관", image: "🎓" }
    ]
  },
  {
    type: "ESFJ",
    name: "집정관",
    people: [
      { name: "테일러 스위프트", description: "가수", image: "🎵" },
      { name: "비욘세", description: "가수", image: "🎤" },
      { name: "샤를리즈 테론", description: "배우", image: "🎭" },
      { name: "리한나", description: "가수", image: "🎤" }
    ]
  },
  {
    type: "ISTP",
    name: "장인",
    people: [
      { name: "스티브 맥퀸", description: "배우", image: "🏍️" },
      { name: "찰리 채플린", description: "배우, 감독", image: "🎬" },
      { name: "토머스 제퍼슨", description: "미국 대통령", image: "🇺🇸" },
      { name: "마이클 조던", description: "농구 선수", image: "🏀" }
    ]
  },
  {
    type: "ISFP",
    name: "모험가",
    people: [
      { name: "마릴린 먼로", description: "배우", image: "⭐" },
      { name: "프리다 칼로", description: "화가", image: "🎨" },
      { name: "에드 시런", description: "가수", image: "🎸" },
      { name: "브루노 마스", description: "가수", image: "🎵" }
    ]
  },
  {
    type: "ESTP",
    name: "사업가",
    people: [
      { name: "도널드 트럼프", description: "사업가, 정치인", image: "🏢" },
      { name: "세르지오 페레즈", description: "F1 레이서", image: "🏎️" },
      { name: "매들린 올브라이트", description: "외무장관", image: "🎓" },
      { name: "안젤리나 졸리", description: "배우", image: "🎭" }
    ]
  },
  {
    type: "ESFP",
    name: "연예인",
    people: [
      { name: "엘튼 존", description: "가수", image: "🎹" },
      { name: "리처드 기어", description: "배우", image: "🎪" },
      { name: "스칼릿 요한슨", description: "배우", image: "🎭" },
      { name: "브루노 마스", description: "가수", image: "🎵" }
    ]
  }
];

export default function Celebrities() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center gap-6 px-4 text-center pt-25 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter mb-4">
            유명인 MBTI
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
            각 유형별 대표적인 인물들을 만나보세요
          </p>
        </div>

        {/* Celebrities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {celebrities.map((type, index) => {
            // 각 유형별 색상 설정
            const getTypeColor = (typeCode: string) => {
              const colors: {[key: string]: string} = {
                // 분석가형 (NT)
                'INTJ': 'from-cyan-400 to-blue-500',
                'INTP': 'from-cyan-300 to-blue-400',
                'ENTJ': 'from-blue-400 to-indigo-500',
                'ENTP': 'from-blue-300 to-indigo-400',
                // 외교관형 (NF)
                'INFJ': 'from-pink-400 to-rose-500',
                'INFP': 'from-pink-300 to-rose-400',
                'ENFJ': 'from-rose-400 to-pink-500',
                'ENFP': 'from-rose-300 to-pink-400',
                // 관리자형 (SJ)
                'ISTJ': 'from-green-400 to-teal-500',
                'ISFJ': 'from-green-300 to-teal-400',
                'ESTJ': 'from-teal-400 to-green-500',
                'ESFJ': 'from-teal-300 to-green-400',
                // 탐험가형 (SP)
                'ISTP': 'from-orange-400 to-red-500',
                'ISFP': 'from-orange-300 to-red-400',
                'ESTP': 'from-red-400 to-orange-500',
                'ESFP': 'from-red-300 to-orange-400'
              };
              return colors[typeCode] || 'from-gray-400 to-gray-500';
            };

            const getBorderColor = (typeCode: string) => {
              const borderColors: {[key: string]: string} = {
                // 분석가형 (NT)
                'INTJ': 'border-cyan-400 shadow-lg shadow-cyan-400/20',
                'INTP': 'border-cyan-300 shadow-lg shadow-cyan-300/20',
                'ENTJ': 'border-blue-400 shadow-lg shadow-blue-400/20',
                'ENTP': 'border-blue-300 shadow-lg shadow-blue-300/20',
                // 외교관형 (NF)
                'INFJ': 'border-pink-400 shadow-lg shadow-pink-400/20',
                'INFP': 'border-pink-300 shadow-lg shadow-pink-300/20',
                'ENFJ': 'border-rose-400 shadow-lg shadow-rose-400/20',
                'ENFP': 'border-rose-300 shadow-lg shadow-rose-300/20',
                // 관리자형 (SJ)
                'ISTJ': 'border-green-400 shadow-lg shadow-green-400/20',
                'ISFJ': 'border-green-300 shadow-lg shadow-green-300/20',
                'ESTJ': 'border-teal-400 shadow-lg shadow-teal-400/20',
                'ESFJ': 'border-teal-300 shadow-lg shadow-teal-300/20',
                // 탐험가형 (SP)
                'ISTP': 'border-orange-400 shadow-lg shadow-orange-400/20',
                'ISFP': 'border-orange-300 shadow-lg shadow-orange-300/20',
                'ESTP': 'border-red-400 shadow-lg shadow-red-400/20',
                'ESFP': 'border-red-300 shadow-lg shadow-red-300/20'
              };
              return borderColors[typeCode] || 'border-gray-400 shadow-lg shadow-gray-400/20';
            };

            return (
              <div
                key={index}
                className={`bg-black/20 backdrop-blur-md rounded-lg p-6 border-2 ${getBorderColor(type.type)} hover:bg-black/30 transition-all duration-300 transform hover:scale-105`}
              >
                <div className="text-center">
                  <h3 className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${getTypeColor(type.type)} bg-clip-text text-transparent mb-2`}>
                    {type.type}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-300 mb-6">
                    {type.name}
                  </h4>
                  <div className="space-y-4">
                    {type.people.map((person, personIndex) => (
                      <div key={personIndex} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                        <div className="text-2xl">{person.image}</div>
                        <div className="text-left">
                          <div className="font-medium text-white">{person.name}</div>
                          <div className="text-sm text-gray-400">{person.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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