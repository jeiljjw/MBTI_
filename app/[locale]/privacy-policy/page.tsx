import { Metadata } from "next";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PrivacyPolicyContent } from './PrivacyPolicyContent';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacyPolicy' });
  
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return <PrivacyPolicyContent />;
}
