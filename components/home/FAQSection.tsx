"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function FAQSection() {
  const t = useTranslations('home');

  const faqs = [
    {
      question: "FAQ.1.question",
      answer: "FAQ.1.answer",
    },
    {
      question: "FAQ.2.question",
      answer: "FAQ.2.answer",
    },
    {
      question: "FAQ.3.question",
      answer: "FAQ.3.answer",
    },
    {
      question: "FAQ.4.question",
      answer: "FAQ.4.answer",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-20 bg-neutral-900/50">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ❓ {t('FAQ.title')}
          </h2>
          <p className="text-gray-400">{t('FAQ.subtitle')}</p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-800/50 rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-white pr-4">
                  {t(faq.question)}
                </span>
                <span
                  className="text-purple-400 text-xl flex-shrink-0 transition-transform duration-200"
                  style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  ▼
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                  {t(faq.answer)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
