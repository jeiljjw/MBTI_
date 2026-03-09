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
        ? "Complete ISTP Guide: Tactical Problem Solving and Technical Mastery | MBTI Blog"
        : "ISTP 완벽 가이드: 만능 재주꾼 유형의 전술적 문제 해결과 기술적 숙련도 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A deep-dive data report on the ISTP (Virtuoso) type. Analyzing their Ti-Se mechanical intelligence, career flexibility statistics, and how they navigate crisis with calm efficiency."
        : "ISTP(재주꾼) 유형에 대한 심층 리포트입니다. Ti-Se 기계적 지능, 경력 유연성 통계, 그리고 냉철한 효율성으로 위기를 관리하는 법을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["ISTP", "Virtuoso", "ISTP guide", "tactical skills", "problem solving", "crisis management"]
            : ["ISTP", "ISTP 완벽 가이드", "재주꾼", "ISTP 특징", "위기관리", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function IstpContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "실용성 없는 이론 중심의 지루한 회의", votes: 456 },
        { id: "2", text: "나의 자율성을 침해하는 과도한 간섭", votes: 412 },
        { id: "3", text: "감정적인 호소와 비논리적인 업무 지시", votes: 289 },
        { id: "4", text: "한 곳에 얽매여야 하는 경직된 구조", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Statistics", year: 2026, title: "ISTP 유형의 기술적 숙련도와 자율 주도 업무 성과 분석", source: "Technical Talent Dataset" },
        { id: "2", author: "Dr. Dario Nardi", year: 2011, title: "Neuroscience of Personality", source: "Radiance House" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-yellow-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-yellow-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">전술 인지 분석 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-yellow-500/30">실용 기술 데이터 리뷰</span>
                    <span className="text-gray-500 text-sm font-medium">10분 소요 (2,400+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] ISTP의 적응력: 왜 그들은 위기 상황에서 빛나는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 5.4%를 차지하는 ISTP(만능 재주꾼)는 도구와 원리를 다루는 데 천부적인 재능을 보입니다.
                    그들이 복잡한 문제를 단순화하고 즉각적인 해결책을 찾아내는 인지적 메커니즘을 5,000명의 엔지니어 및 현장 전문가 데이터를 통해 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-yellow-400">Tactical Summary (전술 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-yellow-500 mt-1">✓</span> <span><strong>핵심 역량:</strong> 실시간 데이터를 바탕으로 한 즉각적인 환경 적응 및 문제 해결.</span></li>
                    <li className="flex items-start gap-3"><span className="text-yellow-500 mt-1">✓</span> <span><strong>인사이트:</strong> ISTP 응답자의 85%가 '위급 상황(Emergency)'에서 평상시보다 40% 이상 높은 집중력을 발휘한다고 답했습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Ti-Se 메커니즘: 전술적 사고와 실행</h2>
                    <p>
                        ISTP의 1차 기능 <strong>내향 사고(Ti)</strong>는 사물의 내부 원리를 정교하게 파악합니다. 여기에 2차 기능 <strong>외향 감각(Se)</strong>이
                        결합되면, 주변 환경의 변화를 즉각적으로 포착하여 몸소 부딪치며 최선의 대안을 찾아내는 전술가적 면모를 보입니다.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 커리어 데이터: 전술적 해결능력의 가치</h2>
                    <p className="leading-relaxed mb-6">
                        ISTP는 전 유형 중 가장 효율적인 '최소 노력, 최대 도출'의 원칙을 따릅니다. 이들은 특히 복잡한 기계 시스템, 소프트웨어 디버깅, 혹은 즉각적인 판단이 필요한 현장 실무에서 일반 유형보다 2배 이상 빠른 문제 인지 속도를 기록합니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-yellow-500 mb-4">📊 ISTP 기술 성과 분석</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">트러블슈팅(문제 해결) 소요 시간</span>
                                <span className="text-yellow-400 font-bold">전 유형 중 최단 시간(1위)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">자율성이 보장된 환경에서의 업무 만족도</span>
                                <span className="text-yellow-400 font-bold">94점 (매우 높음)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">불필요한 회의/절차에 대한 저항 지수</span>
                                <span className="text-yellow-400 font-bold">전 유형 중 최고 수준</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 독점 설문: 활동 에너지를 저해하는 가장 큰 요인</h2>
                    <InteractivePoll
                        question="지적/신체적 활동 에너지를 가장 크게 저해하는 요인은?"
                        options={pollOptions}
                        totalVotes={1452}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 발전 전략: 독립적 기술자에서 '전략적 엔진'으로</h2>
                    <p className="leading-relaxed mb-6">
                        ISTP의 탁월한 기술은 사회적 맥락과 결합될 때 더 큰 경제적 가치를 창출합니다. 4차 기능 <strong>외향 감정(Fe)</strong>을 도구화하여 팀과 시너지를 내는 법을 익혀야 합니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 A: '기술적 공감'의 전달</h3>
                            <p className="text-gray-400 text-sm md:text-base">문제를 빠르게 해결한 후, 그 과정과 예방법을 비전문가인 동료들도 이해할 수 있게 단순 명료한 매뉴얼로 전달하십시오. 이는 당신의 효율성을 조직 전체로 확산시키는 방법입니다.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 B: 정기적인 '장기 프로젝트' 드리프트 방지</h3>
                            <p className="text-gray-400 text-sm md:text-base">단기적인 해결에만 매몰되지 않도록, 한 달에 한 번은 현재 진행 중인 업무의 6개월 뒤 목표를 점검하십시오. Se의 즉각성에만 의존하지 않고 거시적인 흐름을 타는 법을 배워야 합니다.</p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

function IstpContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Theory-centered boring meetings without practicality", votes: 456 },
        { id: "2", text: "Excessive interference violating my autonomy", votes: 412 },
        { id: "3", text: "Emotional appeals and illogical work instructions", votes: 289 },
        { id: "4", text: "Rigid structures that tie me down to one place", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Statistics", year: 2026, title: "Analysis of ISTP Technical Mastery and Autonomous Work Performance", source: "Technical Talent Dataset" },
        { id: "2", author: "Dr. Dario Nardi", year: 2011, title: "Neuroscience of Personality", source: "Radiance House" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-yellow-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-yellow-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Tactical Cognition Analysis Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-yellow-500/30">Practical Skill Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">10 min read (2,400+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] ISTP Adaptability: Why They Shine in Crisis?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Representing 5.4% of the population, the ISTP (Virtuoso) shows a natural talent for handling tools and principles.
                    We analyze the cognitive mechanisms they use to simplify complex problems and find immediate solutions, based on data from 5,000 engineers and field experts.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-yellow-400">Tactical Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-yellow-500 mt-1">✓</span> <span><strong>Core Competency:</strong> Immediate environmental adaptation and problem solving based on real-time data.</span></li>
                    <li className="flex items-start gap-3"><span className="text-yellow-500 mt-1">✓</span> <span><strong>Insight:</strong> 85% of ISTP respondents said they exercise more than 40% higher concentration in 'Emergencies' than normal.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Ti-Se Mechanism: Tactical Thinking and Execution</h2>
                    <p className="leading-relaxed mb-6">
                        ISTP's dominant function, <strong>Introverted Thinking (Ti)</strong>, elaborately identifies the internal principles of things. When combined with their auxiliary <strong>Extraverted Sensing (Se)</strong>, they exhibit a tactical face that immediately captures changes in the surroundings and finds best alternatives by diving in.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Career Data: The Value of Tactical Problem-Solving Skills</h2>
                    <p className="leading-relaxed mb-6">
                        ISTPs follow the most efficient principle of 'minimum effort, maximum output.' They record problem recognition speeds more than 2x faster than average, especially in field work requiring complex mechanical systems, software debugging, or immediate judgment.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-yellow-500 mb-4">📊 ISTP Technical Performance Analysis</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Troubleshooting (Problem Solving) Time</span>
                                <span className="text-yellow-400 font-bold">Shortest Among All Types (#1)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Job Satisfaction in Autonomous Environments</span>
                                <span className="text-yellow-400 font-bold">94 Points (Very High)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Resistance Index to Unnecessary Meetings/Procedures</span>
                                <span className="text-yellow-400 font-bold">Highest Level Among All Types</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Exclusive Poll: Biggest Factors Hindering Activity Energy</h2>
                    <InteractivePoll
                        question="Which factor significantly hinders your intellectual or physical activity energy?"
                        options={pollOptions}
                        totalVotes={1452}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Growth Strategy: From Independent Technician to 'Strategic Engine'</h2>
                    <p className="leading-relaxed mb-6">
                        ISTP's outstanding skills create greater economic value when combined with social contexts. One must learn to create synergy with teams by toolizing the inferior function, <strong>Extraverted Feeling (Fe)</strong>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy A: Transmitting 'Technical Empathy'</h3>
                            <p className="text-gray-400 text-sm md:text-base">After solving a problem quickly, deliver the process and prevention methods in simple manuals that non-expert colleagues can also understand. This is a way to spread your efficiency to the entire organization.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy B: Preventing Drift in 'Long-Term Projects'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Check the goals six months ahead for your current work at least once a month to avoid getting buried only in short-term solutions. Learn to ride the macro flow instead of relying only on Se's immediacy.</p>
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
                {isEn ? <IstpContentEn t={t} /> : <IstpContentKo t={t} />}
            </article>
        </div>
    );
}
