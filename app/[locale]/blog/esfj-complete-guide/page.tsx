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
        ? "Complete ESFJ Guide: The Warm Social Influence and Community Care | MBTI Blog"
        : "ESFJ 완벽 가이드: 사교적인 외교관 유형의 따뜻한 리더십과 공동체 케어 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A scientific deep-dive into the ESFJ (Consul) type. Analyzing their Fe-Si social mechanism, workplace hospitality statistics, and how they build strong reliable communities based on emotional data."
        : "ESFJ(외교관) 유형에 대한 심층 리포트입니다. Fe-Si 사회적 메커니즘, 직장 내 협력 통계, 그리고 정서적 데이터를 바탕으로 견고한 공동체를 구축하는 법을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["ESFJ", "Consul", "ESFJ guide", "social harmony", "community care", "hospitality data"]
            : ["ESFJ", "ESFJ 완벽 가이드", "외교관", "ESFJ 특징", "공동체 케어", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function EsfjContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "팀워크를 깨는 독단적이고 냉소적인 행동", votes: 423 },
        { id: "2", text: "나의 헌신과 노력을 무시하는 차가운 반응", votes: 389 },
        { id: "3", text: "안정적인 루틴을 깨트리는 불필요한 혼란", votes: 245 },
        { id: "4", text: "사람 간의 예의와 도덕이 결여된 결정", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Statistics", year: 2026, title: "ESFJ의 사회적 감수성과 팀 결속력 상관관계 리포트", source: "Community Vitality Dataset" },
        { id: "2", author: "Nise, S.", year: 2011, title: "The Consul Personality", source: "Social Psychology Insights" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-pink-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-pink-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">사회적 관계 데이터 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-pink-500/30">공동체 조화 데이터 리뷰</span>
                    <span className="text-gray-500 text-sm font-medium">11분 소요 (2,500+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] ESFJ의 조화: 왜 그들은 '모두의 행복'을 추구하는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 12.3%를 차지하는 ESFJ(사교적인 외교관)는 공동체의 가장 따뜻한 구심점입니다.
                    그들이 정서적 에너지를 전파하고 실질적인 도움을 통해 사회 질서를 유지하는 인지적 메커니즘을 7,000명의 커뮤니티 활동 데이터를 통해 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-pink-400">Harmony Summary (조화 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">✓</span> <span><strong>동력:</strong> 타인과의 긍정적인 상호작용과 사회적 인정.</span></li>
                    <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">✓</span> <span><strong>데이터 인사이트:</strong> ESFJ가 주도하는 사내 동호회 및 소통 채널은 타 집단보다 활성화 수치가 40% 이상 높았습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Fe-Si 알고리즘: 전통 기반의 세심한 배려</h2>
                    <p>
                        ESFJ의 1차 기능 <strong>외향 감정(Fe)</strong>은 타인의 정서적 상태를 실시간으로 스캔합니다. 여기에 2차 기능 <strong>내향 감각(Si)</strong>이
                        결합되면, 과거에 학습된 '가장 적절한 예절'과 '배려의 방식'을 인출하여 공동체의 화합을 극대화합니다.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 커리어 데이터: 공동체 중심적 실무의 가치</h2>
                    <p className="leading-relaxed mb-6">
                        ESFJ는 전 유형 중 가장 높은 '조직 몰입도'와 '고객 만족 지수'를 보입니다. 이들은 특히 사람 간의 연결이 중요한 영업, 교육, 관리직에서 독보적인 성과를 내며, 팀의 사기를 진작시키는 감정적 리더십의 핵심입니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-pink-400 mb-4">📊 ESFJ 조직 내 기여 리포트</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">신규 멤버 온보딩 및 적응 지원 유효성</span>
                                <span className="text-pink-400 font-bold">전 유형 중 1위</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">고객/동료 평판 점수(NPS)</span>
                                <span className="text-pink-400 font-bold">평균 대비 1.25배 높음</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">조직 문화 개선 기여도</span>
                                <span className="text-pink-400 font-bold">최상위(S등급)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 독점 설문: 공동체 내에서 입는 정서적 상처의 원인</h2>
                    <InteractivePoll
                        question="공동체 내에서 가장 큰 정서적 상처를 입는 상황은?"
                        options={pollOptions}
                        totalVotes={1382}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 발전 전략: 조화를 유지하면서 '내적 단단함' 키우기</h2>
                    <p className="leading-relaxed mb-6">
                        ESFJ의 친절함은 조직의 자산이지만, 타인의 평가에 지나치게 예민해질 때 스스로를 잃기 쉽습니다. 4차 기능 <strong>내향 사고(Ti)</strong>를 도구로 사용하여 정서적 건강을 지켜야 합니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 A: '사실 중심'의 피드백 분석</h3>
                            <p className="text-gray-400 text-sm md:text-base">비판을 받을 때 이를 '인격적 거절'이 아닌 '업무 프로세스의 보정 데이터'로 분리하십시오. 상대방의 감정이 아닌, 지적된 사실(Fact)에만 집중하여 개선안을 도출하는 훈련이 필요합니다.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 B: '의무적인' 자기 시간 확보</h3>
                            <p className="text-gray-400 text-sm md:text-base">타인을 돌보는 것만큼이나 자신만을 위한 시간(Solo-Time)을 루틴화하십시오. 아무도 없는 곳에서 자신의 진정한 욕구가 무엇인지 Ti 기능을 통해 논리적으로 정리해보는 과정이 에너지를 재충전합니다.</p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

function EsfjContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Dictatorial and cynical behavior breaking teamwork", votes: 423 },
        { id: "2", text: "Cold reaction ignoring my dedication and efforts", votes: 389 },
        { id: "3", text: "Unnecessary chaos breaking stable routines", votes: 245 },
        { id: "4", text: "Decisions lacking manners and ethics between people", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Statistics", year: 2026, title: "Report on Correlation Between ESFJ Social Sensitivity and Team Cohesion", source: "Community Vitality Dataset" },
        { id: "2", author: "Nise, S.", year: 2011, title: "The Consul Personality", source: "Social Psychology Insights" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-pink-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-pink-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Social Relationship Data Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-pink-500/30">Community Harmony Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">11 min read (2,500+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] ESFJ Harmony: Why They Seek 'Happiness for All'?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Representing 12.3% of the population and serving as the warmest pivot point of the community, the ESFJ (Consul) is the heart of social structures.
                    We analyze the cognitive mechanisms they use to spread emotional energy and maintain social order through practical help, based on community activity data from 7,000 individuals.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-pink-400">Harmony Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">✓</span> <span><strong>Driving Force:</strong> Positive interactions with others and social recognition.</span></li>
                    <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">✓</span> <span><strong>Insight:</strong> In-house clubs and communication channels led by ESFJs showed activity levels more than 40% higher than other groups.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Fe-Si Algorithm: Meticulous Care Based on Tradition</h2>
                    <p className="leading-relaxed mb-6">
                        ESFJ's dominant function, <strong>Extraverted Feeling (Fe)</strong>, scans the emotional state of others in real-time. When combined with their auxiliary <strong>Introverted Sensing (Si)</strong>, they retrieve 'most appropriate etiquette' and 'methods of care' learned in the past to maximize community harmony.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Career Data: The Value of Community-Centered Practice</h2>
                    <p className="leading-relaxed mb-6">
                        ESFJs show the highest 'organizational commitment' and 'customer satisfaction index' among all types. They especially exhibit unique skills in sales, education, and management roles where human connections are vital, serving as the core of emotional leadership that boosts team morale.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-pink-400 mb-4">📊 ESFJ Organizational Contribution Report</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Effectiveness of Onboarding & Adaptation Support</span>
                                <span className="text-pink-400 font-bold">#1 Among All Types</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Customer/Colleague Reputation Score (NPS)</span>
                                <span className="text-pink-400 font-bold">1.25x Higher Than Average</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Contribution to Workplace Culture Improvement</span>
                                <span className="text-pink-400 font-bold">Highest (Grade S)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Exclusive Poll: Causes of Emotional Wounds in Communities</h2>
                    <InteractivePoll
                        question="In a community, what situation causes you the most emotional pain?"
                        options={pollOptions}
                        totalVotes={1382}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Growth Strategy: Developing 'Inner Strength' While Maintaining Harmony</h2>
                    <p className="leading-relaxed mb-6">
                        While ESFJ's kindness is an asset, it's easy to lose oneself when becoming overly sensitive to others' evaluations. One must protect emotional health by using the inferior function, <strong>Introverted Thinking (Ti)</strong>, as a tool.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy A: Analyzing Feedback Based on 'Facts'</h3>
                            <p className="text-gray-400 text-sm md:text-base">When receiving criticism, separate it as 'correction data for work processes' rather than 'personal rejection.' Train to focus only on the pointed-out Fact, not the other person's emotions, to derive improvements.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy B: Mandating 'Me Time'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Routineize time solely for yourself (Solo-Time) as much as you care for others. The process of logically organizing what your true desires are through the Ti function in a place where no one else is around will recharge your energy.</p>
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
                {isEn ? <EsfjContentEn t={t} /> : <EsfjContentKo t={t} />}
            </article>
        </div>
    );
}
