import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBTI 궁합 - 성격 유형 간 궁합표와 관계 분석",
  description: "MBTI 성격 유형 간 궁합을 확인하세요. 연인, 친구, 동료로서의 관계 호환성을 분석한 궁합표입니다.",
  keywords: ["MBTI 궁합", "성격 궁합", "관계 호환성", "커플 궁합", "친구 궁합"],
  openGraph: {
    title: "MBTI 궁합 - 성격 유형 간 관계 분석",
    description: "MBTI 유형별 궁합을 확인하고 더 나은 인간관계를 만드세요.",
    type: "website",
  },
};

export default function CompatibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}