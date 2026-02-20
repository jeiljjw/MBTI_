import type { MBTIDimension, Question } from './types/test';
import { bilingualQuestions, getQuestions, questionsKo, questionsEn } from './i18n/questions';

// Re-export bilingual questions and helper functions
export { bilingualQuestions, getQuestions, questionsKo, questionsEn };

// Default export for backward compatibility (Korean)
export const questions: Question[] = questionsKo;

// Export types
export type { BilingualQuestion } from './i18n/questions';
