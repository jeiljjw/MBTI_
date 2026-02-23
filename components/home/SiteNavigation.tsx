"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import { motion } from 'framer-motion';

interface SiteNavigationProps {
  className?: string;
}

export function SiteNavigation({ className = "" }: SiteNavigationProps) {
  const t = useTranslations('home');

  const navigationItems = [
    {
      href: '/test',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('navigation.test.title'),
      description: t('navigation.test.description'),
      cta: t('navigation.test.cta'),
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      href: '/types',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      title: t('navigation.types.title'),
      description: t('navigation.types.description'),
      cta: t('navigation.types.cta'),
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      href: '/compatibility',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: t('navigation.compatibility.title'),
      description: t('navigation.compatibility.description'),
      cta: t('navigation.compatibility.cta'),
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      href: '/celebrities',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: t('navigation.celebrities.title'),
      description: t('navigation.celebrities.description'),
      cta: t('navigation.celebrities.cta'),
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      href: '/blog',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: t('navigation.blog.title'),
      description: t('navigation.blog.description'),
      cta: t('navigation.blog.cta'),
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      href: '/glossary',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('navigation.glossary.title'),
      description: t('navigation.glossary.description'),
      cta: t('navigation.glossary.cta'),
      gradient: 'from-violet-500 to-purple-600',
    },
  ];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
        {t('navigation.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {navigationItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <motion.div
              className="group bg-black/20 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-white/30 transition-all duration-300 h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto pt-2">
                  <span className="inline-flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                    {item.cta}
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
