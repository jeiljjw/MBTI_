export type MBTIType =
  | 'ISTJ' | 'ISFJ' | 'INFJ' | 'INTJ'
  | 'ISTP' | 'ISFP' | 'INFP' | 'INTP'
  | 'ESTP' | 'ESFP' | 'ENFP' | 'ENTP'
  | 'ESTJ' | 'ESFJ' | 'ENFJ' | 'ENTJ';

export type MBTIDimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface TestState {
  currentQuestionIndex: number;
  answers: Record<number, number>;
  shuffledQuestions: Question[];
  isCompleted: boolean;
  result?: MBTIType;
}

export interface Question {
  id: number;
  question: string;
  trait: MBTIDimension;
  direction: number;
}

export interface Answer {
  questionId: number;
  score: number;
}

export interface MBTIResult {
  type: MBTIType;
  description: string;
  scores: Record<MBTIDimension, number>;
}