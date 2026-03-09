import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from 'next-intl/server';
import AboutContent from './AboutContent';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('metadataTitle'),
    description: t('metadataDescription'),
    keywords: ["MBTI", "personality types", "test", "psychology", "self-understanding", "experts", "research"],
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: "website",
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent />;
}
