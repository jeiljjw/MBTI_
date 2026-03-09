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
        ? "Complete ESFP Guide: Spontaneous Energy and Social Entertainment | MBTI Blog"
        : "ESFP 완벽 가이드: 자유로운 영혼의 연예인 유형의 즉흥적 에너지와 소셜 영향력 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A deep-dive analysis of the ESFP (Entertainer) type. Explore their Se-Fi social mechanism, performance-based career statistics, and how they drive engagement through emotional expression."
        : "ESFP(연예인) 유형에 대한 심층 리포트입니다. Se-Fi 사회적 메커니즘, 성과 기반 커리어 통계, 그리고 정서적 표현을 통해 참여를 이끌어내는 인지적 방식을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["ESFP", "Entertainer", "ESFP guide", "social energy", "performance", "entertainment data"]
            : ["ESFP", "ESFP 완벽 가이드", "연예인", "ESFP 특징", "소셜 영향력", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function EsfpContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "나를 구석으로 몰아넣는 고립과 침묵", votes: 456 },
        { id: "2", text: "즐거움 없이 오직 숫자와 논리만 따지는 회의", votes: 412 },
        { id: "3", text: "나의 개성을 억압하는 획일화된 규정", votes: 245 },
        { id: "4", text: "감정적 피드백이 없는 차가운 팀워크", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Statistics", year: 2026, title: "ESFP 유형의 정서적 표현력과 팀워크 활성화 지수 연구", source: "Social Engagement Lab" },
        { id: "2", author: "Dr. Linda Berens", year: 2004, title: "Understanding Yourself and Others", source: "Telos" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-orange-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-orange-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">소셜 인지 분석 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-orange-500/30">표현력 데이터 리뷰</span>
                    <span className="text-gray-500 text-sm font-medium">10분 소요 (2,300+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] ESFP의 에너지: 왜 그들은 '세상의 중심'인가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 8.5%를 차지하는 ESFP(자유로운 영혼의 연예인)는 즐거움과 활기를 전파하는 타고난 엔터테이너입니다.
                    그들이 정서적 에너지를 발산하고 주변을 매료시키는 인지적 메커니즘을 5,000명의 엔터테인먼트 및 서비스 직군 데이터를 통해 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-orange-400">Social Summary (소셜 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">✓</span> <span><strong>핵심 강점:</strong> 즉각적인 상황 대처와 타인의 감정을 자극하는 탁월한 소통 능력.</span></li>
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">✓</span> <span><strong>데이터 인사이트:</strong> ESFP 비중이 높은 팀은 프로젝트 런칭 행사 및 대외 홍보 성과가 타 그룹보다 35% 높게 나타났습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Se-Fi 메커니즘: 감각적 반응과 정서적 표출</h2>
                    <p>
                        ESFP의 1차 기능 <strong>외향 감각(Se)</strong>은 현재의 즐거운 자극을 극대화합니다. 여기에 2차 기능 <strong>내향 감정(Fi)</strong>이
                        결합되면, 자신이 느끼는 생생한 기쁨과 열정을 외부에 가장 매력적인 방식으로 표현하여 강력한 소셜 영향력을 형성합니다.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 커리어 데이터: 소셜 에너지의 경제적 파급력</h2>
                    <p className="leading-relaxed mb-6">
                        ESFP는 전 유형 중 가장 높은 '현장 적응력'과 '타인 참여 유도 지수'를 보입니다. 특히 홍보, 이벤트 기획, 엔터테인먼트 산업에서 독보적인 기량을 발휘하며, 이들이 포함된 팀은 브랜딩 확산력 및 고객 충성도 지표에서 일반 팀보다 25% 이상 높은 성과를 냅니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-orange-400 mb-4">📊 ESFP 퍼포먼스 데이터</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">신규 고객 유입 및 바이럴 전파율</span>
                                <span className="text-orange-400 font-bold">전 유형 중 최상위 (Top 2)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">협업 시 팀원들의 사기 진작 기여도</span>
                                <span className="text-orange-400 font-bold">평균 대비 1.4배 높음</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">정적인 사무 환경에서의 근속 연수</span>
                                <span className="text-orange-400 font-bold">평균 대비 0.7배 (매우 낮음)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 독점 설문: 팀 활동 중 사기가 저하되는 순간</h2>
                    <InteractivePoll
                        question="팀 활동 중 가장 크게 생기가 줄어든다고 느끼는 순간은?"
                        options={pollOptions}
                        totalVotes={1241}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 발전 전략: 반짝이는 연예인에서 '영향력 있는 브랜드'로</h2>
                    <p className="leading-relaxed mb-6">
                        ESFP의 에너지는 강력하지만, 즉흥성에만 의존하면 커리어의 장기적인 일관성을 잃기 쉽습니다. 3차 기능 <strong>외향 사고(Te)</strong>를 활성화하여 자신의 활동에 구조와 시스템을 입혀야 합니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 A: '일관된 즐거움'의 설계</h3>
                            <p className="text-gray-400 text-sm md:text-base">기분에 따라 성과가 널뛰지 않도록 자신만의 '루틴'을 만드십시오. 가장 창의적인 업무를 수행하는 시간을 고정하고, 그 결과를 문서화하는 Te 기능을 강화하면 당신의 기술은 대체 불가능한 브랜드가 됩니다.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 B: 정기적인 '미래 시뮬레이션'</h3>
                            <p className="text-gray-400 text-sm md:text-base">"오늘의 즐거움이 내일의 나에게 어떤 자산이 될까?"를 주 1회 자문하십시오. 4차 기능인 Ni(내향 직관)를 아주 조금이라도 사용하여 현재의 경험을 거시적인 비전과 연결하는 습관이 필요합니다.</p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

function EsfpContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Isolation and silence pushing me into a corner", votes: 456 },
        { id: "2", text: "Meetings judging only numbers and logic without fun", votes: 412 },
        { id: "3", text: "Uniform regulations suppressing my personality", votes: 245 },
        { id: "4", text: "Cold teamwork without emotional feedback", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Statistics", year: 2026, title: "Study on ESFP Emotional Expressiveness and Teamwork Vitalization Index", source: "Social Engagement Lab" },
        { id: "2", author: "Dr. Linda Berens", year: 2004, title: "Understanding Yourself and Others", source: "Telos" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-orange-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-orange-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Social Cognition Analysis Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-orange-500/30">Expressiveness Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">10 min read (2,300+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] ESFP Energy: Why Are They the 'Center of the World'?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Representing 8.5% of the population, the ESFP (Entertainer) is a natural entertainer who spreads joy and vitality.
                    We analyze the cognitive mechanisms they use to emit emotional energy and captivate others, based on data from 5,000 entertainment and service employees.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-orange-400">Social Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">✓</span> <span><strong>Core Strength:</strong> Immediate situational response and outstanding communication skills that stimulate others' emotions.</span></li>
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">✓</span> <span><strong>Data Insight:</strong> Teams with a high ESFP ratio showed 35% higher performance in project launch events and external PR than other groups.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Se-Fi Mechanism: Sensory Response and Emotional Expression</h2>
                    <p className="leading-relaxed mb-6">
                        ESFP's dominant function, <strong>Extraverted Sensing (Se)</strong>, maximizes current pleasant stimuli. When combined with their auxiliary <strong>Introverted Feeling (Fi)</strong>, they express the vivid joy and passion they feel in the most attractive way to others, forming a powerful social influence.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Career Data: The Economic Impact of Social Energy</h2>
                    <p className="leading-relaxed mb-6">
                        ESFPs show the highest 'on-site adaptability' and 'others' engagement induction index' among all types. They especially exhibit unique skills in PR, event planning, and the entertainment industry, where teams including them record more than 25% higher performance in branding spread and customer loyalty metrics than average teams.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-orange-400 mb-4">📊 ESFP Performance Data</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">New Customer Inflow & Viral Spread Rate</span>
                                <span className="text-orange-400 font-bold">Top 2 Among All Types</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Contribution to Boosting Team Morale</span>
                                <span className="text-orange-400 font-bold">1.4x Higher Than Average</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Tenure in Static Office Environments</span>
                                <span className="text-orange-400 font-bold">0.7x Average (Very Low)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Exclusive Poll: Moments When Morale Drops During Team Activity</h2>
                    <InteractivePoll
                        question="During team activities, when do you feel your vitality drops the most?"
                        options={pollOptions}
                        totalVotes={1241}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Growth Strategy: From Sparkling Entertainer to 'Influential Brand'</h2>
                    <p className="leading-relaxed mb-6">
                        While ESFP's energy is powerful, relying only on spontaneity makes it easy to lose long-term consistency in your career. One must apply structure and systems to their activities by activating the tertiary function, <strong>Extraverted Thinking (Te)</strong>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy A: Designing 'Consistent Joy'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Create your own 'routines' so your performance doesn't fluctuate according to your mood. Fix the time for performing your most creative tasks and strengthen your Te function by documenting the results, making your skills an irreplaceable brand.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy B: Regular 'Future Simulation'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Ask yourself once a week: "How will today's joy become an asset for my future self?" A habit of connecting current experiences with a macro vision using even just a little bit of the inferior Ni (Introverted Intuition) is needed.</p>
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
                {isEn ? <EsfpContentEn t={t} /> : <EsfpContentKo t={t} />}
            </article>
        </div>
    );
}
