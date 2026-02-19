# AGENTS.md - Development Guidelines for MBTI Test Application

Guidelines for agentic coding assistants working on this MBTI personality test application.

## Build, Lint, and Test Commands

```bash
# Development
npm run dev              # Start dev server on localhost:3000
npm run build            # Production build
npm run start            # Production server (after build)
npm run lint             # ESLint check
npx tsc --noEmit         # Type checking only

# Clean build artifacts
rm -rf .next out

# Testing (no framework configured - install first)
# npm install --save-dev jest @testing-library/react @testing-library/jest-dom
# npm test -- components/ui/button.test.tsx  # Run single test
# npm test -- --watch                          # Watch mode
# npm test -- --coverage                       # Coverage report
```

## Technology Stack

- **Framework**: Next.js 16.1.4 with App Router
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **UI Library**: Custom components with Radix UI primitives
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Noto Sans KR)
- **Linting**: ESLint with Next.js config

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata, fonts
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles, CSS variables
│   └── */                 # Route groups (test/, types/, blog/, etc.)
├── components/
│   ├── ui/                # Reusable UI components (Button, Card)
│   └── test/              # Test-specific components
├── lib/
│   ├── types/             # TypeScript definitions
│   ├── utils.ts           # Utility functions (cn helper)
│   ├── questions.ts       # Test questions data
│   └── mbti-descriptions.ts # MBTI type descriptions
├── public/                # Static assets, manifest.json, PWA files
└── Configuration files (next.config.ts, tsconfig.json, etc.)
```

## Code Style Guidelines

### File Naming
- **Components**: `PascalCase.tsx` (e.g., `QuestionCard.tsx`)
- **Utilities**: `camelCase.ts` (e.g., `utils.ts`)
- **Directories**: `kebab-case` (e.g., `test-components/`)

### Import Order
```typescript
// 1. React imports
import React from 'react';

// 2. Next.js imports
import Link from 'next/link';

// 3. Third-party libraries (alphabetical)
import { motion } from 'framer-motion';

// 4. Local imports (absolute paths with @/)
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// 5. Type imports
import type { Question } from '@/lib/types';
```

### Import Aliases
- Use `@/` for absolute imports from project root
- Avoid relative imports (`../`, `./`) except for co-located files

### TypeScript Conventions

```typescript
// Interfaces - PascalCase with descriptive names
interface QuestionCardProps {
  question: Question;
  onAnswer: (score: number) => void;
}

// Type unions for MBTI types
type MBTIType = 'ISTJ' | 'ISFJ' | 'INFJ' | 'INTJ' | /* ... 16 types */;
type MBTIDimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

// Use strict types, avoid `any`
// Prefer explicit return types for public functions
```

## Component Patterns

### Client Components
```typescript
"use client";

import React from 'react';

interface MyComponentProps {
  onAction: () => void;
}

export function MyComponent({ onAction }: MyComponentProps) {
  return <div>{/* JSX */}</div>;
}
```

### With React.memo for Performance
```typescript
const MyComponent = React.memo(({ prop }: MyComponentProps) => {
  return <div>{prop}</div>;
});
MyComponent.displayName = 'MyComponent';
export { MyComponent };
```

### Forward Ref Pattern
```typescript
import { forwardRef } from 'react';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn("base", className)} {...props} />
  )
);
Button.displayName = "Button";
```

## Styling Guidelines

### Tailwind CSS v4
- Use utility-first approach
- Use `cn()` utility for conditional classes from `lib/utils.ts`
- Follow mobile-first responsive design

```tsx
// Good - mobile-first responsive
<div className="text-sm md:text-base lg:text-lg">

// Use semantic colors (defined in globals.css)
<div className="bg-background text-foreground">

// Custom gradient buttons use .gradient-button class
<button className="gradient-button">
```

### CSS Variables (globals.css)
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --border: 214 31.8% 91.4%;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

## Error Handling

```typescript
// Async operations with proper error handling
const [data, setData] = useState(null);
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState(false);

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await fetch('/api/data');
      setData(await result.json());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);
```

## Development Checklist

Before committing changes:
- [ ] TypeScript types properly defined (no `any`)
- [ ] Components use `"use client"` when using hooks/browser APIs
- [ ] Imports follow the established order
- [ ] Styling uses Tailwind classes consistently
- [ ] No `console.log` statements in production code
- [ ] Run `npm run lint` - no errors
- [ ] Run `npx tsc --noEmit` - no type errors
- [ ] Build passes: `npm run build`

## Key Notes

- **Korean Language Support**: App supports Korean text - ensure UTF-8 encoding
- **PWA Features**: Service worker in `public/sw.js`, manifest in `public/manifest.json`
- **SEO**: Use Next.js metadata API (see `app/layout.tsx` for example)
- **Performance**: Use `React.memo`, `useMemo`, `useCallback` for optimization
- **Images**: Use Next.js `<Image />` component with width/height/priority props
- **Accessibility**: Follow semantic HTML and ARIA guidelines

## ESLint Rules

From `eslint.config.mjs`:
- `@typescript-eslint/no-unused-vars`: warn
- `react/no-unescaped-entities`: warn

Run `npm run lint` to check, fix auto-fixable issues before committing.
