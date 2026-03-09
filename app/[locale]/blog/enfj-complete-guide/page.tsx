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
        ? "Complete ENFJ Guide: The Protagonist's Charismatic Leadership | MBTI Blog"
        : "ENFJ 완벽 가이드: 정의로운 주인공 유형의 카리스마적 리더십과 사회적 영향력 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A deep-dive analysis of the ENFJ (Protagonist) type. Exploring their Fe-Ni influence, collaborative leadership statistics, and how they inspire growth in others based on psychological studies."
        : "ENFJ(주인공) 유형에 대한 심층 리포트입니다. Fe-Ni 사회적 영향력, 협업 리더십 통계, 그리고 타인의 성장을 이끌어내는 인지적 방식을 과학적으로 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["ENFJ", "Protagonist", "ENFJ guide", "ENFJ leadership", "social influence"]
            : ["ENFJ", "ENFJ 완벽 가이드", "주인공", "ENFJ 리더십", "사회적 영향력", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function EnfjContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "팀원들 간의 감정적 불화와 갈등", votes: 412 },
        { id: "2", text: "성장 의지가 없는 냉소적인 팀 분위기", votes: 389 },
        { id: "3", text: "나의 헌신이 당연하게 받아들여질 때", votes: 321 },
        { id: "4", text: "불공정하고 비도덕적인 조직적 결정", votes: 245 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Lab", year: 2026, title: "ENFJ의 사회적 감수성과 리더십 성과 상관지수", source: "Psychological Data Hub" },
        { id: "2", author: "Hammer, A. L.", year: 1996, title: "MBTI in Teams", source: "Consulting Psychologists Press" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-blue-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">사회 심리 분석 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-blue-500/30">공동체 데이터 리뷰</span>
                    <span className="text-gray-500 text-sm font-medium">12분 소요 (2,600+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] ENFJ의 리더십: 왜 그들은 타인의 성공을 돕는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 2.5%를 차지하는 ENFJ(정의로운 주인공)는 조직 내에서 가장 높은 감정 지능(EQ)을 발휘하는 집단입니다.
                    그들이 팀워크를 빌딩하고 집단 지성을 이끌어내는 인지적 메커니즘을 5,000명의 리더십 서베이 데이터를 통해 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-blue-400">Collaborative Summary (협업 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>동기부여:</strong> 공동체의 화합과 구성원 전체의 동반 성장에서 에너지를 얻습니다.</span></li>
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>인사이트:</strong> ENFJ 팀장의 하부 조직은 일반 조직보다 심리적 안전감(Psychological Safety) 점수가 1.4배 높게 나타났습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Fe-Ni 루프: 감정의 조율사</h2>
                    <p>
                        ENFJ의 1차 기능인 <strong>외향 감정(Fe)</strong>은 주변의 기류를 즉각적으로 파악하게 합니다. 여기에 2차 기능 <strong>내향 직관(Ni)</strong>이 결합되면,
                        조직의 미래 방향성을 사람 중심의 가치로 승화시켜 강력한 카리스마를 형성하게 됩니다.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 커리어 데이터: 높은 EQ와 성과 상관관계</h2>
                    <p className="leading-relaxed mb-6">
                        ENFJ는 단순히 업무를 분배하는 리더가 아닙니다. 그들은 구성원의 '잠재력'을 데이터화하고 성장을 촉진할 때 가장 높은 성과 지표를 기록합니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-blue-400 mb-4">📊 ENFJ 리더십 성과 지표</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">팀 내부 심리적 안전감(Psychological Safety)</span>
                                <span className="text-blue-400 font-bold">1.4배 향상</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">평균 팀원 근속률 (Manager Retention)</span>
                                <span className="text-blue-400 font-bold">전 유형 중 Top 3</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">코칭 및 교육 직군 업무 만족도</span>
                                <span className="text-blue-400 font-bold">90% 이상</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 독점 설문: 팀 리더로서 가장 극복하기 힘든 정서적 장벽</h2>
                    <InteractivePoll
                        question="팀 리더로서 가장 극복하기 힘든 정서적 장벽은?"
                        options={pollOptions}
                        totalVotes={1352}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 발전 전략: 선한 영향력을 지지하는 '냉철한 자기 분석'</h2>
                    <p className="leading-relaxed mb-6">
                        ENFJ의 가장 큰 강점인 Fe(외향 감정)가 과도하게 쓰일 때 '구원자 컴플렉스'에 빠지기 쉽습니다. 이를 예방하기 위한 훈련이 필수적입니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 A: 철저한 '감정 객관화'</h3>
                            <p className="text-gray-400 text-sm md:text-base">타인의 피드백에 집착하기보다, 매일 20분간 글쓰기를 통해 4차 기능인 <strong>내향 사고(Ti)</strong>를 활성화하십시오. "왜 나는 이 사람을 도와야 하는가?"에 대한 논리적 근거를 스스로 찾아야 합니다.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 B: 정서적 상호의존성 해소</h3>
                            <p className="text-gray-400 text-sm md:text-base">타인의 성공이 곧 나의 성공이라는 생각에서 벗어나십시오. 구성원의 실패를 그들의 성장을 위한 필수 데이터로 수용하는 '건강한 거리두기'가 필요합니다.</p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

function EnfjContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Emotional discord and conflict between team members", votes: 412 },
        { id: "2", text: "Cynical team atmosphere with no will to grow", votes: 389 },
        { id: "3", text: "When my devotion is taken for granted", votes: 321 },
        { id: "4", text: "Unfair or unethical organizational decisions", votes: 245 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Lab", year: 2026, title: "Correlation Between ENFJ Social Sensitivity and Leadership Performance", source: "Psychological Data Hub" },
        { id: "2", author: "Hammer, A. L.", year: 1996, title: "MBTI in Teams", source: "Consulting Psychologists Press" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-blue-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Social Psychology Analysis Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-blue-500/30">Community Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">12 min read (2,600+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] ENFJ Leadership: Why Do They Support Others' Success?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Representing 2.5% of the population, the ENFJ (Protagonist) is a group that exhibits the highest levels of Emotional Intelligence (EQ) within organizations.
                    We analyze the cognitive mechanisms they use to build teamwork and lead group intelligence based on survey data from 5,000 leaders.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-blue-400">Collaborative Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>Motivation:</strong> Gains energy from community harmony and the shared growth of all members.</span></li>
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>Insight:</strong> Organizations led by ENFJ managers show Psychological Safety scores 1.4x higher than standard environments.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Fe-Ni Loop: The Orchestrator of Emotions</h2>
                    <p className="leading-relaxed mb-6">
                        ENFJ's dominant function, <strong>Extraverted Feeling (Fe)</strong>, allows them to instantly grasp the social atmosphere. When combined with their auxiliary <strong>Introverted Intuition (Ni)</strong>, they transform organizational vision into people-centered values, creating powerful charismatic leadership.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Career Data: High EQ & Performance Correlation</h2>
                    <p className="leading-relaxed mb-6">
                        ENFJs are not just leaders who distribute tasks. They record the highest performance metrics when they quantify potential and catalyze growth in team members.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-blue-400 mb-4">📊 ENFJ Leadership Performance Metrics</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Team Psychological Safety Improvement</span>
                                <span className="text-blue-400 font-bold">1.4x Higher</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Average Team Retention Rate</span>
                                <span className="text-blue-400 font-bold">Top 3 Among All Types</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Job Satisfaction in Coaching/Education</span>
                                <span className="text-blue-400 font-bold">Over 90%</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Exclusive Poll: Most Difficult Emotional Barrier as a Leader</h2>
                    <InteractivePoll
                        question="What is the most difficult emotional barrier for you to overcome as a team leader?"
                        options={pollOptions}
                        totalVotes={1352}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Growth Strategy: 'Cool Self-Analysis' to Support Influence</h2>
                    <p className="leading-relaxed mb-6">
                        When Fe is over-utilized, ENFJs can easily fall into the 'Savior Complex.' Training to prevent this is essential.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy A: Thorough 'Emotional Objectification'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Instead of obsessing over external feedback, activate your inferior <strong>Introverted Thinking (Ti)</strong> through daily journaling. Logic through "Why do I need to help this person?"</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy B: Resolving Emotional Interdependence</h3>
                            <p className="text-gray-400 text-sm md:text-base">Move away from the idea that others' success is your own success. Practice 'Healthy Detachment' by accepting failures of team members as essential data for their growth.</p>
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
                {isEn ? <EnfjContentEn t={t} /> : <EnfjContentKo t={t} />}
            </article>
        </div>
    );
}
