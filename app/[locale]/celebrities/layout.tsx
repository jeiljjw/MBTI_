import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'celebritiesPage' });

  const title = locale === 'en'
    ? 'Celebrity MBTI - BTS, Elon Musk Personality Types'
    : 'MBTI 유명인 - 아이유, 손흥민, BTS의 성격 유형은?';
  const description = locale === 'en'
    ? 'Discover MBTI personality types of world-famous celebrities including BTS, Elon Musk, and more. Meet representative figures of each 16 personality types.'
    : '아이유, 손흥민, BTS 멤버 등 국내외 유명인들의 MBTI 성격 유형을 총정리했습니다. 16가지 유형별 대표 인물들을 지금 확인하세요.';

  return {
    title,
    description,
    keywords: locale === 'en'
      ? ["Celebrity MBTI", "BTS MBTI", "Elon Musk MBTI", "16 personalities famous people"]
      : ["MBTI 유명인", "아이유 MBTI", "손흥민 MBTI", "BTS MBTI", "성격 유형 연예인"],
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