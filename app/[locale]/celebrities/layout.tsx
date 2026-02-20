import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'celebritiesPage' });
  
  const title = locale === 'en' ? 'Celebrity MBTI - Famous People by Personality Type' : 'MBTI 유명인 - 각 성격 유형을 가진 유명인사들';
  const description = locale === 'en' 
    ? 'MBTI personality type celebrity list. Meet representative figures of each type.'
    : 'MBTI 성격 유형별 유명인사 목록. 각 유형의 대표적인 인물들을 확인하세요.';
  
  return {
    title: t('title'),
    description,
    keywords: ["MBTI 유명인", "성격 유형 유명인", "MBTI celebrity", "성격 유형 인물"],
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default function CelebritiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}