"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export function ContactContent() {
  const t = useTranslations('contact');

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center gap-6 px-4 text-center pt-25 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-white mb-2">{t('emailInquiry.title')}</h3>
              <p className="text-gray-300 mb-4">{t('emailInquiry.description')}</p>
              <div className="text-cyan-400 font-medium">{t('emailInquiry.email')}</div>
              <div className="text-sm text-gray-400 mt-2">{t('emailInquiry.responseTime')}</div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">{t('featureSuggestion.title')}</h3>
              <p className="text-gray-300 mb-4">{t('featureSuggestion.description')}</p>
              <div className="text-cyan-400 font-medium">{t('featureSuggestion.email')}</div>
              <div className="text-sm text-gray-400 mt-2">{t('featureSuggestion.responseTime')}</div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="text-4xl mb-4">🐛</div>
              <h3 className="text-xl font-bold text-white mb-2">{t('bugReport.title')}</h3>
              <p className="text-gray-300 mb-4">{t('bugReport.description')}</p>
              <div className="text-cyan-400 font-medium">{t('bugReport.email')}</div>
              <div className="text-sm text-gray-400 mt-2">{t('bugReport.responseTime')}</div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
            {t('faq.title')}
          </h2>

          <div className="space-y-6 text-left">
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-bold text-white mb-3">Q. {t('faq.question1')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('faq.answer1')}
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-bold text-white mb-3">Q. {t('faq.question2')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('faq.answer2')}
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-bold text-white mb-3">Q. {t('faq.question3')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('faq.answer3')}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">Q. {t('faq.question4')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('faq.answer4')}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Placeholder */}
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
            {t('contactForm.title')}
          </h2>

           <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
             <div className="flex items-center space-x-2 mb-2">
               <span className="text-green-400">💌</span>
               <span className="text-green-300 font-medium">{t('contactForm.emailContact')}</span>
             </div>
             <p className="text-green-200 text-sm">
               {t('contactForm.emailContactDescription')}
             </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-semibold text-white mb-2">{t('contactForm.quickContact')}</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>📧 support@simplembti.com</p>
                <p>🕒 {t('contactForm.hours')}</p>
                <p>📱 {t('contactForm.responseTime')}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">{t('contactForm.responsePriority')}</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>🔴 {t('contactForm.urgentBug')}</p>
                <p>🟡 {t('contactForm.generalInquiry')}</p>
                <p>🟢 {t('contactForm.featureSuggestion')}</p>
              </div>
            </div>
          </div>
        </div>



        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/">
            <button className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-gray-700 transition-all duration-300 transform hover:scale-105">
              {t('backToHome')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
