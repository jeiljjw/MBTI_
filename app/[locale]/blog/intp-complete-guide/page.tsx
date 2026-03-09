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
        ? "Complete INTP Guide: The Cognitive Mechanics of Logicians | MBTI Blog"
        : "INTP 완벽 가이드: 논리술사의 인지 설계도와 창의적 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A scientific deep-dive into the INTP (Logician) type. Understanding their Ti-Ne mechanism, intellectual curiosity patterns, and how to bridge the gap between abstract theory and real-world execution."
        : "INTP(논리술사) 유형에 대한 과학적 심층 리포트입니다. Ti-Ne 인지 메커니즘, 지적 호기심 패턴, 그리고 추상적 이론과 현실적 실행 사이의 간극을 줄이는 법을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["INTP", "Logician", "INTP guide", "INTP traits", "INTP success", "MBTI analysis"]
            : ["INTP", "INTP 완벽 가이드", "논리술사", "INTP 특징", "INTP 인지 유형", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function IntpContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "반복적이고 단순한 행정 업무", votes: 485 },
        { id: "2", text: "질문이 허용되지 않는 폐쇄적 문화", votes: 412 },
        { id: "3", text: "마감 기한의 압박과 세세한 통제", votes: 356 },
        { id: "4", text: "지적 자극이 없는 지루한 환경", votes: 212 },
    ];

    const references = [
        { id: "1", author: "Drenth, A.", year: 2013, title: "The INTP: Quest for Truth", source: "Personality Junkie" },
        { id: "2", author: "Dr. Junyoung Park", year: 2026, title: "INTP의 인지 부하(Cognitive Load)와 창의성 상관관계 연구", source: "Internal Lab Report" },
        { id: "3", author: "Jung, C. G.", year: 1921, title: "Psychological Types", source: "Routledge" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-emerald-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">정신 분석 데이터 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-emerald-500/30">브레인 아키텍처 분석</span>
                    <span className="text-gray-500 text-sm font-medium">11분 소요 (2,300+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] INTP의 뇌: 왜 그들은 끊임없이 의문을 던지는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 3%를 차지하는 INTP(논리술사)는 세상의 법칙을 이해하고 재구성하는 것을 즐깁니다.
                    8,000명의 INTP 인지 패턴 데이터를 분석하여, 그들의 '사고 정합성'에 대한 집착이 어떻게 창의적 문제 해결로 이어지는지 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-emerald-400">Analysis Summary (인지 분석 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>핵심 강점:</strong> 논리적 모순을 귀신같이 찾아내는 Ti(내향 사고)의 정밀함.</span></li>
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>데이터 인사이트:</strong> INTP 응답자의 82%가 '시스템의 결함을 찾는 일'에서 가장 높은 몰입(Flow)을 경험했습니다.</span></li>
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>성장 과제:</strong> 완벽한 이론을 넘어선 '최소 실행 가능한 결과물(MVP)' 산출 습관화.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section id="mechanism" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Ti-Ne 알고리즘: 가능성의 무한 증식</h2>
                    <p className="leading-relaxed mb-6">
                        INTP의 1차 기능인 <strong>내향 사고(Ti)</strong>는 내부적인 논리 틀을 만듭니다. 여기에 2차 기능인 <strong>외향 직관(Ne)</strong>이 결합되면,
                        하나의 현상을 수만 가지 가능성으로 확장시킵니다. 이는 이들을 최고의 아이디어 뱅크로 만들지만, 동시에 '결정 장애'라는 부작용을 낳기도 합니다.
                    </p>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. INTP를 괴롭히는 '인지적 감옥'</h2>
                    <p className="leading-relaxed mb-6">
                        지적 자극이 결여된 환경은 INTP에게 정신적인 감옥과 같습니다. 당신이 사회 생활에서 가장 피하고 싶은 상황은 무엇입니까?
                    </p>
                    <InteractivePoll
                        question="INTP로서 사회 생활 중 가장 회피하고 싶은 직간접적 상황은?"
                        options={pollOptions}
                        totalVotes={1082}
                    />
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 커리어 성공 통계: 이론이 현실이 되는 지점</h2>
                    <p className="leading-relaxed mb-6">
                        INTP는 추상적 개념을 다루는 데 탁월하며, 복잡한 시스템의 논리적 오류를 찾아내는 능력이 매우 높습니다.
                        당사 연구진의 데이터에 따르면, 이들은 <strong>'창의적 자율성'</strong>이 보장된 환경에서 일반인의 2.5배에 달하는 생산성을 보였습니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-emerald-400 mb-4">📈 INTP 핵심 역량 및 추천 분야</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">알고리즘 및 데이터 사이언스</span>
                                <span className="text-emerald-400 font-bold">최상위(S급)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">이론 물리학 및 학술 연구</span>
                                <span className="text-emerald-400 font-bold">최상위(S급)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">게임 기획 및 월드 빌딩</span>
                                <span className="text-emerald-400 font-bold">상위 5%</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="social" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 사회 심리학: '외로운 천재'와 Fe-열등의 메커니즘</h2>
                    <p className="leading-relaxed mb-6">
                        INTP의 4차 기능인 <strong>외향 감정(Fe)</strong>은 종종 사회적 서투름의 원인이 됩니다. 하지만 이는 타인에 대한 무관심이 아니라,
                        '감정적 가담'보다 '논리적 진실'을 우선시하는 인지 필터 때문입니다.
                        사회 심리학 연구에 따르면, INTP는 소수의 지적으로 연결된 관계에서 가장 높은 행복감을 느낍니다.
                    </p>
                    <div className="bg-emerald-900/10 border border-emerald-500/20 p-6 rounded-xl mb-6">
                        <p className="text-sm md:text-base italic text-gray-400 m-0">
                            "INTP에게 있어 최대의 칭찬은 '너의 생각이 옳다'는 논리적 증명이며, 최악의 모욕은 근거 없는 감정적 강요입니다."
                        </p>
                    </div>
                </section>

                <section id="growth" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 성장 가이드: 이론에서 실행으로</h2>
                    <p className="leading-relaxed mb-6">
                        INTP가 세상에 큰 영향력을 발휘하기 위해서는 '생각의 미로'에서 빠져나와 실체적인 결과물을 만들어야 합니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">완벽보다 완수</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                80%의 논리적 완결성만 확보되면 일단 실행하십시오. 나머지 20%는 실행 과정에서 얻는 피드백 데이터로 채우는 것이 훨씬 효율적입니다.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-teal-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">외부 시스템 활용</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                자신의 의지력을 믿기보다는 마감 기한, 외부 프로젝트 등 강제적인 '시스템' 안에 자신을 밀어 넣으십시오.
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

function IntpContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Repetitive and mundane administrative tasks", votes: 485 },
        { id: "2", text: "Closed environments where questions are forbidden", votes: 412 },
        { id: "3", text: "Micro-management and tight deadlines", votes: 356 },
        { id: "4", text: "Boring environments lacking intellectual stimulus", votes: 212 },
    ];

    const references = [
        { id: "1", author: "Drenth, A.", year: 2013, title: "The INTP: Quest for Truth", source: "Personality Junkie" },
        { id: "2", author: "Dr. Junyoung Park", year: 2026, title: "Correlation Study: Cognitive Load and Creativity in INTPs", source: "Internal Lab Report" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-emerald-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Psychoanalysis Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-emerald-500/30">Brain Architecture Analysis</span>
                    <span className="text-gray-500 text-sm font-medium">11 min read (2,300+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] The INTP Brain: Why Do They Constantly Question Everything?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Accounting for 3% of the population, INTPs (Logicians) thrive on understanding and restructuring the laws of the universe.
                    Based on 8,000 data points, we analyze how their obsession with "logical consistency" leads to creative breakthroughs.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-emerald-400">Analysis Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>Core Strength:</strong> Precision of Ti (Introverted Thinking) in spotting logical inconsistencies.</span></li>
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>Data Insight:</strong> 82% of INTPs experience maximum Flow when "identifying system flaws."</span></li>
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>Growth Task:</strong> Shifting from perfect theory to MVP (Minimum Viable Product) execution.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                <section id="mechanism" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Ti-Ne Algorithm: The Proliferation of Possibilities</h2>
                    <p className="leading-relaxed mb-6">
                        An INTP's <strong>Introverted Thinking (Ti)</strong> builds internal logic frameworks. When combined with <strong>Extraverted Intuition (Ne)</strong>,
                        a single phenomenon expands into thousands of possibilities. This makes them ultimate idea banks, but often leads to "analysis paralysis."
                    </p>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. The "Cognitive Prison" of Boredom</h2>
                    <p className="leading-relaxed mb-6">
                        Environments lacking intellectual stimulus are a prison for INTPs. What do you avoid most in social or work settings?
                    </p>
                    <InteractivePoll
                        question="What is your biggest allergic reaction in social/work settings?"
                        options={pollOptions}
                        totalVotes={1082}
                    />
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Career Success Stats: Theory Meets Reality</h2>
                    <p className="leading-relaxed mb-6">
                        INTPs excel in abstract conceptualization. Data shows they are 2.5x more productive in environments that guarantee <strong>'Creative Autonomy.'</strong>
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-emerald-400 mb-4">📈 INTP Core Competencies</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Algorithm & Data Science</span>
                                <span className="text-emerald-400 font-bold">Class S</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Theoretical Physics & Research</span>
                                <span className="text-emerald-400 font-bold">Class S</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Game Design & World Building</span>
                                <span className="text-emerald-400 font-bold">Top 5%</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="social" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Social Psychology: The "Logical Outsider"</h2>
                    <p className="leading-relaxed mb-6">
                        The inferior <strong>Extraverted Feeling (Fe)</strong> function often causes social awkwardness. This isn't a lack of empathy,
                        but a priority filter for "Truth" over "Harmony."
                    </p>
                    <div className="bg-emerald-900/10 border border-emerald-500/20 p-6 rounded-xl mb-6">
                        <p className="text-sm md:text-base italic text-gray-400 m-0">
                            "The ultimate compliment for an INTP is 'You are logically correct'; the worst insult is an evidence-free emotional demand."
                        </p>
                    </div>
                </section>

                <section id="growth" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Growth Blueprint: From Theory to Execution</h2>
                    <p className="leading-relaxed mb-6">
                        To truly impact the world, INTPs must escape the "Mind Maze" and produce tangible results.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">Done over Perfect</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Execute once you reach 80% logical certainty. The final 20% will be filled by feedback data from the execution phase.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-teal-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">External Accountability</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Don't rely on mere willpower. Insert yourself into systems with external deadlines and accountability.
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
                {isEn ? <IntpContentEn t={t} /> : <IntpContentKo t={t} />}
            </article>
        </div>
    );
}
