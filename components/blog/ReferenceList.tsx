"use client";

import { useTranslations } from 'next-intl';

interface Reference {
    id: string;
    author: string;
    year: number;
    title: string;
    source: string;
    link?: string;
}

interface ReferenceListProps {
    references: Reference[];
}

export function ReferenceList({ references }: ReferenceListProps) {
    const t = useTranslations('blogArticle');

    if (!references || references.length === 0) return null;

    return (
        <div className="bg-neutral-900/40 rounded-xl p-6 border border-white/5 mt-10">
            <h3 className="text-lg font-bold text-gray-300 mb-4 flex items-center gap-2">
                <span className="text-xl">📚</span> {t('referencesTitle') || 'References'}
            </h3>
            <ul className="space-y-3">
                {references.map((ref) => (
                    <li key={ref.id} className="text-sm text-gray-400 pl-4 border-l-2 border-purple-500/30 break-words">
                        <span className="font-semibold text-gray-300">{ref.author}</span> ({ref.year}).{' '}
                        {ref.link ? (
                            <a href={ref.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                                {ref.title}
                            </a>
                        ) : (
                            <span className="italic">{ref.title}</span>
                        )}
                        .{' '}
                        <span className="text-gray-500">{ref.source}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
