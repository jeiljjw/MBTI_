"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  User,
  Award,
  TrendingUp,
  Globe,
  BookOpen,
  Users,
  BarChart3,
  Briefcase,
  Palette,
  Trophy,
  FlaskConical,
  Drama,
  Scroll,
  Landmark,
} from "lucide-react";
import {
  getCelebrityGroups,
  getAllCelebrities,
  getFieldName,
  getGroupColors,
  getUsedCountries,
  getFieldStats,
  countries,
  type CelebrityField,
  type CountryCode,
  type MBTICelebrityGroup,
  type Celebrity,
} from "@/lib/i18n/celebrities";

const mbtiTypes = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP",
];

const fields: CelebrityField[] = [
  "politics", "business", "arts", "sports",
  "science", "entertainment", "literature",
];

const fieldIcons: Record<CelebrityField, React.ReactNode> = {
  politics: <Landmark className="w-5 h-5" />,
  business: <Briefcase className="w-5 h-5" />,
  arts: <Palette className="w-5 h-5" />,
  sports: <Trophy className="w-5 h-5" />,
  science: <FlaskConical className="w-5 h-5" />,
  entertainment: <Drama className="w-5 h-5" />,
  literature: <Scroll className="w-5 h-5" />,
};

export default function CelebritiesPage() {
  const locale = useLocale() as 'ko' | 'en';
  const t = useTranslations('celebritiesPage');
  
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedField, setSelectedField] = useState<CelebrityField | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryCode | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Get locale-aware data
  const celebrityGroups = useMemo(() => getCelebrityGroups(locale), [locale]);
  const allCelebrities = useMemo(() => getAllCelebrities(locale), [locale]);
  const usedCountries = useMemo(() => getUsedCountries(locale), [locale]);
  const fieldStats = useMemo(() => getFieldStats(locale), [locale]);

  // Filter logic
  const filteredGroups = useMemo(() => {
    return celebrityGroups
      .filter((group: MBTICelebrityGroup) => !selectedType || group.type === selectedType)
      .map((group: MBTICelebrityGroup) => ({
        ...group,
        celebrities: group.celebrities.filter((celeb: Celebrity) => {
          const matchesField = !selectedField || celeb.field === selectedField;
          const matchesCountry = !selectedCountry || celeb.country === selectedCountry;
          const matchesSearch = !searchQuery ||
            celeb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            celeb.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            celeb.nameEn?.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesField && matchesCountry && matchesSearch;
        }),
      }))
      .filter((group: MBTICelebrityGroup) => group.celebrities.length > 0);
  }, [celebrityGroups, selectedType, selectedField, selectedCountry, searchQuery]);

  const totalFilteredCount = filteredGroups.reduce(
    (sum: number, group: MBTICelebrityGroup) => sum + group.celebrities.length,
    0
  );

  const clearFilters = () => {
    setSelectedType(null);
    setSelectedField(null);
    setSelectedCountry(null);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
              <br />
              <span className="text-lg text-slate-500">
                {t('subtitleDetail')}
              </span>
            </p>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
              <div className="text-3xl font-bold text-purple-400">{allCelebrities.length}+</div>
              <div className="text-sm text-slate-400">{t('totalCelebrities')}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
              <div className="text-3xl font-bold text-pink-400">16</div>
              <div className="text-sm text-slate-400">{t('totalTypes')}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
              <div className="text-3xl font-bold text-cyan-400">{Object.keys(fieldStats).length}</div>
              <div className="text-sm text-slate-400">{t('totalFields')}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
              <div className="text-3xl font-bold text-green-400">{usedCountries.length}</div>
              <div className="text-sm text-slate-400">{t('totalCountries')}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"><Search className="w-5 h-5" /></div>
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 text-slate-400 mr-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm">{t('filter')}:</span>
            </div>

            {/* MBTI Type Filter */}
            <select
              value={selectedType || ""}
              onChange={(e) => setSelectedType(e.target.value || null)}
              className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 [&>option]:bg-slate-800 [&>option]:text-slate-200"
            >
              <option value="" className="bg-slate-800 text-slate-200">{t('allTypes')}</option>
              {mbtiTypes.map((type) => (
                <option key={type} value={type} className="bg-slate-800 text-slate-200">{type}</option>
              ))}
            </select>

            {/* Field Filter */}
            <select
              value={selectedField || ""}
              onChange={(e) => setSelectedField((e.target.value as CelebrityField) || null)}
              className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 [&>option]:bg-slate-800 [&>option]:text-slate-200"
            >
              <option value="" className="bg-slate-800 text-slate-200">{t('allFields')}</option>
              {fields.map((field) => (
                <option key={field} value={field} className="bg-slate-800 text-slate-200">
                  {getFieldName(field, locale)}
                </option>
              ))}
            </select>

            {/* Country Filter */}
            <select
              value={selectedCountry || ""}
              onChange={(e) => setSelectedCountry((e.target.value as CountryCode) || null)}
              className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 [&>option]:bg-slate-800 [&>option]:text-slate-200"
            >
              <option value="" className="bg-slate-800 text-slate-200">{t('allCountries')}</option>
              {usedCountries.map((country) => (
                <option key={country.code} value={country.code} className="bg-slate-800 text-slate-200">
                  {country.flag} {locale === 'ko' ? country.name : country.nameEn}
                </option>
              ))}
            </select>

            {(selectedType || selectedField || selectedCountry || searchQuery) && (
              <button
                onClick={clearFilters}
                className="text-sm text-slate-400 hover:text-white transition-colors underline"
              >
                {t('resetFilters')}
              </button>
            )}

            <div className="ml-auto text-sm text-slate-400">
              {t('showingCount', { count: totalFilteredCount })}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {filteredGroups.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">{t('noResults')}</h3>
              <p className="text-slate-400">{t('tryDifferentSearch')}</p>
            </motion.div>
          ) : (
            <div className="space-y-16">
              {filteredGroups.map((group: MBTICelebrityGroup, groupIndex: number) => {
                const groupColors = getGroupColors(group.group, locale);
                return (
                  <motion.section
                    key={group.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                  >
                    {/* Group Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${groupColors.bg} flex items-center justify-center border ${groupColors.border}`}
                      >
                        <span className="text-2xl font-bold text-white">{group.type}</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{group.name}</h2>
                        <p className={`text-sm ${groupColors.text}`}>
                          {group.group} · {group.celebrities.length}{locale === 'ko' ? '명' : ''}
                        </p>
                      </div>
                    </div>

                    {/* Celebrities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group.celebrities.map((celebrity: Celebrity, index: number) => (
                        <motion.div
                          key={`${group.type}-${celebrity.name}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
                        >
                          {/* Card Header */}
                          <div className="p-6 pb-4">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-slate-300">
                                  {fieldIcons[celebrity.field]}
                                </div>
                                <div>
                                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                                    {celebrity.name}
                                  </h3>
                                  {celebrity.nameEn && (
                                    <p className="text-sm text-slate-500">{celebrity.nameEn}</p>
                                  )}
                                </div>
                              </div>
                              <span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-slate-700/50 border border-slate-600 text-slate-300">
                                <span className="text-base">{countries[celebrity.country].flag}</span>
                                <span>{locale === 'ko' ? countries[celebrity.country].name : countries[celebrity.country].nameEn}</span>
                              </span>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                              {celebrity.description}
                            </p>
                          </div>

                          {/* Achievements */}
                          <div className="px-6 pb-4">
                            <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                              <Award className="w-4 h-4 text-yellow-500" />
                              <span className="font-medium">{t('mainAchievements')}</span>
                            </div>
                            <ul className="space-y-1">
                              {celebrity.achievements.slice(0, 2).map((achievement: string, i: number) => (
                                <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                                  <span className="text-purple-400 mt-1">•</span>
                                  <span className="line-clamp-1">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* MBTI Traits */}
                          <div className="px-6 pb-4">
                            <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                              <User className="w-4 h-4 text-cyan-500" />
                              <span className="font-medium">{t('mbtiTraits')}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {celebrity.mbtiTraits.slice(0, 3).map((trait: string, i: number) => (
                                <span key={i} className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                                  {trait}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Success Factors */}
                          <div className="px-6 pb-6">
                            <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                              <TrendingUp className="w-4 h-4 text-green-500" />
                              <span className="font-medium">{t('successFactors')}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {celebrity.successFactors.slice(0, 2).map((factor: string, i: number) => (
                                <span key={i} className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                                  {factor}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Field Distribution Section */}
      <div className="bg-white/5 border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">{t('fieldDistribution')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {fields.map((field) => {
              const count = allCelebrities.filter((c: Celebrity) => c.field === field).length;
              return (
                <motion.div
                  key={field}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center cursor-pointer hover:border-purple-500/30 transition-all"
                >
                  <div className="mb-2 flex justify-center">{fieldIcons[field]}</div>
                  <div className="text-sm font-medium text-white">{getFieldName(field, locale)}</div>
                  <div className="text-2xl font-bold text-purple-400 mt-1">{count}{locale === 'ko' ? '명' : ''}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Related Links */}
      <div className="bg-white/5 border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">{t('learnMore')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link href="/types">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all text-center group">
                <div className="mx-auto mb-3 group-hover:scale-110 transition-transform"><BookOpen className="w-8 h-8 text-purple-400 mx-auto" /></div>
                <h3 className="text-lg font-semibold text-white mb-1">{t('mbtiTypes')}</h3>
                <p className="text-sm text-slate-400">{locale === 'ko' ? '16가지 성격 유형 알아보기' : 'Explore 16 personality types'}</p>
              </div>
            </Link>
            <Link href="/compatibility">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all text-center group">
                <div className="mx-auto mb-3 group-hover:scale-110 transition-transform"><Users className="w-8 h-8 text-pink-400 mx-auto" /></div>
                <h3 className="text-lg font-semibold text-white mb-1">{t('compatibilityAnalysis')}</h3>
                <p className="text-sm text-slate-400">{locale === 'ko' ? '성격 유형별 궁합 보기' : 'Check compatibility between types'}</p>
              </div>
            </Link>
            <Link href="/test">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all text-center group">
                <div className="mx-auto mb-3 group-hover:scale-110 transition-transform"><BarChart3 className="w-8 h-8 text-cyan-400 mx-auto" /></div>
                <h3 className="text-lg font-semibold text-white mb-1">{t('mbtiTest')}</h3>
                <p className="text-sm text-slate-400">{locale === 'ko' ? '나의 MBTI 유형 찾기' : 'Find your MBTI type'}</p>
              </div>
            </Link>
            <Link href="/glossary">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all text-center group">
                <div className="mx-auto mb-3 group-hover:scale-110 transition-transform"><Globe className="w-8 h-8 text-green-400 mx-auto" /></div>
                <h3 className="text-lg font-semibold text-white mb-1">{t('glossary')}</h3>
                <p className="text-sm text-slate-400">{locale === 'ko' ? 'MBTI 용어와 개념 정리' : 'MBTI terms and concepts'}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
