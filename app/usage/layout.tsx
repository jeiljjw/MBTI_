import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBTI 활용법 - 성격 유형을 일상과 직장에서 활용하는 방법",
  description: "MBTI 성격 유형을 일상생활과 직장에서 어떻게 활용할 수 있는지 알아보세요. 자기계발과 인간관계 개선 팁.",
  keywords: ["MBTI 활용", "성격 유형 활용", "자기계발", "커리어", "인간관계"],
  openGraph: {
    title: "MBTI 활용법 - 성격 유형 실전 적용",
    description: "MBTI를 일상과 직장에서 효과적으로 활용하는 방법을 배워보세요.",
    type: "website",
  },
};

export default function UsageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}