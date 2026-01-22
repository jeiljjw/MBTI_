// MBTI Personality Test Types
export type PersonalityDimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type PersonalityType = 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP' |
                              'INFJ' | 'INFP' | 'ENFJ' | 'ENFP' |
                              'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ' |
                              'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export interface Question {
  id: number;
  text: string;
  dimension: PersonalityDimension;
  options: AnswerOption[];
}

export interface AnswerOption {
  id: string;
  text: string;
  score: number; // Positive for one pole, negative for the other
}

export interface UserAnswer {
  questionId: number;
  selectedOptionId: string;
  score: number;
  dimension: PersonalityDimension;
}

export interface DimensionScore {
  dimension: PersonalityDimension;
  score: number; // Positive = first letter, Negative = second letter
}

export interface PersonalityResult {
  type: PersonalityType;
  dimensions: Record<PersonalityDimension, 'primary' | 'secondary'>;
  scores: Record<string, number>; // Raw scores for each dimension pair
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: string[];
}

export interface TestState {
  currentQuestionIndex: number;
  answers: UserAnswer[];
  isCompleted: boolean;
  result?: PersonalityResult;
}

export interface PersonalityTypeInfo {
  type: PersonalityType;
  name: string;
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  careers: string[];
  famousPeople: string[];
}