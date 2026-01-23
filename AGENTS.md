# AGENTS.md - Development Guidelines for MBTI Test Application

This document provides comprehensive guidelines for agentic coding assistants working on the MBTI personality test application. It covers build commands, code style conventions, and development practices.

## Table of Contents
1. [Build, Lint, and Test Commands](#build-lint-and-test-commands)
2. [Code Style Guidelines](#code-style-guidelines)
3. [Project Structure](#project-structure)
4. [Technology Stack](#technology-stack)
5. [Development Workflow](#development-workflow)
6. [TypeScript Conventions](#typescript-conventions)
7. [Component Patterns](#component-patterns)
8. [Styling Guidelines](#styling-guidelines)
9. [Error Handling](#error-handling)
10. [Testing Guidelines](#testing-guidelines)
11. [Performance Considerations](#performance-considerations)

## Build, Lint, and Test Commands

### Primary Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Production server (after build)
npm run start

# Linting
npm run lint
```

### Additional Commands
```bash
# Type checking only
npx tsc --noEmit

# Build analysis
npm run build && npx @next/bundle-analyzer

# Clean build artifacts
rm -rf .next out
```

### Testing Commands
**Note**: No test framework is currently configured. When adding tests:

```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run single test file
npm test -- components/ui/button.test.tsx

# Run tests in watch mode
npm test -- --watch
```

## Code Style Guidelines

### File Naming
- **Components**: `PascalCase.tsx` (e.g., `QuestionCard.tsx`, `Navbar.tsx`)
- **Utilities**: `camelCase.ts` (e.g., `utils.ts`, `questions.ts`)
- **Types**: `camelCase.ts` or `PascalCase.ts` (e.g., `types.ts`, `test.ts`)
- **Directories**: `kebab-case` (e.g., `components/`, `test-components/`)

### Import Order
```typescript
// 1. React imports
import React from 'react';

// 2. Next.js imports
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// 3. Third-party libraries (alphabetical)
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// 4. Local imports (absolute paths with @/)
import { Button } from '@/components/ui/button';
import { questions } from '@/lib/questions';

// 5. Type imports
import type { Question } from '@/lib/types';
```

### Import Aliases
- Use `@/` for absolute imports from project root
- Avoid relative imports (`../`, `./`) except for co-located files

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── test/                    # Test pages
│   ├── types/                   # Type-specific pages
│   └── ...
├── components/                  # React components
│   ├── ui/                      # Reusable UI components
│   ├── test/                    # Test-specific components
│   └── ...
├── lib/                         # Utility functions and data
│   ├── types/                   # Type definitions
│   ├── questions.ts             # Test questions data
│   ├── mbti-descriptions.ts     # MBTI type descriptions
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
│   ├── manifest.json           # PWA manifest
│   └── ...
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── eslint.config.mjs           # ESLint config
├── next.config.ts              # Next.js config
└── postcss.config.mjs          # PostCSS config
```

## Technology Stack

- **Framework**: Next.js 16.1.4 with App Router
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Library**: Custom components with Radix UI primitives
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Noto Sans KR)
- **Linting**: ESLint with Next.js config
- **Build Tool**: Next.js built-in bundler

## Development Workflow

### Component Development
1. Create component in appropriate directory (`components/ui/` for reusable, `components/test/` for test-specific)
2. Use TypeScript with proper interfaces
3. Add "use client" directive for client components
4. Export with named exports
5. Use React.memo for performance-critical components

### Adding New Features
1. Define types in `lib/types/` if needed
2. Create components following established patterns
3. Add to appropriate route in `app/` directory
4. Update navigation if needed
5. Test build and linting

### Code Review Checklist
- [ ] TypeScript types are properly defined
- [ ] Components use "use client" when needed
- [ ] Imports follow the established order
- [ ] Styling uses Tailwind classes consistently
- [ ] No console.log statements in production code
- [ ] Components are properly memoized if performance-critical
- [ ] Error boundaries implemented for async operations

## TypeScript Conventions

### Interface Naming
```typescript
// Good
interface QuestionCardProps {
  question: Question;
  onAnswer: (score: number) => void;
}

interface PersonalityResult {
  type: PersonalityType;
  description: string;
}

// Avoid
interface questionCardProps {} // lowercase
interface Props {} // too generic
```

### Type Unions
```typescript
// Good
type PersonalityType = 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP' | /* ... */;
type MBTIDimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

// Consistent with existing codebase
export type MBTIType = 'ISTJ' | 'ISFJ' | 'INFJ' | 'INTJ' | /* ... */;
```

### Generic Constraints
```typescript
// Good
interface ApiResponse<T> {
  data: T;
  error?: string;
  loading: boolean;
}
```

## Component Patterns

### Functional Components
```typescript
"use client";

import React from 'react';
import type { ComponentProps } from './types';

interface MyComponentProps extends ComponentProps {
  onAction: () => void;
}

export function MyComponent({ onAction, ...props }: MyComponentProps) {
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}
```

### Component with Memo
```typescript
const MyComponent = React.memo(({ prop }: MyComponentProps) => {
  return <div>{prop}</div>;
});

MyComponent.displayName = 'MyComponent';
export { MyComponent };
```

### Forward Ref Components
```typescript
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
```

## Styling Guidelines

### Tailwind CSS v4
- Use utility-first approach
- Leverage custom CSS variables defined in `globals.css`
- Follow mobile-first responsive design
- Use `cn()` utility for conditional classes

### Custom Classes
```css
/* In globals.css - for complex animations/effects */
.gradient-button {
  background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
  /* ... */
}
```

### Responsive Design
```tsx
// Good
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

// Avoid fixed breakpoints without mobile-first consideration
<div className="hidden lg:block"> {/* Consider mobile experience */}
```

### Dark Mode Support
- CSS variables support dark mode automatically
- Use semantic color names (`text-foreground`, `bg-background`)
- Avoid hard-coded colors except for brand colors

## Error Handling

### Component Error Boundaries
```typescript
"use client";

import React from 'react';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType<{ error: Error }> },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback;
      return FallbackComponent ?
        <FallbackComponent error={this.state.error!} /> :
        <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
```

### Async Operations
```typescript
// Good - proper error handling
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

## Testing Guidelines

### Component Testing Structure
```typescript
// __tests__/MyComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MyComponent } from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected text')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    const mockFn = jest.fn();
    render(<MyComponent onAction={mockFn} />);

    fireEvent.click(screen.getByRole('button'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
```

### Test File Organization
```
components/
├── MyComponent.tsx
└── __tests__/
    └── MyComponent.test.tsx
```

## Performance Considerations

### Component Optimization
- Use `React.memo` for components that re-render frequently
- Use `useMemo` for expensive calculations
- Use `useCallback` for event handlers passed to child components
- Avoid inline functions in render

### Bundle Optimization
- Use dynamic imports for route-based code splitting
- Lazy load heavy components
- Optimize images and static assets
- Monitor bundle size with `npm run build`

### Image Optimization
```typescript
import Image from 'next/image';

// Good - automatic optimization
<Image
  src="/hero-image.jpg"
  alt="Hero"
  width={800}
  height={600}
  priority // for above-the-fold images
/>
```

---

## Additional Notes

- **Korean Language Support**: The app supports Korean text - ensure proper encoding in all text content
- **PWA Features**: Service worker is implemented for offline functionality
- **SEO**: Use Next.js metadata API for proper SEO optimization
- **Accessibility**: Follow semantic HTML practices and ARIA guidelines
- **Performance Monitoring**: Use Next.js built-in performance monitoring tools

This document should be updated as the codebase evolves and new patterns emerge.</content>
<parameter name="filePath">AGENTS.md