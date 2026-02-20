import type { MBTIDimension, Question } from '../types/test';

export interface BilingualQuestion {
  id: number;
  question: {
    ko: string;
    en: string;
  };
  trait: MBTIDimension;
  direction: number;
}

export const bilingualQuestions: BilingualQuestion[] = [
  // E/I Questions (5개)
  {
    id: 1,
    question: {
      ko: "주말에 자유 시간이 생기면 친구들과 만나서 노는 것을 선호한다.",
      en: "I prefer to hang out with friends on weekends when I have free time."
    },
    trait: "E" as MBTIDimension,
    direction: 1
  },
  {
    id: 2,
    question: {
      ko: "새로운 사람들에게 먼저 말을 거는 것이 흥미롭고 즐겁다.",
      en: "I find it interesting and enjoyable to approach new people first."
    },
    trait: "E" as MBTIDimension,
    direction: 1
  },
  {
    id: 3,
    question: {
      ko: "대화할 때 리액션보다는 주로 이야기를 주도하는 편이다.",
      en: "In conversations, I tend to lead the discussion rather than just react."
    },
    trait: "E" as MBTIDimension,
    direction: 1
  },
  {
    id: 4,
    question: {
      ko: "파티나 모임에서 많은 사람들과 어울리는 것을 즐긴다.",
      en: "I enjoy mingling with many people at parties or gatherings."
    },
    trait: "E" as MBTIDimension,
    direction: 1
  },
  {
    id: 5,
    question: {
      ko: "혼자 있는 시간보다 여러 사람들과 함께 있는 시간을 더 선호한다.",
      en: "I prefer spending time with others rather than being alone."
    },
    trait: "E" as MBTIDimension,
    direction: 1
  },

  // S/N Questions (5개)
  {
    id: 6,
    question: {
      ko: "영화나 책을 볼 때 숨겨진 의미나 상징을 찾는 것을 즐긴다.",
      en: "I enjoy finding hidden meanings or symbols when watching movies or reading books."
    },
    trait: "N",
    direction: 1
  },
  {
    id: 7,
    question: {
      ko: "일을 처리할 때 검증된 방식보다는 새로운 아이디어를 시도하는 편이다.",
      en: "When getting things done, I prefer trying new ideas over proven methods."
    },
    trait: "N",
    direction: 1
  },
  {
    id: 8,
    question: {
      ko: "미래의 가능성보다는 현재의 사실에 더 관심이 많다.",
      en: "I am more interested in current facts than future possibilities."
    },
    trait: "S",
    direction: 1
  },
  {
    id: 9,
    question: {
      ko: "상상력보다는 실제 경험을 더 중요시 여긴다.",
      en: "I value actual experience more than imagination."
    },
    trait: "S",
    direction: 1
  },
  {
    id: 10,
    question: {
      ko: "추상적인 개념보다는 구체적인 세부사항에 집중하는 편이다.",
      en: "I tend to focus on concrete details rather than abstract concepts."
    },
    trait: "S",
    direction: 1
  },

  // T/F Questions (5개)
  {
    id: 11,
    question: {
      ko: "친구가 고민을 말할 때 해결책보다는 공감을 먼저 해준다.",
      en: "When a friend shares their concerns, I offer empathy before solutions."
    },
    trait: "F",
    direction: 1
  },
  {
    id: 12,
    question: {
      ko: "의사결정을 할 때 논리적인 사실보다 사람들의 감정을 더 고려한다.",
      en: "When making decisions, I consider people's feelings more than logical facts."
    },
    trait: "F",
    direction: 1
  },
  {
    id: 13,
    question: {
      ko: "다른 사람의 실수에 대해 직설적으로 지적하기보다 감싸주는 편이다.",
      en: "I tend to be understanding rather than directly pointing out others' mistakes."
    },
    trait: "F",
    direction: 1
  },
  {
    id: 14,
    question: {
      ko: "논리적 분석보다는 사람들의 감정에 더 민감하게 반응한다.",
      en: "I respond more sensitively to people's emotions than to logical analysis."
    },
    trait: "F",
    direction: 1
  },
  {
    id: 15,
    question: {
      ko: "동료와의 갈등 중인 상황에서 업무 성과보다 팀 내 화해/조화가 더 중요하다.",
      en: "In conflicts with colleagues, team harmony is more important than work performance."
    },
    trait: "F",
    direction: 1
  },

  // J/P Questions (5개)
  {
    id: 16,
    question: {
      ko: "여행을 갈 때 구체적인 일정을 미리 계획하는 것을 좋아한다.",
      en: "I like to plan a detailed itinerary in advance when traveling."
    },
    trait: "J",
    direction: 1
  },
  {
    id: 17,
    question: {
      ko: "할 일 목록을 만들고 체계적으로 처리하는 것을 선호한다.",
      en: "I prefer making to-do lists and working through them systematically."
    },
    trait: "J",
    direction: 1
  },
  {
    id: 18,
    question: {
      ko: "마감 기한을 엄수하고 계획대로 일을 진행하는 편이다.",
      en: "I tend to meet deadlines and proceed according to plan."
    },
    trait: "J",
    direction: 1
  },
  {
    id: 19,
    question: {
      ko: "계획은 언제든 변경될 수 있으므로 유동적으로 두는 것이 좋다.",
      en: "Plans can change anytime, so it's better to keep them flexible."
    },
    trait: "P",
    direction: 1
  },
  {
    id: 20,
    question: {
      ko: "방이나 책상이 어질러져 있어도 크게 신경 쓰지 않는다.",
      en: "I don't really mind if my room or desk is messy."
    },
    trait: "P",
    direction: 1
  },

  // I Questions (5개) - Introversion traits
  {
    id: 21,
    question: {
      ko: "주말에 자유 시간이 생기면 혼자 조용히 시간을 보내는 것을 선호한다.",
      en: "I prefer spending free time on weekends quietly by myself."
    },
    trait: "I",
    direction: 1
  },
  {
    id: 22,
    question: {
      ko: "새로운 사람들에게 먼저 말을 거는 것이 어렵고 부담스럽다.",
      en: "I find it difficult and burdensome to approach new people first."
    },
    trait: "I",
    direction: 1
  },
  {
    id: 23,
    question: {
      ko: "대화할 때 주로 상대의 말에 리액션을 하면서 경청하는 편이다.",
      en: "In conversations, I tend to listen and react to what others say."
    },
    trait: "I",
    direction: 1
  },
  {
    id: 24,
    question: {
      ko: "파티나 모임에서 많은 사람들과 어울리기보다 조용한 곳에 있는 것을 더 편안하게 느낀다.",
      en: "At parties or gatherings, I feel more comfortable in a quiet spot than mingling with many people."
    },
    trait: "I",
    direction: 1
  },
  {
    id: 25,
    question: {
      ko: "사람들과 함께 있는 시간보다 혼자 있는 시간이 더 충족감을 준다.",
      en: "Time alone gives me more satisfaction than time with others."
    },
    trait: "I",
    direction: 1
  },

  // T Questions (5개) - Thinking traits
  {
    id: 26,
    question: {
      ko: "친구가 고민을 말할 때 해결책을 먼저 제시해주는 편이다.",
      en: "When a friend shares their concerns, I tend to offer solutions first."
    },
    trait: "T",
    direction: 1
  },
  {
    id: 27,
    question: {
      ko: "의사결정을 할 때 감정적으로 고려하기 보다 논리적으로 판단한다.",
      en: "When making decisions, I judge logically rather than emotionally."
    },
    trait: "T",
    direction: 1
  },
  {
    id: 28,
    question: {
      ko: "다른 사람의 실수에 대해 논리적으로 지적하고 개선점을 찾는 것을 선호한다.",
      en: "I prefer to logically point out others' mistakes and find areas for improvement."
    },
    trait: "T",
    direction: 1
  },
  {
    id: 29,
    question: {
      ko: "갈등 상황에서 누가 옳고 그른지를 객관적으로 판단하는 것을 선호한다.",
      en: "In conflicts, I prefer to objectively judge who is right and wrong."
    },
    trait: "T",
    direction: 1
  },
  {
    id: 30,
    question: {
      ko: "감정적으로 판단하기보다 논리적으로 분석한 후 결론을 내리는 편이다.",
      en: "I tend to reach conclusions after logical analysis rather than emotional judgment."
    },
    trait: "T",
    direction: 1
  },

  // N Questions (2개) - Intuition traits (to balance S/N)
  {
    id: 31,
    question: {
      ko: "현재 상황에 안주하기보다 미래에 있을 수 있는 가능성을 먼저 상상한다.",
      en: "Rather than settling for the present, I first imagine future possibilities."
    },
    trait: "N",
    direction: 1
  },
  {
    id: 32,
    question: {
      ko: "정답이 하나로 정해지는 것보다 다양한 해석이 가능한 것이 더 재미있다.",
      en: "I find it more interesting when multiple interpretations are possible rather than a single correct answer."
    },
    trait: "N",
    direction: 1
  },

  // P Question (1개) - Perceiving trait (to balance J/P)
  {
    id: 33,
    question: {
      ko: "일이 어떻게 될지 모르니까 미리 너무 많이 계획하는 것은 의미가 없다.",
      en: "Since things are unpredictable, there's no point in planning too much in advance."
    },
    trait: "P",
    direction: 1
  },

  // S Questions (2개) - Sensing traits (to balance S/N)
  {
    id: 34,
    question: {
      ko: "내가 실제로 직접 보고 들은 것만 신뢰할 수 있다.",
      en: "I only trust what I have actually seen and heard myself."
    },
    trait: "S",
    direction: 1
  },
  {
    id: 35,
    question: {
      ko: "구체적인 지시와 명확한 절차가 있는 것이 효율적으로 느껴진다.",
      en: "I feel more efficient with specific instructions and clear procedures."
    },
    trait: "S",
    direction: 1
  },

  // N Question (1개) - Intuition trait (to balance S/N)
  {
    id: 36,
    question: {
      ko: "전체적인 그림과 큰 흐름을 먼저 파악하는 것을 선호한다.",
      en: "I prefer to grasp the big picture and overall flow first."
    },
    trait: "N",
    direction: 1
  },

  // J Questions (2개) - Judging traits (to balance J/P)
  {
    id: 37,
    question: {
      ko: "미리 정해진 계획대로 일이 진행될 때 마음이 편하다.",
      en: "I feel at ease when things proceed according to a predetermined plan."
    },
    trait: "J",
    direction: 1
  },
  {
    id: 38,
    question: {
      ko: "일을 일찍 끝내고 남는 시간을 보내는 것보다 천천히 완벽하게 준비하는 것을 더 선호한다.",
      en: "I prefer preparing slowly and perfectly rather than finishing early and having spare time."
    },
    trait: "J",
    direction: 1
  },

  // P Questions (2개) - Perceiving traits (to balance J/P)
  {
    id: 39,
    question: {
      ko: "계획을 짜는 것보다 그때그때 상황에 맞춰 유동적으로 대처하는 것이 더 자유롭다.",
      en: "I feel freer dealing with situations flexibly as they come rather than making plans."
    },
    trait: "P",
    direction: 1
  },
  {
    id: 40,
    question: {
      ko: "마감일이 다가왔을 때 압박감을 느끼기보다는 밤새 몰아서 처리하는 것을 더 즐긴다.",
      en: "When deadlines approach, I enjoy working through the night rather than feeling pressured."
    },
    trait: "P",
    direction: 1
  }
];

// Helper function to get questions by language
export function getQuestions(locale: 'ko' | 'en'): Question[] {
  return bilingualQuestions.map(q => ({
    id: q.id,
    question: q.question[locale],
    trait: q.trait,
    direction: q.direction
  }));
}

// Export questions by language for convenience
export const questionsKo: Question[] = getQuestions('ko');
export const questionsEn: Question[] = getQuestions('en');
