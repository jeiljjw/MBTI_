import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { UsageContent } from './UsageContent';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'usage' });
  
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function UsagePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <UsageContent />;
}
