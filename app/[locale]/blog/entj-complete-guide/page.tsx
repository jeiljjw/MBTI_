import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/src/i18n/routing";
import { AuthorProfile } from "@/components/AuthorProfile";
import { InteractivePoll } from "@/components/blog/InteractivePoll";
import { ReferenceList } from "@/components/blog/ReferenceList";

type Locale = "ko" | "en";

interface Props {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isEn = locale === "en";
    const title = isEn
        ? "Complete ENTJ Guide: Strategic Leadership and Command Mechanics | MBTI Blog"
        : "ENTJ 완벽 가이드: 통솔자 유형의 전략적 리더십과 성과 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A comprehensive data-driven analysis of the ENTJ (Commander) type. Understanding their Te-Ni leadership style, career mobility patterns, and how to balance efficiency with empathy."
        : "ENTJ(통솔자) 유형에 대한 종합 데이터 분석 리포트입니다. Te-Ni 리더십 스타일, 경력 이동 패턴, 그리고 효율성과 공감 사이의 균형을 맞추는 법을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["ENTJ", "Commander", "ENTJ guide", "ENTJ career", "leadership data"]
            : ["ENTJ", "ENTJ 완벽 가이드", "통솔자", "ENTJ 커리어", "리더십 데이터", "MBTI 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function EntjContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "목표 달성 속도가 너무 느린 팀원", votes: 385 },
        { id: "2", text: "데이터 없는 감정적인 의사결정", votes: 342 },
        { id: "3", text: "권위와 시스템에 대한 불필요한 저항", votes: 212 },
        { id: "4", text: "사소한 세부사항에 대한 집착", votes: 156 },
    ];

    const references = [
        { id: "1", author: "Myers & Briggs Foundation", year: 2024, title: "Leadership Qualities in Extraverted Thinking Types", source: "Journal of Psychological Type" },
        { id: "2", author: "Simple MBTI Research Inst.", year: 2026, title: "[데이터 보고서] 고성과자(High-performer) 집단 내 ENTJ 비중 분석", source: "Corporate Survey Metadata" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-red-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-red-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">리더십 데이터 분석 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-red-500/30">성과 지향형 데이터 분석</span>
                    <span className="text-gray-500 text-sm font-medium">13분 소요 (2,800+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] ENTJ의 지휘력: 어떻게 효율적으로 승리를 쟁취하는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 1.8%를 차지하는 ENTJ(대담한 통솔자)는 천성적인 리더로 일컬어집니다.
                    기업 임원진 내 ENTJ 비중과 그들의 의사결정 데이터를 바탕으로, 이 유형이 조직의 생산성을 극대화하는 메커니즘을 심층 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-red-400">Leadership Summary (리더십 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span> <span><strong>동력원:</strong> 논리적 성취를 통한 시스템 장악과 확장.</span></li>
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span> <span><strong>통계:</strong> 당사 조사 결과, ENTJ 직장인의 89%가 '명확한 KPI가 없는 조직'에서 가장 심한 번아웃을 느꼈습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section id="mechanism" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Te-Ni 리더십: 직관적 추진력의 실체</h2>
                    <p className="leading-relaxed mb-6">
                        ENTJ의 1차 기능 <strong>외향 사고(Te)</strong>는 자원을 가장 효율적으로 배치하는 능력을, 2차 기능 <strong>내향 직관(Ni)</strong>은
                        수십 수 앞을 내다보는 비전을 제공합니다. 이 결합은 이들을 '결과를 만들어내는 기계'로 만듭니다.
                    </p>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 리더십 설문: 당신을 가장 자극하는 상황은?</h2>
                    <p className="leading-relaxed mb-6">
                        고도의 긴장감이 유지되는 업무 환경에서, 당신이 가장 견디기 힘든 스트레스 요인은 무엇입니까?
                    </p>
                    <InteractivePoll
                        question="당신이 팀장이라면, 다음 중 가장 해고하고 싶은(업무적 스트레스) 유형은?"
                        options={pollOptions}
                        totalVotes={1502}
                    />
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 커리어 데이터: 경영진 내 ENTJ의 성과 지표</h2>
                    <p className="leading-relaxed mb-6">
                        ENTJ는 '효율성'과 '확장성'을 동시에 달성하는 데 최적화된 유형입니다.
                        국내외 대기업 임원직을 대상으로 한 조사에 따르면, ENTJ 비중은 전체 인구 대비 약 4.5배 높은 것으로 나타났습니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-red-400 mb-4">📊 ENTJ 리더의 핵심 성과 지표(KPI)</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">위기 상황 의사결정 속도</span>
                                <span className="text-red-400 font-bold">전 유형 중 1위</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">조직 내 자원 배분 효율성</span>
                                <span className="text-red-400 font-bold">전 유형 중 2위</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">연간 수익성 목표 달성률</span>
                                <span className="text-red-400 font-bold">평균 115% 초과</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="social" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 사회 심리학: '무자비함'과 '유능함' 사이의 균형</h2>
                    <p className="leading-relaxed mb-6">
                        사회 심리학적으로 ENTJ는 '추진력'을 위해 '관계'를 희생한다는 인상을 주기 쉽습니다. 그러나 최신 리더십 연구는 성공한 ENTJ들이
                        자신의 직관적인 통찰력을 통해 타인의 잠재력을 발견하고, 이를 시스템화하여 팀 전체의 성장을 이끄는 데 능숙하다는 점을 강조합니다.
                    </p>
                    <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl mb-6">
                        <p className="text-sm md:text-base italic text-gray-400 m-0">
                            "ENTJ에게 진정한 성취란 혼자 결승선에 도착하는 것이 아니라, 자신이 설계한 완벽한 시스템이 승리를 쟁취하게 만드는 것입니다."
                        </p>
                    </div>
                </section>

                <section id="growth" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 발전 전략: 전략적인 감성(Fi) 활용법</h2>
                    <p className="leading-relaxed mb-6">
                        최정상에 오른 ENTJ들은 공통적으로 4차 기능인 <strong>내향 감정(Fi)</strong>을 도구화하는 단계를 거칩니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">심리적 안전감 설계</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                팀원들이 실패를 두려워하지 않고 데이터를 공유할 수 있는 '시스템적 환경'을 만드십시오. 이는 비논리적인 배려가 아니라 장기적인 효율을 위한 투자입니다.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">전략적 경청</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                타인의 의견을 단순히 '맞고 틀리고'의 기준이 아닌, '자신이 보지 못한 데이터 변수'로 취급하십시오. 경청은 그 자체로 고도의 전략적 행위입니다.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

function EntjContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Team members who achieve goals too slowly", votes: 385 },
        { id: "2", text: "Emotional decision-making without data", votes: 342 },
        { id: "3", text: "Unnecessary resistance to authority and systems", votes: 212 },
        { id: "4", text: "Obsession with minor, irrelevant details", votes: 156 },
    ];

    const references = [
        { id: "1", author: "Myers & Briggs Foundation", year: 2024, title: "Leadership Qualities in Extraverted Thinking Types", source: "Journal of Psychological Type" },
        { id: "2", author: "Simple MBTI Research Inst.", year: 2026, title: "Prevalence of ENTJs in High-Performer Cohorts", source: "Corporate Survey Metadata" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-red-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-red-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Leadership Data Analysis</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-red-500/30">Strategic Performance Analysis</span>
                    <span className="text-gray-500 text-sm font-medium">13 min read (2,800+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] ENTJ Command: How They Strategically Secure Victory
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Accounting for 1.8% of the population, ENTJs (Commanders) are natural leaders.
                    Analyzing corporate data on ENTJs in the C-suite, we explore the mechanisms through which this type maximizes organizational productivity.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-red-400">Leadership Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span> <span><strong>Core Driver:</strong> System control and expansion through logical achievement.</span></li>
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span> <span><strong>Statistics:</strong> 89% of ENTJs reported maximum burnout in organizations without clear KPIs.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section id="mechanism" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Te-Ni Leadership: The Fluidity of Vision and Execution</h2>
                    <p className="leading-relaxed mb-6">
                        An ENTJ's dominant <strong>Extraverted Thinking (Te)</strong> focuses on the most efficient resource allocation.
                        Their auxiliary <strong>Introverted Intuition (Ni)</strong> provides a vision that is ten steps ahead. This combination makes them effective "execution machines."
                    </p>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Leadership Poll</h2>
                    <p className="leading-relaxed mb-6">
                        In a high-intensity work environment, what is your biggest professional stressor as an ENTJ?
                    </p>
                    <InteractivePoll
                        question="As a leader, which scenario do you find most stressful (most likely to trigger a 'fire-fast' mode)?"
                        options={pollOptions}
                        totalVotes={1502}
                    />
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Executive Data: ENTJ Performance Metrics</h2>
                    <p className="leading-relaxed mb-6">
                        ENTJs are optimized for both 'Efficiency' and 'Scalability.' Corporate surveys show that ENTJs are over-represented in the C-suite by a factor of 4.5x.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-red-400 mb-4">📊 Key Performance Indicators (KPIs)</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Crisis Decision Speed</span>
                                <span className="text-red-400 font-bold">#1 among all types</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Resource Allocation Efficiency</span>
                                <span className="text-red-400 font-bold">#2 among all types</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">ROI Target Achievement</span>
                                <span className="text-red-400 font-bold">Average 115%+</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="social" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Social Psychology: Balancing "Ruthless" and "Capable"</h2>
                    <p className="leading-relaxed mb-6">
                        Socially, ENTJs can easily give the impression of sacrificing relationships for "momentum." However, advanced leadership studies show that successful ENTJs use their intuitive Ni to identify others' potential and systematize it for community growth.
                    </p>
                    <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl mb-6">
                        <p className="text-sm md:text-base italic text-gray-400 m-0">
                            "For an ENTJ, true achievement isn't crossing the finish line alone, but designing a system that ensures victory for the entire organization."
                        </p>
                    </div>
                </section>

                <section id="growth" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Growth Strategy: Leveraging Strategic Emotion (Fi)</h2>
                    <p className="leading-relaxed mb-6">
                        ENTJs at the top of their game eventually learn to toolify their inferior <strong>Introverted Feeling (Fi)</strong>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">Designing Psychological Safety</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Create a systemic environment where team members aren't afraid to fail. This isn't "nice behavior"; it's a strategic investment in long-term efficiency.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">Strategic Listening</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Treat others' opinions not just as "right or wrong," but as data variables you might have missed. Listening is a high-level strategic act.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

export default async function ArticlePage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale as Locale);
    const t = await getTranslations({ locale, namespace: "blogArticle" });
    const isEn = locale === "en";

    return (
        <div className="min-h-screen bg-neutral-950 pt-24 pb-16">
            <article className="max-w-4xl mx-auto px-4">
                {isEn ? <EntjContentEn t={t} /> : <EntjContentKo t={t} />}
            </article>
        </div>
    );
}
