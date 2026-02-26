import Script from "next/script";
import { HomeContent } from './HomeContent';
import { useTranslations } from 'next-intl';

// WebSite Schema with SearchAction
export default function Home(props: { params: Promise<{ locale: string }> }) {
  const t = useTranslations('home');
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Simple MBTI",
    "url": "https://www.simplembti.com",
    "description": "과학적으로 검증된 MBTI 성격 유형 테스트",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.simplembti.com/test"
      },
      "name": "Take MBTI Test"
    },
    "creator": {
      "@type": "Organization",
      "name": "Simple MBTI"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Simple MBTI Test",
    "operatingSystem": "Any",
    "applicationCategory": "EducationalApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": t('FAQ.1.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('FAQ.1.answer')
        }
      },
      {
        "@type": "Question",
        "name": t('FAQ.2.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('FAQ.2.answer')
        }
      },
      {
        "@type": "Question",
        "name": t('FAQ.3.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('FAQ.3.answer')
        }
      },
      {
        "@type": "Question",
        "name": t('FAQ.4.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('FAQ.4.answer')
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema)
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <HomeContent />
    </>
  );
}
