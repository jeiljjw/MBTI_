# 🌍 다국어 지원 (Internationalization) 가이드

## 현재 지원 언어

- 🇰🇷 **한국어 (ko)** - 기본 언어
- 🇺🇸 **영어 (en)**

## 🔄 자동 언어 감지 시스템

### 사용자가 웹사이트에 접속하는 방법

#### 1. 루트 URL 접속 (`www.simplembti.com`)

**자동 리다이렉트 순서:**

```
1단계: Accept-Language 헤더 확인
   ↓
브라우저 언어가 한국어? → /ko로 리다이렉트
브라우저 언어가 영어? → /en으로 리다이렉트
   ↓
2단계: 쿠키 확인 (이전 방문 기록)
   ↓
NEXT_LOCALE=ko 쿠키 있음? → /ko로 리다이렉트
NEXT_LOCALE=en 쿠키 있음? → /en으로 리다이렉트
   ↓
3단계: 기본 언어 사용
   ↓
/ko로 리다이렉트 (defaultLocale)
```

### 실제 사용자 시나리오

#### 🇰🇷 한국 사용자
```
브라우저 설정: 한국어 (ko-KR, ko)
www.simplembti.com 접속
    ↓
자동으로 www.simplembti.com/ko 리다이렉트
    ↓
한국어 버전 표시
```

#### 🇺🇸 미국 사용자
```
브라우저 설정: 영어 (en-US, en)
www.simplembti.com 접속
    ↓
자동으로 www.simplembti.com/en 리다이렉트
    ↓
영어 버전 표시
```

#### 🇯🇵 일본 사용자 (지원하지 않는 언어)
```
브라우저 설정: 일본어 (ja-JP)
www.simplembti.com 접속
    ↓
지원하지 않는 언어 → 기본 언어 사용
    ↓
www.simplembti.com/ko 리다이렉트
    ↓
한국어 버전 표시 (navbar에서 영어로 변경 가능)
```

## 🔗 URL 구조

### 모든 페이지는 언어 prefix 포함

```
✅ www.simplembti.com/ko          → 한국어 홈
✅ www.simplembti.com/en          → 영어 홈
✅ www.simplembti.com/ko/test     → 한국어 테스트
✅ www.simplembti.com/en/test     → 영어 테스트
✅ www.simplembti.com/ko/types    → 한국어 유형 목록
✅ www.simplembti.com/en/types    → 영어 유형 목록

❌ www.simplembti.com/test        → 자동 리다이렉트 (/ko/test 또는 /en/test)
```

### 직접 URL 접속

사용자가 직접 특정 언어 URL을 입력하면 해당 언어로 표시:

```
www.simplembti.com/ko → 항상 한국어
www.simplembti.com/en → 항상 영어
```

## 🍪 쿠키 기반 언어 기억

### 첫 방문
```
1. 브라우저 언어 감지 → /ko 또는 /en
2. NEXT_LOCALE 쿠키 저장
```

### 재방문
```
1. NEXT_LOCALE 쿠키 확인
2. 쿠키의 언어로 자동 리다이렉트
```

### 언어 변경
```
Navbar에서 언어 전환 버튼 클릭
    ↓
/ko ↔ /en 전환
    ↓
NEXT_LOCALE 쿠키 업데이트
    ↓
다음 방문 시 변경된 언어로 자동 접속
```

## 🔍 SEO 최적화

### 검색 엔진별 표시

#### Google Korea (google.co.kr)
```
검색 결과: www.simplembti.com/ko
사용자 클릭 → 한국어 버전 표시
```

#### Google US (google.com)
```
검색 결과: www.simplembti.com/en
사용자 클릭 → 영어 버전 표시
```

### hreflang 태그 (자동 생성됨)

```html
<!-- 각 페이지의 <head>에 자동 추가 -->
<link rel="alternate" hreflang="ko" href="https://www.simplembti.com/ko" />
<link rel="alternate" hreflang="en" href="https://www.simplembti.com/en" />
<link rel="alternate" hreflang="x-default" href="https://www.simplembti.com/ko" />
```

**효과:**
- Google이 사용자 언어에 맞는 버전 표시
- 중복 콘텐츠 문제 방지
- 국제 SEO 최적화

### Sitemap 구조

```xml
<!-- sitemap.xml -->
<url>
  <loc>https://www.simplembti.com/ko</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://www.simplembti.com/en"/>
</url>
<url>
  <loc>https://www.simplembti.com/en</loc>
  <xhtml:link rel="alternate" hreflang="ko" href="https://www.simplembti.com/ko"/>
</url>
```

## 🧪 테스트 방법

### 로컬 개발 환경

#### 1. 기본 테스트
```bash
npm run dev
# 브라우저에서 http://localhost:3000 접속
# → /ko 또는 /en으로 자동 리다이렉트 확인
```

#### 2. 브라우저 언어 변경 테스트

**Chrome:**
```
1. 설정 (chrome://settings/languages)
2. 언어 > 언어 추가
3. 영어를 최상단으로 이동
4. Chrome 재시작
5. localhost:3000 접속 → /en으로 리다이렉트 확인

6. 한국어를 최상단으로 이동
7. Chrome 재시작
8. localhost:3000 접속 → /ko로 리다이렉트 확인
```

**Firefox:**
```
1. 설정 > 일반 > 언어
2. 언어 선택 > 영어 추가 및 최상단 이동
3. Firefox 재시작
4. localhost:3000 접속 → /en으로 리다이렉트 확인
```

#### 3. 쿠키 테스트
```
1. 개발자 도구 (F12) > Application > Cookies
2. NEXT_LOCALE 쿠키 확인
3. 쿠키 값 변경 (ko ↔ en)
4. 페이지 새로고침
5. 변경된 언어로 표시 확인
```

#### 4. 직접 URL 테스트
```
http://localhost:3000/ko → 한국어 강제
http://localhost:3000/en → 영어 강제
http://localhost:3000/ko/test → 한국어 테스트
http://localhost:3000/en/test → 영어 테스트
```

### 프로덕션 환경

```bash
# 프로덕션 빌드
npm run build
npm run start

# 브라우저에서 테스트
http://localhost:3000 → 자동 리다이렉트 확인
```

## ⚙️ 설정 파일

### 1. proxy.ts (Middleware)
```typescript
// 자동 언어 감지 및 리다이렉트
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);
```

### 2. src/i18n/routing.ts
```typescript
export const routing = defineRouting({
  locales: ['ko', 'en'],        // 지원 언어
  defaultLocale: 'ko',          // 기본 언어
  localePrefix: 'always',       // URL에 항상 언어 prefix 포함
});
```

### 3. 번역 파일
```
messages/
  ├── ko.json  → 한국어 번역
  └── en.json  → 영어 번역
```

## 🌐 브라우저 언어 감지 로직

### Accept-Language 헤더 예시

```
Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
                 ↑ 우선순위 1 (한국어)
                              ↑ 우선순위 2 (영어)

→ 결과: /ko로 리다이렉트
```

```
Accept-Language: en-US,en;q=0.9,ko;q=0.8
                 ↑ 우선순위 1 (영어)
                              ↑ 우선순위 2 (한국어)

→ 결과: /en으로 리다이렉트
```

## 📱 모바일 환경

### iOS Safari
```
설정 > 일반 > 언어 및 지역 > 기본 언어
→ 한국어 선택 시 /ko
→ 영어 선택 시 /en
```

### Android Chrome
```
설정 > 언어 > 언어 추가
→ 우선순위 1번 언어로 자동 감지
```

## 🚀 배포 후 확인사항

### 체크리스트

- [ ] www.simplembti.com → 자동 리다이렉트 작동
- [ ] www.simplembti.com/ko → 한국어 표시
- [ ] www.simplembti.com/en → 영어 표시
- [ ] Navbar 언어 전환 버튼 작동
- [ ] 쿠키 저장 및 기억 기능 작동
- [ ] Google Search Console에서 hreflang 확인
- [ ] 각 언어별 sitemap 제출

### Google Search Console 설정

```
1. 두 버전 모두 등록
   - https://www.simplembti.com/ko
   - https://www.simplembti.com/en

2. Sitemap 제출
   - https://www.simplembti.com/sitemap.xml

3. hreflang 태그 확인
   - 국제 타겟팅 > 언어 태그
```

## 💡 추가 언어 지원 방법

새로운 언어를 추가하려면:

### 1. routing.ts 수정
```typescript
export const routing = defineRouting({
  locales: ['ko', 'en', 'ja'],  // 일본어 추가
  defaultLocale: 'ko',
  localePrefix: 'always',
});
```

### 2. 번역 파일 추가
```
messages/
  ├── ko.json
  ├── en.json
  └── ja.json  ← 새로 추가
```

### 3. 타입 업데이트
```typescript
type Locale = 'ko' | 'en' | 'ja';
```

### 4. 빌드 및 테스트
```bash
npm run build
npm run start
```

## 📚 참고 자료

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [Google Search Central - International SEO](https://developers.google.com/search/docs/specialty/international)
