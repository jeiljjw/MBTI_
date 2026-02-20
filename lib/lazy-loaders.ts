/**
 * Lazy loaders for large data files
 * This improves initial bundle size by loading data only when needed
 */

// Lazy load MBTI detailed data
export async function loadMBTIDetails(locale: 'ko' | 'en') {
  const { getMBTIDetails } = await import('./i18n/mbti-detailed');
  return getMBTIDetails(locale);
}

// Lazy load celebrities data
export async function loadCelebrityGroups(locale: 'ko' | 'en') {
  const { getCelebrityGroups } = await import('./i18n/celebrities');
  return getCelebrityGroups(locale);
}

// Lazy load all celebrities
export async function loadAllCelebrities(locale: 'ko' | 'en') {
  const { getAllCelebrities } = await import('./i18n/celebrities');
  return getAllCelebrities(locale);
}

// Lazy load questions
export async function loadQuestions(locale: 'ko' | 'en') {
  const { getQuestions } = await import('./i18n/questions');
  return getQuestions(locale);
}
