"use client";

import { useTranslations } from "next-intl";
import { Link } from '@/src/i18n/routing';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Sparkles,
  Bug,
  ChevronDown,
  Clock,
  ArrowLeft,
  LifeBuoy,
  Lightbulb,
  ShieldAlert,
  HelpCircle,
  MessageSquare,
  ArrowRight
} from "lucide-react";

export function ContactContent() {
  const t = useTranslations("contact");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contactChannels = [
    {
      key: "emailInquiry",
      icon: <LifeBuoy className="w-6 h-6 text-blue-400" />,
      color: "blue"
    },
    {
      key: "featureSuggestion",
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      color: "amber"
    },
    {
      key: "bugReport",
      icon: <ShieldAlert className="w-6 h-6 text-rose-400" />,
      color: "rose"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-16 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-6 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactChannels.map((channel, idx) => (
            <motion.div
              key={idx}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all group relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute -inset-px bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-6 p-3 bg-white/[0.03] rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {channel.icon}
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{t(`${channel.key}.title`)}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 h-12">
                  {t(`${channel.key}.description`)}
                </p>
                <div className="space-y-4">
                  <a
                    href={`mailto:${t(`${channel.key}.email`)}`}
                    className="flex items-center justify-between w-full py-3 px-4 bg-white/[0.05] hover:bg-white/10 rounded-xl text-center text-sm font-medium transition-colors border border-white/5 group/link"
                  >
                    <span>{t(`${channel.key}.email`)}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gray-400" />
                  </a>
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest px-1">
                    <Clock className="w-3 h-3" />
                    {t(`${channel.key}.responseTime`)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 mb-16"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="text-purple-400 w-6 h-6" />
            <h2 className="text-2xl font-bold text-white">{t("faq.title")}</h2>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border-b border-white/5 last:border-0"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-5 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg transition-colors ${openFaq === i ? 'text-white font-medium' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    {t(`faq.question${i}`)}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-white' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-400 leading-relaxed font-light">
                        {t(`faq.answer${i}`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Contact Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl p-8 md:p-12 border border-white/10"
          variants={itemVariants}
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">{t("contactForm.emailContact")}</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              {t("contactForm.emailContactDescription")}
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-5 bg-white/[0.03] rounded-2xl border border-white/5 flex flex-col gap-2">
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">{t("contactForm.quickContact")}</span>
              <p className="text-white font-medium text-lg tracking-tight leading-none">{t("contactForm.hours")}</p>
              <p className="text-purple-400 text-sm font-light">{t("contactForm.responseTime")}</p>
            </div>
            <div className="p-5 bg-white/[0.03] rounded-2xl border border-white/5 flex flex-col gap-3">
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">{t("contactForm.responsePriority")}</span>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
                  <span className="text-xs text-gray-400 font-light">{t("contactForm.urgentBug")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                  <span className="text-xs text-gray-400 font-light">{t("contactForm.generalInquiry")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  <span className="text-xs text-gray-400 font-light">{t("contactForm.featureSuggestion")}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div className="text-center" variants={itemVariants}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t("backToHome")}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
