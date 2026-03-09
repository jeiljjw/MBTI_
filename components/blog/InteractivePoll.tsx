"use client";

import { useState } from 'react';

interface PollOption {
    id: string;
    text: string;
    votes: number; // Initially mock data
}

interface InteractivePollProps {
    question: string;
    options: PollOption[];
    totalVotes?: number;
}

export function InteractivePoll({
    question,
    options: initialOptions,
    totalVotes: initialTotal = 1245
}: InteractivePollProps) {
    const [hasVoted, setHasVoted] = useState(false);
    const [options, setOptions] = useState<PollOption[]>(initialOptions);
    const [total, setTotal] = useState(initialTotal);

    const handleVote = (selectedId: string) => {
        if (hasVoted) return;

        setOptions(options.map(opt =>
            opt.id === selectedId
                ? { ...opt, votes: opt.votes + 1 }
                : opt
        ));
        setTotal(total + 1);
        setHasVoted(true);
    };

    return (
        <div className="my-8 bg-gradient-to-br from-neutral-900 to-black p-6 rounded-xl border border-white/10 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📊</span>
                <h4 className="text-lg md:text-xl font-bold text-white">{question}</h4>
            </div>

            <div className="space-y-3 mt-4">
                {options.map((option) => {
                    const percentage = Math.round((option.votes / total) * 100) || 0;

                    return (
                        <button
                            key={option.id}
                            onClick={() => handleVote(option.id)}
                            disabled={hasVoted}
                            className={`relative w-full text-left p-4 rounded-lg overflow-hidden transition-all duration-300 ${hasVoted
                                    ? 'cursor-default bg-white/5 border border-white/5'
                                    : 'hover:bg-purple-900/20 bg-white/5 border border-purple-500/20 hover:border-purple-400'
                                }`}
                        >
                            {/* Progress bar background for results */}
                            {hasVoted && (
                                <div
                                    className="absolute left-0 top-0 bottom-0 bg-purple-600/30 transition-all duration-1000 ease-out"
                                    style={{ width: `${percentage}%` }}
                                />
                            )}

                            <div className="relative z-10 flex justify-between items-center text-gray-200">
                                <span className={hasVoted ? 'font-medium' : ''}>{option.text}</span>
                                {hasVoted && (
                                    <span className="text-purple-300 font-bold ml-4">
                                        {percentage}%
                                    </span>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>

            {hasVoted && (
                <p className="text-center text-gray-500 text-sm mt-4 animate-fade-in">
                    총 {total.toLocaleString()}명이 참여했습니다. 투표해주셔서 감사합니다!
                </p>
            )}
        </div>
    );
}
