// MBTI 유형별 유명인 데이터 - bilingual version
// 분야: politics(정치), business(비즈니스), arts(예술), sports(스포츠), science(과학/기술), entertainment(엔터테인먼트)

import type { CelebrityField, CountryCode, Country, MBTICelebrityGroup, Celebrity } from '../celebrities';
import { countries, fieldNames, groupColors } from '../celebrities';

// 재-export types from original
export type { CelebrityField, CountryCode, Country, Celebrity, MBTICelebrityGroup };
export { countries, fieldNames, groupColors };

// bilingual celebrity interface
export interface BilingualCelebrity {
  name: string;
  nameEn?: string;
  field: CelebrityField;
  country: CountryCode;
  description: { ko: string; en: string };
  achievements: { ko: string[]; en: string[] };
  mbtiTraits: { ko: string[]; en: string[] };
  successFactors: { ko: string[]; en: string[] };
  image?: string;
}

export interface BilingualMBTICelebrityGroup {
  type: string;
  name: { ko: string; en: string };
  nickname: { ko: string; en: string };
  group: { ko: string; en: string };
  celebrities: BilingualCelebrity[];
}

// bilingual field names
export const bilingualFieldNames: Record<CelebrityField, { ko: string; en: string }> = {
  politics: { ko: '정치', en: 'Politics' },
  business: { ko: '비즈니스', en: 'Business' },
  arts: { ko: '예술', en: 'Arts' },
  sports: { ko: '스포츠', en: 'Sports' },
  science: { ko: '과학/기술', en: 'Science/Tech' },
  entertainment: { ko: '엔터테인먼트', en: 'Entertainment' },
  literature: { ko: '문학', en: 'Literature' }
};

// bilingual group colors
export const bilingualGroupColors: Record<string, { ko: { bg: string; text: string; border: string }; en: { bg: string; text: string; border: string } }> = {
  "분석가형 (NT)": {
    ko: {
      bg: "from-cyan-500/20 to-blue-500/20",
      text: "text-cyan-400",
      border: "border-cyan-400/30"
    },
    en: {
      bg: "from-cyan-500/20 to-blue-500/20",
      text: "text-cyan-400",
      border: "border-cyan-400/30"
    }
  },
  "외교관형 (NF)": {
    ko: {
      bg: "from-pink-500/20 to-rose-500/20",
      text: "text-pink-400",
      border: "border-pink-400/30"
    },
    en: {
      bg: "from-pink-500/20 to-rose-500/20",
      text: "text-pink-400",
      border: "border-pink-400/30"
    }
  },
  "관리자형 (SJ)": {
    ko: {
      bg: "from-green-500/20 to-teal-500/20",
      text: "text-green-400",
      border: "border-green-400/30"
    },
    en: {
      bg: "from-green-500/20 to-teal-500/20",
      text: "text-green-400",
      border: "border-green-400/30"
    }
  },
  "탐험가형 (SP)": {
    ko: {
      bg: "from-orange-500/20 to-red-500/20",
      text: "text-orange-400",
      border: "border-orange-400/30"
    },
    en: {
      bg: "from-orange-500/20 to-red-500/20",
      text: "text-orange-400",
      border: "border-orange-400/30"
    }
  }
};

export const bilingualCelebrityGroups: BilingualMBTICelebrityGroup[] = [
  {
    type: "INTJ",
    name: { ko: "전략가", en: "Architect" },
    nickname: { ko: "Architect", en: "Architect" },
    group: { ko: "분석가형 (NT)", en: "Analyst (NT)" },
    celebrities: [
      {
        name: "일론 머스크",
        nameEn: "Elon Musk",
        field: "business",
        country: "US",
        description: {
          ko: "테슬라, 스페이스X CEO. 혁신적인 비전과 끊임없는 도전으로 기술 산업을 재편한 기업가",
          en: "CEO of Tesla and SpaceX. An entrepreneur who revolutionized the tech industry with innovative vision and relentless pursuit"
        },
        achievements: {
          ko: ["전기자동차 대중화 선도", "민간 우주 여행 시대 개막", "뉴롤링크 설립"],
          en: ["Pioneered electric vehicle mainstream", "Opened era of private space travel", "Founded Neuralink"]
        },
        mbtiTraits: {
          ko: ["장기적 비전 수립", "복잡한 시스템 설계", "전략적 사고", "완벽주의"],
          en: ["Long-term vision setting", "Complex system design", "Strategic thinking", "Perfectionism"]
        },
        successFactors: {
          ko: ["미래 지향적 비전", "논리적 문제 해결", "도전적 목표 추진", "혁신 집착"],
          en: ["Future-oriented vision", "Logical problem solving", "Challenging goals", "Innovation obsession"]
        }
      },
      {
        name: "스티브 잡스",
        nameEn: "Steve Jobs",
        field: "business",
        country: "US",
        description: {
          ko: "애플 공동창업자. 디자인과 기술의 완벽한 결합을 이끌어낸 혁신가",
          en: "Co-founder of Apple. An innovator who achieved perfect fusion of design and technology"
        },
        achievements: {
          ko: ["개인용 컴퓨터 대중화", "iPhone으로 스마트폰 시대 개막", "iTunes로 음악 산업 혁신"],
          en: ["Mainstreamed personal computers", "Launched smartphone era with iPhone", "Revolutionized music industry with iTunes"]
        },
        mbtiTraits: {
          ko: ["완벽주의적 디자인", "미래 지향적 비전", "단순함 추구", "세부사항 집착"],
          en: ["Perfectionist design", "Future-oriented vision", "Pursuit of simplicity", "Attention to detail"]
        },
        successFactors: {
          ko: ["기술과 예술 결합", "사용자 경험 집착", "대담한 혁신", "완벽한 실행력"],
          en: ["Combining technology and art", "Obsession with user experience", "Bold innovation", "Perfect execution"]
        }
      },
      {
        name: "아이작 뉴턴",
        nameEn: "Isaac Newton",
        field: "science",
        country: "GB",
        description: {
          ko: "물리학자, 수학자. 고전역학의 기초를 세운 과학의 아버지",
          en: "Physicist and mathematician. The father of science who established the foundations of classical mechanics"
        },
        achievements: {
          ko: ["만유인력 법칙 발견", "울동 법칙 정립", "미적분학 개발"],
          en: ["Discovered law of universal gravitation", "Established laws of motion", "Developed calculus"]
        },
        mbtiTraits: {
          ko: ["깊은 집중력", "이론 체계화", "독립적 연구", "완벽주의"],
          en: ["Deep concentration", "Systematizing theories", "Independent research", "Perfectionism"]
        },
        successFactors: {
          ko: ["철저한 논리 분석", "자연 질서 탐구", "깊은 사고", "이론 체계화"],
          en: ["Thorough logical analysis", "Exploring natural order", "Deep thinking", "Systematizing theories"]
        }
      },
      {
        name: "니콜라 테슬라",
        nameEn: "Nikola Tesla",
        field: "science",
        country: "AT",
        description: {
          ko: "발명가, 전기공학자. 교류 전기 시스템의 선구자",
          en: "Inventor and electrical engineer. Pioneer of alternating current electrical systems"
        },
        achievements: {
          ko: ["교류 전기 시스템 개발", "테슬라 코일 발명", "무선 전력 전송 개념"],
          en: ["Developed AC electrical system", "Invented Tesla coil", "Conceptualized wireless power transmission"]
        },
        mbtiTraits: {
          ko: ["혁신적 사고", "시스템 설계", "미래 지향", "독립적 연구"],
          en: ["Innovative thinking", "System design", "Future-oriented", "Independent research"]
        },
        successFactors: {
          ko: ["혁신 기술 개발", "장기적 기술 비전", "복잡한 문제 해결", "끊임없는 연구"],
          en: ["Developing innovative technology", "Long-term tech vision", "Solving complex problems", "Relentless research"]
        }
      },
      {
        name: "마크 저커버그",
        nameEn: "Mark Zuckerberg",
        field: "business",
        country: "US",
        description: {
          ko: "메타 CEO. 소셜 네트워크의 선구자",
          en: "CEO of Meta. Pioneer of social networking"
        },
        achievements: {
          ko: ["페이스북 10억 명 연결", "메타버스 비전", "소셜 미디어 혁신"],
          en: ["Connected 1 billion people on Facebook", "Metaverse vision", "Social media innovation"]
        },
        mbtiTraits: {
          ko: ["전략적 사고", "시스템 설계", "논리적 의사결정", "높은 학습력"],
          en: ["Strategic thinking", "System design", "Logical decision-making", "High learning ability"]
        },
        successFactors: {
          ko: ["사회 연결 구조 혁신", "기술 기반 비즈니스", "데이터 중심 의사결정", "지속적 혁신"],
          en: ["Innovating social connectivity", "Technology-based business", "Data-driven decisions", "Continuous innovation"]
        }
      },
      {
        name: "크리스토퍼 놀란",
        nameEn: "Christopher Nolan",
        field: "arts",
        country: "GB",
        description: {
          ko: "영화 감독. 복잡한 서사 구조와 철학적 깊이로 유명한 감독",
          en: "Film director. Known for complex narrative structures and philosophical depth"
        },
        achievements: {
          ko: ["인셉션, 다크나이트 등 흥행작", "아칼데미상 최우수 감독상", "복잡한 서사 대중화"],
          en: ["Blockbusters like Inception, The Dark Knight", "Academy Award for Best Director", "Popularized complex narratives"]
        },
        mbtiTraits: {
          ko: ["복잡한 시나리오", "철학적 통찰", "완벽주의 연출", "장기적 기획"],
          en: ["Complex screenwriting", "Philosophical insight", "Meticulous direction", "Long-term planning"]
        },
        successFactors: {
          ko: ["복잡한 개념의 대중적 풀이", "기술적 완벽주의", "독창적 스토리텔링", "철학과 오락성 결합"],
          en: ["Making complex concepts accessible", "Technical perfectionism", "Original storytelling", "Combining philosophy with entertainment"]
        }
      }
    ]
  },
  {
    type: "INTP",
    name: { ko: "논리술사", en: "Logician" },
    nickname: { ko: "Logician", en: "Logician" },
    group: { ko: "분석가형 (NT)", en: "Analyst (NT)" },
    celebrities: [
      {
        name: "알버트 아인슈타인",
        nameEn: "Albert Einstein",
        field: "science",
        country: "DE",
        description: {
          ko: "물리학자. 상대성이론으로 현대 물리학의 기초를 세운 천재",
          en: "Physicist. Genius who established foundations of modern physics with theory of relativity"
        },
        achievements: {
          ko: ["상대성이론 발표", "E=mc² 발견", "노벨물리학상 수상(1921)"],
          en: ["Published theory of relativity", "Discovered E=mc²", "Nobel Prize in Physics (1921)"]
        },
        mbtiTraits: {
          ko: ["추상적 사고", "이론 구축", "독창적 접근", "비판적 사고"],
          en: ["Abstract thinking", "Building theories", "Original approach", "Critical thinking"]
        },
        successFactors: {
          ko: ["상상력과 논리 결합", "기존 패러다임 도전", "깊은 집중력", "직관과 분석 균형"],
          en: ["Combining imagination and logic", "Challenging existing paradigms", "Deep concentration", "Balancing intuition and analysis"]
        }
      },
      {
        name: "빌 게이츠",
        nameEn: "Bill Gates",
        field: "business",
        country: "US",
        description: {
          ko: "마이크로소프트 공동창업자. 기술과 비즈니스의 결합으로 세상을 변화시킨 기업가",
          en: "Co-founder of Microsoft. Entrepreneur who transformed the world by combining technology and business"
        },
        achievements: {
          ko: ["Windows OS 선점", "세계 최대 소프트웨어 기업", "빌 앤드 멜린다 게이츠 재단"],
          en: ["Dominance of Windows OS", "World's largest software company", "Bill & Melinda Gates Foundation"]
        },
        mbtiTraits: {
          ko: ["논리적 분석", "시스템 이해", "지적 호기심", "비판적 사고"],
          en: ["Logical analysis", "Understanding systems", "Intellectual curiosity", "Critical thinking"]
        },
        successFactors: {
          ko: ["기술 심층 지식", "복잡한 문제 단순화", "학습과 적응력", "장기적 비전"],
          en: ["Deep technical knowledge", "Simplifying complex problems", "Learning and adaptability", "Long-term vision"]
        }
      },
      {
        name: "찰스 다윈",
        nameEn: "Charles Darwin",
        field: "science",
        country: "GB",
        description: {
          ko: "생물학자. 진화론의 창시자로 생명과학의 혁명을 이끈 과학자",
          en: "Biologist. Scientist who led revolution in life sciences as founder of evolution theory"
        },
        achievements: {
          ko: ["종의 기원 발표", "자연선택설 확립", "현대 생명과학 기초"],
          en: ["Published Origin of Species", "Established natural selection theory", "Foundation of modern life sciences"]
        },
        mbtiTraits: {
          ko: ["관찰력과 분석력", "자료 정리", "비판적 검증", "독립적 사고"],
          en: ["Observation and analysis", "Data organization", "Critical verification", "Independent thinking"]
        },
        successFactors: {
          ko: ["꼼꼼한 관찰", "이론 통합", "비판에 대한 강인함", "오랜 연구 인내심"],
          en: ["Meticulous observation", "Integrating theories", "Resilience to criticism", "Patience for long-term research"]
        }
      },
      {
        name: "스티븐 호킹",
        nameEn: "Stephen Hawking",
        field: "science",
        country: "GB",
        description: {
          ko: "이론물리학자. 블랙홀과 우주론 연구로 유명한 과학자",
          en: "Theoretical physicist. Scientist famous for research on black holes and cosmology"
        },
        achievements: {
          ko: ["호킹 복사 이론", "시간의 역사 저술", "장애 극복 과학 연구"],
          en: ["Hawking radiation theory", "Authored A Brief History of Time", "Scientific research overcoming disability"]
        },
        mbtiTraits: {
          ko: ["추상적 사고", "개념 단순화", "지적 호기심", "비판적 사고"],
          en: ["Abstract thinking", "Simplifying concepts", "Intellectual curiosity", "Critical thinking"]
        },
        successFactors: {
          ko: ["우주 개념 대중화", "끈질긴 연구", "독특한 접근", "학문적 소통"],
          en: ["Popularizing cosmic concepts", "Tenacious research", "Unique approach", "Academic communication"]
        }
      },
      {
        name: "레이달리오",
        nameEn: "Ray Dalio",
        field: "business",
        country: "US",
        description: {
          ko: "브리지워터 창업자. 세계 최대 헤지펀드 운용자",
          en: "Founder of Bridgewater. World's largest hedge fund manager"
        },
        achievements: {
          ko: ["세계 최대 헤지펀드 설립", "원칙(Principles) 저술", "투자 철학 시스템화"],
          en: ["Founded world's largest hedge fund", "Authored Principles", "Systematized investment philosophy"]
        },
        mbtiTraits: {
          ko: ["체계적 사고", "데이터 기반 의사결정", "시스템 분석", "논리적 접근"],
          en: ["Systematic thinking", "Data-driven decision making", "System analysis", "Logical approach"]
        },
        successFactors: {
          ko: ["투자 원칙 시스템화", "시장 메커니즘 분석", "실패로부터 학습", "장기적 투자"],
          en: ["Systematizing investment principles", "Analyzing market mechanisms", "Learning from failures", "Long-term investment"]
        }
      },
      {
        name: "슈가 (민윤기)",
        nameEn: "SUGA",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "BTS 멤버. 프로듀서로서 음악 제작과 솔로 활동으로 주목받는 아티스트",
          en: "BTS member. Artist gaining attention as producer for music production and solo activities"
        },
        achievements: {
          ko: ["Agust D 솔로 앨범", "BTS 히트곡 프로듀싱", "사회 메시지 전달"],
          en: ["Agust D solo album", "Producing BTS hit songs", "Delivering social messages"]
        },
        mbtiTraits: {
          ko: ["깊은 사고", "창의적 문제해결", "독립적 작업 선호", "진솔한 표현"],
          en: ["Deep thinking", "Creative problem solving", "Prefers independent work", "Sincere expression"]
        },
        successFactors: {
          ko: ["음악적 깊이", "작사/작곡 능력", "자기 성찰", "팬과의 소통"],
          en: ["Musical depth", "Songwriting ability", "Self-reflection", "Communication with fans"]
        }
      },
      {
        name: "MrBeast",
        nameEn: "Jimmy Donaldson",
        field: "entertainment",
        country: "US",
        description: {
          ko: "유튜버. 세계 최대 구독자 수를 보유한 콘텐츠 크리에이터",
          en: "YouTuber. Content creator with the world's largest subscriber count"
        },
        achievements: {
          ko: ["유튜브 3억 구독자 돌파", "Team Trees 캠페인", "수백만 달러 기부"],
          en: ["300 million YouTube subscribers", "Team Trees campaign", "Donated millions of dollars"]
        },
        mbtiTraits: {
          ko: ["창의적 실험", "데이터 분석", "시스템 최적화", "비전"],
          en: ["Creative experimentation", "Data analysis", "System optimization", "Vision"]
        },
        successFactors: {
          ko: ["콘텐츠 혁신", "대규모 프로덕션", "시청자 참여", "기부 문화"],
          en: ["Content innovation", "Large-scale production", "Audience engagement", "Donation culture"]
        }
      }
    ]
  },
  {
    type: "ENTJ",
    name: { ko: "통솔자", en: "Commander" },
    nickname: { ko: "Commander", en: "Commander" },
    group: { ko: "분석가형 (NT)", en: "Analyst (NT)" },
    celebrities: [
      {
        name: "나폴레옹 보나파르트",
        nameEn: "Napoleon Bonaparte",
        field: "politics",
        country: "FR",
        description: {
          ko: "프랑스 황제. 군사 전략가이자 유럽을 재편한 지도자",
          en: "French Emperor. Military strategist and leader who reshaped Europe"
        },
        achievements: {
          ko: ["프랑스 제국 건설", "나폴레옹 법전", "유럽 정치 지형 재편"],
          en: ["Built French Empire", "Napoleonic Code", "Reshaped European political landscape"]
        },
        mbtiTraits: {
          ko: ["전략적 사고", "강력한 추진력", "위기 대응", "목표 지향"],
          en: ["Strategic thinking", "Strong drive", "Crisis response", "Goal-oriented"]
        },
        successFactors: {
          ko: ["혁신적 군사 전략", "조직 관리", "대담한 결단", "체계적 법제"],
          en: ["Innovative military strategy", "Organization management", "Bold decisions", "Systematic legislation"]
        }
      },
      {
        name: "잭 웰치",
        nameEn: "Jack Welch",
        field: "business",
        country: "US",
        description: {
          ko: "전 GE CEO. '20세기 최고의 경영인'으로 불린 기업 총수",
          en: "Former CEO of GE. Corporate leader called 'the best manager of the 20th century'"
        },
        achievements: {
          ko: ["GE 기업 가치 20배 성장", "시총 1위 기업", "경영 혁신 시스템"],
          en: ["20x growth in GE's corporate value", "World's most valuable company", "Management innovation system"]
        },
        mbtiTraits: {
          ko: ["강력한 리더십", "성과 중심", "조직 변화", "효율성 추구"],
          en: ["Strong leadership", "Performance-focused", "Organizational change", "Pursuit of efficiency"]
        },
        successFactors: {
          ko: ["과감한 구조조정", "인재 육성", "수익 중심 경영", "경쟁 우위"],
          en: ["Bold restructuring", "Talent development", "Profit-focused management", "Competitive advantage"]
        }
      },
      {
        name: "고든 램지",
        nameEn: "Gordon Ramsay",
        field: "entertainment",
        country: "GB",
        description: {
          ko: "셰프, 방송인. 미슐랭 스타 셰프이자 미디어 스타",
          en: "Chef and TV personality. Michelin-star chef and media star"
        },
        achievements: {
          ko: ["미슐랭 16개 스타", "글로벌 레스토랑 제국", "TV 프로그램 진행"],
          en: ["16 Michelin stars", "Global restaurant empire", "Hosting TV programs"]
        },
        mbtiTraits: {
          ko: ["높은 기준", "강력한 추진력", "목표 지향", "효율성 중시"],
          en: ["High standards", "Strong drive", "Goal-oriented", "Emphasizes efficiency"]
        },
        successFactors: {
          ko: ["품질 추구", "브랜드 확장", "미디어 활용", "철저한 운영"],
          en: ["Pursuit of quality", "Brand expansion", "Media utilization", "Thorough operations"]
        }
      },
      {
        name: "킴 카다시안",
        nameEn: "Kim Kardashian",
        field: "entertainment",
        country: "US",
        description: {
          ko: "미디어 퍼스널리티, 기업가. KKW Beauty, SKIMS 창업자",
          en: "Media personality and entrepreneur. Founder of KKW Beauty and SKIMS"
        },
        achievements: {
          ko: ["SKIMS 40억 달러 기업", "미국 변호사 시험 통과", "리얼리티 TV 스타"],
          en: ["SKIMS $4 billion business", "Passed US bar exam", "Reality TV star"]
        },
        mbtiTraits: {
          ko: ["사업가 정신", "브랜드 구축", "전략적 마케팅", "추진력"],
          en: ["Entrepreneurial spirit", "Brand building", "Strategic marketing", "Drive"]
        },
        successFactors: {
          ko: ["미디어 활용", "비즈니스 다각화", "개인 브랜딩", "끈질긴 노력"],
          en: ["Media utilization", "Business diversification", "Personal branding", "Tenacious effort"]
        }
      }
    ]
  },
  {
    type: "ENTP",
    name: { ko: "변론가", en: "Debater" },
    nickname: { ko: "Debater", en: "Debater" },
    group: { ko: "분석가형 (NT)", en: "Analyst (NT)" },
    celebrities: [
      {
        name: "토마스 에디슨",
        nameEn: "Thomas Edison",
        field: "science",
        country: "US",
        description: {
          ko: "발명왕. 1,093개의 특허를 보유한 최고의 발명가",
          en: "Inventor King. The greatest inventor with 1,093 patents"
        },
        achievements: {
          ko: ["백열전구 상용화", "유성영화 카메라", "축음기 발명"],
          en: ["Commercialized incandescent bulb", "Invented motion picture camera", "Invented phonograph"]
        },
        mbtiTraits: {
          ko: ["창의적 문제 해결", "실험 정신", "개념 혁신", "다재다능"],
          en: ["Creative problem solving", "Experimental spirit", "Conceptual innovation", "Versatile"]
        },
        successFactors: {
          ko: ["끊임없는 실험", "실용적 발명", "실패로부터 학습", "상용화 능력"],
          en: ["Endless experimentation", "Practical inventions", "Learning from failures", "Commercialization ability"]
        }
      },
      {
        name: "스티브 워즈니악",
        nameEn: "Steve Wozniak",
        field: "business",
        country: "US",
        description: {
          ko: "애플 공동창업자. Apple I, II 설계한 엔지니어",
          en: "Co-founder of Apple. Engineer who designed Apple I and II"
        },
        achievements: {
          ko: ["Apple I, II 설계", "개인용 컴퓨터 혁신", "기술 대중화"],
          en: ["Designed Apple I and II", "Revolutionized personal computers", "Technology democratization"]
        },
        mbtiTraits: {
          ko: ["기술적 창의성", "혁신적 해결", "호기심", "실용적 발명"],
          en: ["Technical creativity", "Innovative solutions", "Curiosity", "Practical inventions"]
        },
        successFactors: {
          ko: ["기술과 실용성 결합", "복잡한 기술 단순화", "사용자 중심", "재미와 기술"],
          en: ["Combining technology and practicality", "Simplifying complex technology", "User-centric", "Fun and technology"]
        }
      },
      {
        name: "마크 트웨인",
        nameEn: "Mark Twain",
        field: "literature",
        country: "US",
        description: {
          ko: "작가. 미국 문학의 대표 작가로 풍자와 유머로 유명",
          en: "Author. Representative American literary figure known for satire and humor"
        },
        achievements: {
          ko: ["톰 소여의 모험 등 명작", "미국 문학 새 장", "사회 풍자"],
          en: ["Classics like The Adventures of Tom Sawyer", "New chapter in American literature", "Social satire"]
        },
        mbtiTraits: {
          ko: ["창의적 글쓰기", "통찰력 풍자", "독특한 관점", "주제 탐구"],
          en: ["Creative writing", "Insightful satire", "Unique perspective", "Theme exploration"]
        },
        successFactors: {
          ko: ["대중적 어필", "사회 비판과 유머", "독창적 스토리텔링", "장르 도전"],
          en: ["Public appeal", "Social critique and humor", "Original storytelling", "Genre challenge"]
        }
      },
      {
        name: "RM (김남준)",
        nameEn: "RM",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "BTS 리더. 철학적 가사와 리더십으로 K-pop의 글로벌화를 이끈 아이콘",
          en: "BTS leader. Icon who led K-pop globalization with philosophical lyrics and leadership"
        },
        achievements: {
          ko: ["BTS 글로벌 성공 이끌기", "유네스코 연설", "개인 앨범 'Indigo'"],
          en: ["Led BTS to global success", "UNESCO speech", "Solo album 'Indigo'"]
        },
        mbtiTraits: {
          ko: ["전략적 리더십", "철학적 사고", "언어적 재능", "장기적 비전"],
          en: ["Strategic leadership", "Philosophical thinking", "Linguistic talent", "Long-term vision"]
        },
        successFactors: {
          ko: ["팀의 비전 제시", "글로벌 소통 능력", "음악적 깊이", "팬덤과의 진정성"],
          en: ["Presenting team vision", "Global communication ability", "Musical depth", "Authenticity with fandom"]
        }
      },
      {
        name: "퓨디파이",
        nameEn: "PewDiePie",
        field: "entertainment",
        country: "SE",
        description: {
          ko: "유튜버. 세계 최초 개인 유튜브 채널 1억 구독자 돌파자",
          en: "YouTuber. First individual YouTube channel to reach 100 million subscribers"
        },
        achievements: {
          ko: ["1억 구독자 돌파", "게임 콘텐츠 혁신", "Book Club 시작"],
          en: ["100 million subscribers", "Gaming content innovation", "Started Book Club"]
        },
        mbtiTraits: {
          ko: ["재치와 유머", "즉흥성", "독특한 관점", "창의성"],
          en: ["Wit and humor", "Spontaneity", "Unique perspective", "Creativity"]
        },
        successFactors: {
          ko: ["진정성 있는 소통", "팬 커뮤니티", "콘텐츠 다각화", "개인 브랜딩"],
          en: ["Authentic communication", "Fan community", "Content diversification", "Personal branding"]
        }
      }
    ]
  },
  {
    type: "INFJ",
    name: { ko: "옹호자", en: "Advocate" },
    nickname: { ko: "Advocate", en: "Advocate" },
    group: { ko: "외교관형 (NF)", en: "Diplomat (NF)" },
    celebrities: [
      {
        name: "마틴 루터 킹",
        nameEn: "Martin Luther King Jr.",
        field: "politics",
        country: "US",
        description: {
          ko: "인권운동가. 비폭력 저항으로 인종차별에 맞선 지도자",
          en: "Human rights activist. Leader who fought racial discrimination through nonviolent resistance"
        },
        achievements: {
          ko: ["인종차별법 폐지", "노벨평화상(1964)", "미국 민권운동 상징"],
          en: ["Abolished segregation laws", "Nobel Peace Prize (1964)", "Symbol of US civil rights movement"]
        },
        mbtiTraits: {
          ko: ["이상주의", "강력한 공감", "영감 리더십", "비전과 현실 균형"],
          en: ["Idealism", "Powerful empathy", "Inspirational leadership", "Balancing vision and reality"]
        },
        successFactors: {
          ko: ["비폭력 저항", "감정 연결", "사회 변화", "신념 헌신"],
          en: ["Nonviolent resistance", "Emotional connection", "Social change", "Dedication to beliefs"]
        }
      },
      {
        name: "넬슨 만델라",
        nameEn: "Nelson Mandela",
        field: "politics",
        country: "ZA",
        description: {
          ko: "남아프리카공화국 전 대통령. 아파르트헤이트에 맞선 인권운동가",
          en: "Former President of South Africa. Human rights activist who fought apartheid"
        },
        achievements: {
          ko: ["인종차별 종식", "노벨평화상(1993)", "화해와 통합 상징"],
          en: ["Ended racial discrimination", "Nobel Peace Prize (1993)", "Symbol of reconciliation and unity"]
        },
        mbtiTraits: {
          ko: ["깊은 이상주의", "용서 리더십", "장기적 비전", "인내와 헌신"],
          en: ["Deep idealism", "Leadership through forgiveness", "Long-term vision", "Patience and dedication"]
        },
        successFactors: {
          ko: ["감옥에서도 포기하지 않은 신념", "적에 대한 용서", "국민 통합", "비폭력 전략"],
          en: ["Unwavering belief even in prison", "Forgiveness of enemies", "National unity", "Nonviolent strategy"]
        }
      },
      {
        name: "오프라 윈프리",
        nameEn: "Oprah Winfrey",
        field: "entertainment",
        country: "US",
        description: {
          ko: "방송인, 기업가. 미국 최고의 토크쇼 진행자",
          en: "Broadcaster and entrepreneur. America's top talk show host"
        },
        achievements: {
          ko: ["오프라 윈프리 쇼 25년", "미디어 제국", "필란트로피"],
          en: ["25 years of The Oprah Winfrey Show", "Media empire", "Philanthropy"]
        },
        mbtiTraits: {
          ko: ["깊은 공감", "영감 소통", "직관적 통찰", "타인 성장 관심"],
          en: ["Deep empathy", "Inspirational communication", "Intuitive insight", "Interest in others' growth"]
        },
        successFactors: {
          ko: ["진정성 인터뷰", "사회적 이슈", "자기 계발", "미디어 사업"],
          en: ["Authentic interviews", "Social issues", "Self-development", "Media business"]
        }
      },
      {
        name: "J.K. 롤링",
        nameEn: "J.K. Rowling",
        field: "literature",
        country: "GB",
        description: {
          ko: "작가. 해리포터 시리즈로 세계적인 베스트셀러 작가",
          en: "Author. World-renowned bestselling author of Harry Potter series"
        },
        achievements: {
          ko: ["해리포터 5억 부 판매", "영화 프랜차이즈", "성공 신화"],
          en: ["500 million Harry Potter books sold", "Movie franchise", "Success story"]
        },
        mbtiTraits: {
          ko: ["풍부한 상상력", "스토리 구성", "사회 메시지", "깊은 통찰"],
          en: ["Rich imagination", "Story structure", "Social messages", "Deep insight"]
        },
        successFactors: {
          ko: ["독창적 판타지", "성장과 우정", "인물 심리", "시리즈 기획"],
          en: ["Original fantasy", "Growth and friendship", "Character psychology", "Series planning"]
        }
      },
      {
        name: "정국",
        nameEn: "Jungkook",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "BTS 멤버. '골든 마네킹'으로 불리는 만능 아이돌",
          en: "BTS member. All-round idol called the 'Golden Maknae'"
        },
        achievements: {
          ko: ["Billboard Hot 100 1위 'Seven'", "FIFA 월드컵 공식 송", "솔로 앨범 'GOLDEN'"],
          en: ["Billboard Hot 100 #1 'Seven'", "Official FIFA World Cup song", "Solo album 'GOLDEN'"]
        },
        mbtiTraits: {
          ko: ["분석적 사고", "완벽주의", "논리적 접근", "호기심"],
          en: ["Analytical thinking", "Perfectionism", "Logical approach", "Curiosity"]
        },
        successFactors: {
          ko: ["만능 포지션", "꾸준한 성장", "팬 사랑", "글로벌 인기"],
          en: ["All-round position", "Steady growth", "Fan love", "Global popularity"]
        }
      }
    ]
  },
  {
    type: "INFP",
    name: { ko: "중재자", en: "Mediator" },
    nickname: { ko: "Mediator", en: "Mediator" },
    group: { ko: "외교관형 (NF)", en: "Diplomat (NF)" },
    celebrities: [
      {
        name: "윌리엄 셰익스피어",
        nameEn: "William Shakespeare",
        field: "literature",
        country: "GB",
        description: {
          ko: "극작가. 세계 최고의 문학 작가로 인류 보편의 감정을 탐구",
          en: "Playwright. World's greatest literary author exploring universal human emotions"
        },
        achievements: {
          ko: ["햄릿 등 37개 희곡", "현대 영어 영향", "인간 정서 탐구"],
          en: ["37 plays including Hamlet", "Influence on modern English", "Exploration of human emotions"]
        },
        mbtiTraits: {
          ko: ["깊은 감정 이해", "인간 본성 통찰", "창의적 표현", "인물 묘사"],
          en: ["Deep emotional understanding", "Insight into human nature", "Creative expression", "Character portrayal"]
        },
        successFactors: {
          ko: ["인간 심리 이해", "시대 초월 보편성", "언어 재능", "장르 마스터"],
          en: ["Understanding human psychology", "Timeless universality", "Linguistic talent", "Genre mastery"]
        }
      },
      {
        name: "J.R.R. 톨킨",
        nameEn: "J.R.R. Tolkien",
        field: "literature",
        country: "GB",
        description: {
          ko: "작가. 반지의 제왕으로 현대 판타지 문학의 아버지",
          en: "Author. Father of modern fantasy literature with The Lord of the Rings"
        },
        achievements: {
          ko: ["반지의 제왕 창시", "엘프어 개발", "판타지 장르 확립"],
          en: ["Created The Lord of the Rings", "Developed Elvish language", "Established fantasy genre"]
        },
        mbtiTraits: {
          ko: ["풍부한 상상력", "세계관 구축", "언어학 재능", "이상주의"],
          en: ["Rich imagination", "World-building", "Linguistic talent", "Idealism"]
        },
        successFactors: {
          ko: ["완벽한 세계관", "신화와 현대 결합", "선과 악 주제", "헌신적 창작"],
          en: ["Perfect world-building", "Combining myth and modernity", "Good and evil theme", "Dedicated creation"]
        }
      },
      {
        name: "빈센트 반 고흐",
        nameEn: "Vincent van Gogh",
        field: "arts",
        country: "NL",
        description: {
          ko: "화가. 후기 인상주의 대표 작가로 감정의 진정성을 담은 작품",
          en: "Painter. Leading post-impressionist artist whose works embody emotional authenticity"
        },
        achievements: {
          ko: ["별이 빛나는 밤 등 명작", "후기 인상주의 선구", "현대 미술 영향"],
          en: ["Masterpieces like Starry Night", "Pioneer of post-impressionism", "Influence on modern art"]
        },
        mbtiTraits: {
          ko: ["깊은 감정 표현", "진정성", "독특한 시각", "이상주의"],
          en: ["Deep emotional expression", "Authenticity", "Unique perspective", "Idealism"]
        },
        successFactors: {
          ko: ["진정성 감정", "독창적 색채", "자연과 삶 사랑", "헌신적 예술"],
          en: ["Authentic emotion", "Original color palette", "Love for nature and life", "Dedicated art"]
        }
      },
      {
        name: "프리다 칼로",
        nameEn: "Frida Kahlo",
        field: "arts",
        country: "MX",
        description: {
          ko: "화가. 멕시코의 대표 화가로 자전적 작품으로 유명",
          en: "Painter. Mexico's representative artist known for autobiographical works"
        },
        achievements: {
          ko: ["멕시코 예술 상징", "여성 예술가 독자적 입지", "자전적 초상화"],
          en: ["Symbol of Mexican art", "Independent standing as female artist", "Autobiographical portraits"]
        },
        mbtiTraits: {
          ko: ["자기 성찰", "감정 표현", "독특한 시각", "고통을 예술로"],
          en: ["Self-reflection", "Emotional expression", "Unique perspective", "Transforming pain into art"]
        },
        successFactors: {
          ko: ["솔직한 표현", "전통과 현대 결합", "고통 예술 전환", "강인한 의지"],
          en: ["Honest expression", "Combining tradition and modernity", "Transforming pain into art", "Strong will"]
        }
      },
      {
        name: "제니",
        nameEn: "Jennie Kim",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "BLACKPINK 멤버. 패션 아이콘이자 솔로 아티스트로서 글로벌 영향력",
          en: "BLACKPINK member. Fashion icon and solo artist with global influence"
        },
        achievements: {
          ko: ["BLACKPINK 글로벌 성공", "Chanel 글로벌 앰버서더", "솔로 싱글 'SOLO'"],
          en: ["BLACKPINK global success", "Chanel global ambassador", "Solo single 'SOLO'"]
        },
        mbtiTraits: {
          ko: ["독창적 표현", "예술 감수성", "실용적 사고", "진정성"],
          en: ["Original expression", "Artistic sensibility", "Practical thinking", "Authenticity"]
        },
        successFactors: {
          ko: ["묘한 매력", "패션 센스", "묵묵한 추진력", "글로벌 아이콘"],
          en: ["Subtle charm", "Fashion sense", "Quiet determination", "Global icon"]
        }
      },
      {
        name: "지민",
        nameEn: "Jimin",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "BTS 멤버. 우아한 춤선과 감성적 보컬로 사랑받는 아티스트",
          en: "BTS member. Artist loved for elegant dance moves and emotional vocals"
        },
        achievements: {
          ko: ["솔로 앨범 'FACE'", "Billboard Hot 100 1위 'Like Crazy'", "디올 글로벌 앰버서더"],
          en: ["Solo album 'FACE'", "Billboard Hot 100 #1 'Like Crazy'", "Dior global ambassador"]
        },
        mbtiTraits: {
          ko: ["감정 표현", "헌신", "완벽주의", "진정성"],
          en: ["Emotional expression", "Dedication", "Perfectionism", "Authenticity"]
        },
        successFactors: {
          ko: ["춤 실력", "묘한 매력", "팬과의 소통", "예술적 성장"],
          en: ["Dance ability", "Subtle charm", "Communication with fans", "Artistic growth"]
        }
      },
      {
        name: "올리비아 로드리고",
        nameEn: "Olivia Rodrigo",
        field: "arts",
        country: "US",
        description: {
          ko: "가수, 배우. 'drivers license'로 데뷔한 Z세대 팝 아이콘",
          en: "Singer and actress. Z-generation pop icon who debuted with 'drivers license'"
        },
        achievements: {
          ko: ["그래미상 3관왕", "'SOUR' 앨범 대성공", "디즈니+ '하이스쿨 뮤지컬'"],
          en: ["3 Grammy wins", "Massive success of 'SOUR' album", "Disney+ 'High School Musical'"]
        },
        mbtiTraits: {
          ko: ["감정 표현", "진정성", "창의성", "이상주의"],
          en: ["Emotional expression", "Authenticity", "Creativity", "Idealism"]
        },
        successFactors: {
          ko: ["진솔한 가사", "10대 공감", "빠른 성장", "팬과의 진정성"],
          en: ["Sincere lyrics", "Teenage resonance", "Rapid growth", "Authenticity with fans"]
        }
      },
      {
        name: "하니",
        nameEn: "Hanni",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "NewJeans 멤버. 베트남계 호주 출신으로 글로벌 팬덤을 보유한 아이돌",
          en: "NewJeans member. Vietnamese-Australian idol with a global fandom"
        },
        achievements: {
          ko: ["NewJeans 데뷔 성공", "Gucci 글로벌 앰버서더", "'Hype Boy' 퍼포머"],
          en: ["Successful NewJeans debut", "Gucci global ambassador", "Performer of 'Hype Boy'"]
        },
        mbtiTraits: {
          ko: ["이상주의", "창의성", "진정성", "공감 능력"],
          en: ["Idealism", "Creativity", "Authenticity", "Empathy"]
        },
        successFactors: {
          ko: ["다양한 매력", "글로벌 인기", "묘한 에너지", "팬 친화력"],
          en: ["Various charms", "Global popularity", "Unique energy", "Fan affinity"]
        }
      },
    ]
  },
  {
    type: "ENFJ",
    name: { ko: "선도자", en: "Protagonist" },
    nickname: { ko: "Protagonist", en: "Protagonist" },
    group: { ko: "외교관형 (NF)", en: "Diplomat (NF)" },
    celebrities: [
      {
        name: "바락 오바마",
        nameEn: "Barack Obama",
        field: "politics",
        country: "US",
        description: {
          ko: "미국 제44대 대통령. 변화와 희망의 메시지로 선거된 첫 흑인 대통령",
          en: "44th President of the United States. First Black president elected with message of change and hope"
        },
        achievements: {
          ko: ["미국 최초 흑인 대통령", "오바마케어", "노벨평화상(2009)"],
          en: ["First Black US President", "Obamacare", "Nobel Peace Prize (2009)"]
        },
        mbtiTraits: {
          ko: ["영감 리더십", "강력한 공감", "변화 열정", "효과적 소통"],
          en: ["Inspirational leadership", "Strong empathy", "Passion for change", "Effective communication"]
        },
        successFactors: {
          ko: ["희망 메시지", "감정 연결", "원칙과 실용", "세력 통합"],
          en: ["Message of hope", "Emotional connection", "Principles and practicality", "Unifying forces"]
        }
      },
      {
        name: "달라이 라마",
        nameEn: "Dalai Lama",
        field: "politics",
        country: "IN",
        description: {
          ko: "티베트 불교 지도자. 평화와 자비의 메시지로 세계적인 영향력",
          en: "Tibetan Buddhist leader. World influence with message of peace and compassion"
        },
        achievements: {
          ko: ["노벨평화상 수상(1989)", "티베트 독립 운통", "평화 메시지"],
          en: ["Nobel Peace Prize (1989)", "Tibetan independence movement", "Peace message"]
        },
        mbtiTraits: {
          ko: ["영감 리더십", "강력한 공감", "변화 열정", "효과적 소통"],
          en: ["Inspirational leadership", "Strong empathy", "Passion for change", "Effective communication"]
        },
        successFactors: {
          ko: ["희망 메시지", "감정 연결", "원칙과 실용", "세력 통합"],
          en: ["Message of hope", "Emotional connection", "Principles and practicality", "Unifying forces"]
        }
      },
      {
        name: "아리아나 그란데",
        nameEn: "Ariana Grande",
        field: "arts",
        country: "US",
        description: {
          ko: "가수, 배우. 4옥타브 음역대를 자랑하는 팝 스타",
          en: "Singer and actress. Pop star with 4-octave vocal range"
        },
        achievements: {
          ko: ["그래미상 수상", "Billboard 차트 1위 다수", "브로드웨이 복귀"],
          en: ["Grammy Award wins", "Multiple Billboard chart #1s", "Broadway return"]
        },
        mbtiTraits: {
          ko: ["사교성", "배려심", "조직력", "인정욕구"],
          en: ["Sociability", "Consideration", "Organizational ability", "Desire for recognition"]
        },
        successFactors: {
          ko: ["보컬 실력", "팬과의 유대", "음악적 진화", "사회성"],
          en: ["Vocal skills", "Bond with fans", "Musical evolution", "Social skills"]
        }
      },
      {
        name: "해리 스타일스",
        nameEn: "Harry Styles",
        field: "arts",
        country: "GB",
        description: {
          ko: "가수, 배우. One Direction 출신 솔로 아티스트로 패션 아이콘",
          en: "Singer and actor. Solo artist from One Direction and fashion icon"
        },
        achievements: {
          ko: ["그래미상 수상", "'Harry's House' 앨범", "영화 'Don't Worry Darling'"],
          en: ["Grammy Award win", "'Harry's House' album", "Film 'Don't Worry Darling'"]
        },
        mbtiTraits: {
          ko: ["카리스마", "공감 능력", "영감", "진정성"],
          en: ["Charisma", "Empathy", "Inspiration", "Authenticity"]
        },
        successFactors: {
          ko: ["성별 구분 없는 패션", "팬과의 특별한 유대", "음악적 진화", "긍정적 메시지"],
          en: ["Gender-neutral fashion", "Special bond with fans", "Musical evolution", "Positive messages"]
        }
      },
      {
        name: "셀레나 고메즈",
        nameEn: "Selena Gomez",
        field: "arts",
        country: "US",
        description: {
          ko: "가수, 배우, 프로듀서. Rare Beauty 창업자로 사업가적 면 보유",
          en: "Singer, actress, producer. Entrepreneur as founder of Rare Beauty"
        },
        achievements: {
          ko: ["Rare Beauty 20억 달러 기업", "'Only Murders in the Building'", "정신 건강 캠페인"],
          en: ["Rare Beauty $2 billion business", "'Only Murders in the Building'", "Mental health campaigns"]
        },
        mbtiTraits: {
          ko: ["공감 능력", "사회 의식", "리더십", "진정성"],
          en: ["Empathy", "Social consciousness", "Leadership", "Authenticity"]
        },
        successFactors: {
          ko: ["약점 솔직 공유", "팬과의 진정성", "사회적 메시지", "비즈니스 감각"],
          en: ["Honestly sharing weaknesses", "Authenticity with fans", "Social messages", "Business sense"]
        }
      }
    ]
  },
  {
    type: "ENFP",
    name: { ko: "활동가", en: "Campaigner" },
    nickname: { ko: "Campaigner", en: "Campaigner" },
    group: { ko: "외교관형 (NF)", en: "Diplomat (NF)" },
    celebrities: [
      {
        name: "월트 디즈니",
        nameEn: "Walt Disney",
        field: "entertainment",
        country: "US",
        description: {
          ko: "디즈니 창업자. 상상력으로 전 세계를 즐겁게 한 애니메이션의 대가",
          en: "Disney founder. Animation master who delighted the world with imagination"
        },
        achievements: {
          ko: ["미키마우스 창조", "월트 디즈니 월드", "애니메이션 개척"],
          en: ["Created Mickey Mouse", "Walt Disney World", "Animation pioneer"]
        },
        mbtiTraits: {
          ko: ["풍부한 상상력", "열정과 창의성", "가능성 탐구", "즐거움 추구"],
          en: ["Rich imagination", "Passion and creativity", "Exploring possibilities", "Pursuing joy"]
        },
        successFactors: {
          ko: ["상상력 현실화", "아이들 즐거움 이해", "혁신과 도전", "스토리텔링"],
          en: ["Making imagination real", "Understanding children's joy", "Innovation and challenge", "Storytelling"]
        }
      },
      {
        name: "로버트 다우니 주니어",
        nameEn: "Robert Downey Jr.",
        field: "arts",
        country: "US",
        description: {
          ko: "배우. 아이언맨으로 대중에게 사랑받는 할리우드 스타",
          en: "Actor. Hollywood star loved by the public as Iron Man"
        },
        achievements: {
          ko: ["아이언맨, 셜록 홈즈", "MCU 중심", "어려움 극복 후 재기"],
          en: ["Iron Man, Sherlock Holmes", "Center of MCU", "Made comeback after overcoming difficulties"]
        },
        mbtiTraits: {
          ko: ["재치와 유머", "적응력", "열정적 연기", "즉흥 재능"],
          en: ["Wit and humor", "Adaptability", "Passionate acting", "Improvised talent"]
        },
        successFactors: {
          ko: ["캐릭터 변신", "즉흥 연기", "대중 소통", "긍정성"],
          en: ["Character transformation", "Improvised acting", "Public communication", "Positivity"]
        }
      },
      {
        name: "뷔 (김태형)",
        nameEn: "V (Kim Taehyung)",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "BTS 멤버. 독특한 음색과 비주얼로 사랑받는 아이돌",
          en: "BTS member. Idol loved for unique voice and visuals"
        },
        achievements: {
          ko: ["솔로 앨범 'Layover'", "우디 앨런 영화 출연", "Cartier 글로벌 앰버서더"],
          en: ["Solo album 'Layover'", "Appeared in Woody Allen film", "Cartier global ambassador"]
        },
        mbtiTraits: {
          ko: ["창의성", "열정", "진정성", "예술적 감각"],
          en: ["Creativity", "Passion", "Authenticity", "Artistic sense"]
        },
        successFactors: {
          ko: ["독보적 카리스마", "팬과의 소통", "예술적 시도", "진솔함"],
          en: ["Unique charisma", "Communication with fans", "Artistic attempts", "Sincerity"]
        }
      }
    ]
  },
  {
    type: "ISTJ",
    name: { ko: "현실주의자", en: "Logistician" },
    nickname: { ko: "Logistician", en: "Logistician" },
    group: { ko: "관리자형 (SJ)", en: "Sentinel (SJ)" },
    celebrities: [
      {
        name: "워렌 버핏",
        nameEn: "Warren Buffett",
        field: "business",
        country: "US",
        description: {
          ko: "투자의 전설. 버크셔 해서웨이 CEO로 가치투자의 대가",
          en: "Legend of investment. CEO of Berkshire Hathaway and master of value investing"
        },
        achievements: {
          ko: ["버크셔 1조 달러 성장", "세계 최고 부자", "기부 서약"],
          en: ["Berkshire grew to $1 trillion", "World's richest person", "Giving pledge"]
        },
        mbtiTraits: {
          ko: ["신중한 분석", "전통 중시", "장기적 관점", "신뢰와 책임"],
          en: ["Cautious analysis", "Valuing tradition", "Long-term perspective", "Trust and responsibility"]
        },
        successFactors: {
          ko: ["가치투자 원칙", "장기 시각", "철저한 분석", "규율 투자"],
          en: ["Value investing principles", "Long-term view", "Thorough analysis", "Disciplined investment"]
        }
      },
      {
        name: "조지 워싱턴",
        nameEn: "George Washington",
        field: "politics",
        country: "US",
        description: {
          ko: "미국 초대 대통령. 국가 건설의 기초를 다진 지도자",
          en: "First US President. Leader who laid foundations of nation-building"
        },
        achievements: {
          ko: ["미국 독립 전쟁", "초대 대통령", "정치 전통 확립"],
          en: ["American Revolutionary War", "First President", "Established political traditions"]
        },
        mbtiTraits: {
          ko: ["책임감", "전통 존중", "신중한 의사결정", "원칙 고수"],
          en: ["Sense of responsibility", "Respecting tradition", "Cautious decision-making", "Adhering to principles"]
        },
        successFactors: {
          ko: ["신중한 리더십", "전통과 변화", "국가 희생", "원칙 기반"],
          en: ["Cautious leadership", "Tradition and change", "National sacrifice", "Principle-based"]
        }
      },
      {
        name: "앙겔라 메르켈",
        nameEn: "Angela Merkel",
        field: "politics",
        country: "DE",
        description: {
          ko: "독일 전 총리. 16년간 유럽의 안정을 이끈 '유럽의 어머니'",
          en: "Former German Chancellor. 'Mother of Europe' who led Europe's stability for 16 years"
        },
        achievements: {
          ko: ["독일 최초 여성 총리", "16년 집권", "유럽 경제 위기 극복"],
          en: ["Germany's first female Chancellor", "16 years in power", "Overcame European economic crisis"]
        },
        mbtiTraits: {
          ko: ["체계적 접근", "안정 중시", "분석적 의사결정", "책임감"],
          en: ["Systematic approach", "Valuing stability", "Analytical decision-making", "Sense of responsibility"]
        },
        successFactors: {
          ko: ["과학적 접근", "안정 리더십", "위기 침착", "유럽 통합"],
          en: ["Scientific approach", "Stable leadership", "Calm in crisis", "European integration"]
        }
      },
      {
        name: "제프 베조스",
        nameEn: "Jeff Bezos",
        field: "business",
        country: "US",
        description: {
          ko: "아마존 창업자. 전자상거래와 클라우드 컴퓨팅의 선구자",
          en: "Amazon founder. Pioneer of e-commerce and cloud computing"
        },
        achievements: {
          ko: ["아마존 혁명", "AWS 개척", "블루 오리진"],
          en: ["Amazon revolution", "Pioneered AWS", "Blue Origin"]
        },
        mbtiTraits: {
          ko: ["분석적 사고", "데이터 기반", "장기적 관점", "체계적 접근"],
          en: ["Analytical thinking", "Data-driven", "Long-term perspective", "Systematic approach"]
        },
        successFactors: {
          ko: ["고객 중심", "장기 투자", "데이터 운영", "혁신 비전"],
          en: ["Customer-centric", "Long-term investment", "Data operations", "Innovation vision"]
        }
      },
      {
        name: "카리나",
        nameEn: "Karina",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "aespa 리더. 완벽한 춤과 비주얼로 주목받는 4세대 아이돌",
          en: "aespa leader. 4th generation idol noted for perfect dance and visuals"
        },
        achievements: {
          ko: ["aespa 리더", "Prada 앰버서더", "'Next Level' 히트"],
          en: ["aespa leader", "Prada ambassador", "'Next Level' hit"]
        },
        mbtiTraits: {
          ko: ["책임감", "완벽주의", "신중함", "체계적"],
          en: ["Responsibility", "Perfectionism", "Caution", "Systematic"]
        },
        successFactors: {
          ko: ["리더십", "묘한 춤선", "비주얼", "성실함"],
          en: ["Leadership", "Subtle dance moves", "Visuals", "Diligence"]
        }
      },
      {
        name: "페이커",
        nameEn: "Faker",
        field: "sports",
        country: "KR",
        description: {
          ko: "e스포츠 선수. 리그 오브 레전드 전설, '대상혁'으로 불림",
          en: "eSports player. Legend of League of Legends, known as 'Lee Sang-hyeok'"
        },
        achievements: {
          ko: ["롤드컵 4회 우승", "LCK 10회 우승", "e스포츠 전설"],
          en: ["4 World Championship wins", "10 LCK titles", "eSports legend"]
        },
        mbtiTraits: {
          ko: ["완벽주의", "냉철함", "분석력", "집중력"],
          en: ["Perfectionism", "Composure", "Analytical ability", "Focus"]
        },
        successFactors: {
          ko: ["꾸준한 연습", "전략적 플레이", "멘탈 강함", "팀 리더십"],
          en: ["Steady practice", "Strategic play", "Strong mentality", "Team leadership"]
        }
      },
      {
        name: "채드",
        nameEn: "MrBeast",
        field: "entertainment",
        country: "US",
        description: {
          ko: "유튜버. 기네스북에 오른 세계 최대 구독자 수 콘텐츠 크리에이터",
          en: "YouTuber. Content creator with world's most subscribers, in Guinness Book"
        },
        achievements: {
          ko: ["3억 구독자 돌파", "수백만 달러 기부", "제목 최적화 시스템"],
          en: ["300 million subscribers", "Donated millions", "Title optimization system"]
        },
        mbtiTraits: {
          ko: ["체계적", "데이터 분석", "완벽주의", "장기적 관점"],
          en: ["Systematic", "Data analysis", "Perfectionism", "Long-term perspective"]
        },
        successFactors: {
          ko: ["썸네일/제목 최적화", "대규모 프로덕션", "시청자 분석", "꾸준함"],
          en: ["Thumbnail/title optimization", "Large-scale production", "Audience analysis", "Consistency"]
        }
      }
    ]
  },
  {
    type: "ISFJ",
    name: { ko: "수호자", en: "Defender" },
    nickname: { ko: "Defender", en: "Defender" },
    group: { ko: "관리자형 (SJ)", en: "Sentinel (SJ)" },
    celebrities: [
      {
        name: "마더 테레사",
        nameEn: "Mother Teresa",
        field: "politics",
        country: "IN",
        description: {
          ko: "수녀, 인도주의자. 가난한 이들을 위해 평생을 바친 성인",
          en: "Nun and humanitarian. Saint who devoted her life to the poor"
        },
        achievements: {
          ko: ["노벨평화상(1979)", "성녀 시성(2016)", "복지 활동"],
          en: ["Nobel Peace Prize (1979)", "Canonized (2016)", "Welfare activities"]
        },
        mbtiTraits: {
          ko: ["헌신적 사랑", "공감과 배려", "실천적 도움", "인내"],
          en: ["Devoted love", "Empathy and consideration", "Practical help", "Patience"]
        },
        successFactors: {
          ko: ["무조건적 사랑", "실천 봉사", "소외된 이들", "평생 일관"],
          en: ["Unconditional love", "Practical volunteering", "The marginalized", "Consistency throughout life"]
        }
      },
      {
        name: "퀸 엘리자베스 2세",
        nameEn: "Queen Elizabeth II",
        field: "politics",
        country: "GB",
        description: {
          ko: "영국 여왕. 70년간의 재위로 국가의 상징이 된 군주",
          en: "Queen of England. Monarch who became symbol of the nation for 70 years"
        },
        achievements: {
          ko: ["영국 최장 재위(70년)", "15개 국가 원수", "안정적 상징"],
          en: ["Longest reign in UK (70 years)", "Head of 15 countries", "Stable symbol"]
        },
        mbtiTraits: {
          ko: ["의무와 책임", "전통 존중", "조용한 리더십", "인내"],
          en: ["Duty and responsibility", "Respecting tradition", "Quiet leadership", "Patience"]
        },
        successFactors: {
          ko: ["의무 헌신", "전통과 변화", "국민 연결", "일관된 태도"],
          en: ["Dedication to duty", "Tradition and change", "Connecting with people", "Consistent attitude"]
        }
      },
      {
        name: "케이트 미들턴",
        nameEn: "Kate Middleton",
        field: "politics",
        country: "GB",
        description: {
          ko: "케임브리지 공작부인. 현대적 왕실의 새로운 모습",
          en: "Duchess of Cambridge. New face of modern monarchy"
        },
        achievements: {
          ko: ["왕실 현대화", "정신 건강 캠페인", "전통과 현대"],
          en: ["Modernized royal family", "Mental health campaigns", "Tradition and modernity"]
        },
        mbtiTraits: {
          ko: ["배려심", "전통 존중", "조용한 리더십", "헌신"],
          en: ["Consideration", "Respecting tradition", "Quiet leadership", "Dedication"]
        },
        successFactors: {
          ko: ["왕실 의무", "민간 연결", "겸손한 이미지", "사회 이슈"],
          en: ["Royal duties", "Connecting with public", "Humble image", "Social issues"]
        }
      },
      {
        name: "윈터",
        nameEn: "Winter",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "aespa 멤버. 뛰어난 가창력과 성실함으로 사랑받는 아이돌",
          en: "aespa member. Idol loved for excellent vocals and diligence"
        },
        achievements: {
          ko: ["솔로 곡 'Spark'", "OST 참여", "글로벌 팬덤"],
          en: ["Solo song 'Spark'", "OST participation", "Global fandom"]
        },
        mbtiTraits: {
          ko: ["헌신", "성실함", "배려", "완벽주의"],
          en: ["Dedication", "Diligence", "Consideration", "Perfectionism"]
        },
        successFactors: {
          ko: ["꾸준한 실력 향상", "팬 서비스", "팀워크", "진정성"],
          en: ["Steady skill improvement", "Fan service", "Teamwork", "Authenticity"]
        }
      },
      {
        name: "손흥민",
        nameEn: "Son Heung-min",
        field: "sports",
        country: "KR",
        description: {
          ko: "축구선수. 프리미어리그 골든부트 수상자, 아시아 최고 축구선수",
          en: "Footballer. Premier League Golden Boot winner, Asia's best footballer"
        },
        achievements: {
          ko: ["프리미어리그 골든부트", "토트넘 주장", "FIFA 푸스카스상"],
          en: ["Premier League Golden Boot", "Tottenham captain", "FIFA Puskas Award"]
        },
        mbtiTraits: {
          ko: ["헌신", "성실함", "겸손", "팀워크"],
          en: ["Dedication", "Diligence", "Humility", "Teamwork"]
        },
        successFactors: {
          ko: ["꾸준한 연습", "팀원 배려", "팬 사랑", "인성"],
          en: ["Steady practice", "Consideration for teammates", "Fan love", "Character"]
        }
      }
    ]
  },
  {
    type: "ESTJ",
    name: { ko: "경영자", en: "Executive" },
    nickname: { ko: "Executive", en: "Executive" },
    group: { ko: "관리자형 (SJ)", en: "Sentinel (SJ)" },
    celebrities: [
      {
        name: "존 F. 케네디",
        nameEn: "John F. Kennedy",
        field: "politics",
        country: "US",
        description: {
          ko: "미국 제35대 대통령. 카리스마와 리더십으로 유명한 지도자",
          en: "35th US President. Leader known for charisma and leadership"
        },
        achievements: {
          ko: ["쿠바 미사일 위기", "아폴로 계획", "시민권법"],
          en: ["Cuban Missile Crisis", "Apollo program", "Civil Rights Act"]
        },
        mbtiTraits: {
          ko: ["강력한 리더십", "결단력", "조직 관리", "목표 지향"],
          en: ["Strong leadership", "Decisiveness", "Organization management", "Goal-oriented"]
        },
        successFactors: {
          ko: ["강력한 리더십", "위기 대응", "국민 소통", "대담한 목표"],
          en: ["Strong leadership", "Crisis response", "Public communication", "Bold goals"]
        }
      },
      {
        name: "헨리 포드",
        nameEn: "Henry Ford",
        field: "business",
        country: "US",
        description: {
          ko: "포드 모터스 창업자. 자동차 대중화와 생산 혁신의 주역",
          en: "Ford Motors founder. Key figure in automobile popularization and production innovation"
        },
        achievements: {
          ko: ["Model T", "컨베이어 벨트", "5달러 임금"],
          en: ["Model T", "Conveyor belt", "$5 wage"]
        },
        mbtiTraits: {
          ko: ["실용적 혁신", "효율성", "조직 관리", "결단력"],
          en: ["Practical innovation", "Efficiency", "Organization management", "Decisiveness"]
        },
        successFactors: {
          ko: ["생산 혁신", "노동자 복지", "대중화", "체계 관리"],
          en: ["Production innovation", "Worker welfare", "Democratization", "Systematic management"]
        }
      },
      {
        name: "이건희",
        field: "business",
        country: "KR",
        description: {
          ko: "삼성전자 회장. 한국 대표 기업가이자 삼성 전성기 리더",
          en: "Samsung Electronics chairman. Representative Korean entrepreneur and Samsung's golden age leader"
        },
        achievements: {
          ko: ["반도체 사업 성공", "삼성 세계적 기업", "한국 산업 발전"],
          en: ["Semiconductor business success", "Samsung global enterprise", "Korean industrial development"]
        },
        mbtiTraits: {
          ko: ["강력한 추진력", "장기적 비전", "조직 관리", "의사결단"],
          en: ["Strong drive", "Long-term vision", "Organization management", "Decision making"]
        },
        successFactors: {
          ko: ["과감한 투자", "세계 시장 진출", "품질 경영", "인재 중시"],
          en: ["Bold investment", "Global market entry", "Quality management", "Valuing talent"]
        }
      },
      {
        name: "민지",
        nameEn: "Minji",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "NewJeans 멤버. 팀의 리더이자 대언니로서 책임감 있는 아이돌",
          en: "NewJeans member. Responsible idol as team leader and eldest sister"
        },
        achievements: {
          ko: ["NewJeans 데뷔 성공", "팀 리더", "Chanel Beauty 뮤즈"],
          en: ["Successful NewJeans debut", "Team leader", "Chanel Beauty muse"]
        },
        mbtiTraits: {
          ko: ["책임감", "조직력", "실행력", "논리적 사고"],
          en: ["Responsibility", "Organizational ability", "Execution", "Logical thinking"]
        },
        successFactors: {
          ko: ["리더십", "성실함", "팬 서비스", "전문성"],
          en: ["Leadership", "Diligence", "Fan service", "Expertise"]
        }
      },
      {
        name: "스쿼드게임",
        nameEn: "Squid Game",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "넷플릭스 드라마. 전 세계를 사로잡은 한국 콘텐츠",
          en: "Netflix drama. Korean content that captivated the world"
        },
        achievements: {
          ko: ["넷플릭스 역대 최다 시청", "에미상 수상", "K-콘텐츠 세계화"],
          en: ["Most watched in Netflix history", "Emmy Award win", "Globalization of K-content"]
        },
        mbtiTraits: {
          ko: ["조직력", "전략", "성과 중시", "효율성"],
          en: ["Organization", "Strategy", "Focus on results", "Efficiency"]
        },
        successFactors: {
          ko: ["글로벌 콘텐츠", "트렌드 분석", "제작 관리", "마케팅"],
          en: ["Global content", "Trend analysis", "Production management", "Marketing"]
        }
      },
      {
        name: "트래비스",
        nameEn: "Travis Scott",
        field: "arts",
        country: "US",
        description: {
          ko: "래퍼, 프로듀서. 아스트로월드 페스티벌 등으로 문화 아이콘",
          en: "Rapper and producer. Cultural icon through Astroworld festival and more"
        },
        achievements: {
          ko: ["'Sicko Mode' 빌보드 1위", "맥도날드 콜라보", "포트나이트 콘서트"],
          en: ["'Sicko Mode' Billboard #1", "McDonald's collaboration", "Fortnite concert"]
        },
        mbtiTraits: {
          ko: ["리더십", "사업가 정신", "추진력", "혁신"],
          en: ["Leadership", "Entrepreneurial spirit", "Drive", "Innovation"]
        },
        successFactors: {
          ko: ["브랜드 콜라보", "팬 커뮤니티", "문화 트렌드", "비즈니스 감각"],
          en: ["Brand collaboration", "Fan community", "Cultural trends", "Business sense"]
        }
      }
    ]
  },
  {
    type: "ESFJ",
    name: { ko: "집정관", en: "Consul" },
    nickname: { ko: "Consul", en: "Consul" },
    group: { ko: "관리자형 (SJ)", en: "Sentinel (SJ)" },
    celebrities: [
    ]
  },
  {
    type: "ISTP",
    name: { ko: "장인", en: "Virtuoso" },
    nickname: { ko: "Virtuoso", en: "Virtuoso" },
    group: { ko: "탐험가형 (SP)", en: "Explorer (SP)" },
    celebrities: [
      {
        name: "마이클 조던",
        nameEn: "Michael Jordan",
        field: "sports",
        country: "US",
        description: {
          ko: "농구 전설. NBA 역사상 최고의 선수",
          en: "Basketball legend. Greatest player in NBA history"
        },
        achievements: {
          ko: ["6회 챔피언", "5회 MVP", "최다 득점"],
          en: ["6-time champion", "5-time MVP", "All-time leading scorer"]
        },
        mbtiTraits: {
          ko: ["상황 판단", "기술 숙달", "경쟁심", "위기 대응"],
          en: ["Situation judgment", "Skill mastery", "Competitiveness", "Crisis response"]
        },
        successFactors: {
          ko: ["기술 연마", "승리 집착", "클러치 침착", "신체와 기술"],
          en: ["Skill refinement", "Obsession with winning", "Clutch composure", "Body and skill"]
        }
      },
      {
        name: "클린트 이스트우드",
        nameEn: "Clint Eastwood",
        field: "arts",
        country: "US",
        description: {
          ko: "배우, 감독. 서부극 아이콘, 오스카 수상 감독",
          en: "Actor and director. Western icon, Oscar-winning director"
        },
        achievements: {
          ko: ["4회 아칼데미상", "최고 연출가", "60년 경력"],
          en: ["4 Academy Awards", "Best director", "60-year career"]
        },
        mbtiTraits: {
          ko: ["실용적 연기", "침착함", "기술 숙달", "독립적 작업"],
          en: ["Practical acting", "Composure", "Skill mastery", "Independent work"]
        },
        successFactors: {
          ko: ["다양한 장르", "기술적 완성도", "실용적 제작", "꾸준함"],
          en: ["Various genres", "Technical perfection", "Practical production", "Consistency"]
        }
      },
      {
        name: "알렉산더 오베치킨",
        nameEn: "Alexander Ovechkin",
        field: "sports",
        country: "RU",
        description: {
          ko: "아이스하키 선수. NHL 전설적인 스코어러",
          en: "Ice hockey player. Legendary scorer in NHL"
        },
        achievements: {
          ko: ["스탠리컵 우승", "9회 머리스 트로피", "역대 최다 득점"],
          en: ["Stanley Cup win", "9 Hart Trophies", "All-time leading scorer"]
        },
        mbtiTraits: {
          ko: ["즉각적 판단", "기술 숙달", "경쟁심", "위기 대응"],
          en: ["Instant judgment", "Skill mastery", "Competitiveness", "Crisis response"]
        },
        successFactors: {
          ko: ["기술 연마", "승리 집착", "클로치 상황", "신체와 기술"],
          en: ["Skill refinement", "Obsession with winning", "Clutch situations", "Body and skill"]
        }
      },
      {
        name: "해린",
        nameEn: "Haerin",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "NewJeans 멤버. 고양이상 외모로 사랑받는 아이돌",
          en: "NewJeans member. Idol loved for cat-like appearance"
        },
        achievements: {
          ko: ["NewJeans 데뷔 성공", "Dior Jewellery 뮤즈", "'Hype Boy' 퍼포머"],
          en: ["Successful NewJeans debut", "Dior Jewellery muse", "Performer of 'Hype Boy'"]
        },
        mbtiTraits: {
          ko: ["실용적", "기술 숙달", "독립적", "적응력"],
          en: ["Practical", "Skill mastery", "Independent", "Adaptability"]
        },
        successFactors: {
          ko: ["독특한 매력", "묘한 카리스마", "안정적 실력", "글로벌 인기"],
          en: ["Unique charm", "Subtle charisma", "Stable skills", "Global popularity"]
        }
      },
      {
        name: "카이",
        nameEn: "Kai",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "EXO, SuperM 멤버. '춤의 신'으로 불리는 퍼포머",
          en: "EXO and SuperM member. Performer known as 'God of Dance'"
        },
        achievements: {
          ko: ["솔로 앨범 'Rover'", "Gucci 글로벌 앰버서더", "댄스 전문가"],
          en: ["Solo album 'Rover'", "Gucci global ambassador", "Dance expert"]
        },
        mbtiTraits: {
          ko: ["실용적", "기술 숙달", "즉흥성", "적응력"],
          en: ["Practical", "Skill mastery", "Spontaneity", "Adaptability"]
        },
        successFactors: {
          ko: ["춤 실력", "묘한 카리스마", "패션 센스", "묵묵한 노력"],
          en: ["Dance ability", "Subtle charisma", "Fashion sense", "Quiet effort"]
        }
      },
      {
        name: "다니엘",
        nameEn: "Danielle",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "NewJeans 멤버. 한국-호주 혼혈로 밝은 에너지의 소유자",
          en: "NewJeans member. Korean-Australian mixed with bright energy"
        },
        achievements: {
          ko: ["NewJeans 데뷔 성공", "Burberry 앰버서더", "'Attention' 퍼포머"],
          en: ["Successful NewJeans debut", "Burberry ambassador", "Performer of 'Attention'"]
        },
        mbtiTraits: {
          ko: ["열정", "창의성", "사교성", "자유로운 영혼"],
          en: ["Passion", "Creativity", "Sociability", "Free spirit"]
        },
        successFactors: {
          ko: ["밝은 에너지", "글로벌 매력", "팀워크", "묘한 개성"],
          en: ["Bright energy", "Global charm", "Teamwork", "Unique personality"]
        }
      },
      {
        name: "xQc",
        nameEn: "xQc",
        field: "entertainment",
        country: "CA",
        description: {
          ko: "트위치 스트리머. 세계 최대 팔로워 보유 게임 스트리머",
          en: "Twitch streamer. Game streamer with the world's largest followers"
        },
        achievements: {
          ko: ["트위치 최다 시청 시간", "오버워치 프로선수 출신", "콘텐츠 혁신"],
          en: ["Most watched time on Twitch", "Former Overwatch pro player", "Content innovation"]
        },
        mbtiTraits: {
          ko: ["즉흥성", "적응력", "에너지", "솔직함"],
          en: ["Spontaneity", "Adaptability", "Energy", "Honesty"]
        },
        successFactors: {
          ko: ["리액션 콘텐츠", "팬과의 소통", "게임 실력", "진정성"],
          en: ["Reaction content", "Communication with fans", "Gaming skills", "Authenticity"]
        }
      }
    ]
  },
  {
    type: "ISFP",
    name: { ko: "모험가", en: "Adventurer" },
    nickname: { ko: "Adventurer", en: "Adventurer" },
    group: { ko: "탐험가형 (SP)", en: "Explorer (SP)" },
    celebrities: [
      {
        name: "마이클 잭슨",
        nameEn: "Michael Jackson",
        field: "arts",
        country: "US",
        description: {
          ko: "팝의 황제. 음악과 퍼포먼스 혁신가",
          en: "King of Pop. Innovator in music and performance"
        },
        achievements: {
          ko: ["스릴러 역대 최다 판매", "문워크", "뮤직비디오 예술"],
          en: ["Thriller best-selling album", "Moonwalk", "Music video as art"]
        },
        mbtiTraits: {
          ko: ["감정 표현", "예술 감수성", "즉흥", "독특한 개성"],
          en: ["Emotional expression", "Artistic sensibility", "Spontaneity", "Unique personality"]
        },
        successFactors: {
          ko: ["음악 혁신", "감정 표현", "독창적 스타일", "예술 실험"],
          en: ["Music innovation", "Emotional expression", "Original style", "Artistic experimentation"]
        }
      },
      {
        name: "브리트니 스피어스",
        nameEn: "Britney Spears",
        field: "arts",
        country: "US",
        description: {
          ko: "팝 스타. 2000년대 팝 문화 아이콘",
          en: "Pop star. 2000s pop culture icon"
        },
        achievements: {
          ko: ["1억 장 판매", "틴 팝 상징", "라스베가스 쇼"],
          en: ["100 million records sold", "Teen pop symbol", "Las Vegas show"]
        },
        mbtiTraits: {
          ko: ["자유로운 표현", "감정 연결", "즉흥", "개성"],
          en: ["Free expression", "Emotional connection", "Spontaneity", "Individuality"]
        },
        successFactors: {
          ko: ["퍼포먼스 스타일", "감정 연결", "꾸준한 활동", "변화"],
          en: ["Performance style", "Emotional connection", "Consistent activity", "Change"]
        }
      },
      {
        name: "빌리 아일리시",
        nameEn: "Billie Eilish",
        field: "arts",
        country: "US",
        description: {
          ko: "싱어송라이터. Z세대의 아이콘이 된 독창적인 음악과 스타일의 소유자",
          en: "Singer-songwriter. Owner of unique music and style who became Z-generation icon"
        },
        achievements: {
          ko: ["그래미상 7관왕 최연소 수상", "007 주제가", "지속가능한 패션 아이콘"],
          en: ["Youngest to win 7 Grammys", "007 theme song", "Sustainable fashion icon"]
        },
        mbtiTraits: {
          ko: ["예술 감수성", "진정성", "즉흥성", "독창적 표현"],
          en: ["Artistic sensibility", "Authenticity", "Spontaneity", "Original expression"]
        },
        successFactors: {
          ko: ["독특한 음악 스타일", "진정성 있는 메시지", "비주얼 아이덴티티", "형제와의 협업"],
          en: ["Unique music style", "Authentic messages", "Visual identity", "Collaboration with brother"]
        }
      },
      {
        name: "보우이",
        nameEn: "David Bowie",
        field: "arts",
        country: "GB",
        description: {
          ko: "가수, 배우. '지구에 온 별'으로 불리는 예술가",
          en: "Singer and actor. Artist known as 'Alien on Earth'"
        },
        achievements: {
          ko: ["록 변화 아이콘", "재창조의 상징", "50년 경력"],
          en: ["Rock change icon", "Symbol of reinvention", "50-year career"]
        },
        mbtiTraits: {
          ko: ["예술 감수성", "진정성", "즉흥", "독특한 시각"],
          en: ["Artistic sensibility", "Authenticity", "Spontaneity", "Unique perspective"]
        },
        successFactors: {
          ko: ["음악 혁신", "재창조", "아이덴티티 실험", "예술"],
          en: ["Music innovation", "Reinvention", "Identity experimentation", "Art"]
        }
      },
      {
        name: "태연",
        nameEn: "Taeyeon",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "소녀시대 리더, 솔로 가수. 감성적 보컬의 여왕",
          en: "Girls' Generation leader and solo singer. Queen of emotional vocals"
        },
        achievements: {
          ko: ["소녀시대 리더", "솔로 앨범 대성공", "OST 퀸"],
          en: ["Girls' Generation leader", "Successful solo albums", "OST Queen"]
        },
        mbtiTraits: {
          ko: ["감정 표현", "예술 감수성", "진정성", "독특한 시각"],
          en: ["Emotional expression", "Artistic sensibility", "Authenticity", "Unique perspective"]
        },
        successFactors: {
          ko: ["보컬 실력", "감성적 음악", "진솔함", "꾸준한 활동"],
          en: ["Vocal skills", "Emotional music", "Sincerity", "Consistent activity"]
        }
      },
      {
        name: "저스틴 비버",
        nameEn: "Justin Bieber",
        field: "arts",
        country: "CA",
        description: {
          ko: "가수. 유튜브로 발굴되어 세계 스타가 된 팝 아이콘",
          en: "Singer. Pop icon discovered on YouTube who became world star"
        },
        achievements: {
          ko: ["'Baby' 10억 뷰", "그래미상 수상", "커리어 부활"],
          en: ["'Baby' 1 billion views", "Grammy Award win", "Career revival"]
        },
        mbtiTraits: {
          ko: ["감정 표현", "예술 감수성", "즉흥성", "진정성"],
          en: ["Emotional expression", "Artistic sensibility", "Spontaneity", "Authenticity"]
        },
        successFactors: {
          ko: ["진솔한 음악", "팬과의 유대", "성장하는 모습", "재창조"],
          en: ["Sincere music", "Bond with fans", "Growing presence", "Reinvention"]
        }
      }
    ]
  },
  {
    type: "ESTP",
    name: { ko: "사업가", en: "Entrepreneur" },
    nickname: { ko: "Entrepreneur", en: "Entrepreneur" },
    group: { ko: "탐험가형 (SP)", en: "Explorer (SP)" },
    celebrities: [
      {
        name: "도널드 트럼프",
        nameEn: "Donald Trump",
        field: "politics",
        country: "US",
        description: {
          ko: "미국 제45대 대통령. 기업가 출신 정치인",
          en: "45th US President. Politician from business background"
        },
        achievements: {
          ko: ["부동산 제국", "미국 대통령", "TV 프로그램"],
          en: ["Real estate empire", "US President", "TV program"]
        },
        mbtiTraits: {
          ko: ["상황 판단", "실용적 해결", "위험 감수", "에너지"],
          en: ["Situation judgment", "Practical solutions", "Risk-taking", "Energy"]
        },
        successFactors: {
          ko: ["기회 포착", "대중 소통", "브랜드", "즉흥 대응"],
          en: ["Seizing opportunities", "Public communication", "Brand", "Spontaneous response"]
        }
      },
      {
        name: "르브론 제임스",
        nameEn: "LeBron James",
        field: "sports",
        country: "US",
        description: {
          ko: "NBA 농구 선수. 현대 최고의 농구 선수",
          en: "NBA basketball player. Greatest basketball player of modern era"
        },
        achievements: {
          ko: ["4회 챔피언", "4회 MVP", "최다 득점"],
          en: ["4-time champion", "4-time MVP", "All-time leading scorer"]
        },
        mbtiTraits: {
          ko: ["즉각 판단", "경쟁심", "적응력", "리더십"],
          en: ["Instant judgment", "Competitiveness", "Adaptability", "Leadership"]
        },
        successFactors: {
          ko: ["높은 농구 IQ", "큰 경기", "비즈니스", "자기 관리"],
          en: ["High basketball IQ", "Big games", "Business", "Self-management"]
        }
      },
      {
        name: "매돈나",
        nameEn: "Madonna",
        field: "arts",
        country: "US",
        description: {
          ko: "팝의 여왕. 40년간 팝 음악의 중심",
          en: "Queen of Pop. Center of pop music for 40 years"
        },
        achievements: {
          ko: ["3억 장 판매", "MTV 시대 상징", "40년 최정상"],
          en: ["300 million records sold", "MTV era symbol", "40 years at the top"]
        },
        mbtiTraits: {
          ko: ["대담한 변화", "즉흥", "적응력", "에너지"],
          en: ["Bold changes", "Spontaneity", "Adaptability", "Energy"]
        },
        successFactors: {
          ko: ["재창조", "논란 활용", "퍼포먼스", "비즈니스"],
          en: ["Reinvention", "Using controversy", "Performance", "Business"]
        }
      },
      {
        name: "제이팍",
        nameEn: "Jay Park",
        field: "entertainment",
        country: "US",
        description: {
          ko: "래퍼, 기업가. AOMG, H1GHR MUSIC 설립자",
          en: "Rapper and entrepreneur. Founder of AOMG and H1GHR MUSIC"
        },
        achievements: {
          ko: ["AOMG 설립", "술트러스트 대성공", "한국 힙합 선도"],
          en: ["Founded AOMG", "Yultron success", "Leading Korean hip-hop"]
        },
        mbtiTraits: {
          ko: ["즉각 판단", "위험 감수", "적응력", "에너지"],
          en: ["Instant judgment", "Risk-taking", "Adaptability", "Energy"]
        },
        successFactors: {
          ko: ["사업가 정신", "팬 소통", "트렌드 선도", "다재다능"],
          en: ["Entrepreneurial spirit", "Fan communication", "Leading trends", "Versatility"]
        }
      },
      {
        name: "포스트 말론",
        nameEn: "Post Malone",
        field: "arts",
        country: "US",
        description: {
          ko: "래퍼, 가수. 힙합과 록을 결합한 새로운 스타일",
          en: "Rapper and singer. New style combining hip-hop and rock"
        },
        achievements: {
          ko: ["'Circles' 빌보드 1위", "다이아몬드 인증", "유니크한 스타일"],
          en: ["'Circles' Billboard #1", "Diamond certification", "Unique style"]
        },
        mbtiTraits: {
          ko: ["즉흥성", "적응력", "솔직함", "에너지"],
          en: ["Spontaneity", "Adaptability", "Honesty", "Energy"]
        },
        successFactors: {
          ko: ["진정성", "장르 혼합", "팬 친화", "묘한 매력"],
          en: ["Authenticity", "Genre blending", "Fan affinity", "Subtle charm"]
        }
      }
    ]
  },
  {
    type: "ESFP",
    name: { ko: "연예인", en: "Entertainer" },
    nickname: { ko: "Entertainer", en: "Entertainer" },
    group: { ko: "탐험가형 (SP)", en: "Explorer (SP)" },
    celebrities: [
      {
        name: "엘튼 존",
        nameEn: "Elton John",
        field: "arts",
        country: "GB",
        description: {
          ko: "가수, 작곡가. 화려한 퍼포먼스와 감동 음악",
          en: "Singer and songwriter. Impressive performances and moving music"
        },
        achievements: {
          ko: ["3억 장 판매", "5회 그래미", "디즈니 음악"],
          en: ["300 million records sold", "5 Grammys", "Disney music"]
        },
        mbtiTraits: {
          ko: ["무대 자유", "즉흥", "대중 소통", "열정"],
          en: ["Stage freedom", "Spontaneity", "Public communication", "Passion"]
        },
        successFactors: {
          ko: ["퍼포먼스 스타일", "감정 연결", "50년 활동", "화려함"],
          en: ["Performance style", "Emotional connection", "50-year career", "Extravagance"]
        }
      },
      {
        name: "제이미 폭스",
        nameEn: "Jamie Foxx",
        field: "arts",
        country: "US",
        description: {
          ko: "배우, 가수. 코미디언 출신 아카데미상 수상",
          en: "Actor and singer. Academy Award winner from comedian background"
        },
        achievements: {
          ko: ["아카데미 남우주연상", "다재다능", "라디오 DJ"],
          en: ["Academy Award for Best Actor", "Versatile", "Radio DJ"]
        },
        mbtiTraits: {
          ko: ["즉흥", "무대 자유", "다재다능", "소통"],
          en: ["Spontaneity", "Stage freedom", "Versatility", "Communication"]
        },
        successFactors: {
          ko: ["코미디에서 진지", "즉흥 재능", "음악과 연기", "매체 도전"],
          en: ["From comedy to serious", "Improvised talent", "Music and acting", "Media challenges"]
        }
      },
      {
        name: "휘트니 휴스턴",
        nameEn: "Whitney Houston",
        field: "arts",
        country: "US",
        description: {
          ko: "가수. '보이스'로 불리는 전설적 보컬리스트",
          en: "Singer. Legendary vocalist known as 'The Voice'"
        },
        achievements: {
          ko: ["2억 장 판매", "최다 음악상", "볼디가드 OST"],
          en: ["200 million records sold", "Most music awards", "Bodyguard OST"]
        },
        mbtiTraits: {
          ko: ["감정 표현", "무대 자유", "즉흥", "연결"],
          en: ["Emotional expression", "Stage freedom", "Spontaneity", "Connection"]
        },
        successFactors: {
          ko: ["천부적 재능", "감정 전달", "마 카리스마", "영화 음악"],
          en: ["Natural talent", "Emotional delivery", "Star charisma", "Movie music"]
        }
      },
      {
        name: "리사",
        nameEn: "Lisa",
        field: "entertainment",
        country: "KR",
        description: {
          ko: "BLACKPINK 멤버. 뛰어난 춤 실력으로 글로벌 아이콘",
          en: "BLACKPINK member. Global icon with excellent dance skills"
        },
        achievements: {
          ko: ["솔로 싱글 'LALISA'", "MTV VMA 수상", "Celine 글로벌 앰버서더"],
          en: ["Solo single 'LALISA'", "MTV VMA win", "Celine global ambassador"]
        },
        mbtiTraits: {
          ko: ["무대 자유", "즉흥성", "열정", "카리스마"],
          en: ["Stage freedom", "Spontaneity", "Passion", "Charisma"]
        },
        successFactors: {
          ko: ["춤 실력", "묘한 매력", "글로벌 인기", "팬 소통"],
          en: ["Dance ability", "Subtle charm", "Global popularity", "Fan communication"]
        }
      },
      {
        name: "제이슨 더루로",
        nameEn: "Jason Derulo",
        field: "arts",
        country: "US",
        description: {
          ko: "가수, 댄서. 틱톡으로 새로운 인기를 얻은 팝 스타",
          en: "Singer and dancer. Pop star who gained new popularity through TikTok"
        },
        achievements: {
          ko: ["'Savage Love' 틱톡 대히트", "30억 유튜브 조회수", "글로벌 투어"],
          en: ["'Savage Love' TikTok hit", "3 billion YouTube views", "Global tour"]
        },
        mbtiTraits: {
          ko: ["무대 자유", "즉흥성", "사교성", "열정"],
          en: ["Stage freedom", "Spontaneity", "Sociability", "Passion"]
        },
        successFactors: {
          ko: ["틱톡 활용", "춤 실력", "팬 소통", "콘텐츠 민감도"],
          en: ["Using TikTok", "Dance ability", "Fan communication", "Content sensitivity"]
        }
      },
      {
        name: "애디슨",
        nameEn: "Addison Rae",
        field: "entertainment",
        country: "US",
        description: {
          ko: "틱톡 스타, 배우. 8800만 팔로워 보유한 Z세대 아이콘",
          en: "TikTok star and actress. Z-generation icon with 88 million followers"
        },
        achievements: {
          ko: ["틱톡 8800만 팔로워", "넷플릭스 영화 주연", "Item Beauty"],
          en: ["88 million TikTok followers", "Lead in Netflix film", "Item Beauty"]
        },
        mbtiTraits: {
          ko: ["사교성", "즉흥성", "카리스마", "적응력"],
          en: ["Sociability", "Spontaneity", "Charisma", "Adaptability"]
        },
        successFactors: {
          ko: ["틱톡 트렌드", "진정성", "팬 친화", "비즈니스 확장"],
          en: ["TikTok trends", "Authenticity", "Fan affinity", "Business expansion"]
        }
      }
    ]
  }
];

// Helper function to get celebrity groups by language
export function getCelebrityGroups(locale: 'ko' | 'en'): MBTICelebrityGroup[] {
  return bilingualCelebrityGroups.map(group => ({
    type: group.type,
    name: group.name[locale],
    nickname: group.nickname[locale],
    group: group.group[locale],
    celebrities: group.celebrities.map(celeb => ({
      name: locale === 'ko' ? celeb.name : (celeb.nameEn || celeb.name),
      nameEn: celeb.nameEn,
      field: celeb.field,
      country: celeb.country,
      description: celeb.description[locale],
      achievements: celeb.achievements[locale],
      mbtiTraits: celeb.mbtiTraits[locale],
      successFactors: celeb.successFactors[locale],
      image: celeb.image
    }))
  }));
}

// Export celebrity groups by language for convenience
export const celebrityGroupsKo: MBTICelebrityGroup[] = getCelebrityGroups('ko');
export const celebrityGroupsEn: MBTICelebrityGroup[] = getCelebrityGroups('en');

// Get all celebrities flattened
export function getAllCelebrities(locale: 'ko' | 'en'): (Celebrity & { mbtiType: string; mbtiName: string; mbtiGroup: string })[] {
  const groups = getCelebrityGroups(locale);
  return groups.flatMap(group =>
    group.celebrities.map(celeb => ({
      ...celeb,
      mbtiType: group.type,
      mbtiName: group.name,
      mbtiGroup: group.group
    }))
  );
}

// Get field name by locale
export function getFieldName(field: CelebrityField, locale: 'ko' | 'en'): string {
  return bilingualFieldNames[field][locale];
}

// Get group colors by locale
export function getGroupColors(groupKey: string, locale: 'ko' | 'en'): { bg: string; text: string; border: string } {
  return bilingualGroupColors[groupKey]?.[locale] || {
    bg: "from-gray-500/20 to-gray-500/20",
    text: "text-gray-400",
    border: "border-gray-400/30"
  };
}

// Get used countries (countries that have celebrities)
export function getUsedCountries(locale: 'ko' | 'en'): Country[] {
  const allCelebs = getAllCelebrities(locale);
  const usedCountryCodes = new Set(allCelebs.map(c => c.country));
  return Object.values(countries).filter(c => usedCountryCodes.has(c.code));
}

// Export usedCountries for backward compatibility (Korean)
export const usedCountries: Country[] = getUsedCountries('ko');

// Get field stats by locale
export function getFieldStats(locale: 'ko' | 'en'): Record<CelebrityField, number> {
  const allCelebs = getAllCelebrities(locale);
  const stats: Record<CelebrityField, number> = {
    politics: 0,
    business: 0,
    arts: 0,
    sports: 0,
    science: 0,
    entertainment: 0,
    literature: 0
  };
  allCelebs.forEach(c => {
    stats[c.field]++;
  });
  return stats;
}

// Export fieldStats for backward compatibility (Korean)
export const fieldStats: Record<CelebrityField, number> = getFieldStats('ko');

// Export allCelebrities for backward compatibility (Korean)
export const allCelebrities = getAllCelebrities('ko');

// Export celebrityGroups for backward compatibility (Korean)
export const celebrityGroups = getCelebrityGroups('ko');
