import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBTI 유명인 - 각 성격 유형을 가진 유명인사들",
  description: "MBTI 성격 유형별 유명인사 목록. 각 유형의 대표적인 인물들을 확인하세요.",
  keywords: ["MBTI 유명인", "성격 유형 유명인", "MBTI celebrity", "성격 유형 인물"],
  openGraph: {
    title: "MBTI 유명인 - 성격 유형별 대표 인물들",
    description: "MBTI 각 유형을 가진 유명인사들을 만나보세요.",
    type: "website",
  },
};

export default function CelebritiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}