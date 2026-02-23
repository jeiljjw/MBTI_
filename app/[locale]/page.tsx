import Script from "next/script";
import { HomeContent } from './HomeContent';

// WebSite Schema with SearchAction
export default function Home(_props: { params: Promise<{ locale: string }> }) {
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
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is MBTI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MBTI (Myers-Briggs Type Indicator) is a personality type assessment developed by Isabel Briggs Myers and Katharine Cook Briggs, based on Carl Jung's psychological theory. It classifies people's personalities into 16 distinct types."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is the MBTI test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MBTI is a personality type analysis tool based on statistical probabilities. It is not an absolute diagnostic tool, and behavior may vary depending on the situation. Please use it for reference purposes."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the test take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our MBTI test consists of 40 questions and takes approximately 10-15 minutes. You will answer each question on a 1-7 point scale."
                }
              }
            ]
          }),
        }}
      />
      <HomeContent />
    </>
  );
}
