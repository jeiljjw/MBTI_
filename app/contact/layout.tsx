import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기 - MBTI 테스트 문의 및 피드백",
  description: "MBTI 테스트에 대한 문의사항이나 피드백을 보내주세요. 버그 신고, 기능 제안, 일반 문의를 환영합니다.",
  keywords: ["MBTI 문의", "고객 지원", "피드백", "버그 신고", "기능 제안"],
  openGraph: {
    title: "문의하기 - MBTI 테스트 고객 지원",
    description: "MBTI 테스트에 대한 문의와 피드백을 보내주세요.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}