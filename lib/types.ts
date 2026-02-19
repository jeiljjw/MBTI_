// MBTI Personality Test Types
// Main type definitions - re-exporting from lib/types/test.ts

export type {
  MBTIType,
  MBTIDimension,
  TestState,
  Question,
  Answer,
  MBTIResult
} from './types/test';

// Legacy type aliases for backward compatibility
export type PersonalityDimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export type PersonalityType = 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP' |
                              'INFJ' | 'INFP' | 'ENFJ' | 'ENFP' |
                              'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ' |
                              'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

// Legacy interfaces (kept for compatibility with existing code)
export interface AnswerOption {
  id: string;
  text: string;
  score: number;
}

export interface UserAnswer {
  questionId: number;
  selectedOptionId: string;
  score: number;
  dimension: PersonalityDimension;
}

export interface DimensionScore {
  dimension: PersonalityDimension;
  score: number;
}

export interface PersonalityResult {
  type: PersonalityType;
  dimensions: Record<PersonalityDimension, 'primary' | 'secondary'>;
  scores: Record<string, number>;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: string[];
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
