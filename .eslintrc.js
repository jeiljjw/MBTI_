module.exports = {
  extends: [
    'next/core-web-vitals',
    'next/typescript'
  ],
  rules: {
    // 추가 규칙들
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/no-unescaped-entities': 'warn'
  }
}