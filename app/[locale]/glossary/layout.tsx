import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBTI 용어 사전 - MBTI 관련 용어와 개념 설명",
  description: "MBTI 테스트와 관련된 용어들을 쉽게 설명한 용어 사전입니다. MBTI 개념을 이해하는 데 도움이 됩니다.",
  keywords: ["MBTI 용어", "성격 유형 용어", "MBTI 사전", "심리학 용어"],
  openGraph: {
    title: "MBTI 용어 사전 - 용어와 개념 설명",
    description: "MBTI 관련 용어들을 쉽게 이해할 수 있는 용어 사전입니다.",
    type: "website",
  },
};

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}