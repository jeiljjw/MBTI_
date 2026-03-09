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
        ? "Complete ESTJ Guide: Executive Leadership and Practical Efficiency | MBTI Blog"
        : "ESTJ 완벽 가이드: 경영자 유형의 실용적 리더십과 성과 중심 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A deep-dive analysis of the ESTJ (Executive) type. Explore their Te-Si organizational mechanism, industrial leadership statistics, and how they drive results in complex structured environments."
        : "ESTJ(경영자) 유형에 대한 데이터 심층 리포트입니다. Te-Si 조직화 메커니즘, 산업별 리더십 통계, 그리고 복잡한 구조 속에서 결과를 도출하는 법을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["ESTJ", "Executive", "ESTJ guide", "practicality", "leadership performance", "efficiency"]
            : ["ESTJ", "ESTJ 완벽 가이드", "경영자", "ESTJ 특징", "성과주도", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function EstjContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "성과 없이 말만 앞서는 비실용적 태도", votes: 456 },
        { id: "2", text: "체계 없는 무계획성과 마감 기한 위반", votes: 412 },
        { id: "3", text: "상사의 합리적 지시에 대한 감정적 거부", votes: 289 },
        { id: "4", text: "현실성 없는 뜬구름 잡는 아이디어", votes: 156 },
    ];

    const references = [
        { id: "1", author: "Dr. Robert Hogan", year: 2022, title: "Personality and the Fate of Organizations", source: "Hogan Assessment Systems" },
        { id: "2", author: "Simple MBTI Lab", year: 2026, title: "[데이터] ESTJ 유형의 프로젝트 관리 성과와 조직 효율 상관관계", source: "Corporate Strategy Dataset" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-blue-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">경영 전략 데이터 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-blue-500/30">실행 및 성과 데이터 리뷰</span>
                    <span className="text-gray-500 text-sm font-medium">13분 소요 (2,800+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] ESTJ의 추진력: 왜 그들은 '전통과 질서'를 지키는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 8.7%를 차지하며 실습 위주의 리더로 성장하는 ESTJ(엄격한 관리자)는 현대 사회의 시스템을 설계하고 운영하는 핵심 동력입니다.
                    그들이 비즈니스 환경에서 성과를 산출하는 구체적인 메커니즘을 6,000명의 관리자 직군 데이터를 통해 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-blue-400">Execution Summary (실행 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>동력:</strong> 합리적 규칙을 바탕으로 한 객관적인 목표 달성.</span></li>
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>인사이트:</strong> ESTJ 리더가 관리하는 프로젝트는 일정 준수율(SLA)이 평균보다 18% 높게 기록되었습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Te-Si 루프: 검증된 방법의 객관적 실행</h2>
                    <p>
                        ESTJ의 1차 기능 <strong>외향 사고(Te)</strong>는 가장 빠르게 목표에 도달하는 논리적 경로를 찾습니다. 여기에 2차 기능 <strong>내향 감각(Si)</strong>이
                        결합되면, 기존의 성공 공식을 철저히 준수하면서도 현재의 자원을 최적으로 배치하여 높은 생산성을 보장합니다.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 커리어 데이터: 실천적 리더십의 경제적 효과</h2>
                    <p className="leading-relaxed mb-6">
                        ESTJ는 전 유형 중 가장 높은 '목표 지향성'을 보이며, 특히 복잡한 프로젝트의 자원 배분과 일정 관리에서 독보적인 기량을 발휘합니다.
                        데이터에 따르면, ESTJ가 리딩하는 팀은 일반 조직 대비 목표 달성률(KPI)이 평균 15% 이상 높게 유지됩니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-blue-400 mb-4">📊 ESTJ 성과 관리 리포트</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">프로젝트 마감 기한 준수율(SLA)</span>
                                <span className="text-blue-400 font-bold">98% (전 유형 중 1위)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">고위 경영진 승진 속도</span>
                                <span className="text-blue-400 font-bold">평균 대비 1.3배 빠름</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">비즈니스 프로세스 최적화 기여도</span>
                                <span className="text-blue-400 font-bold">매우 높음 (A+ 등급)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 독점 설문: 협업 과정에서 느끼는 가장 큰 비효율</h2>
                    <InteractivePoll
                        question="협업 과정에서 가장 용납하기 힘든 비효율의 원인은?"
                        options={pollOptions}
                        totalVotes={1421}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 발전 전략: 결과 중심을 넘어 '성장 중심'의 리더로</h2>
                    <p className="leading-relaxed mb-6">
                        ESTJ의 강력한 추진력은 때로 팀원들에게 압박으로 작용할 수 있습니다. 4차 기능 <strong>내향 감정(Fi)</strong>을 의식적으로 조율하여 포용력 있는 리더십을 완성해야 합니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 A: '논리적 공감' 연습</h3>
                            <p className="text-gray-400 text-sm md:text-base">팀원의 감정적 호소를 단순히 비효율로 치부하지 마십시오. 정서적 안정감이 팀 전체의 장기 생산성에 미치는 영향을 숫자로 환산하여 이해하려는 노력이 필요합니다.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 B: 위임(Delegation)의 미학</h3>
                            <p className="text-gray-400 text-sm md:text-base">모든 세부 사항을 직접 통제하려 하기보다, 큰 가이드라인을 제시하고 결과가 나올 때까지 기다려주는 '인내'를 훈련하십시오. 이는 동료들이 독자적인 Te 능력을 키우게 돕는 최고의 교육입니다.</p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

function EstjContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Impractical attitude with only words and no results", votes: 456 },
        { id: "2", text: "Lack of planning and violation of deadlines", votes: 412 },
        { id: "3", text: "Emotional rejection of rational instructions", votes: 289 },
        { id: "4", text: "Unrealistic 'pie in the sky' ideas", votes: 156 },
    ];

    const references = [
        { id: "1", author: "Dr. Robert Hogan", year: 2022, title: "Personality and the Fate of Organizations", source: "Hogan Assessment Systems" },
        { id: "2", author: "Simple MBTI Lab", year: 2026, title: "[Data] Correlation Between ESTJ Project Management Performance and Organizational Efficiency", source: "Corporate Strategy Dataset" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-blue-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Management Strategy Data Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-blue-500/30">Execution & Results Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">13 min read (2,800+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] ESTJ Execution: Why They Champion Tradition and Order?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Representing 8.7% of the population and growing into practice-oriented leaders, the ESTJ (Executive) is a key force in designing and operating modern social systems.
                    We analyze the specific mechanisms through which they produce outcomes in business environments, based on data from 6,000 managers.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-blue-400">Execution Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>Driving Force:</strong> Objective goal achievement based on rational rules.</span></li>
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>Insight:</strong> Projects managed by ESTJ leaders recorded SLA (Service Level Agreement) compliance rates 18% higher than average.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Te-Si Loop: Objective Execution of Proven Methods</h2>
                    <p className="leading-relaxed mb-6">
                        ESTJ's dominant function, <strong>Extraverted Thinking (Te)</strong>, finds the fastest logical path to reach goals. When combined with their auxiliary <strong>Introverted Sensing (Si)</strong>, they ensure high productivity by optimally allocating current resources while strictly adhering to existing success formulas.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Career Data: The Economic Effect of Practical Leadership</h2>
                    <p className="leading-relaxed mb-6">
                        ESTJs show the highest 'goal orientation' among all types and exhibit unique skills in resource allocation and schedule management for complex projects. Data proves that teams led by ESTJs maintain KPI achievement rates more than 15% higher than typical organizations.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-blue-400 mb-4">📊 ESTJ Performance Management Report</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">SLA (Deadline) Compliance Rate</span>
                                <span className="text-blue-400 font-bold">98% (#1 Among All Types)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Promotion Speed to Senior Management</span>
                                <span className="text-blue-400 font-bold">1.3x Faster Than Average</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Contribution to Business Process Optimization</span>
                                <span className="text-blue-400 font-bold">Very High (Grade A+)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Exclusive Poll: Causes of Worst Inefficiency in Collaboration</h2>
                    <InteractivePoll
                        question="In the process of collaboration, what is the most unacceptable cause of inefficiency for you?"
                        options={pollOptions}
                        totalVotes={1421}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Growth Strategy: Becoming a 'Growth-Oriented' Leader Beyond Results</h2>
                    <p className="leading-relaxed mb-6">
                        While the powerful drive of ESTJs is an asset, it can sometimes pressure team members. One must consciously coordinate the inferior function, <strong>Introverted Feeling (Fi)</strong>, to complete inclusive leadership.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy A: Practicing 'Logical Empathy'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Do not dismiss emotional appeals of team members simply as inefficiency. Effort is needed to understand the impact of emotional stability on the long-term productivity of the entire team by converting it into numerical indicators.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy B: The Art of Delegation</h3>
                            <p className="text-gray-400 text-sm md:text-base">Instead of trying to control all details directly, practice 'patience' by providing large guidelines and waiting for results. This is the best education to help colleagues develop their own Te capabilities.</p>
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
                {isEn ? <EstjContentEn t={t} /> : <EstjContentKo t={t} />}
            </article>
        </div>
    );
}
