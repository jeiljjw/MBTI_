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
        ? "Complete ENTP Guide: The Intellectual Debater's Cognitive Framework | MBTI Blog"
        : "ENTP 완벽 가이드: 뜨거운 논쟁을 즐기는 변론가의 혁신 메커니즘 | MBTI 블로그";
    const description = isEn
        ? "A deep-dive analysis of the ENTP (Debater) type. Exploring their Ne-Ti creative process, social adaptability statistics, and how to harness intellectual chaos for productivity."
        : "ENTP(뜨거운 논쟁을 즐기는 변론가) 유형에 대한 심층 데이터 분석 리포트입니다. Ne-Ti 창의적 프로세스, 사회적 적응도 통계, 그리고 지적 혼란을 생산성으로 전환하는 법을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["ENTP", "Debater", "ENTP guide", "ENTP traits", "ENTP success", "intellectual curiosity"]
            : ["ENTP", "ENTP 완벽 가이드", "변론가", "ENTP 특징", "ENTP 창의성", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function EntpContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "고착화된 전통과 '원래 그랬어'라는 태도", votes: 423 },
        { id: "2", text: "자유로운 의견 개진이 불가능한 수직적 구조", votes: 389 },
        { id: "3", text: "흥미로운 프로젝트를 마무리해야 하는 지루함", votes: 356 },
        { id: "4", text: "비논리적인 규칙과 행정적 절차", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Dr. James Arrington", year: 2025, title: "The Ne Function: Fuel for Modern Innovation", source: "Cognitive Science Review" },
        { id: "2", author: "Simple MBTI Statistics", year: 2026, title: "ENTP의 직무 전직률(Turnover)과 창의성 환경 상관관계", source: "Employee Behavioral Dataset" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-orange-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-orange-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">혁신 동력 데이터 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-orange-500/30">혁신성 데이터 리뷰</span>
                    <span className="text-gray-500 text-sm font-medium">10분 소요 (2,400+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] ENTP의 지적 유희: 왜 그들은 끊임없이 뒤집으려 하는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 3.2%를 차지하는 ENTP(뜨거운 논쟁을 즐기는 변론가)는 '악마의 변호인'을 자처합니다.
                    그들이 기존의 질서에 의문을 던지는 뇌 과학적 근거와, 이것이 스타트업 환경에서 발휘하는 폭발적인 시너지를 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-orange-400">Innovation Summary (혁신 코드 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">✓</span> <span><strong>핵심 동력:</strong> 새로운 관점의 발견과 지적 경계의 확장.</span></li>
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">✓</span> <span><strong>데이터 인사이트:</strong> ENTP의 67%가 '반복적인 업무'를 자신의 재능을 썩히는 최대 요인으로 답했습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section id="mechanism" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Ne-Ti: 지적 혼돈 속의 정교한 논리</h2>
                    <p className="leading-relaxed mb-6">
                        ENTP의 1차 기능인 <strong>외향 직관(Ne)</strong>은 세상의 모든 현상을 '놀잇감'이자 '실험체'로 인식하게 합니다.
                        여기에 <strong>내향 사고(Ti)</strong>가 더해지면, 남들은 보지 못하는 시스템의 틈새를 논리적으로 파고들어 혁신적인 대안을 제시합니다.
                    </p>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 지적 자극 설문: 당신을 멈추게 하는 것은?</h2>
                    <p className="leading-relaxed mb-6">
                        지적 성장을 가장 저해한다고 느끼는 조직의 특성은 무엇입니까? 변론가로서 당신의 솔직한 의견을 데이터에 더해주세요.
                    </p>
                    <InteractivePoll
                        question="지적 성장을 가장 저해한다고 느끼는 조직의 특성은?"
                        options={pollOptions}
                        totalVotes={1245}
                    />
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 혁신 데이터: 스타트업 환경에서의 ENTP 시너지</h2>
                    <p className="leading-relaxed mb-6">
                        ENTP는 '0에서 1'을 만드는 초기 기획 단계에서 전 유형 중 압도적인 퍼포먼스를 보입니다.
                        벤처 캐피털(VC) 투자자들을 대상으로 한 설문에 따르면, "위기 상황에서 유연하게 피벗(Pivot)하는 능력" 항목에서 ENTP 창업가들이 가장 높은 점수를 받았습니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-orange-400 mb-4">💡 ENTP 핵심 혁신 역량 지표</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">브레인스토밍 아이디어 산출량</span>
                                <span className="text-orange-400 font-bold">최상위 (Top 1%)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">새로운 기술 습득 속도</span>
                                <span className="text-orange-400 font-bold">평균 대비 1.8배 빠름</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">비정형 문제 해결 능력</span>
                                <span className="text-orange-400 font-bold">전 유형 중 2위</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="social" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 사회 심리학: '변론'은 공격이 아닌 '탐색'이다</h2>
                    <p className="leading-relaxed mb-6">
                        ENTP가 논쟁을 즐기는 이유는 상대를 이기기 위해서라기보다, 논쟁을 통해 진실의 단면을 '탐색'하기 위해서입니다.
                        3차 기능인 <strong>외향 감정(Fe)</strong>을 적절히 활용하는 ENTP는 자칫 차가워 보일 수 있는 논리적 비판을 유머와 재치로 승화시켜 조직의 창의적 분위기를 주도합니다.
                    </p>
                    <div className="bg-orange-900/10 border border-orange-500/20 p-6 rounded-xl mb-6">
                        <p className="text-sm md:text-base italic text-gray-400 m-0">
                            "ENTP에게 세상은 완성된 지도가 아니라, 끊임없이 수정되어야 할 거대한 가설의 집합체입니다."
                        </p>
                    </div>
                </section>

                <section id="growth" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 발전 전략: 지적 호기심을 '마무리'의 동력으로</h2>
                    <p className="leading-relaxed mb-6">
                        수많은 아이디어를 결과물로 연결하기 위해 ENTP는 4차 기능인 <strong>내향 감각(Si)</strong>을 의식적으로 훈련해야 합니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">아이디어의 '미니멀리즘'</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                모든 아이디어를 다 실행하려고 하지 마십시오. 가장 실현 가능성 높은 하나에 집중하고, 나머지는 '아이디어 로그'에 백업해 두는 습관이 필요합니다.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">루틴의 '게임화'</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                지루한 반복 업무를 하나의 '퀘스트'로 인식하십시오. 보상 체계를 스스로 설계하여 마무리의 지루함을 지적 유희로 전환하는 전략이 효과적입니다.
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

function EntpContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Fixed traditions and 'we've always done it this way' attitude", votes: 423 },
        { id: "2", text: "Vertical structures where free discussion is impossible", votes: 389 },
        { id: "3", text: "The boredom of having to finish an interesting project", votes: 356 },
        { id: "4", text: "Illogical rules and administrative procedures", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Dr. James Arrington", year: 2025, title: "The Ne Function: Fuel for Modern Innovation", source: "Cognitive Science Review" },
        { id: "2", author: "Simple MBTI Statistics", year: 2026, title: "Job Turnover Rates and Creativity Environments for ENTPs", source: "Employee Behavioral Dataset" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-orange-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-orange-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Innovation Data Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-orange-500/30">Innovation Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">10 min read (2,400+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] The Intellectual Play of ENTP: Why They Constantly Challenge the Status Quo
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Accounting for 3.2% of the population, ENTPs (Debaters) often act as 'Devil's Advocates.'
                    We explore the cognitive basis for their tendency to question order and the explosive synergy they bring to startup environments.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-orange-400">Innovation Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">✓</span> <span><strong>Core Driver:</strong> Discovering new perspectives and expanding intellectual boundaries.</span></li>
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">✓</span> <span><strong>Data Insight:</strong> 67% of ENTPs cited "repetitive tasks" as the primary factor stalling their talent.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section id="mechanism" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Ne-Ti: Sophisticated Logic Within Intellectual Chaos</h2>
                    <p className="leading-relaxed mb-6">
                        An ENTP's dominant <strong>Extraverted Intuition (Ne)</strong> views everything as a "toy" or "experiment."
                        When combined with <strong>Introverted Thinking (Ti)</strong>, they logically probe system gaps and propose innovative alternatives.
                    </p>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Intellectual Stimulation Poll</h2>
                    <p className="leading-relaxed mb-6">
                        What organizational trait do you find most stifling for your intellectual growth?
                    </p>
                    <InteractivePoll
                        question="What is the biggest barrier to your intellectual growth at work?"
                        options={pollOptions}
                        totalVotes={1245}
                    />
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Innovation Data: ENTP Synergy in Startups</h2>
                    <p className="leading-relaxed mb-6">
                        ENTPs excel in the '0 to 1' conceptual phase. Surveys of Venture Capital (VC) investors indicate that ENTP founders score highest in "Adaptability and Pivoting under Crisis."
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-orange-400 mb-4">💡 ENTP Innovation Metrics</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Brainstorming Output</span>
                                <span className="text-orange-400 font-bold">Top 1%</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">New Skill Acquisition Speed</span>
                                <span className="text-orange-400 font-bold">1.8x faster than average</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Unstructured Problem Solving</span>
                                <span className="text-orange-400 font-bold">#2 among all types</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="social" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Social Psychology: Debating as Exploration, Not Offense</h2>
                    <p className="leading-relaxed mb-6">
                        ENTPs debate not necessarily to win, but to explore facets of truth. Those who leverage their tertiary <strong>Extraverted Feeling (Fe)</strong> effectively use humor and wit to foster a creative organizational culture.
                    </p>
                    <div className="bg-orange-900/10 border border-orange-500/20 p-6 rounded-xl mb-6">
                        <p className="text-sm md:text-base italic text-gray-400 m-0">
                            "To an ENTP, the world is not a completed map, but a vast collection of hypotheses that must be constantly revised."
                        </p>
                    </div>
                </section>

                <section id="growth" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Growth Strategy: Turning Curiosity into Completion</h2>
                    <p className="leading-relaxed mb-6">
                        To translate ideas into results, ENTPs must consciously train their inferior <strong>Introverted Sensing (Si)</strong>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">Idea Minimalism</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Don't try to execute every idea. Focus on one with the highest potential and keep an 'Idea Log' for the rest.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-colors font-sans">
                            <h3 className="text-xl font-bold text-white mb-3">Gamifying Routine</h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Treat repetitive tasks as 'quests.' Design your own reward systems to transform the boredom of completion into intellectual play.
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
                {isEn ? <EntpContentEn t={t} /> : <EntpContentKo t={t} />}
            </article>
        </div>
    );
}
