"use client";

import Link from "next/link";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import {
    Target,
    FlaskConical,
    Award,
    Zap,
    Edit3,
    Users,
    BookOpen,
    School,
    AlertCircle,
    Mail,
    MessageSquare,
    ChevronRight,
    ArrowLeft
} from "lucide-react";

export default function AboutContent() {
    const t = useTranslations('about');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-16 overflow-hidden">
            <motion.div
                className="max-w-4xl mx-auto px-4"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Hero Section */}
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-6 tracking-tight">
                        {t('heroTitle')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                        {t('heroSubtitle')}
                    </p>
                </motion.div>

                {/* Mission & Vision */}
                <motion.div
                    className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 mb-10 relative group"
                    variants={itemVariants}
                >
                    <div className="absolute -inset-px bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3 relative">
                        <Target className="text-purple-400 w-6 h-6" />
                        {t('missionTitle')}
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-8 text-lg font-light relative">
                        {t('missionDescription')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                        <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                            <FlaskConical className="text-blue-400 w-8 h-8 mb-4" />
                            <h3 className="font-medium text-white mb-2">{t('scienceTitle')}</h3>
                            <p className="text-gray-400 text-sm leading-snug">{t('scienceDesc')}</p>
                        </div>
                        <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                            <Award className="text-purple-400 w-8 h-8 mb-4" />
                            <h3 className="font-medium text-white mb-2">{t('expertiseTitle')}</h3>
                            <p className="text-gray-400 text-sm leading-snug">{t('expertiseDesc')}</p>
                        </div>
                        <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                            <Zap className="text-amber-400 w-8 h-8 mb-4" />
                            <h3 className="font-medium text-white mb-2">{t('practicalityTitle')}</h3>
                            <p className="text-gray-400 text-sm leading-snug">{t('practicalityDesc')}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Editorial Process */}
                <motion.div
                    className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 mb-10"
                    variants={itemVariants}
                >
                    <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                        <Edit3 className="text-emerald-400 w-6 h-6" />
                        {t('editorialTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="text-emerald-400/50 font-mono text-xl pt-1">0{i}</div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">{t(`step${i}Title`)}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{t(`step${i}Desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Expert Team */}
                <motion.div
                    className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 mb-10"
                    variants={itemVariants}
                >
                    <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                        <Users className="text-pink-400 w-6 h-6" />
                        {t('teamTitle')}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Expert 1 */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                                    <span className="text-2xl">P.</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{t('expert1Name')}</h3>
                                    <p className="text-purple-400 text-sm font-medium">{t('expert1Title')}</p>
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {[t('expert1Edu'), t('expert1Work'), t('expert1Member'), t('expert1Exp')].map((item, idx) => (
                                    <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                                        <ChevronRight className="w-3 h-3 mt-1 text-purple-500/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-300 text-sm italic font-light pl-4 border-l-2 border-purple-500/30 py-1">
                                &ldquo;{t('expert1Quote')}&rdquo;
                            </p>
                        </div>

                        {/* Expert 2 */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                                    <span className="text-2xl">L.</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{t('expert2Name')}</h3>
                                    <p className="text-blue-400 text-sm font-medium">{t('expert2Title')}</p>
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {[t('expert2Edu'), t('expert2Work'), t('expert2Cert'), t('expert2Exp')].map((item, idx) => (
                                    <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                                        <ChevronRight className="w-3 h-3 mt-1 text-blue-500/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-300 text-sm italic font-light pl-4 border-l-2 border-blue-500/30 py-1">
                                &ldquo;{t('expert2Quote')}&rdquo;
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Methodology */}
                <motion.div
                    className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 mb-10"
                    variants={itemVariants}
                >
                    <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                        <BookOpen className="text-blue-400 w-6 h-6" />
                        {t('methodologyTitle')}
                    </h2>

                    <div className="space-y-10">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">{t('researchBaseTitle')}</h3>
                            <p className="text-gray-400 leading-relaxed mb-6 font-light">
                                {t('researchBaseDesc')}
                            </p>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    "Myers, I. B., & Myers, P. B. (1995). Gifts Differing. Davies-Black Publishing.",
                                    "Jung, C. G. (1921). Psychological Types. Princeton University Press.",
                                    "McCrae, R. R., & Costa, P. T. (1989). Reinterpreting the MBTI. Journal of Personality.",
                                    "Pittenger, D. J. (1993). Measuring the MBTI... And Coming Up Short."
                                ].map((cite, idx) => (
                                    <div key={idx} className="text-gray-500 text-xs font-mono bg-white/[0.02] p-3 rounded-lg border border-white/[0.03]">
                                        {cite}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6 border-b border-white/10 pb-2">{t('testDesignTitle')}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: t('standardizedQuestions'), desc: t('standardizedQuestionsDesc') },
                                    { title: t('balancedPlacement'), desc: t('balancedPlacementDesc') },
                                    { title: t('scoreWeight'), desc: t('scoreWeightDesc') },
                                    { title: t('privacy'), desc: t('privacyDesc') }
                                ].map((item, idx) => (
                                    <div key={idx} className="space-y-1">
                                        <h4 className="text-sm font-bold text-gray-200">{item.title}</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Academic Partnerships */}
                <motion.div
                    className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-10"
                    variants={itemVariants}
                >
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                        <School className="text-indigo-400 w-6 h-6" />
                        {t('partnershipsTitle')}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-8 font-light">
                        {t('partnershipsDesc')}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[t('org1'), t('org2'), t('org3'), t('org4')].map((org, idx) => (
                            <div key={idx} className="bg-white/[0.03] rounded-2xl p-4 text-center border border-white/5 flex items-center justify-center min-h-[80px]">
                                <p className="text-gray-300 text-xs font-medium">{org}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Limitations & Ethics */}
                <motion.div
                    className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-8 mb-10"
                    variants={itemVariants}
                >
                    <h2 className="text-lg font-bold text-amber-400 mb-6 flex items-center gap-3">
                        <AlertCircle className="w-5 h-5" />
                        {t('limitationsTitle')}
                    </h2>
                    <ul className="space-y-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/30 mt-1.5 shrink-0" />
                                {t(`limitation${i}`)}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact */}
                <motion.div
                    className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-xl rounded-3xl p-10 border border-white/10 mb-16 text-center"
                    variants={itemVariants}
                >
                    <MessageSquare className="w-12 h-12 text-purple-400 mx-auto mb-6 opacity-50" />
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {t('contactTitle')}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto font-light">
                        {t('contactDesc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:contact@simplembti.com"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all active:scale-95 shadow-lg shadow-white/5"
                        >
                            <Mail className="w-5 h-5 mr-3" />
                            {t('sendEmail')}
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition-all border border-white/10 active:scale-95"
                        >
                            {t('contactPage')}
                        </Link>
                    </div>
                </motion.div>

                {/* Navigation */}
                <motion.div className="text-center" variants={itemVariants}>
                    <Link href="/">
                        <button className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            {t('backHome')}
                        </button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
