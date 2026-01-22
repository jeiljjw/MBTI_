import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBTI 유형 설명 - 16가지 성격 유형 특징과 설명",
  description: "16가지 MBTI 성격 유형의 상세한 설명과 특징. 각 유형의 강점, 약점, 커리어 추천을 확인하세요.",
  keywords: ["MBTI", "성격 유형", "INTJ", "ENFP", "ISTJ", "ENFJ", "유형 설명", "성격 특징"],
  openGraph: {
    title: "MBTI 유형 설명 - 16가지 성격 유형 특징",
    description: "MBTI 16가지 성격 유형의 자세한 설명과 특징을 알아보세요.",
    type: "website",
  },
};

export default function TypesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}