"use client";

import { useTranslations } from 'next-intl';

export function AuthorProfile() {
    const t = useTranslations('author');

    // Schema.org Person markup
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": t('name'),
        "jobTitle": t('role'),
        "worksFor": {
            "@type": "Organization",
            "name": "Simple MBTI"
        },
        "description": t('bio')
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <div className="bg-neutral-900/60 rounded-xl p-6 md:p-8 border border-white/10 mt-12 backdrop-blur-sm shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                    {t('title')}
                </h3>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 flex-shrink-0">
                        <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center overflow-hidden">
                            <span className="text-3xl md:text-4xl">👨‍💼</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                            {t('name')}
                        </h4>
                        <p className="text-purple-400 text-sm md:text-base font-medium mb-4">
                            {t('role')}
                        </p>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            {t('bio')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
