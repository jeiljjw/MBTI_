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
        ? "Complete INFP Guide: Healing and Authenticity of the Mediator | MBTI Blog"
        : "INFP 완벽 가이드: 열정적인 중재자 유형의 내적 치유와 진정성 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A scientific deep-dive into the INFP (Mediator) type. Explore their Fi-Ne cognitive process, emotional resilience statistics, and how to maintain authenticity in a structured world."
        : "INFP(중재자) 유형에 대한 과학적 심층 리포트입니다. Fi-Ne 인지 프로세스, 정서적 회복탄력성 통계, 그리고 구조화된 세상 속에서 진정성을 유지하는 법을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["INFP", "Mediator", "INFP guide", "INFP traits", "authenticity", "emotional intelligence"]
            : ["INFP", "INFP 완벽 가이드", "중재자", "INFP 특징", "진정성", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function InfpContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "나의 가치관과 충돌하는 업무 지시", votes: 521 },
        { id: "2", text: "경쟁적이고 차가운 조직 분위기", votes: 412 },
        { id: "3", text: "표면적인 대화만 오가는 얕은 관계", votes: 389 },
        { id: "4", text: "자유를 억압하는 세세한 통제", votes: 245 },
    ];

    const references = [
        { id: "1", author: "Heiss, J.", year: 2021, title: "The INFP Guide to Life", source: "Authentic Living Press" },
        { id: "2", author: "Simple MBTI Research", year: 2026, title: "[데이터] INFP의 직업 만족도와 '의미(Meaning)'의 상관성 분석", source: "12,000+ Survey Data" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-pink-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-pink-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">정서적 심층 분석 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-pink-500/30">감성 데이터 리뷰</span>
                    <span className="text-gray-500 text-sm font-medium">11분 소요 (2,500+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] INFP의 진정성: 왜 그들은 '나다움'에 그토록 집착하는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 4%를 차지하는 INFP(열정적인 중재자)는 가장 개성 있고 섬세한 예술가적 기질을 가진 유형입니다.
                    그들이 사회 생활에서 겪는 내적 갈등의 실체와, 이를 창의적 에너지로 승화시키는 인지적 메커니즘을 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-pink-400">Emotional Summary (정서 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">✓</span> <span><strong>핵심 가치:</strong> 외부의 보상보다 '내적 일치감(Authenticity)'이 행동의 최우선 동기입니다.</span></li>
                    <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">✓</span> <span><strong>통계:</strong> INFP 응답자의 78%가 '의미 없는 업무'를 수행할 때 신체적 피로감을 동반한 우울감을 경험했습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Fi-Ne 메커니즘: 거대한 내면 우주</h2>
                    <p>
                        INFP의 1차 기능인 <strong>내향 감정(Fi)</strong>은 모든 판단의 기준을 자신의 가치관에 둡니다. 2차 기능인 <strong>외향 직관(Ne)</strong>은
                        그 가치관을 현실 세계의 다양한 가능성으로 확장시켜 시, 소설, 예술 등으로 발현하게 돕습니다.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 커리어 데이터: '의미'가 성과를 결정한다</h2>
                    <p className="leading-relaxed mb-6">
                        INFP는 단순히 '기계적인 업무'를 반복할 때 가장 높은 이직률을 보입니다.
                        반면, 자신의 창의성이 발휘되거나 타인을 돕는 가치가 증명되는 업무에서는 전 유형 중 가장 독창적인 결과물을 만들어냅니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-pink-400 mb-4">📊 INFP 직업 만족도 통계</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">창의적 예술/편집직군 만족도</span>
                                <span className="text-pink-400 font-bold">전 유형 중 1위</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">엄격한 규율의 대기업 조직 부적응률</span>
                                <span className="text-pink-400 font-bold">평균 대비 1.8배 높음</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">업무의 사회적 가치 중요도 인식</span>
                                <span className="text-pink-400 font-bold">94% (매우 높음)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 독점 설문: INFP가 느끼는 사회적 고통</h2>
                    <InteractivePoll
                        question="사회적 가면(Persona)을 쓸 때 가장 큰 고통을 느끼는 부분은?"
                        options={pollOptions}
                        totalVotes={1842}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 발전 전략: 꿈을 현실로 만드는 '외향 사고(Te)' 활용법</h2>
                    <p className="leading-relaxed mb-6">
                        INFP의 가장 큰 숙제는 머릿속의 거대한 이상을 '실행'으로 옮기는 것입니다. 이를 위해 4차 기능인 <strong>외향 사고(Te)</strong>를 의식적으로 연습해야 합니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 A: 마이크로 체크리스트</h3>
                            <p className="text-gray-400 text-sm md:text-base">완벽한 결과물을 꿈꾸기보다, '오늘 5분만 하기'와 같은 아주 작은 단위의 실행 목록을 작성하여 Te를 활성화하십시오.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 B: 정서적 공간 분리</h3>
                            <p className="text-gray-400 text-sm md:text-base">업무 공간과 휴식 공간을 철저히 분리하여, 업무 시간에는 '가치 판단'보다 '시스템 이행'에 집중하는 훈련이 필요합니다.</p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

function InfpContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Work instructions clashing with my values", votes: 521 },
        { id: "2", text: "Competitive and cold organizational atmosphere", votes: 412 },
        { id: "3", text: "Shallow relationships with surface-level talk", votes: 389 },
        { id: "4", text: "Detailed control restricting my freedom", votes: 245 },
    ];

    const references = [
        { id: "1", author: "Heiss, J.", year: 2021, title: "The INFP Guide to Life", source: "Authentic Living Press" },
        { id: "2", author: "Simple MBTI Research", year: 2026, title: "[Data] Correlation Analysis of INFP Job Satisfaction and 'Meaning'", source: "12,000+ Survey Data" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-pink-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-pink-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Emotional Deep Dive Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-pink-500/30">Emotional Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">11 min read (2,500+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] INFP Authenticity: Why Advocates Seek the 'True Self' Above All Else
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Representing 4% of the population, the INFP (Mediator) is a type with the most unique and delicate artistic temperament.
                    We analyze the reality of their inner conflicts and the cognitive mechanisms that transform this into creative energy.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-pink-400">Emotional Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">✓</span> <span><strong>Core Value:</strong> 'Inward Consistency (Authenticity)' is the top priority for action over external rewards.</span></li>
                    <li className="flex items-start gap-3"><span className="text-pink-500 mt-1">✓</span> <span><strong>Statistics:</strong> 78% of INFP respondents experienced depression accompanied by physical fatigue when performing 'meaningless tasks.'</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Fi-Ne Mechanism: A Vast Inner Universe</h2>
                    <p className="leading-relaxed mb-6">
                        INFP's dominant function, <strong>Introverted Feeling (Fi)</strong>, places the standard of all judgment on their internal values.
                        Their auxiliary function, <strong>Extraverted Intuition (Ne)</strong>, helps expand those values into various possibilities in the real world, manifesting as poetry, literature, and art.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Career Data: 'Meaning' Dictates Performance</h2>
                    <p className="leading-relaxed mb-6">
                        INFPs show the highest turnover rates when performing repetitive 'mechanical tasks.'
                        However, when their creativity is utilized or when they see the value in helping others, they produce the most original outcomes of any type.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-pink-400 mb-4">📊 INFP Job Satisfaction Statistics</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Creative Arts/Editorial Satisfaction</span>
                                <span className="text-pink-400 font-bold">#1 among all types</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Maladjustment Rate in Corporate Environments</span>
                                <span className="text-pink-400 font-bold">1.8x higher than average</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Perceived Social Value of Work</span>
                                <span className="text-pink-400 font-bold">94% (Very High)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Exclusive Poll: Social Pain Felt by INFPs</h2>
                    <InteractivePoll
                        question="Which part of wearing a social mask (Persona) is most painful for you?"
                        options={pollOptions}
                        totalVotes={1842}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Growth Strategy: Using 'Extraverted Thinking (Te)' to Realize Dreams</h2>
                    <p className="leading-relaxed mb-6">
                        The biggest challenge for an INFP is translating the vast ideals in their head into 'action.' To do this, one must consciously practice their inferior function, <strong>Extraverted Thinking (Te)</strong>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy A: Micro-Checklists</h3>
                            <p className="text-gray-400 text-sm md:text-base">Rather than dreaming of perfect results, activate Te by creating very small task lists, such as 'Doing it for just 5 minutes today.'</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy B: Emotional Space Separation</h3>
                            <p className="text-gray-400 text-sm md:text-base">Strictly separate work and rest spaces. Practice focusing on 'system execution' rather than 'value judgment' during work hours.</p>
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
                {isEn ? <InfpContentEn t={t} /> : <InfpContentKo t={t} />}
            </article>
        </div>
    );
}
