# 성능 최적화 가이드

이 문서는 MBTI 테스트 애플리케이션에 적용된 성능 최적화 기법들을 설명합니다.

## 📊 적용된 최적화

### 1. 코드 스플리팅 및 동적 임포트

#### 큰 데이터 파일 지연 로딩
```typescript
// lib/lazy-loaders.ts
export async function loadMBTIDetails(locale: 'ko' | 'en') {
  const { getMBTIDetails } = await import('./i18n/mbti-detailed');
  return getMBTIDetails(locale);
}
```

**효과:**
- `mbti-detailed.ts` (105KB) → 필요할 때만 로드
- `celebrities.ts` (95KB) → 필요할 때만 로드
- 초기 번들 크기 약 200KB 감소

#### 컴포넌트 동적 임포트
```typescript
const EnhancedResultCard = dynamic(
  () => import('@/components/test/EnhancedResultCard').then(mod => mod.EnhancedResultCard),
  { ssr: false }
);
```

### 2. 폰트 최적화

#### Before
```typescript
weight: ["100", "300", "400", "500", "700", "900"] // 6개 weight
```

#### After
```typescript
weight: ["400", "500", "700"] // 3개 weight만 사용
display: 'swap',
preload: true,
fallback: ['system-ui', 'arial']
```

**효과:**
- 폰트 파일 크기 50% 감소
- FOUT(Flash of Unstyled Text) 방지
- 폰트 로딩 중 시스템 폰트 표시

### 3. 이미지 최적화

```typescript
// next.config.ts
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  minimumCacheTTL: 60,
}
```

**효과:**
- AVIF/WebP 포맷 자동 변환 (최대 80% 크기 감소)
- 반응형 이미지 자동 생성
- 브라우저 캐싱 최적화

### 4. React 렌더링 최적화

#### React.memo 사용
```typescript
const QuestionCardComponent = ({ question, onAnswer }: QuestionCardProps) => {
  // 컴포넌트 로직
};

export const QuestionCard = React.memo(QuestionCardComponent);
```

**적용된 컴포넌트:**
- `QuestionCard` - 질문이 바뀔 때만 리렌더링
- `ProgressBar` - progress가 바뀔 때만 리렌더링
- `EnhancedResultCard` - 결과가 바뀔 때만 리렌더링

#### useCallback 사용
```typescript
const handleAnswer = useCallback((score: number) => {
  // 로직
}, [currentQuestion]);

const resetTest = useCallback(() => {
  // 로직
}, [questions]);
```

### 5. 번들 최적화

```typescript
experimental: {
  optimizePackageImports: ['framer-motion', 'next-intl'],
}
```

**효과:**
- Tree-shaking 개선
- 사용하지 않는 코드 제거
- 번들 크기 추가 감소

### 6. 캐싱 전략

#### 정적 리소스 캐싱
```typescript
async headers() {
  return [
    {
      source: '/_next/static/(.*)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
      ]
    }
  ];
}
```

#### 서비스 워커 최적화
- HTML/JS/CSS: 네트워크 우선 (항상 최신 버전)
- 이미지/아이콘: 캐시 우선 (빠른 로딩)
- 동적 캐시 버전 관리

### 7. 로딩 상태 최적화

```typescript
if (loading || !detail) {
  return (
    <div className="animate-pulse">
      {/* 스켈레톤 UI */}
    </div>
  );
}
```

**효과:**
- 사용자에게 즉각적인 피드백
- 체감 성능 향상
- CLS(Cumulative Layout Shift) 감소

## 📈 성능 지표

### Core Web Vitals 목표

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### 측정 방법

```bash
# Lighthouse 실행
npm run build
npm run start
# Chrome DevTools > Lighthouse 실행

# 번들 분석
npm run build
# .next/analyze 폴더 확인
```

## 🔍 추가 최적화 기회

### 1. 이미지 최적화
- [ ] WebP/AVIF 포맷으로 변환
- [ ] 적절한 크기로 리사이징
- [ ] Lazy loading 적용

### 2. 코드 분석
```bash
# 번들 분석기 설치
npm install --save-dev @next/bundle-analyzer

# next.config.ts에 추가
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

# 실행
ANALYZE=true npm run build
```

### 3. 프리페칭 전략
```typescript
// 중요한 페이지 프리페치
<Link href="/test" prefetch={true}>
  Start Test
</Link>
```

### 4. 데이터베이스 캐싱
- Redis/Memcached 도입 검토
- API 응답 캐싱

## 🎯 베스트 프랙티스

1. **항상 측정하기**: 최적화 전후 성능 측정
2. **사용자 중심**: 실제 사용자 경험 개선에 집중
3. **점진적 개선**: 작은 개선을 지속적으로
4. **모니터링**: 프로덕션 성능 지속 모니터링

## 📚 참고 자료

- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Performance](https://web.dev/performance/)
- [React Performance](https://react.dev/learn/render-and-commit)
