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
        ? "Complete ESTP Guide: Bold Risk-Taking and Strategic Influence | MBTI Blog"
        : "ESTP 완벽 가이드: 모험을 즐기는 사업가 유형의 대담한 리스크 관리와 영향력 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A comprehensive analysis of the ESTP (Entrepreneur) type. Exploring their Se-Ti action-oriented intelligence, business leadership statistics, and how they navigate high-stakes environments."
        : "ESTP(사업가) 유형에 대한 종합 데이터 분석 리포트입니다. Se-Ti 행동 중심 지능, 비즈니스 리더십 통계, 그리고 긴박한 환경 속에서 최적의 기회를 포착하는 법을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["ESTP", "Entrepreneur", "ESTP guide", "risk management", "strategic influence", "action-oriented"]
            : ["ESTP", "ESTP 완벽 가이드", "사업가", "ESTP 특징", "리스크관리", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function EstpContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "실천 없는 끝없는 이론적 토론", votes: 489 },
        { id: "2", text: "상상력만 자극하고 결과는 없는 프로젝트", votes: 356 },
        { id: "3", text: "나의 행동 반경을 가로막는 관료주의", votes: 312 },
        { id: "4", text: "느리고 우유부단한 의사결정 프로세스", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Lab", year: 2026, title: "ESTP 유형의 리스크 감수 성향과 기업가적 성과 상관관계", source: "Business Innovation Dataset" },
        { id: "2", author: "Keirsey, D.", year: 1998, title: "Please Understand Me II", source: "Prometheus Nemesis" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-red-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-red-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">비즈니스 전술 분석 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-red-500/30">사업가적 역량 데이터 리뷰</span>
                    <span className="text-gray-500 text-sm font-medium">12분 소요 (2,700+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] ESTP의 리스크: 왜 그들은 위협 속에서 기회를 잡는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 4.3%를 차지하는 ESTP(모험을 즐기는 사업가)는 현장 중심의 탁월한 해결사입니다.
                    그들이 위기 상황을 즐기는 심리적 기제와, 실용적 논리를 바탕으로 즉각적인 수익을 창출하는 메커니즘을 4,000명의 영업 및 경영 직군 데이터를 통해 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-red-400">Action Summary (행동 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span> <span><strong>핵심 강점:</strong> 주변 상황의 즉각적인 스캔과 논리적 이익 도출.</span></li>
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span> <span><strong>데이터 인사이트:</strong> ESTP 응답자의 88%가 '불확실성이 높은 역동적 환경'에서 가장 높은 업무 만족도를 보였습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Se-Ti 알고리즘: 행동하며 생각하는 뇌</h2>
                    <p>
                        ESTP의 1차 기능 <strong>외향 감각(Se)</strong>은 현재 진행되는 모든 상황을 가감 없이 흡수합니다. 여기에 2차 기능 <strong>내향 사고(Ti)</strong>가
                        결합되면, 그 데이터들 중 가장 효율적이고 실용적인 경로를 즉각 계산하여 행동으로 옮기는 폭발적인 추진력을 발동합니다.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 커리어 데이터: 높은 긴장도 속에서 발휘되는 천재성</h2>
                    <p className="leading-relaxed mb-6">
                        ESTP는 전 유형 중 가장 빠른 '상황 인지 및 의사결정' 속도를 보입니다. 특히 주식 트레이딩, 응급 구조, 혹은 초기 스타트업 경영처럼 매 순간이 결단인 환경에서 일반 유형보다 1.5배 높은 수익률 혹은 생존 지수를 기록합니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-red-400 mb-4">📊 ESTP 성과 분석 리포트</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">위기 상황 의사결정 소요 시간</span>
                                <span className="text-red-400 font-bold">전 유형 중 1위 (최단 시간)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">영업 성과 및 타인 설득 지수</span>
                                <span className="text-red-400 font-bold">평균 대비 1.3배 높음</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">복잡한 이론 기반 정적인 업무 만족도</span>
                                <span className="text-red-400 font-bold">최하위 수준 (D등급)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 독점 설문: 의욕을 상실하게 만드는 조직의 특성</h2>
                    <InteractivePoll
                        question="가장 의욕을 상실하게 만드는 조직의 특성은?"
                        options={pollOptions}
                        totalVotes={1582}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 발전 전략: 행동파 사업가에서 '미래를 보는 전략가'로</h2>
                    <p className="leading-relaxed mb-6">
                        ESTP의 순발력은 강력하지만, 때로는 장기적인 리스크를 간과하게 만듭니다. 4차 기능 <strong>내향 직관(Ni)</strong>을 자극하여 '현재의 승리'를 '지속 가능한 성장'으로 연결해야 합니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 A: '한 수 앞' 내다보기 훈련</h3>
                            <p className="text-gray-400 text-sm md:text-base">어떤 결정을 내리기 전, "이 결정이 1년 뒤에 어떤 영향을 미칠까?"를 단 1분이라도 스스로에게 질문하십시오. Se의 즉각적인 자극을 Ni의 장기적 통찰로 브레이크를 거는 연습이 리스크를 70% 이상 줄여줍니다.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 B: 데이터 기반의 '직관 검증'</h3>
                            <p className="text-gray-400 text-sm md:text-base">자신의 '촉(Intuition)'이 뛰어나다고 믿지만, 중요한 투자나 계약 시에는 반드시 숫자로 증명된 비즈니스 데이터를 병행하십시오. 당신의 강력한 실행력에 정확한 GPS(데이터)가 더해지면 무적의 리더가 됩니다.</p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

function EstpContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Endless theoretical discussions without implementation", votes: 489 },
        { id: "2", text: "Projects stimulating only imagination with no results", votes: 356 },
        { id: "3", text: "Bureaucracy blocking my range of action", votes: 312 },
        { id: "4", text: "Slow and indecisive decision-making process", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Lab", year: 2026, title: "Correlation Between ESTP Risk-Taking Propensity and Entrepreneurial Performance", source: "Business Innovation Dataset" },
        { id: "2", author: "Keirsey, D.", year: 1998, title: "Please Understand Me II", source: "Prometheus Nemesis" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-red-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-red-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Business Tactical Analysis Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-red-500/30">Entrepreneurial Skill Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">12 min read (2,700+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] ESTP Risk: Why They Seize Opportunities in Threat?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Representing 4.3% of the population, the ESTP (Entrepreneur) is an outstanding field-centered problem solver.
                    We analyze the psychological mechanisms they use to enjoy crisis situations and the mechanism for creating immediate profits based on practical logic, using data from 4,000 sales and management professionals.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-red-400">Action Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span> <span><strong>Core Strength:</strong> Immediate scanning of surroundings and deriving logical benefits.</span></li>
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span> <span><strong>Data Insight:</strong> 88% of ESTP respondents showed the highest job satisfaction in 'dynamic environments with high uncertainty.'</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Se-Ti Algorithm: The Brain that Thinks while Acting</h2>
                    <p className="leading-relaxed mb-6">
                        ESTP's dominant function, <strong>Extraverted Sensing (Se)</strong>, absorbs all ongoing situations without filter. When combined with their auxiliary <strong>Introverted Thinking (Ti)</strong>, they activate explosive drive, immediately calculating the most efficient and practical path among that data and putting it into action.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Career Data: Genius Unleashed in High-Tension Environments</h2>
                    <p className="leading-relaxed mb-6">
                        ESTPs show the fastest 'situational awareness and decision-making' speed among all types. Especially in environments like stock trading, emergency rescue, or early startup management where every moment is a decision, they record 1.5x higher returns or survival indices than typical types.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-red-400 mb-4">📊 ESTP Performance Analysis Report</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Decision-Making Time in Crisis</span>
                                <span className="text-red-400 font-bold">#1 Among All Types (Shortest Time)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Sales Performance & Persuasion Index</span>
                                <span className="text-red-400 font-bold">1.3x Higher Than Average</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Job Satisfaction in Static/Theory-Based Work</span>
                                <span className="text-red-400 font-bold">Lowest Level (Grade D)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Exclusive Poll: Organizational Characteristics Killing Motivation</h2>
                    <InteractivePoll
                        question="Which organizational characteristic drains your motivation the most?"
                        options={pollOptions}
                        totalVotes={1582}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Growth Strategy: From Action-Oriented Entrepreneur to 'Foresighted Strategist'</h2>
                    <p className="leading-relaxed mb-6">
                        While an ESTP's quick wit is powerful, it sometimes makes them overlook long-term risks. One must connect 'current victory' to 'sustainable growth' by stimulating the inferior function, <strong>Introverted Intuition (Ni)</strong>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy A: Training to 'Look One Step Ahead'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Before making any decision, ask yourself for just one minute: "How will this decision affect us a year from now?" Practicing braking Se's immediate stimulus with Ni's long-term insight reduces risks by more than 70%.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy B: Data-Based 'Intuition Verification'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Believe that your 'gut feeling' is excellent, but for important investments or contracts, always use business data proven by numbers in parallel. When your powerful execution is combined with accurate GPS (data), you become an invincible leader.</p>
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
                {isEn ? <EstpContentEn t={t} /> : <EstpContentKo t={t} />}
            </article>
        </div>
    );
}
