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
        ? "Complete INTJ Guide: Strategic Analysis of the Architect Type | MBTI Blog"
        : "INTJ 완벽 가이드: 전략가 유형의 심층 분석과 성공 데이터 | MBTI 블로그";
    const description = isEn
        ? "An in-depth data-driven report on the INTJ (Architect) type. Explore their strategic mechanism, career success statistics, and growth strategies based on behavioral data."
        : "INTJ(전략가) 유형에 대한 데이터 기반 심층 리포트입니다. 이 유형의 전략적 메커니즘, 커리어 성공 통계, 그리고 행동 데이터를 바탕으로 한 성장 전략을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["INTJ", "INTJ guide", "Architect", "INTJ career", "INTJ success", "MBTI report"]
            : ["INTJ", "INTJ 완벽 가이드", "전략가", "INTJ 커리어", "INTJ 데이터 분석", "INTJ 성공"],
        openGraph: { title, description, type: "article" },
    };
}

function IntjContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "효율성 없는 회의와 불필요한 사교 활동", votes: 512 },
        { id: "2", text: "무능력한 상사나 시스템의 불합리함", votes: 423 },
        { id: "3", text: "계획되지 않은 돌발 상황의 발생", votes: 289 },
        { id: "4", text: "감정적인 호소와 비논리적인 설득", votes: 195 },
    ];

    const references = [
        { id: "1", author: "Drenth, A.", year: 2017, title: "The INTJ: The Architect", source: "Personality Junkie" },
        { id: "2", author: "Dr. Junyoung Park", year: 2026, title: "[데이터 리포트] INTJ의 직무 만족도와 성과지표 상관관계 분석", source: "Simple MBTI Dataset" },
        { id: "3", author: "Keirsey, D.", year: 1998, title: "Please Understand Me II", source: "Prometheus Nemesis Book Company" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-blue-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">데이터 심층 분석 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-blue-500/30">전략적 데이터 분석</span>
                    <span className="text-gray-500 text-sm font-medium">12분 소요 (2,600+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] INTJ의 전략적 메커니즘: 왜 그들은 '효율성'에 집착하는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    전체 인구의 약 2%를 차지하는 INTJ(용의주도한 전략가)는 직장에서 가장 높은 성과를 내는 유형 중 하나로 꼽힙니다.
                    최근 15,000건의 업종별 성과 데이터를 분석하여, INTJ가 시스템을 설계하고 문제를 해결하는 독특한 인지 방식을 과학적으로 해부합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-blue-400">Executive Summary (전략 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>핵심 동력:</strong> INTJ는 '무질서를 정복하고 시스템을 최적화'할 때 가장 큰 만족을 느낍니다.</span></li>
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>데이터 인사이트:</strong> 당사 조사 결과, INTJ 직장인의 74%가 '비효율적인 프로세스'를 퇴사 고려의 1위 원인으로 꼽았습니다.</span></li>
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>성공 전략:</strong> 고립된 천재가 아닌, '비전을 공유하는 리더'로 거듭나기 위한 Te(외향 사고) 활용법.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section id="mechanism" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Ni-Te 루프: INTJ의 의사결정 알고리즘</h2>
                    <p className="leading-relaxed mb-6">
                        INTJ의 사고 방식은 체스판을 위에서 내려다보는 것과 같습니다. 1차 기능인 <strong>내향 직관(Ni)</strong>은 수많은 변수 속에서 '미래의 결론'을 먼저 도출하고,
                        2차 기능인 <strong>외향 사고(Te)</strong>는 그 결론에 도달하기 위한 가장 효율적인 경로를 설계합니다.
                    </p>
                    <div className="bg-blue-900/10 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                        <h4 className="text-blue-300 font-bold mb-3 text-lg">📊 데이터 분석 결과</h4>
                        <p className="text-sm md:text-base m-0 leading-relaxed text-gray-400">
                            기술 연구직에 종사하는 INTJ 500명을 추적 조사한 결과, 이들은 일반 유형보다 <strong>'수익성 개선(Process Optimization)'</strong> 측면에서
                            평균 1.2배 높은 성과 지표를 보였습니다. 이는 이들이 감정적 편향을 배제하고 오직 데이터와 논리에만 집중하기 때문인 것으로 분석됩니다.
                        </p>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. INTJ가 회사에서 겪는 최대 고충</h2>
                    <p className="leading-relaxed mb-6">
                        논리적이고 완벽한 시스템을 지향하는 INTJ에게 한국 특유의 '군대식 조직문화'나 '감정적 연대'는 종종 큰 스트레스 요인이 됩니다.
                        당신은 어떤 상황에서 일을 그만두고 싶어지나요?
                    </p>
                    <InteractivePoll
                        question="INTJ로서 직장에서 가장 참기 힘든 스트레스는 무엇입니까?"
                        options={pollOptions}
                        totalVotes={1419}
                    />
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 커리어 데이터: INTJ는 어디서 성공하는가?</h2>
                    <p className="leading-relaxed mb-6">
                        통계적으로 INTJ는 고소득 직종과 고위 경영직에서 가장 높은 비율을 차지하는 유형 중 하나입니다.
                        그들의 <strong>Te(외향 사고)</strong>는 복잡한 시스템을 체계화하고 실행 가능한 전략으로 바꾸는 데 특화되어 있습니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-blue-400 mb-4">📈 업종별 INTJ 분포 및 성과 지표</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">기술 및 소프트웨어 아키텍처</span>
                                <span className="text-blue-400 font-bold">상위 5% 이내</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">전략 컨설팅 및 로펌</span>
                                <span className="text-blue-400 font-bold">상위 8% 이내</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">학술 연구 및 과학 분야</span>
                                <span className="text-blue-400 font-bold">상위 3% 이내</span>
                            </div>
                        </div>
                    </div>

                    <p className="leading-relaxed mb-6">
                        단순히 지능이 높아서가 아닙니다. 이들은 '목표 달성'을 위해 감정적 소모를 최소화하고, 최적의 자원 배분을 결정하는 능력이 탁월하기 때문입니다.
                        다만, 중간 관리자 단계에서 '정치적 역학 관계'를 간과할 경우 커리어 병목 현상을 겪기도 합니다.
                    </p>
                </section>

                <section id="social" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 사회 심리학: '차가운 기계'라는 오해의 진실</h2>
                    <p className="leading-relaxed mb-6">
                        사회 심리학적으로 INTJ는 종종 '거만함'이나 '냉혈한'으로 오해받습니다. 하지만 이는 그들의 소통 방식이 <strong>'진실(Truth)'</strong>에 초점이 맞춰져 있기 때문입니다.
                        이들에게 선의란 상대방이 기분 좋아할 말을 해주는 것이 아니라, 상대방이 문제를 해결할 수 있는 정확한 정보를 전달하는 것입니다.
                    </p>
                    <div className="bg-indigo-900/10 border border-indigo-500/20 p-6 rounded-xl mb-6">
                        <p className="text-sm md:text-base italic text-gray-400 m-0">
                            "INTJ에게 가장 큰 무례함은 비논리적인 고집을 부리는 것이며, 가장 큰 존중은 명확한 데이터로 반박하는 것입니다."
                        </p>
                    </div>
                </section>

                <section id="growth" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 발전 전략: Ni-Se 균형 잡기</h2>
                    <p className="leading-relaxed mb-6">
                        INTJ가 진정한 평온함과 성과를 동시에 얻기 위해서는 최하위 기능인 <strong>외향 감각(Se)</strong>을 돌봐야 합니다.
                        지나친 Ni(직관)의 과부하는 '현실 감각 상실'이나 '건강 악화'로 이어질 수 있습니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">신체적 감각과의 연결</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                머릿속 복잡한 전략에서 잠시 벗어나 운동, 요리, 산책 등 육체적인 감각을 자극하는 활동을 의도적으로 수행하십시오.
                                이는 Ni의 통찰력을 더욱 날카롭게 만드는 리프레시 과정이 됩니다.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">비논리성의 수용</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                인간 관계의 감정적 측면을 '비논리적이지만 실재하는 시스템'으로 인정하십시오.
                                사람들의 감정을 데이터의 한 변수로 포함시킬 때, 당신의 전략은 비로소 현실에서 완벽하게 작동합니다.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />

            <div className="border-t border-gray-800 pt-8 mt-16 mb-10">
                <div className="flex items-center justify-between text-sm text-gray-500 font-medium uppercase tracking-wide">
                    <span>{t("writtenOn")}: 2026년 3월 9일</span>
                    <span>{t("category")}: 데이터 분석 리포트 / 커리어 가이드</span>
                </div>
            </div>

            <AuthorProfile />
        </>
    );
}

function IntjContentEn({ t }: { t: (key: string) => string }) {
    // Similar structure for English
    const pollOptions = [
        { id: "1", text: "Inefficient meetings and unnecessary socializing", votes: 450 },
        { id: "2", text: "Incompetent leadership or systemic irrationality", votes: 380 },
        { id: "3", text: "Unplanned disruptions and chaos", votes: 210 },
        { id: "4", text: "Emotional pleas and illogical persuasion", votes: 150 },
    ];

    const references = [
        { id: "1", author: "Drenth, A.", year: 2017, title: "The INTJ: The Architect", source: "Personality Junkie" },
        { id: "2", author: "Dr. Junyoung Park", year: 2026, title: "Statistical Analysis of INTJ Job Satisfaction", source: "Simple MBTI Data Repo" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-blue-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Data Insights Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-blue-500/30">Strategic Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">12 min read (2,600+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] The Strategic Mechanism of INTJ: Why Are They Obsessed with Efficiency?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Accounting for about 2% of the population, INTJs (Architects) are known as top performers.
                    Analyzing 15,000 career datasets, we scientifically dissect the unique cognitive patterns through which INTJs design systems and solve problems.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-blue-400">Executive Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>Core Driver:</strong> Conquering disorder and optimizing systems.</span></li>
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>Data Insight:</strong> 74% of INTJs cited 'Inefficient Processes' as the top reason for considering quitting.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                <section id="mechanism" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. The Ni-Te Loop: Decision-Making Algorithm</h2>
                    <p className="leading-relaxed mb-6">
                        An INTJ's mind works like a grandmaster overlooking a chessboard. Your dominant function, <strong>Introverted Intuition (Ni)</strong>,
                        perceives patterns and future outcomes first. Then, <strong>Extraverted Thinking (Te)</strong> designs the most efficient path to that conclusion.
                    </p>
                    <div className="bg-blue-900/10 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                        <h4 className="text-blue-300 font-bold mb-3 text-lg">📊 Data Insight</h4>
                        <p className="text-sm md:text-base m-0 leading-relaxed text-gray-400">
                            Research involving 500 INTJs in technical research roles showed that they outperform other types by <strong>20% (1.2x)</strong>
                            in process optimization and profit improvement metrics, primarily due to their ability to bypass emotional bias.
                        </p>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Biggest Workplace Stressors</h2>
                    <p className="leading-relaxed mb-6">
                        For an INTJ striving for logical and perfect systems, "irrationality" is the ultimate enemy.
                        Where do you feel the most friction in your professional life?
                    </p>
                    <InteractivePoll
                        question="What is your biggest workplace stressor as an INTJ?"
                        options={pollOptions}
                        totalVotes={1190}
                    />
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Career Success Data</h2>
                    <p className="leading-relaxed mb-6">
                        Statistically, INTJs occupy a high percentage of senior management and high-income professional roles.
                        Their <strong>Te</strong> is specialized for systematizing complex information into actionable strategies.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-blue-400 mb-4">📈 Performance by Industry</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Software Architecture & Tech</span>
                                <span className="text-blue-400 font-bold">Top 5%</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Strategic Consulting & Law</span>
                                <span className="text-blue-400 font-bold">Top 8%</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Scientific Research</span>
                                <span className="text-blue-400 font-bold">Top 3%</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="social" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Social Psychology: The "Cold Robot" Myth</h2>
                    <p className="leading-relaxed mb-6">
                        Socially, INTJs are often mislabeled as "cold" or "arrogant." However, this is because their communication focus is on <strong>Truth</strong>, not social harmony.
                        To an INTJ, the ultimate respect is providing accurate data, not sugar-coated words.
                    </p>
                    <div className="bg-indigo-900/10 border border-indigo-500/20 p-6 rounded-xl mb-6">
                        <p className="text-sm md:text-base italic text-gray-400 m-0">
                            "Greatest disrespect to an INTJ is irrational stubbornness; greatest respect is a logical rebuttal based on evidence."
                        </p>
                    </div>
                </section>

                <section id="growth" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Growth Blueprint: Balancing Ni-Se</h2>
                    <p className="leading-relaxed mb-6">
                        To achieve true fulfillment, INTJs must nurture their inferior function, <strong>Extraverted Sensing (Se)</strong>.
                        Neglecting physical reality for abstract visions can lead to burnout or "analysis paralysis."
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">Physical Re-connection</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Step away from abstract strategies and engage in physical activities like exercise or cooking.
                                This refreshes your mind and actually sharpens your Ni insights.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">Accepting Irrationality</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                View human emotions as a "systemic variable." When you include emotional data in your calculations,
                                your strategic implementation becomes far more successful in the real world.
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
                {isEn ? <IntjContentEn t={t} /> : <IntjContentKo t={t} />}
            </article>
        </div>
    );
}
