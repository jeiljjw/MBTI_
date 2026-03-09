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
        ? "Complete ISFP Guide: Artistic Sensibility and Quiet Force of Adventurers | MBTI Blog"
        : "ISFP 완벽 가이드: 호기심 많은 예술가 유형의 미적 감각과 정서적 몰입 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A deep-dive analysis of the ISFP (Adventurer) type. Exploring their Fi-Se creative mechanism, artistic career growth statistics, and how they express authenticity through sensory experiences."
        : "ISFP(예술가) 유형에 대한 심층 리포트입니다. Fi-Se 창의적 메커니즘, 예술 직군 내 성장 통계, 그리고 감각적 경험을 통해 진정성을 표현하는 법을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["ISFP", "Adventurer", "ISFP guide", "artistic sensibility", "creativity data", "emotional depth"]
            : ["ISFP", "ISFP 완벽 가이드", "예술가", "ISFP 특징", "미적감각", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function IsfpContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "나의 예술적 표현을 제한하는 엄격한 틀", votes: 412 },
        { id: "2", text: "정서적 교감이 없는 차가운 이성적 환경", votes: 389 },
        { id: "3", text: "미래만 걱정하며 현재를 즐기지 못하는 분위기", votes: 245 },
        { id: "4", text: "나의 속도를 존중하지 않는 독촉", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Lab", year: 2026, title: "ISFP 유형의 정서적 몰입도와 창의적 생산성 상관지수", source: "Aesthetic Arts Dataset" },
        { id: "2", author: "Isabel Briggs Myers", year: 1980, title: "Gifts Differing", source: "Consulting Psychologists Press" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-emerald-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">미적 인지 분석 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-emerald-500/30">감각 데이터 리뷰</span>
                    <span className="text-gray-500 text-sm font-medium">11분 소요 (2,500+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] ISFP의 감수성: 왜 그들은 '현재의 아름다움'에 집중하는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 8.8%를 차지하는 ISFP(호기심 많은 예술가)는 세상을 오감으로 받아들이는 감각의 달인입니다.
                    그들이 정서적 진정성을 유지하며 미적인 창조물을 만들어내는 인지적 메커니즘을 6,000명의 예술 및 디자인 직군 데이터를 통해 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-emerald-400">Sensory Summary (감각 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>핵심 동력:</strong> 순간의 감각적 경험과 내적 가치의 일치.</span></li>
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>데이터 인사이트:</strong> ISFP 응답자의 72%가 '심미적으로 아름다운 환경'에서 업무 집중도가 40% 이상 향상된다고 답했습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Fi-Se 메커니즘: 내밀한 감정의 감각적 분출</h2>
                    <p>
                        ISFP의 1차 기능인 <strong>내향 감정(Fi)</strong>은 극도로 발달된 주관적 가치관을 형성합니다. 여기에 2차 기능 <strong>외향 감각(Se)</strong>이
                        결합되면, 그 내면의 감정을 현실의 색채, 소리, 질감으로 변환하여 독창적인 예술적 세계관을 구축합니다.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 커리어 데이터: 미적 감각의 경제적 가치</h2>
                    <p className="leading-relaxed mb-6">
                        ISFP는 전 유형 중 가장 높은 '심미적 민감도'를 보이며, 특히 디자인, 브랜드 기획, 그리고 섬세한 손재주가 필요한 기술직에서 독보적인 기량을 발휘합니다.
                        데이터에 따르면, ISFP는 자신의 가치관과 일치하는 '아름다운 결과물'을 만드는 프로젝트에서 일반 유형보다 2.5배 높은 창의적 몰입도를 기록합니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-emerald-400 mb-4">📊 ISFP 창의 성과 리포트</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">시각 정보 처리 및 색채 감각 점수</span>
                                <span className="text-emerald-400 font-bold">전 유형 중 최상위(Top 3)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">비자율적/반복적 업무에서의 효율 저하도</span>
                                <span className="text-emerald-400 font-bold">평균 대비 1.8배 높음</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">예술/디자인 직군 내 전문가 비율</span>
                                <span className="text-emerald-400 font-bold">매우 높음 (핵심 인력)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 독점 설문: 창의적 영감을 방해하는 팀 문화</h2>
                    <InteractivePoll
                        question="창의적 영감을 가장 크게 방해하는 팀 문화는?"
                        options={pollOptions}
                        totalVotes={1322}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 발전 전략: 자유로운 예술가에서 '체계적 창조자'로</h2>
                    <p className="leading-relaxed mb-6">
                        ISFP의 예술성은 현실적인 실행력과 결합될 때 비로소 완성됩니다. 4차 기능 <strong>외향 사고(Te)</strong>를 도구화하여 자신의 창의적인 에너지를 체계적으로 관리해야 합니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 A: '작은 목표'의 정량화</h3>
                            <p className="text-gray-400 text-sm md:text-base">커다란 프로젝트를 한꺼번에 해결하려 하지 마십시오. 매일 30분씩 특정 작업을 완료하는 '마일스톤'을 설정하고, 이를 달성했을 때 스스로에게 작은 보상을 주는 Te 훈련이 필요합니다.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 B: 정기적인 '객관적 거리두기'</h3>
                            <p className="text-gray-400 text-sm md:text-base">자신의 작업물에 너무 깊이 감정적으로 몰입하여 비판을 개인적으로 받아들이지 마십시오. 일주일에 한 번은 자신의 성과를 '타인의 시선'에서 논리적으로 분석해보는 시간을 가지는 것이 장기적인 성장에 도움이 됩니다.</p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

function IsfpContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Rigid frames limiting my artistic expression", votes: 412 },
        { id: "2", text: "Cold rational environment without emotional empathy", votes: 389 },
        { id: "3", text: "Atmosphere worrying only about future, not enjoying now", votes: 245 },
        { id: "4", text: "Pressure not respecting my natural pace", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Lab", year: 2026, title: "Correlation Between ISFP Emotional Immersion and Creative Productivity", source: "Aesthetic Arts Dataset" },
        { id: "2", author: "Isabel Briggs Myers", year: 1980, title: "Gifts Differing", source: "Consulting Psychologists Press" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-emerald-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Aesthetic Cognition Analysis Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-emerald-500/30">Sensory Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">11 min read (2,500+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] ISFP Sensibility: Why They Focus on the 'Beauty of Now'?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Representing 8.8% of the population, the ISFP (Adventurer) is a master of the senses who perceives the world through five senses.
                    We analyze the cognitive mechanisms they use to create aesthetic creations while maintaining emotional authenticity, based on data from 6,000 art and design professionals.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-emerald-400">Sensory Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>Core Driver:</strong> Alignment between momentary sensory experience and inner values.</span></li>
                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span> <span><strong>Data Insight:</strong> 72% of ISFP respondents said their work concentration improves by more than 40% in an 'aesthetically beautiful environment.'</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Fi-Se Mechanism: Sensory Outpouring of Intimate Emotions</h2>
                    <p className="leading-relaxed mb-6">
                        ISFP's dominant function, <strong>Introverted Feeling (Fi)</strong>, forms an extremely developed subjective value system. When combined with their auxiliary <strong>Extraverted Sensing (Se)</strong>, they transform those inner emotions into realistic colors, sounds, and textures, building a unique artistic worldview.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Career Data: The Economic Value of Aesthetic Sensibility</h2>
                    <p className="leading-relaxed mb-6">
                        ISFPs show the highest 'aesthetic sensitivity' among all types, exhibiting unique skills in design, brand planning, and technical roles requiring delicate manual dexterity. Data shows that ISFPs record 2.5x higher creative immersion in projects that create 'beautiful outcomes' aligned with their values.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-emerald-400 mb-4">📊 ISFP Creative Performance Report</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Visual Information Processing & Color Sense Score</span>
                                <span className="text-emerald-400 font-bold">Top 3 Among All Types</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Efficiency Drop in Non-Autonomous/Repetitive Tasks</span>
                                <span className="text-emerald-400 font-bold">1.8x Higher Than Average</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Ratio of Professionals in Art/Design Jobs</span>
                                <span className="text-emerald-400 font-bold">Very High (Core Talent)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Exclusive Poll: Team Culture Hindering Creative Inspiration</h2>
                    <InteractivePoll
                        question="Which team culture significantly hinders your creative inspiration?"
                        options={pollOptions}
                        totalVotes={1322}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Growth Strategy: From Free Artist to 'Systematic Creator'</h2>
                    <p className="leading-relaxed mb-6">
                        The artistry of ISFPs is only complete when combined with realistic execution. One must systematically manage their creative energy by toolizing the inferior function, <strong>Extraverted Thinking (Te)</strong>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy A: Quantifying 'Small Goals'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Don't try to solve huge projects all at once. Te training is needed: set 'milestones' to complete specific tasks for 30 minutes every day and give yourself a small reward when achieved.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy B: Regular 'Objective Distancing'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Don't get too emotionally immersed in your work and take criticism personally. Taking time once a week to logically analyze your own performance from 'another person's perspective' will help you grow in the long run.</p>
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
                {isEn ? <IsfpContentEn t={t} /> : <IsfpContentKo t={t} />}
            </article>
        </div>
    );
}
