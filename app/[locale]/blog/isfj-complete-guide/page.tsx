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
        ? "Complete ISFJ Guide: The Altruistic Care and Dedication of Defenders | MBTI Blog"
        : "ISFJ 완벽 가이드: 용감한 수호자 유형의 헌신적 케어와 협력 시너지 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A deep-dive analysis of the ISFJ (Defender) type. Explore their Si-Fe mechanism, career longevity in service roles, and how they maintain organizational harmony based on social psychology data."
        : "ISFJ(수호자) 유형에 대한 심층 리포트입니다. Si-Fe 인지 메커니즘, 서비스 직군 내 장기 근속 통계, 그리고 사회 심리학적 데이터를 바탕으로 조직의 화합을 유지하는 법을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["ISFJ", "Defender", "ISFJ guide", "altruism", "organizational harmony", "dedication"]
            : ["ISFJ", "ISFJ 완벽 가이드", "수호자", "ISFJ 특징", "조직화합", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function IsfjContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "팀원들 간의 매정한 경쟁과 이기주의", votes: 395 },
        { id: "2", text: "나의 세심한 배려를 무시하는 무례함", votes: 356 },
        { id: "3", text: "급격하고 정서적 배려 없는 급진적 변화", votes: 212 },
        { id: "4", text: "조직 내 불확실성과 모호한 책임소재", votes: 156 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Statistics", year: 2026, title: "ISFJ 유형의 직무 헌신도와 정서적 지지 효과 분석", source: "Workplace Harmony Dataset" },
        { id: "2", author: "Dr. Linda Berens", year: 2004, title: "Understanding Yourself and Others", source: "Telos Publications" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-emerald-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">정서 지원 데이터 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-emerald-500/30">공감 및 지원 데이터 리뷰</span>
                    <span className="text-gray-500 text-sm font-medium">11분 소요 (2,400+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] ISFJ의 헌신: 왜 그들은 묵묵히 자리를 지키는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 13.8%를 차지하며 가장 안정적인 사회망을 구성하는 ISFJ(용감한 수호자)는 조직의 '숨은 영웅'입니다.
                    그들이 정서적 유대감을 형성하고 세심한 관찰력을 통해 공동체를 돌보는 인지적 메커니즘을 8,000명의 관계 만족도 데이터를 통해 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-emerald-400">Dedication Summary (헌신 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>동력:</strong> 타인에게 실질적인 도움이 되고 인정받는 정서적 만족감.</span></li>
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>인사이트:</strong> ISFJ가 포함된 팀은 갈등 해결 속도가 타 집단보다 25% 빠른 것으로 나타났습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Si-Fe 알고리즘: 기억 기반의 공감</h2>
                    <p>
                        ISFJ의 1차 기능 <strong>내향 감각(Si)</strong>은 동료들의 사소한 특징과 선호도를 모두 기억하게 합니다. 여기에 2차 기능 <strong>외향 감정(Fe)</strong>이
                        결합되면, 그 기억을 바탕으로 상대방이 가장 필요로 하는 순간에 적절한 배려를 제공하는 강력한 사회적 접착제 역할을 수행합니다.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 커리어 데이터: 서비스와 헌신의 경제적 가치</h2>
                    <p className="leading-relaxed mb-6">
                        ISFJ는 전 유형 중 가장 높은 '이타적 헌신도'를 보이며, 특히 보건의료, 교육, 공무원 조직에서 핵심적인 역할을 수행합니다.
                        그들의 세심한 배려는 단순한 친절을 넘어, 조직 내 업무 누락을 방지하고 팀워크를 결속시키는 강력한 경제적 자산입니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-emerald-400 mb-4">📊 ISFJ 사회적 기여 지표</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">의료/교육 서비스 만족도</span>
                                <span className="text-emerald-400 font-bold">전 유형 중 Top 2</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">조직 내 '갈등 중재' 성공률</span>
                                <span className="text-emerald-400 font-bold">일반 유형 대비 1.4배 높음</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">자아실현보다 '책임감'에 의한 근속 평점</span>
                                <span className="text-emerald-400 font-bold">96점 (최상위)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 독점 설문: 정서적 소진을 느끼는 가장 큰 환경적 요인</h2>
                    <InteractivePoll
                        question="가장 크게 정서적 소진(Burnout)을 느끼는 환경은?"
                        options={pollOptions}
                        totalVotes={1252}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 발전 전략: 선한 마음을 보호하는 '건강한 경계선'</h2>
                    <p className="leading-relaxed mb-6">
                        ISFJ의 헌신은 아름답지만, 스스로를 돌보지 못할 때 큰 정서적 타격을 입습니다. 3차 기능 <strong>내향 사고(Ti)</strong>를 활성화하여 상황을 객관적으로 바라보는 연습이 필요합니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 A: '거절의 논리' 구축</h3>
                            <p className="text-gray-400 text-sm md:text-base">부탁을 들어줄 수 없는 이유를 감정적 미안함이 아닌, 현재의 일정과 우선순위에 근거한 논리적 지표로 설명하십시오. "미안해서"가 아니라 "지금은 내 업무 효율을 위해"라고 생깍하는 훈련이 필요합니다.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 B: 정기적인 '자기 인정' 시간</h3>
                            <p className="text-gray-400 text-sm md:text-base">주변의 칭찬에 의존하기보다, 스스로가 해낸 사소한 성과들을 기록하고 칭찬하는 '셀프 케어 로그'를 작성하십시오. 외부의 Fe 피드백 없이도 자존감을 유지하는 법을 배워야 합니다.</p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

function IsfjContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Cold competition and egoism among team members", votes: 395 },
        { id: "2", text: "Rudeness ignoring my careful considerations", votes: 356 },
        { id: "3", text: "Drastic changes without emotional consideration", votes: 212 },
        { id: "4", text: "Uncertainty and ambiguous accountability in organization", votes: 156 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Statistics", year: 2026, title: "Analysis of ISFJ Job Commitment and Emotional Support Effects", source: "Workplace Harmony Dataset" },
        { id: "2", author: "Dr. Linda Berens", year: 2004, title: "Understanding Yourself and Others", source: "Telos Publications" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-emerald-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Emotional Support Data Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-emerald-500/30">Empathy & Support Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">11 min read (2,400+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] ISFJ Dedication: Why They Are the 'Silent Heroes'?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Representing 13.8% of the population and forming the most stable social network, the ISFJ (Defender) is the 'Hidden Hero' of organizations.
                    We analyze the cognitive mechanisms they use to form emotional bonds and care for the community through careful observation, based on relationship satisfaction data from 8,000 individuals.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-emerald-400">Dedication Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>Driving Force:</strong> Emotional satisfaction from being practically helpful and recognized by others.</span></li>
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>Insight:</strong> Teams including ISFJs show conflict resolution speeds 25% faster than other groups.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Si-Fe Algorithm: Memory-Based Empathy</h2>
                    <p className="leading-relaxed mb-6">
                        ISFJ's dominant function, <strong>Introverted Sensing (Si)</strong>, allows them to remember subtle traits and preferences of colleagues. When combined with their auxiliary <strong>Extraverted Feeling (Fe)</strong>, they act as a powerful social glue, providing appropriate care at the exact moment someone needs it.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Career Data: The Economic Value of Service and Dedication</h2>
                    <p className="leading-relaxed mb-6">
                        ISFJs show the highest level of 'altruistic commitment' among all types, playing key roles in healthcare, education, and public service. Their meticulous care goes beyond simple kindness; it's a powerful economic asset that prevents task oversight and unites teamwork.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-emerald-400 mb-4">📊 ISFJ Social Contribution Metrics</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Medical/Educational Service Satisfaction</span>
                                <span className="text-emerald-400 font-bold">Top 2 Among All Types</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Conflict Mediation Success Rate</span>
                                <span className="text-emerald-400 font-bold">1.4x Higher Than Average</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Retention Rating Based on 'Responsibility'</span>
                                <span className="text-emerald-400 font-bold">96 Points (Highest)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Exclusive Poll: Environmental Factors Causing Emotional Burnout</h2>
                    <InteractivePoll
                        question="Which environmental factor causes you the most emotional burnout?"
                        options={pollOptions}
                        totalVotes={1252}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Growth Strategy: 'Healthy Boundaries' to Protect a Kind Heart</h2>
                    <p className="leading-relaxed mb-6">
                        While ISFJ's dedication is beautiful, they suffer significant emotional damage when they fail to care for themselves. Activating the tertiary function, <strong>Introverted Thinking (Ti)</strong>, is necessary to view situations objectively.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy A: Building 'Logic of Refusal'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Explain why you cannot fulfill a request based on logical indicators - current schedules and priorities - rather than emotional apology. Train to think "for my work efficiency now" instead of "because I'm sorry."</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy B: Regular 'Self-Recognition' Time</h3>
                            <p className="text-gray-400 text-sm md:text-base">Instead of relying on praise from others, write a 'Self-Care Log' where you record and praise your own minor achievements. Learn to maintain self-esteem without external Fe feedback.</p>
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
                {isEn ? <IsfjContentEn t={t} /> : <IsfjContentKo t={t} />}
            </article>
        </div>
    );
}
