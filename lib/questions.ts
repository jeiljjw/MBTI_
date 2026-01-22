import type { MBTIDimension } from './types/test';

export interface Question {
  id: number;
  question: string;
  trait: MBTIDimension;
  direction: number;
}

export const questions: Question[] = [
  // E/I Questions (5개)
  {
    id: 1,
    question: "주말에 자유 시간이 생기면 친구들과 만나서 노는 것을 선호한다.",
    trait: "E" as MBTIDimension,
    direction: 1
  },
  {
    id: 2,
    question: "새로운 사람들에게 먼저 말을 거는 것이 어렵지 않다.",
    trait: "E" as MBTIDimension,
    direction: 1
  },
  {
    id: 3,
    question: "대화할 때 리액션보다는 주로 이야기를 주도하는 편이다.",
    trait: "E" as MBTIDimension,
    direction: 1
  },
  {
    id: 4,
    question: "파티나 모임에서 많은 사람들과 어울리는 것을 즐긴다.",
    trait: "E" as MBTIDimension,
    direction: 1
  },
  {
    id: 5,
    question: "혼자 있는 시간보다 사람들과 함께 있는 시간을 더 선호한다.",
    trait: "E" as MBTIDimension,
    direction: 1
  },

  // S/N Questions (5개)
  {
    id: 6,
    question: "영화나 책을 볼 때 숨겨진 의미나 상징을 찾는 것을 즐긴다.",
    trait: "N",
    direction: 1
  },
  {
    id: 7,
    question: "일을 처리할 때 검증된 방식보다는 새로운 아이디어를 시도하는 편이다.",
    trait: "N",
    direction: 1
  },
  {
    id: 8,
    question: "미래의 가능성보다는 현재의 사실에 더 관심이 많다.",
    trait: "S",
    direction: 1
  },
  {
    id: 9,
    question: "상상력보다는 실제 경험을 더 중요시 여긴다.",
    trait: "S",
    direction: 1
  },
  {
    id: 10,
    question: "추상적인 개념보다는 구체적인 세부사항에 집중하는 편이다.",
    trait: "S",
    direction: 1
  },

  // T/F Questions (5개)
  {
    id: 11,
    question: "친구가 고민을 말할 때 해결책보다는 공감을 먼저 해준다.",
    trait: "F",
    direction: 1
  },
  {
    id: 12,
    question: "의사결정을 할 때 논리적 사실보다 사람들의 감정을 더 고려한다.",
    trait: "F",
    direction: 1
  },
  {
    id: 13,
    question: "다른 사람의 실수에 대해 직설적으로 지적하기보다 감싸주는 편이다.",
    trait: "F",
    direction: 1
  },
  {
    id: 14,
    question: "논리적 분석보다는 사람들의 감정에 더 민감하게 반응한다.",
    trait: "F",
    direction: 1
  },
  {
    id: 15,
    question: "갈등 상황에서 화해와 조화를 유지하는 것이 더 중요하다.",
    trait: "F",
    direction: 1
  },

  // J/P Questions (5개)
  {
    id: 16,
    question: "여행을 갈 때 구체적인 일정을 미리 계획하는 것을 좋아한다.",
    trait: "J",
    direction: 1
  },
  {
    id: 17,
    question: "할 일 목록을 만들고 체계적으로 처리하는 것을 선호한다.",
    trait: "J",
    direction: 1
  },
  {
    id: 18,
    question: "마감 기한을 엄수하고 계획대로 일을 진행하는 편이다.",
    trait: "J",
    direction: 1
  },
  {
    id: 19,
    question: "계획은 언제든 변경될 수 있으므로 유동적으로 두는 것이 좋다.",
    trait: "P",
    direction: 1
  },
  {
    id: 20,
    question: "방이나 책상이 어질러져 있어도 크게 신경 쓰지 않는다.",
    trait: "P",
    direction: 1
  },

  // I Questions (5개) - Introversion traits
  {
    id: 21,
    question: "주말에 자유 시간이 생기면 혼자 조용히 시간을 보내는 것을 선호한다.",
    trait: "I",
    direction: 1
  },
  {
    id: 22,
    question: "새로운 사람들에게 먼저 말을 거는 것이 어렵고 부담스럽다.",
    trait: "I",
    direction: 1
  },
  {
    id: 23,
    question: "대화할 때 주로 리액션을 하면서 경청하는 편이다.",
    trait: "I",
    direction: 1
  },
  {
    id: 24,
    question: "파티나 모임에서 많은 사람들과 어울리기보다 조용히 한쪽에 있는 것을 더 편안하게 느낀다.",
    trait: "I",
    direction: 1
  },
  {
    id: 25,
    question: "사람들과 함께 있는 시간보다 혼자 있는 시간이 더 충족감을 준다.",
    trait: "I",
    direction: 1
  },

  // T Questions (5개) - Thinking traits
  {
    id: 26,
    question: "친구가 고민을 말할 때 해결책을 먼저 제시해주는 편이다.",
    trait: "T",
    direction: 1
  },
  {
    id: 27,
    question: "의사결정을 할 때 논리적 사실이 감정적 고려보다 더 중요하다.",
    trait: "T",
    direction: 1
  },
  {
    id: 28,
    question: "다른 사람의 실수에 대해 논리적으로 지적하고 개선점을 찾는 것을 선호한다.",
    trait: "T",
    direction: 1
  },
  {
    id: 29,
    question: "갈등 상황에서 누가 옳고 그른지를 객관적으로 판단하는 것을 선호한다.",
    trait: "T",
    direction: 1
  },
  {
    id: 30,
    question: "감정적으로 판단하기보다 논리적으로 분석한 후 결론을 내리는 편이다.",
    trait: "T",
    direction: 1
  },

  // N Questions (2개) - Intuition traits (to balance S/N)
  {
    id: 31,
    question: "현재 상황에 안주하기보다 미래에 있을 수 있는 가능성을 먼저 상상한다.",
    trait: "N",
    direction: 1
  },
  {
    id: 32,
    question: "정답이 하나로 정해지는 것보다 다양한 해석이 가능한 것이 더 재미있다.",
    trait: "N",
    direction: 1
  },

  // P Question (1개) - Perceiving trait (to balance J/P)
  {
    id: 33,
    question: "일이 어떻게 될지 모르니까 미리 너무 많이 계획하는 것은 의미가 없다.",
    trait: "P",
    direction: 1
  },

  // S Questions (2개) - Sensing traits (to balance S/N)
  {
    id: 34,
    question: "실제 경험하지 않은 정보보다 직접 겪어본 경험을 더 신뢰한다.",
    trait: "S",
    direction: 1
  },
  {
    id: 35,
    question: "구체적인 지시와 명확한 절차가 있는 것이 효율적으로 느껴진다.",
    trait: "S",
    direction: 1
  },

  // N Question (1개) - Intuition trait (to balance S/N)
  {
    id: 36,
    question: "전체적인 그림과 큰 흐름을 먼저 파악하는 것을 선호한다.",
    trait: "N",
    direction: 1
  },

  // J Questions (2개) - Judging traits (to balance J/P)
  {
    id: 37,
    question: "미리 정해진 계획대로 일이 진행될 때 마음이 편하다.",
    trait: "J",
    direction: 1
  },
  {
    id: 38,
    question: "일을 끝내고 나서 남는 시간보다는 미리 완벽하게 준비하는 것을 더 선호한다.",
    trait: "J",
    direction: 1
  },

  // P Questions (2개) - Perceiving traits (to balance J/P)
  {
    id: 39,
    question: "계획을 짜는 것보다 그때그때 상황에 맞춰 유동적으로 대처하는 것이 더 자유롭다.",
    trait: "P",
    direction: 1
  },
  {
    id: 40,
    question: "마감일이 다가왔을 때 압박감을 느끼기보다는 밤새 몰아서 처리하는 것을 더 즐긴다.",
    trait: "P",
    direction: 1
  }
];