// MBTI 유형별 유명인 데이터 - 확장 버전
// 분야: politics(정치), business(비즈니스), arts(예술), sports(스포츠), science(과학/기술), entertainment(엔터테인먼트)

export type CelebrityField = 'politics' | 'business' | 'arts' | 'sports' | 'science' | 'entertainment' | 'literature';

// 국가 코드 타입
export type CountryCode =
  | 'US' | 'KR' | 'GB' | 'CA' | 'AU' | 'DE' | 'FR' | 'IT' | 'ES' | 'JP' | 'CN' | 'IN' | 'ZA' | 'MX' | 'RU' | 'CH' | 'SE' | 'DK' | 'NL' | 'AT';

// 국가 정보 인터페이스
export interface Country {
  code: CountryCode;
  name: string;
  nameEn: string;
  flag: string;
}

// 국가 데이터
export const countries: Record<CountryCode, Country> = {
  US: { code: 'US', name: '미국', nameEn: 'United States', flag: '🇺🇸' },
  KR: { code: 'KR', name: '한국', nameEn: 'South Korea', flag: '🇰🇷' },
  GB: { code: 'GB', name: '영국', nameEn: 'United Kingdom', flag: '🇬🇧' },
  CA: { code: 'CA', name: '캐나다', nameEn: 'Canada', flag: '🇨🇦' },
  AU: { code: 'AU', name: '호주', nameEn: 'Australia', flag: '🇦🇺' },
  DE: { code: 'DE', name: '독일', nameEn: 'Germany', flag: '🇩🇪' },
  FR: { code: 'FR', name: '프랑스', nameEn: 'France', flag: '🇫🇷' },
  IT: { code: 'IT', name: '이탈리아', nameEn: 'Italy', flag: '🇮🇹' },
  ES: { code: 'ES', name: '스페인', nameEn: 'Spain', flag: '🇪🇸' },
  JP: { code: 'JP', name: '일본', nameEn: 'Japan', flag: '🇯🇵' },
  CN: { code: 'CN', name: '중국', nameEn: 'China', flag: '🇨🇳' },
  IN: { code: 'IN', name: '인도', nameEn: 'India', flag: '🇮🇳' },
  ZA: { code: 'ZA', name: '남아프리카공화국', nameEn: 'South Africa', flag: '🇿🇦' },
  MX: { code: 'MX', name: '멕시코', nameEn: 'Mexico', flag: '🇲🇽' },
  RU: { code: 'RU', name: '러시아', nameEn: 'Russia', flag: '🇷🇺' },
  CH: { code: 'CH', name: '스위스', nameEn: 'Switzerland', flag: '🇨🇭' },
  SE: { code: 'SE', name: '스웨덴', nameEn: 'Sweden', flag: '🇸🇪' },
  DK: { code: 'DK', name: '덴마크', nameEn: 'Denmark', flag: '🇩🇰' },
  NL: { code: 'NL', name: '네덜란드', nameEn: 'Netherlands', flag: '🇳🇱' },
  AT: { code: 'AT', name: '오스트리아', nameEn: 'Austria', flag: '🇦🇹' },
};

export interface Celebrity {
  name: string;
  nameEn?: string;
  field: CelebrityField;
  country: CountryCode;
  description: string;
  achievements: string[];
  mbtiTraits: string[];
  successFactors: string[];
  image?: string;
}

export interface MBTICelebrityGroup {
  type: string;
  name: string;
  nickname: string;
  group: string;
  celebrities: Celebrity[];
}

export const celebrityGroups: MBTICelebrityGroup[] = [
  {
    type: "INTJ",
    name: "전략가",
    nickname: "Architect",
    group: "분석가형 (NT)",
    celebrities: [
      {
        name: "일론 머스크",
        nameEn: "Elon Musk",
        field: "business",
        country: "US",
        description: "테슬라, 스페이스X CEO. 혁신적인 비전과 끊임없는 도전으로 기술 산업을 재편한 기업가",
        achievements: ["전기자동차 대중화 선도", "민간 우주 여행 시대 개막", "뉴럴링크 설립"],
        mbtiTraits: ["장기적 비전 수립", "복잡한 시스템 설계", "전략적 사고", "완벽주의"],
        successFactors: ["미래 지향적 비전", "논리적 문제 해결", "도전적 목표 추진", "혁신 집착"]
      },
      {
        name: "스티브 잡스",
        nameEn: "Steve Jobs",
        field: "business",
        country: "US",
        description: "애플 공동창업자. 디자인과 기술의 완벽한 결합을 이끌어낸 혁신가",
        achievements: ["개인용 컴퓨터 대중화", "iPhone으로 스마트폰 시대 개막", "iTunes로 음악 산업 혁신"],
        mbtiTraits: ["완벽주의적 디자인", "미래 지향적 비전", "단순함 추구", "세부사항 집착"],
        successFactors: ["기술과 예술 결합", "사용자 경험 집착", "대담한 혁신", "완벽한 실행력"]
      },
      {
        name: "아이작 뉴턴",
        nameEn: "Isaac Newton",
        field: "science",
        country: "GB",
        description: "물리학자, 수학자. 고전역학의 기초를 세운 과학의 아버지",
        achievements: ["만유인력 법칙 발견", "운동 법칙 정립", "미적분학 개발"],
        mbtiTraits: ["깊은 집중력", "이론 체계화", "독립적 연구", "완벽주의"],
        successFactors: ["철저한 논리 분석", "자연 질서 탐구", "깊은 사고", "이론 체계화"]
      },
      {
        name: "니콜라 테슬라",
        nameEn: "Nikola Tesla",
        field: "science",
        country: "AT",
        description: "발명가, 전기공학자. 교류 전기 시스템의 선구자",
        achievements: ["교류 전기 시스템 개발", "테슬라 코일 발명", "무선 전력 전송 개념"],
        mbtiTraits: ["혁신적 사고", "시스템 설계", "미래 지향", "독립적 연구"],
        successFactors: ["혁신 기술 개발", "장기적 기술 비전", "복잡한 문제 해결", "끊임없는 연구"]
      },
      {
        name: "마크 저커버그",
        nameEn: "Mark Zuckerberg",
        field: "business",
        country: "US",
        description: "메타 CEO. 소셜 네트워크의 선구자",
        achievements: ["페이스북 10억 명 연결", "메타버스 비전", "소셜 미디어 혁신"],
        mbtiTraits: ["전략적 사고", "시스템 설계", "논리적 의사결정", "높은 학습력"],
        successFactors: ["사회 연결 구조 혁신", "기술 기반 비즈니스", "데이터 중심 의사결정", "지속적 혁신"]
      },
      {
        name: "크리스토퍼 놀란",
        nameEn: "Christopher Nolan",
        field: "arts",
        country: "GB",
        description: "영화 감독. 복잡한 서사 구조와 철학적 깊이로 유명한 감독",
        achievements: ["인셉션, 다크나이트 등 흥행작", "아카데미상 최우수 감독상", "복잡한 서사 대중화"],
        mbtiTraits: ["복잡한 시나리오", "철학적 통찰", "완벽주의 연출", "장기적 기획"],
        successFactors: ["복잡한 개념의 대중적 풀이", "기술적 완벽주의", "독창적 스토리텔링", "철학과 오락성 결합"]
      },

    ]
  },
  {
    type: "INTP",
    name: "논리술사",
    nickname: "Logician",
    group: "분석가형 (NT)",
    celebrities: [
      {
        name: "알버트 아인슈타인",
        nameEn: "Albert Einstein",
        field: "science",
        country: "DE",
        description: "물리학자. 상대성이론으로 현대 물리학의 기초를 세운 천재",
        achievements: ["상대성이론 발표", "E=mc² 발견", "노벨물리학상 수상(1921)"],
        mbtiTraits: ["추상적 사고", "이론 구축", "독창적 접근", "비판적 사고"],
        successFactors: ["상상력과 논리 결합", "기존 패러다임 도전", "깊은 집중력", "직관과 분석 균형"]
      },
      {
        name: "빌 게이츠",
        nameEn: "Bill Gates",
        field: "business",
        country: "US",
        description: "마이크로소프트 공동창업자. 기술과 비즈니스의 결합으로 세상을 변화시킨 기업가",
        achievements: ["Windows OS 선점", "세계 최대 소프트웨어 기업", "빌 앤드 멜린다 게이츠 재단"],
        mbtiTraits: ["논리적 분석", "시스템 이해", "지적 호기심", "비판적 사고"],
        successFactors: ["기술 심층 지식", "복잡한 문제 단순화", "학습과 적응력", "장기적 비전"]
      },
      {
        name: "찰스 다윈",
        nameEn: "Charles Darwin",
        field: "science",
        country: "GB",
        description: "생물학자. 진화론의 창시자로 생명과학의 혁명을 이끈 과학자",
        achievements: ["종의 기원 발표", "자연선택설 확립", "현대 생명과학 기초"],
        mbtiTraits: ["관찰력과 분석력", "자료 정리", "비판적 검증", "독립적 사고"],
        successFactors: ["꼼꼼한 관찰", "이론 통합", "비판에 대한 강인함", "오랜 연구 인내심"]
      },
      {
        name: "스티븐 호킹",
        nameEn: "Stephen Hawking",
        field: "science",
        country: "GB",
        description: "이론물리학자. 블랙홀과 우주론 연구로 유명한 과학자",
        achievements: ["호킹 복사 이론", "시간의 역사 저술", "장애 극복 과학 연구"],
        mbtiTraits: ["추상적 사고", "개념 단순화", "지적 호기심", "비판적 사고"],
        successFactors: ["우주 개념 대중화", "끈질긴 연구", "독특한 접근", "학문적 소통"]
      },
      {
        name: "레이 달리오",
        nameEn: "Ray Dalio",
        field: "business",
        country: "US",
        description: "브리지워터 창업자. 세계 최대 헤지펀드 운용자",
        achievements: ["세계 최대 헤지펀드 설립", "원칙(Principles) 저술", "투자 철학 시스템화"],
        mbtiTraits: ["체계적 사고", "데이터 기반 의사결정", "시스템 분석", "논리적 접근"],
        successFactors: ["투자 원칙 시스템화", "시장 메커니즘 분석", "실패로부터 학습", "장기적 투자"]
      },
      {
        name: "슈가 (민윤기)",
        nameEn: "SUGA",
        field: "entertainment",
        country: "KR",
        description: "BTS 멤버. 프로듀서로서 음악 제작과 솔로 활동으로 주목받는 아티스트",
        achievements: ["Agust D 솔로 앨범", "BTS 히트곡 프로듀싱", "사회 메시지 전달"],
        mbtiTraits: ["깊은 사고", "창의적 문제해결", "독립적 작업 선호", "진솔한 표현"],
        successFactors: ["음악적 깊이", "작사/작곡 능력", "자기 성찰", "팬과의 소통"]
      },
      {
        name: "정국",
        nameEn: "Jungkook",
        field: "entertainment",
        country: "KR",
        description: "BTS 멤버. '황금 막내'로 불리는 만능 아이돌",
        achievements: ["Billboard Hot 100 1위 'Seven'", "FIFA 월드컵 공식 송", "솔로 앨범 'GOLDEN'"],
        mbtiTraits: ["논리적 사고", "창의적 문제해결", "호기심", "분석력"],
        successFactors: ["만능 포지션", "꾸준한 성장", "팬 사랑", "글로벌 인기"]
      }
    ]
  },
  {
    type: "ENTJ",
    name: "통솔자",
    nickname: "Commander",
    group: "분석가형 (NT)",
    celebrities: [
      {
        name: "나폴레옹 보나파르트",
        nameEn: "Napoleon Bonaparte",
        field: "politics",
        country: "FR",
        description: "프랑스 황제. 군사 전략가이자 유럽을 재편한 지도자",
        achievements: ["프랑스 제국 건설", "나폴레옹 법전", "유럽 정치 지형 재편"],
        mbtiTraits: ["전략적 사고", "강력한 추진력", "위기 대응", "목표 지향"],
        successFactors: ["혁신적 군사 전략", "조직 관리", "대담한 결단", "체계적 법제"]
      },
      {
        name: "잭 웰치",
        nameEn: "Jack Welch",
        field: "business",
        country: "US",
        description: "전 GE CEO. '20세기 최고의 경영인'으로 불린 기업 총수",
        achievements: ["GE 기업 가치 20배 성장", "시총 1위 기업", "경영 혁신 시스템"],
        mbtiTraits: ["강력한 리더십", "성과 중심", "조직 변화", "효율성 추구"],
        successFactors: ["과감한 구조조정", "인재 육성", "수익 중심 경영", "경쟁 우위"]
      },
      {
        name: "고든 램지",
        nameEn: "Gordon Ramsay",
        field: "entertainment",
        country: "GB",
        description: "셰프, 방송인. 미슐랭 스타 셰프이자 미디어 스타",
        achievements: ["미슐랭 16개 스타", "글로벌 레스토랑 제국", "TV 프로그램 진행"],
        mbtiTraits: ["높은 기준", "강력한 추진력", "목표 지향", "효율성 중시"],
        successFactors: ["품질 추구", "브랜드 확장", "미디어 활용", "철저한 운영"]
      },
      {
        name: "킴 카다시안",
        nameEn: "Kim Kardashian",
        field: "entertainment",
        country: "US",
        description: "미디어 퍼스널리티, 기업가. KKW Beauty, SKIMS 창업자",
        achievements: ["SKIMS 40억 달러 기업", "미국 변호사 시험 합격", "리얼리티 TV 스타"],
        mbtiTraits: ["사업가 정신", "브랜드 구축", "전략적 마케팅", "추진력"],
        successFactors: ["미디어 활용", "비즈니스 다각화", "개인 브랜딩", "끈질긴 노력"]
      }
    ]
  },
  {
    type: "ENTP",
    name: "변론가",
    nickname: "Debater",
    group: "분석가형 (NT)",
    celebrities: [
      {
        name: "토마스 에디슨",
        nameEn: "Thomas Edison",
        field: "science",
        country: "US",
        description: "발명왕. 1,093개의 특허를 보유한 최고의 발명가",
        achievements: ["백열전구 상용화", "유성영화 카메라", "축음기 발명"],
        mbtiTraits: ["창의적 문제 해결", "실험 정신", "개념 혁신", "다재다능"],
        successFactors: ["끊임없는 실험", "실용적 발명", "실패로부터 학습", "상용화 능력"]
      },
      {
        name: "스티브 워즈니악",
        nameEn: "Steve Wozniak",
        field: "business",
        country: "US",
        description: "애플 공동창업자. Apple I, II 설계한 엔지니어",
        achievements: ["Apple I, II 설계", "개인용 컴퓨터 혁신", "기술 대중화"],
        mbtiTraits: ["기술적 창의성", "혁신적 해결", "호기심", "실용적 발명"],
        successFactors: ["기술과 실용성 결합", "복잡한 기술 단순화", "사용자 중심", "재미와 기술"]
      },
      {
        name: "마크 트웨인",
        nameEn: "Mark Twain",
        field: "literature",
        country: "US",
        description: "작가. 미국 문학의 대표 작가로 풍자와 유머로 유명",
        achievements: ["톰 소여의 모험 등 명작", "미국 문학 새 장", "사회 풍자"],
        mbtiTraits: ["창의적 글쓰기", "통찰력 풍자", "독특한 관점", "주제 탐구"],
        successFactors: ["대중적 어필", "사회 비판과 유머", "독창적 스토리텔링", "장르 도전"]
      },

      {
        name: "퓨디파이",
        nameEn: "PewDiePie",
        field: "entertainment",
        country: "SE",
        description: "유튜버. 세계 최초 개인 유튜브 채널 1억 구독자 돌파자",
        achievements: ["1억 구독자 돌파", "게임 콘텐츠 혁신", "Book Club 시작"],
        mbtiTraits: ["재치와 유머", "즉흥성", "독특한 관점", "창의성"],
        successFactors: ["진정성 있는 소통", "팬 커뮤니티", "콘텐츠 다각화", "개인 브랜딩"]
      }
    ]
  },
  {
    type: "INFJ",
    name: "옹호자",
    nickname: "Advocate",
    group: "외교관형 (NF)",
    celebrities: [
      {
        name: "마틴 루터 킹",
        nameEn: "Martin Luther King Jr.",
        field: "politics",
        country: "US",
        description: "인권운동가. 비폭력 저항으로 인종차별에 맞선 지도자",
        achievements: ["인종차별법 폐지", "노벨평화상(1964)", "미국 민권운동 상징"],
        mbtiTraits: ["이상주의", "강력한 공감", "영감 리더십", "비전과 현실 균형"],
        successFactors: ["비폭력 저항", "감정 연결", "사회 변화", "신념 헌신"]
      },
      {
        name: "넬슨 만델라",
        nameEn: "Nelson Mandela",
        field: "politics",
        country: "ZA",
        description: "남아프리카공화국 전 대통령. 아파르트헤이트에 맞선 인권운동가",
        achievements: ["인종차별 종식", "노벨평화상(1993)", "화해와 통합 상징"],
        mbtiTraits: ["깊은 이상주의", "용서 리더십", "장기적 비전", "인내와 헌신"],
        successFactors: ["감옥에서도 포기하지 않은 신념", "적에 대한 용서", "국민 통합", "비폭력 전략"]
      },
      {
        name: "오프라 윈프리",
        nameEn: "Oprah Winfrey",
        field: "entertainment",
        country: "US",
        description: "방송인, 기업가. 미국 최고의 토크쇼 진행자",
        achievements: ["오프라 윈프리 쇼 25년", "미디어 제국", "필란트로피"],
        mbtiTraits: ["깊은 공감", "영감 소통", "직관적 통찰", "타인 성장 관심"],
        successFactors: ["진정성 인터뷰", "사회적 이슈", "자기 계발", "미디어 사업"]
      },
      {
        name: "J.K. 롤링",
        nameEn: "J.K. Rowling",
        field: "literature",
        country: "GB",
        description: "작가. 해리포터 시리즈로 세계적인 베스트셀러 작가",
        achievements: ["해리포터 5억 부 판매", "영화 프랜차이즈", "성공 신화"],
        mbtiTraits: ["풍부한 상상력", "스토리 구성", "사회 메시지", "깊은 통찰"],
        successFactors: ["독창적 판타지", "성장과 우정", "인물 심리", "시리즈 기획"]
      },
      {
        name: "아이유 (이지은)",
        nameEn: "IU",
        field: "entertainment",
        country: "KR",
        description: "싱어송라이터이자 배우. 깊은 가사와 독보적인 음악성으로 국민적인 사랑을 받는 아티스트",
        achievements: ["국내 최다 음원 1위 보유", "Golden Disc 대상 3회", "칸 영화제 초청 배우"],
        mbtiTraits: ["섬세한 감수성", "철학적인 가사", "신중한 완벽주의", "조용하지만 강한 영향력"],
        successFactors: ["자신만의 확고한 가치관", "팬들과의 깊은 공감", "끊임없는 자기 성찰", "다재다능한 예술성"]
      }
    ]
  },
  {
    type: "INFP",
    name: "중재자",
    nickname: "Mediator",
    group: "외교관형 (NF)",
    celebrities: [
      {
        name: "윌리엄 셰익스피어",
        nameEn: "William Shakespeare",
        field: "literature",
        country: "GB",
        description: "극작가. 세계 최고의 문학 작가로 인류 보편의 감정을 탐구",
        achievements: ["햄릿 등 37개 희곡", "현대 영어 영향", "인간 정서 탐구"],
        mbtiTraits: ["깊은 감정 이해", "인간 본성 통찰", "창의적 표현", "인물 묘사"],
        successFactors: ["인간 심리 이해", "시대 초월 보편성", "언어 재능", "장르 마스터"]
      },
      {
        name: "J.R.R. 톨킨",
        nameEn: "J.R.R. Tolkien",
        field: "literature",
        country: "GB",
        description: "작가. 반지의 제왕으로 현대 판타지 문학의 아버지",
        achievements: ["반지의 제왕 창시", "엘프어 개발", "판타지 장르 확립"],
        mbtiTraits: ["풍부한 상상력", "세계관 구축", "언어학 재능", "이상주의"],
        successFactors: ["완벽한 세계관", "신화와 현대 결합", "선과 악 주제", "헌신적 창작"]
      },
      {
        name: "빈센트 반 고흐",
        nameEn: "Vincent van Gogh",
        field: "arts",
        country: "NL",
        description: "화가. 후기 인상주의 대표 작가로 감정의 진정성을 담은 작품",
        achievements: ["별이 빛나는 밤 등 명작", "후기 인상주의 선구", "현대 미술 영향"],
        mbtiTraits: ["깊은 감정 표현", "진정성", "독특한 시각", "이상주의"],
        successFactors: ["진정성 감정", "독창적 색채", "자연과 삶 사랑", "헌신적 예술"]
      },
      {
        name: "프리다 칼로",
        nameEn: "Frida Kahlo",
        field: "arts",
        country: "MX",
        description: "화가. 멕시코의 대표 화가로 자전적 작품으로 유명",
        achievements: ["멕시코 예술 상징", "여성 예술가 독자적 입지", "자전적 초상화"],
        mbtiTraits: ["자기 성찰", "감정 표현", "독특한 시각", "고통을 예술로"],
        successFactors: ["솔직한 표현", "전통과 현대 결합", "고통 예술 전환", "강인한 의지"]
      },

      {
        name: "올리비아 로드리고",
        nameEn: "Olivia Rodrigo",
        field: "arts",
        country: "US",
        description: "가수, 배우. 'drivers license'로 데뷔한 Z세대 팝 아이콘",
        achievements: ["그래미상 3관왕", "'SOUR' 앨범 대성공", "디즈니+ '하이스쿨 뮤지컬'"],
        mbtiTraits: ["감정 표현", "진정성", "창의성", "이상주의"],
        successFactors: ["진솔한 가사", "10대 공감", "빠른 성장", "팬과의 진정성"]
      },
      {
        name: "하니",
        nameEn: "Hanni",
        field: "entertainment",
        country: "KR",
        description: "NewJeans 멤버. 베트남계 호주 출신으로 글로벌 팬덤을 보유한 아이돌",
        achievements: ["NewJeans 데뷔 성공", "Gucci 글로벌 앰버서더", "'Hype Boy' 퍼포머"],
        mbtiTraits: ["이상주의", "창의성", "진정성", "공감 능력"],
        successFactors: ["다양한 매력", "글로벌 인기", "묘한 에너지", "팬 친화력"]
      },
      {
        name: "혜인",
        nameEn: "Hyein",
        field: "entertainment",
        country: "KR",
        description: "NewJeans 막내. 뛰어난 패션 감각과 성숙한 매력의 소유자",
        achievements: ["NewJeans 데뷔 성공", "Louis Vuitton 앰버서더", "'Cookie' 퍼포머"],
        mbtiTraits: ["이상주의", "창의성", "진정성", "감수성"],
        successFactors: ["성숙한 매력", "패션 센스", "묘한 카리스마", "긍정적 에너지"]
      }
    ]
  },
  {
    type: "ENFJ",
    name: "선도자",
    nickname: "Protagonist",
    group: "외교관형 (NF)",
    celebrities: [
      {
        name: "바락 오바마",
        nameEn: "Barack Obama",
        field: "politics",
        country: "US",
        description: "미국 제44대 대통령. 변화와 희망의 메시지로 선거된 첫 흑인 대통령",
        achievements: ["미국 최초 흑인 대통령", "오바마케어", "노벨평화상(2009)"],
        mbtiTraits: ["영감 리더십", "강력한 공감", "변화 열정", "효과적 소통"],
        successFactors: ["희망 메시지", "감정 연결", "원칙과 실용", "세력 통합"]
      },
      {
        name: "달라이 라마",
        nameEn: "Dalai Lama",
        field: "politics",
        country: "IN",
        description: "티베트 불교 지도자. 평화와 자비의 메시지로 세계적인 영향력",
        achievements: ["노벨평화상 수상(1989)", "티베트 독립 운동", "평화 메시지"],
        mbtiTraits: ["영감 리더십", "강력한 공감", "변화 열정", "효과적 소통"],
        successFactors: ["희망 메시지", "감정 연결", "원칙과 실용", "세력 통합"]
      },
      {
        name: "아리아나 그란데",
        nameEn: "Ariana Grande",
        field: "arts",
        country: "US",
        description: "가수, 배우. 4옥타브 음역대를 자랑하는 팝 스타",
        achievements: ["그래미상 수상", "Billboard 차트 1위 다수", "브로드웨이 복귀"],
        mbtiTraits: ["사교성", "배려심", "조직력", "인정욕구"],
        successFactors: ["보컬 실력", "팬과의 유대", "음악적 진화", "사회성"]
      },
      {
        name: "해리 스타일스",
        nameEn: "Harry Styles",
        field: "arts",
        country: "GB",
        description: "가수, 배우. One Direction 출신 솔로 아티스트로 패션 아이콘",
        achievements: ["그래미상 수상", "'Harry's House' 앨범", "영화 'Don't Worry Darling'"],
        mbtiTraits: ["카리스마", "공감 능력", "영감", "진정성"],
        successFactors: ["성별 구분 없는 패션", "팬과의 특별한 유대", "음악적 진화", "긍정적 메시지"]
      },
      {
        name: "셀레나 고메즈",
        nameEn: "Selena Gomez",
        field: "arts",
        country: "US",
        description: "가수, 배우, 프로듀서. Rare Beauty 창업자로 사업가적 면 보유",
        achievements: ["Rare Beauty 20억 달러 기업", "'Only Murders in the Building'", "정신 건강 캠페인"],
        mbtiTraits: ["공감 능력", "사회 의식", "리더십", "진정성"],
        successFactors: ["약점 솔직 공유", "팬과의 진정성", "사회적 메시지", "비즈니스 감각"]
      },
      {
        name: "윈터",
        nameEn: "Winter",
        field: "entertainment",
        country: "KR",
        description: "aespa 멤버. 뛰어난 가창력과 카리스마로 사랑받는 아이돌",
        achievements: ["솔로 곡 'Spark'", "OST 참여", "글로벌 팬덤"],
        mbtiTraits: ["영감 리더십", "공감 능력", "카리스마", "진정성"],
        successFactors: ["꾸준한 실력 향상", "팬 서비스", "팀워크", "무대 장악력"]
      }
    ]
  },
  {
    type: "ENFP",
    name: "활동가",
    nickname: "Campaigner",
    group: "외교관형 (NF)",
    celebrities: [
      {
        name: "월트 디즈니",
        nameEn: "Walt Disney",
        field: "entertainment",
        country: "US",
        description: "디즈니 창업자. 상상력으로 전 세계를 즐겁게 한 애니메이션의 대가",
        achievements: ["미키마우스 창조", "월트 디즈니 월드", "애니메이션 개척"],
        mbtiTraits: ["풍부한 상상력", "열정과 창의성", "가능성 탐구", "즐거움 추구"],
        successFactors: ["상상력 현실화", "아이들 즐거움 이해", "혁신과 도전", "스토리텔링"]
      },
      {
        name: "로버트 다우니 주니어",
        nameEn: "Robert Downey Jr.",
        field: "arts",
        country: "US",
        description: "배우. 아이언맨으로 대중에게 사랑받는 할리우드 스타",
        achievements: ["아이언맨, 셜록 홈즈", "MCU 중심", "어려움 극복 후 재기"],
        mbtiTraits: ["재치와 유머", "적응력", "열정적 연기", "즉흥 재능"],
        successFactors: ["캐릭터 변신", "즉흥 연기", "대중 소통", "긍정성"]
      },
      {
        name: "뷔 (김태형)",
        nameEn: "V (Kim Taehyung)",
        field: "entertainment",
        country: "KR",
        description: "BTS 멤버. 독특한 음색과 비주얼로 사랑받는 아이돌",
        achievements: ["솔로 앨범 'Layover'", "우디 앨런 영화 출연", "Cartier 글로벌 앰버서더"],
        mbtiTraits: ["창의성", "열정", "진정성", "예술적 감각"],
        successFactors: ["독보적 카리스마", "팬과의 소통", "예술적 시도", "진솔함"]
      },
      {
        name: "RM (김남준)",
        nameEn: "RM",
        field: "entertainment",
        country: "KR",
        description: "BTS 리더. 철학적 가사와 리더십으로 K-pop의 글로벌화를 이끈 아이콘",
        achievements: ["BTS 글로벌 성공 이끌기", "유네스코 연설", "개인 앨범 'Indigo'"],
        mbtiTraits: ["창의성", "열정", "영감", "자유로운 사고"],
        successFactors: ["팀의 비전 제시", "글로벌 소통 능력", "음악적 깊이", "팬덤과의 진정성"]
      },
      {
        name: "카리나",
        nameEn: "Karina",
        field: "entertainment",
        country: "KR",
        description: "aespa 리더. 완벽한 춤과 비주얼로 주목받는 4세대 아이돌",
        achievements: ["aespa 리더", "Prada 앰버서더", "'Next Level' 히트"],
        mbtiTraits: ["창의성", "열정", "사교성", "영감"],
        successFactors: ["리더십", "묘한 춤선", "비주얼", "에너지"]
      },
      {
        name: "다니엘",
        nameEn: "Danielle",
        field: "entertainment",
        country: "KR",
        description: "NewJeans 멤버. 한국-호주 혼혈로 밝은 에너지의 소유자",
        achievements: ["NewJeans 데뷔 성공", "Burberry 앰버서더", "'Attention' 퍼포머"],
        mbtiTraits: ["열정", "창의성", "사교성", "자유로운 영혼"],
        successFactors: ["밝은 에너지", "글로벌 매력", "팀워크", "묘한 개성"]
      }
    ]
  },
  {
    type: "ISTJ",
    name: "현실주의자",
    nickname: "Logistician",
    group: "관리자형 (SJ)",
    celebrities: [
      {
        name: "워렌 버핏",
        nameEn: "Warren Buffett",
        field: "business",
        country: "US",
        description: "투자의 전설. 버크셔 해서웨이 CEO로 가치투자의 대가",
        achievements: ["버크셔 1조 달러 성장", "세계 최고 부자", "기부 서약"],
        mbtiTraits: ["신중한 분석", "전통 중시", "장기적 관점", "신뢰와 책임"],
        successFactors: ["가치투자 원칙", "장기 시각", "철저한 분석", "규율 투자"]
      },
      {
        name: "조지 워싱턴",
        nameEn: "George Washington",
        field: "politics",
        country: "US",
        description: "미국 초대 대통령. 국가 건설의 기초를 다진 지도자",
        achievements: ["미국 독립 전쟁", "초대 대통령", "정치 전통 확립"],
        mbtiTraits: ["책임감", "전통 존중", "신중한 의사결정", "원칙 고수"],
        successFactors: ["신중한 리더십", "전통과 변화", "국가 희생", "원칙 기반"]
      },
      {
        name: "앙겔라 메르켈",
        nameEn: "Angela Merkel",
        field: "politics",
        country: "DE",
        description: "독일 전 총리. 16년간 유럽의 안정을 이끈 '유럽의 어머니'",
        achievements: ["독일 최초 여성 총리", "16년 집권", "유럽 경제 위기 극복"],
        mbtiTraits: ["체계적 접근", "안정 중시", "분석적 의사결정", "책임감"],
        successFactors: ["과학적 접근", "안정 리더십", "위기 침착", "유럽 통합"]
      },
      {
        name: "제프 베조스",
        nameEn: "Jeff Bezos",
        field: "business",
        country: "US",
        description: "아마존 창업자. 전자상거래와 클라우드 컴퓨팅의 선구자",
        achievements: ["아마존 혁명", "AWS 개척", "블루 오리진"],
        mbtiTraits: ["분석적 사고", "데이터 기반", "장기적 관점", "체계적 접근"],
        successFactors: ["고객 중심", "장기 투자", "데이터 운영", "혁신 비전"]
      },

      {
        name: "페이커",
        nameEn: "Faker",
        field: "sports",
        country: "KR",
        description: "e스포츠 선수. 리그 오브 레전드 전설, '대상혁'으로 불림",
        achievements: ["롤드컵 4회 우승", "LCK 10회 우승", "e스포츠 전설"],
        mbtiTraits: ["완벽주의", "냉철함", "분석력", "집중력"],
        successFactors: ["꾸준한 연습", "전략적 플레이", "멘탈 강함", "팀 리더십"]
      },

    ]
  },
  {
    type: "ISFJ",
    name: "수호자",
    nickname: "Defender",
    group: "관리자형 (SJ)",
    celebrities: [
      {
        name: "마더 테레사",
        nameEn: "Mother Teresa",
        field: "politics",
        country: "IN",
        description: "수녀, 인도주의자. 가난한 이들을 위해 평생을 바친 성인",
        achievements: ["노벨평화상(1979)", "성녀 시성(2016)", "복지 활동"],
        mbtiTraits: ["헌신적 사랑", "공감과 배려", "실천적 도움", "인내"],
        successFactors: ["무조건적 사랑", "실천 봉사", "소외된 이들", "평생 일관"]
      },
      {
        name: "퀸 엘리자베스 2세",
        nameEn: "Queen Elizabeth II",
        field: "politics",
        country: "GB",
        description: "영국 여왕. 70년간의 재위로 국가의 상징이 된 군주",
        achievements: ["영국 최장 재위(70년)", "15개 국가 원수", "안정적 상징"],
        mbtiTraits: ["의무와 책임", "전통 존중", "조용한 리더십", "인내"],
        successFactors: ["의무 헌신", "전통과 변화", "국민 연결", "일관된 태도"]
      },
      {
        name: "케이트 미들턴",
        nameEn: "Kate Middleton",
        field: "politics",
        country: "GB",
        description: "케임브리지 공작부인. 현대적 왕실의 새로운 모습",
        achievements: ["왕실 현대화", "정신 건강 캠페인", "전통과 현대"],
        mbtiTraits: ["배려심", "전통 존중", "조용한 리더십", "헌신"],
        successFactors: ["왕실 의무", "민간 연결", "겸손한 이미지", "사회 이슈"]
      },
    ]
  },
  {
    type: "ESTJ",
    name: "경영자",
    nickname: "Executive",
    group: "관리자형 (SJ)",
    celebrities: [
      {
        name: "존 F. 케네디",
        nameEn: "John F. Kennedy",
        field: "politics",
        country: "US",
        description: "미국 제35대 대통령. 카리스마와 리더십으로 유명한 지도자",
        achievements: ["쿠바 미사일 위기", "아폴로 계획", "시민권법"],
        mbtiTraits: ["강력한 리더십", "결단력", "조직 관리", "목표 지향"],
        successFactors: ["강력한 리더십", "위기 대응", "국민 소통", "대담한 목표"]
      },
      {
        name: "헨리 포드",
        nameEn: "Henry Ford",
        field: "business",
        country: "US",
        description: "포드 모터스 창업자. 자동차 대중화와 생산 혁신의 주역",
        achievements: ["Model T", "컨베이어 벨트", "5달러 임금"],
        mbtiTraits: ["실용적 혁신", "효율성", "조직 관리", "결단력"],
        successFactors: ["생산 혁신", "노동자 복지", "대중화", "체계 관리"]
      },
      {
        name: "이건희",
        field: "business",
        country: "KR",
        description: "삼성전자 회장. 한국 대표 기업가이자 삼성 전성기 리더",
        achievements: ["반도체 사업 성공", "삼성 세계적 기업", "한국 산업 발전"],
        mbtiTraits: ["강력한 추진력", "장기적 비전", "조직 관리", "의사결단"],
        successFactors: ["과감한 투자", "세계 시장 진출", "품질 경영", "인재 중시"]
      },
      {
        name: "민지",
        nameEn: "Minji",
        field: "entertainment",
        country: "KR",
        description: "NewJeans 멤버. 팀의 리더이자 대언니로서 책임감 있는 아이돌",
        achievements: ["NewJeans 데뷔 성공", "팀 리더", "Chanel Beauty 뮤즈"],
        mbtiTraits: ["책임감", "조직력", "실행력", "논리적 사고"],
        successFactors: ["리더십", "성실함", "팬 서비스", "전문성"]
      },
      {
        name: "마가렛 대처",
        nameEn: "Margaret Thatcher",
        field: "politics",
        country: "GB",
        description: "영국 최초의 여성 총리. '철의 여인'으로 불리며 강력한 리더십과 보수주의 정책을 이끎.",
        achievements: ["영국 최초 여성 총리", "영국 경제 구조 개선", "포클랜드 전쟁 승리"],
        mbtiTraits: ["강력한 리더십", "원칙 고수", "결단력", "추진력"],
        successFactors: ["확고한 신념", "과감한 경제 개혁", "안보 강화", "일관된 정책"]
      },
      {
        name: "트래비스",
        nameEn: "Travis Scott",
        field: "arts",
        country: "US",
        description: "래퍼, 프로듀서. 아스트로월드 페스티벌 등으로 문화 아이콘",
        achievements: ["'Sicko Mode' 빌보드 1위", "맥도날드 콜라보", "포트나이트 콘서트"],
        mbtiTraits: ["리더십", "사업가 정신", "추진력", "혁신"],
        successFactors: ["브랜드 콜라보", "팬 커뮤니티", "문화 트렌드", "비즈니스 감각"]
      }
    ]
  },
  {
    type: "ESFJ",
    name: "집정관",
    nickname: "Consul",
    group: "관리자형 (SJ)",
    celebrities: [
      {
        name: "손흥민",
        nameEn: "Son Heung-min",
        field: "sports",
        country: "KR",
        description: "대한민국 축구 대표팀 주장이자 토트넘 홋스퍼의 에이스. 아시아 축구의 새 역사를 쓰는 선수",
        achievements: ["프리미어리그 득점왕 (골든부트)", "푸스카스상 수상", "토트넘 홋스퍼 주장"],
        mbtiTraits: ["뛰어난 사교성", "성실한 자기관리", "팀 중심의 리더십", "겸손한 태도"],
        successFactors: ["낙천적이고 밝은 에너지", "주변 지인들을 챙기는 배려심", "엄격한 규율과 노력", "팬들과의 적극적인 소통"]
      }
    ]
  },
  {
    type: "ISTP",
    name: "장인",
    nickname: "Virtuoso",
    group: "탐험가형 (SP)",
    celebrities: [
      {
        name: "마이클 조던",
        nameEn: "Michael Jordan",
        field: "sports",
        country: "US",
        description: "농구 전설. NBA 역사상 최고의 선수",
        achievements: ["6회 챔피언", "5회 MVP", "최다 득점"],
        mbtiTraits: ["상황 판단", "기술 숙달", "경쟁심", "위기 대응"],
        successFactors: ["기술 연마", "승리 집착", "클러치 침착", "신체와 기술"]
      },
      {
        name: "클린트 이스트우드",
        nameEn: "Clint Eastwood",
        field: "arts",
        country: "US",
        description: "배우, 감독. 서부극 아이콘, 오스카 수상 감독",
        achievements: ["4회 아카데미상", "최고 연출가", "60년 경력"],
        mbtiTraits: ["실용적 연기", "침착함", "기술 숙달", "독립적 작업"],
        successFactors: ["다양한 장르", "기술적 완성도", "실용적 제작", "꾸준함"]
      },
      {
        name: "알렉산더 오베치킨",
        nameEn: "Alexander Ovechkin",
        field: "sports",
        country: "RU",
        description: "아이스하키 선수. NHL 전설적인 스코어러",
        achievements: ["스탠리컵 우승", "9회 머리스 트로피", "역대 최다 득점"],
        mbtiTraits: ["즉각적 판단", "기술 숙달", "경쟁심", "위기 대응"],
        successFactors: ["기술 연마", "승리 집착", "클러치 상황", "신체와 기술"]
      },
      {
        name: "해린",
        nameEn: "Haerin",
        field: "entertainment",
        country: "KR",
        description: "NewJeans 멤버. 고양이상 외모로 사랑받는 아이돌",
        achievements: ["NewJeans 데뷔 성공", "Dior Jewellery 뮤즈", "'Hype Boy' 퍼포머"],
        mbtiTraits: ["실용적", "기술 숙달", "독립적", "적응력"],
        successFactors: ["독특한 매력", "묘한 카리스마", "안정적 실력", "글로벌 인기"]
      }
    ]
  },
  {
    type: "ISFP",
    name: "모험가",
    nickname: "Adventurer",
    group: "탐험가형 (SP)",
    celebrities: [
      {
        name: "마이클 잭슨",
        nameEn: "Michael Jackson",
        field: "arts",
        country: "US",
        description: "팝의 황제. 음악과 퍼포먼스 혁신가",
        achievements: ["스릴러 역대 최다 판매", "문워크", "뮤직비디오 예술"],
        mbtiTraits: ["감정 표현", "예술 감수성", "즉흥", "독특한 개성"],
        successFactors: ["음악 혁신", "감정 표현", "독창적 스타일", "예술 실험"]
      },
      {
        name: "브리트니 스피어스",
        nameEn: "Britney Spears",
        field: "arts",
        country: "US",
        description: "팝 스타. 2000년대 팝 문화 아이콘",
        achievements: ["1억 장 판매", "틴 팝 상징", "라스베가스 쇼"],
        mbtiTraits: ["자유로운 표현", "감정 연결", "즉흥", "개성"],
        successFactors: ["퍼포먼스 스타일", "감정 연결", "꾸준한 활동", "변화"]
      },
      {
        name: "빌리 아일리시",
        nameEn: "Billie Eilish",
        field: "arts",
        country: "US",
        description: "싱어송라이터. Z세대의 아이콘이 된 독창적인 음악과 스타일의 소유자",
        achievements: ["그래미상 7관왕 최연소 수상", "007 주제가", "지속가능한 패션 아이콘"],
        mbtiTraits: ["예술 감수성", "진정성", "즉흥성", "독창적 표현"],
        successFactors: ["독특한 음악 스타일", "진정성 있는 메시지", "비주얼 아이덴티티", "형제와의 협업"]
      },
      {
        name: "데이비드 보위",
        nameEn: "David Bowie",
        field: "arts",
        country: "GB",
        description: "가수, 배우. '지구에 온 별'로 불리는 예술가",
        achievements: ["록 변화 아이콘", "재창조의 상징", "50년 경력"],
        mbtiTraits: ["예술 감수성", "진정성", "즉흥", "독특한 시각"],
        successFactors: ["음악 혁신", "재창조", "아이덴티티 실험", "예술"]
      },
      {
        name: "태연",
        nameEn: "Taeyeon",
        field: "entertainment",
        country: "KR",
        description: "소녀시대 리더, 솔로 가수. 감성적 보컬의 여왕",
        achievements: ["소녀시대 리더", "솔로 앨범 대성공", "OST 퀸"],
        mbtiTraits: ["감정 표현", "예술 감수성", "진정성", "독특한 시각"],
        successFactors: ["보컬 실력", "감성적 음악", "진솔함", "꾸준한 활동"]
      },
      {
        name: "저스틴 비버",
        nameEn: "Justin Bieber",
        field: "arts",
        country: "CA",
        description: "가수. 유튜브로 발굴되어 세계 스타가 된 팝 아이콘",
        achievements: ["'Baby' 10억 뷰", "그래미상 수상", "커리어 부활"],
        mbtiTraits: ["감정 표현", "예술 감수성", "즉흥성", "진정성"],
        successFactors: ["진솔한 음악", "팬과의 유대", "성장하는 모습", "재창조"]
      },
      {
        name: "제니",
        nameEn: "Jennie Kim",
        field: "entertainment",
        country: "KR",
        description: "BLACKPINK 멤버. 패션 아이콘이자 솔로 아티스트로서 글로벌 영향력",
        achievements: ["BLACKPINK 글로벌 성공", "Chanel 글로벌 앰버서더", "솔로 싱글 'SOLO'"],
        mbtiTraits: ["예술 감수성", "자유로운 표현", "즉흥성", "독창적 스타일"],
        successFactors: ["묘한 매력", "패션 센스", "무대 카리스마", "글로벌 아이콘"]
      },
      {
        name: "카이",
        nameEn: "Kai",
        field: "entertainment",
        country: "KR",
        description: "EXO, SuperM 멤버. '춤의 신'으로 불리는 퍼포머",
        achievements: ["솔로 앨범 'Rover'", "Gucci 글로벌 앰버서더", "댄스 전문가"],
        mbtiTraits: ["깊은 통찰", "공감 능력", "예술 감수성", "헌신"],
        successFactors: ["춤 실력", "묘한 카리스마", "패션 센스", "예술적 표현"]
      }
    ]
  },
  {
    type: "ESTP",
    name: "사업가",
    nickname: "Entrepreneur",
    group: "탐험가형 (SP)",
    celebrities: [
      {
        name: "도널드 트럼프",
        nameEn: "Donald Trump",
        field: "politics",
        country: "US",
        description: "미국 제45대 대통령. 기업가 출신 정치인",
        achievements: ["부동산 제국", "미국 대통령", "TV 프로그램"],
        mbtiTraits: ["상황 판단", "실용적 해결", "위험 감수", "에너지"],
        successFactors: ["기회 포착", "대중 소통", "브랜드", "즉흥 대응"]
      },
      {
        name: "르브론 제임스",
        nameEn: "LeBron James",
        field: "sports",
        country: "US",
        description: "NBA 농구 선수. 현대 최고의 농구 선수",
        achievements: ["4회 챔피언", "4회 MVP", "최다 득점"],
        mbtiTraits: ["즉각 판단", "경쟁심", "적응력", "리더십"],
        successFactors: ["높은 농구 IQ", "큰 경기", "비즈니스", "자기 관리"]
      },
      {
        name: "마돈나",
        nameEn: "Madonna",
        field: "arts",
        country: "US",
        description: "팝의 여왕. 40년간 팝 음악의 중심",
        achievements: ["3억 장 판매", "MTV 시대 상징", "40년 최정상"],
        mbtiTraits: ["대담한 변화", "즉흥", "적응력", "에너지"],
        successFactors: ["재창조", "논란 활용", "퍼포먼스", "비즈니스"]
      },
      {
        name: "제이팍",
        nameEn: "Jay Park",
        field: "entertainment",
        country: "US",
        description: "래퍼, 기업가. AOMG, H1GHR MUSIC 설립자",
        achievements: ["AOMG 설립", "원소주 대성공", "한국 힙합 선도"],
        mbtiTraits: ["즉각 판단", "위험 감수", "적응력", "에너지"],
        successFactors: ["사업가 정신", "팬 소통", "트렌드 선도", "다재다능"]
      },
      {
        name: "포스트 말론",
        nameEn: "Post Malone",
        field: "arts",
        country: "US",
        description: "래퍼, 가수. 힙합과 록을 결합한 새로운 스타일",
        achievements: ["'Circles' 빌보드 1위", "다이아몬드 인증", "유니크한 스타일"],
        mbtiTraits: ["즉흥성", "적응력", "솔직함", "에너지"],
        successFactors: ["진정성", "장르 혼합", "팬 친화", "묘한 매력"]
      },
      {
        name: "xQc",
        nameEn: "xQc",
        field: "entertainment",
        country: "CA",
        description: "트위치 스트리머. 세계 최대 팔로워 보유 게임 스트리머",
        achievements: ["트위치 최다 시청 시간", "오버워치 프로선수 출신", "콘텐츠 혁신"],
        mbtiTraits: ["즉각적 판단", "위험 감수", "적응력", "에너지"],
        successFactors: ["리액션 콘텐츠", "팬과의 소통", "게임 실력", "진정성"]
      },
      {
        name: "MrBeast",
        nameEn: "Jimmy Donaldson",
        field: "entertainment",
        country: "US",
        description: "유튜버. 세계 최대 구독자 수를 보유한 콘텐츠 크리에이터",
        achievements: ["유튜브 3억 구독자 돌파", "Team Trees 캠페인", "수백만 달러 기부"],
        mbtiTraits: ["전략적 사고", "강력한 추진력", "목표 지향", "비전"],
        successFactors: ["콘텐츠 혁신", "대규모 프로덕션", "시청자 참여", "기부 문화"]
      },
      {
        name: "지민",
        nameEn: "Jimin",
        field: "entertainment",
        country: "KR",
        description: "BTS 멤버. 우아한 춤선과 감성적 보컬로 사랑받는 아티스트",
        achievements: ["솔로 앨범 'FACE'", "Billboard Hot 100 1위 'Like Crazy'", "디올 글로벌 앰버서더"],
        mbtiTraits: ["즉각적 판단", "적응력", "에너지", "카리스마"],
        successFactors: ["춤 실력", "묘한 매력", "팬과의 소통", "무대 장악력"]
      }
    ]
  },
  {
    type: "ESFP",
    name: "연예인",
    nickname: "Entertainer",
    group: "탐험가형 (SP)",
    celebrities: [
      {
        name: "엘튼 존",
        nameEn: "Elton John",
        field: "arts",
        country: "GB",
        description: "가수, 작곡가. 화려한 퍼포먼스와 감동 음악",
        achievements: ["3억 장 판매", "5회 그래미", "디즈니 음악"],
        mbtiTraits: ["무대 자유", "즉흥", "대중 소통", "열정"],
        successFactors: ["퍼포먼스 스타일", "감정 연결", "50년 활동", "화려함"]
      },
      {
        name: "제이미 폭스",
        nameEn: "Jamie Foxx",
        field: "arts",
        country: "US",
        description: "배우, 가수. 코미디언 출신 아카데미상 수상",
        achievements: ["아카데미 남우주연상", "다재다능", "라디오 DJ"],
        mbtiTraits: ["즉흥", "무대 자유", "다재다능", "소통"],
        successFactors: ["코미디에서 진지", "즉흥 재능", "음악과 연기", "매체 도전"]
      },
      {
        name: "휘트니 휴스턴",
        nameEn: "Whitney Houston",
        field: "arts",
        country: "US",
        description: "가수. '보이스'로 불리는 전설적 보컬리스트",
        achievements: ["2억 장 판매", "최다 음악상", "보디가드 OST"],
        mbtiTraits: ["감정 표현", "무대 자유", "즉흥", "연결"],
        successFactors: ["천부적 재능", "감정 전달", "묘한 카리스마", "영화 음악"]
      },
      {
        name: "리사",
        nameEn: "Lisa",
        field: "entertainment",
        country: "KR",
        description: "BLACKPINK 멤버. 뛰어난 춤 실력으로 글로벌 아이콘",
        achievements: ["솔로 싱글 'LALISA'", "MTV VMA 수상", "Celine 글로벌 앰버서더"],
        mbtiTraits: ["무대 자유", "즉흥성", "열정", "카리스마"],
        successFactors: ["춤 실력", "묘한 매력", "글로벌 인기", "팬 소통"]
      },
      {
        name: "제이슨 더루로",
        nameEn: "Jason Derulo",
        field: "arts",
        country: "US",
        description: "가수, 댄서. 틱톡으로 새로운 인기를 얻은 팝 스타",
        achievements: ["'Savage Love' 틱톡 대히트", "30억 유튜브 조회수", "글로벌 투어"],
        mbtiTraits: ["무대 자유", "즉흥성", "사교성", "열정"],
        successFactors: ["틱톡 활용", "춤 실력", "팬 소통", "콘텐츠 민감도"]
      },
      {
        name: "애디슨",
        nameEn: "Addison Rae",
        field: "entertainment",
        country: "US",
        description: "틱톡 스타, 배우. 8800만 팔로워 보유한 Z세대 아이콘",
        achievements: ["틱톡 8800만 팔로워", "넷플릭스 영화 주연", "Item Beauty"],
        mbtiTraits: ["사교성", "즉흥성", "카리스마", "적응력"],
        successFactors: ["틱톡 트렌드", "진정성", "팬 친화", "비즈니스 확장"]
      }
    ]
  }
];

// 모든 유명인을 평면화한 배열
export const allCelebrities = celebrityGroups.flatMap(group =>
  group.celebrities.map(celeb => ({
    ...celeb,
    mbtiType: group.type,
    mbtiName: group.name,
    mbtiGroup: group.group
  }))
);

// 분야별 통계
export const fieldStats = {
  politics: allCelebrities.filter(c => c.field === 'politics').length,
  business: allCelebrities.filter(c => c.field === 'business').length,
  arts: allCelebrities.filter(c => c.field === 'arts').length,
  sports: allCelebrities.filter(c => c.field === 'sports').length,
  science: allCelebrities.filter(c => c.field === 'science').length,
  entertainment: allCelebrities.filter(c => c.field === 'entertainment').length,
  literature: allCelebrities.filter(c => c.field === 'literature').length
};

// 국가별 통계
export const countryStats = (Object.keys(countries) as CountryCode[]).reduce((acc, code) => {
  acc[code] = allCelebrities.filter(c => c.country === code).length;
  return acc;
}, {} as Record<CountryCode, number>);

// 사용된 국가 목록 (유명인이 있는 국가만)
export const usedCountries = Object.entries(countryStats)
  .filter(([_key, count]) => count > 0)
  .map(([code]) => countries[code as CountryCode])
  .sort((a, b) => b.name.localeCompare(a.name));

// 분야 한글명
export const fieldNames: Record<CelebrityField, string> = {
  politics: '정치',
  business: '비즈니스',
  arts: '예술',
  sports: '스포츠',
  science: '과학/기술',
  entertainment: '엔터테인먼트',
  literature: '문학'
};

// 그룹별 색상
export const groupColors: Record<string, { bg: string; text: string; border: string }> = {
  "분석가형 (NT)": {
    bg: "from-cyan-500/20 to-blue-500/20",
    text: "text-cyan-400",
    border: "border-cyan-400/30"
  },
  "외교관형 (NF)": {
    bg: "from-pink-500/20 to-rose-500/20",
    text: "text-pink-400",
    border: "border-pink-400/30"
  },
  "관리자형 (SJ)": {
    bg: "from-green-500/20 to-teal-500/20",
    text: "text-green-400",
    border: "border-green-400/30"
  },
  "탐험가형 (SP)": {
    bg: "from-orange-500/20 to-red-500/20",
    text: "text-orange-400",
    border: "border-orange-400/30"
  }
};
