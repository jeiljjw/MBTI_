"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export function DailyInsightsSection() {
    const t = useTranslations('home.insights');

    return (
        <section className="w-full bg-neutral-950 py-20 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        <span className="text-xl mr-2">💡</span> {t('title')}
                    </h2>
                    <p className="text-gray-400">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 p-6 rounded-xl hover:border-blue-500/50 transition-all">
                        <h3 className="text-blue-300 font-semibold mb-3">Did you know?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t('fact1')}
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 border border-pink-500/20 p-6 rounded-xl hover:border-pink-500/50 transition-all">
                        <h3 className="text-pink-300 font-semibold mb-3">Fact Check</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t('fact2')}
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 border border-green-500/20 p-6 rounded-xl hover:border-green-500/50 transition-all">
                        <h3 className="text-green-300 font-semibold mb-3">Psychology</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t('fact3')}
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/blog" className="inline-flex items-center justify-center px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-full text-sm font-medium transition-colors border border-white/10">
                        {t('readMore')} <span className="ml-2">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
