import { Metadata } from "next";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { TermsOfServiceContent } from './TermsOfServiceContent';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'termsOfService' });
  
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function TermsOfServicePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return <TermsOfServiceContent />;
}
