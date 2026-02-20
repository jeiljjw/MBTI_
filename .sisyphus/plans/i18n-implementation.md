# MBTI 웹사이트 다국어(i18n) 구현 계획

## Context

### Original Request
전체 웹사이트를 영어 버전으로도 볼 수 있게 다국어 지원 구현

### Technical Stack
- Next.js 16.1.4 App Router
- next-intl (선택됨)
- SSG (Static Site Generation)
- TypeScript

### Scope
- 지원 언어: 한국어(ko), 영어(en)
- 라우팅: 서브패스 (`/ko/...`, `/en/...`)

---

## Work Objectives

### Core Objective
MBTI 테스트 웹사이트를 한국어와 영어 모두 지원하도록 다국어 시스템 구축

### Concrete Deliverables
1. next-intl 라이브러리 설정 및 미들웨어 구현
2. [locale] 다이나믹 라우트 구조로 페이지 이동
3. 번역 파일 생성 (messages/ko.json, messages/en.json)
4. 모든 페이지와 컴포넌트 다국어화
5. SEO 메타데이터 다국어화

### Definition of Done
- [ ] `/ko/test`와 `/en/test` 모두 정상 작동
- [ ] 언어 전환 기능 구현
- [ ] 모든 텍스트가 번역됨
- [ ] `npm run build` 성공
- [ ] 정적 페이지가 언어별로 생성됨

---

## Task Flow

```
Task 1 → Task 2 → Task 3 → Task 4 → Task 5
                ↘ Task 6 (병렬)
```

---

## TODOs

### Phase 1: 라이브러리 설정

- [ ] 1. next-intl 설치 및 기본 설정

  **What to do**:
  - `npm install next-intl`
  - `src/i18n/routing.ts` 생성 (locales: ['ko', 'en'], defaultLocale: 'ko')
  - `src/i18n/request.ts` 생성
  - `src/proxy.ts` 생성 (미들웨어)

  **Must NOT do**:
  - 기존 app/ 폴더 구조 변경하지 말 것 (이 단계에서는)

  **Parallelizable**: NO

  **References**:
  - next-intl 공식: https://next-intl.dev/docs/getting-started/app-router
  - Next.js i18n: https://nextjs.org/docs/app/guides/internationalization

  **Acceptance Criteria**:
  - [ ] next-intl 패키지 설치됨
  - [ ] src/i18n/routing.ts 파일 존재
  - [ ] src/i18n/request.ts 파일 존재
  - [ ] src/proxy.ts 파일 존재
  - [ ] `npm run build` 성공

---

### Phase 2: 디렉토리 구조 변경

- [ ] 2. app/[locale] 구조로 페이지 이동

  **What to do**:
  - app/ 하위 모든 페이지를 app/[locale]/ 하위로 이동
  - app/[locale]/layout.tsx 생성 (로케일 처리)
  - 기존 app/layout.tsx는 최상위 리다이렉트용으로 유지
  - generateStaticParams 추가
  - setRequestLocale 호출 추가

  **Must NOT do**:
  - 파일 내용 수정하지 말 것 (구조 변경만)

  **Parallelizable**: NO (depends on Task 1)

  **References**:
  - 기존 app/layout.tsx: 로케일 처리 참고

  **Acceptance Criteria**:
  - [ ] app/[locale]/layout.tsx 존재
  - [ ] app/[locale]/page.tsx 존재
  - [ ] app/[locale]/test/page.tsx 존재
  - [ ] app/[locale]/types/page.tsx 존재
  - [ ] app/[locale]/blog/page.tsx 존재
  - [ ] 기타 모든 페이지 이동됨
  - [ ] `npm run build` 성공

---

- [ ] 3. generateStaticParams 및 setRequestLocale 추가

  **What to do**:
  - app/[locale]/layout.tsx에 generateStaticParams 추가
  - 모든 페이지 컴포넌트에 setRequestLocale 호출 추가
  - params 타입 수정

  **Parallelizable**: NO (depends on Task 2)

  **Acceptance Criteria**:
  - [ ] layout에 generateStaticParams 존재
  - [ ] 각 페이지에 setRequestLocale 호출
  - [ ] `npm run build` 성공
  - [ ] 정적 페이지 ko/en 2개씩 생성됨

---

### Phase 3: 번역 파일 생성

- [ ] 4. 번역 파일 구조 생성 및 UI 텍스트 번역

  **What to do**:
  - messages/ko.json 생성 (한국어)
  - messages/en.json 생성 (영어)
  - Navbar, Footer 텍스트 번역
  - 홈페이지 텍스트 번역
  - 테스트 페이지 UI 텍스트 번역

  **Parallelizable**: YES (with Task 5)

  **Acceptance Criteria**:
  - [ ] messages/ko.json 존재
  - [ ] messages/en.json 존재
  - [ ] Navbar 영어 버전 표시됨
  - [ ] Footer 영어 버전 표시됨

---

- [ ] 5. 데이터 파일 번역 (questions, descriptions)

  **What to do**:
  - lib/questions.ts를 다국어 구조로 변경
  - lib/mbti-descriptions.ts를 다국어 구조로 변경
  - 영어 번역 데이터 추가

  **Parallelizable**: YES (with Task 4)

  **Acceptance Criteria**:
  - [ ] 40개 테스트 문항 영어 번역됨
  - [ ] 16개 유형 설명 영어 번역됨
  - [ ] `/en/test`에서 영어 문항 표시됨

---

### Phase 4: 컴포넌트 다국어화

- [ ] 6. UI 컴포넌트 useTranslations 적용

  **What to do**:
  - components/navbar.tsx에 useTranslations 적용
  - components/footer.tsx에 useTranslations 적용
  - components/test/* 컴포넌트에 useTranslations 적용
  - 기타 컴포넌트 다국어화

  **Must NOT do**:
  - 번역 키를 임의로 생성하지 말고 messages/*.json과 일치시킬 것

  **Parallelizable**: NO (depends on Task 4)

  **Acceptance Criteria**:
  - [ ] Navbar 언어 전환 시 텍스트 변경됨
  - [ ] Footer 언어 전환 시 텍스트 변경됨
  - [ ] 테스트 결과 카드 다국어 표시됨

---

### Phase 5: 상세 데이터 번역

- [ ] 7. mbti-detailed.ts 다국어화

  **What to do**:
  - lib/mbti-detailed.ts를 다국어 구조로 변경
  - 16유형 상세 정보 영어 번역
  - characteristics, cognitiveFunctions, strengths, weaknesses 등

  **Parallelizable**: YES (with Task 8)

  **Acceptance Criteria**:
  - [ ] 16유형 상세 페이지 영어 버전 작동
  - [ ] `/en/types/INTJ` 등 접근 가능

---

- [ ] 8. celebrities.ts 다국어화

  **What to do**:
  - lib/celebrities.ts를 다국어 구조로 변경
  - 유명인 이름, 설명 영어 번역

  **Parallelizable**: YES (with Task 7)

  **Acceptance Criteria**:
  - [ ] 유명인 페이지 영어 버전 작동
  - [ ] `/en/celebrities` 접근 가능

---

### Phase 6: SEO 및 마무리

- [ ] 9. SEO 메타데이터 다국어화

  **What to do**:
  - generateMetadata에 locale 파라미터 적용
  - sitemap.xml 다국어화
  - robots.txt 업데이트
  - hreflang 태그 확인

  **Parallelizable**: NO (depends on all previous)

  **Acceptance Criteria**:
  - [ ] 각 페이지의 title, description 다국어 적용
  - [ ] sitemap.xml에 ko/en 경로 포함
  - [ ] hreflang 태그 자동 생성됨

---

- [ ] 10. 최종 테스트 및 검증

  **What to do**:
  - `npm run build` 실행
  - `/ko/*` 경로 테스트
  - `/en/*` 경로 테스트
  - 언어 전환 기능 테스트
  - SEO 태그 검증

  **Acceptance Criteria**:
  - [ ] `npm run build` 성공
  - [ ] `/ko/test` 정상 작동
  - [ ] `/en/test` 정상 작동
  - [ ] 언어 전환 버튼 작동
  - [ ] 모든 텍스트 번역됨

---

## Commit Strategy

| After Task | Message | Files |
|------------|---------|-------|
| 1 | `feat(i18n): add next-intl setup and middleware` | src/i18n/*, src/proxy.ts, package.json |
| 2-3 | `feat(i18n): migrate pages to [locale] structure` | app/**/* |
| 4-5 | `feat(i18n): add translation files and data` | messages/*, lib/* |
| 6 | `feat(i18n): apply translations to components` | components/* |
| 7-8 | `feat(i18n): translate detailed MBTI data` | lib/* |
| 9-10 | `feat(i18n): SEO and final i18n setup` | sitemap.xml, robots.txt, app/* |

---

## Success Criteria

### Verification Commands
```bash
npm run build  # Expected: 성공, ko/en 정적 페이지 생성
npm run dev    # Expected: localhost:3000 접속 시 /ko로 리다이렉트
```

### Final Checklist
- [ ] `/ko/test` - 한국어 테스트 작동
- [ ] `/en/test` - 영어 테스트 작동
- [ ] `/ko/types/INTJ` - 한국어 유형 상세 작동
- [ ] `/en/types/INTJ` - 영어 유형 상세 작동
- [ ] 언어 전환 UI 작동
- [ ] SEO 메타데이터 다국어 적용
