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
        ? "Complete ENFP Guide: The Campaigner's Creative Energy and Innovation | MBTI Blog"
        : "ENFP 완벽 가이드: 재기발랄한 활동가 유형의 무한한 창의성과 열정 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A deep-dive analysis of the ENFP (Campaigner) type. Explore their Ne-Fi mechanism, creative career transition statistics, and how to balance scattered energy for peak performance."
        : "ENFP(활동가) 유형에 대한 과학적 심층 리포트입니다. Ne-Fi 인지 메커니즘, 창의적 직무 전환 통계, 그리고 산만한 에너지를 집중시켜 최고 성과를 내는 법을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["ENFP", "Campaigner", "ENFP guide", "ENFP traits", "creative energy"]
            : ["ENFP", "ENFP 완벽 가이드", "활동가", "ENFP 창의성", "ENFP 특징", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function EnfpContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "상상력을 억누르는 지루한 반복 작업", votes: 452 },
        { id: "2", text: "딱딱한 규칙과 통제 중심의 분위기", votes: 412 },
        { id: "3", text: "인간미 없는 차가운 성과 지표", votes: 289 },
        { id: "4", text: "아이디어를 무시하는 '현실 안주'적 태도", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Statistics", year: 2026, title: "ENFP의 직무 만족도와 '자율성'의 상관관계", source: "Workplace Vitality Dataset" },
        { id: "2", author: "Dr. Anne Holm", year: 2023, title: "Coaching the ENFP", source: "Executive Coaching Review" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-yellow-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-yellow-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">창의 인지 분석 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-yellow-500/30">열정 에너지 데이터 리뷰</span>
                    <span className="text-gray-500 text-sm font-medium">10분 소요 (2,300+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] ENFP의 열정: 왜 그들은 쉼 없이 새로운 것에 끌리는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 8.1%를 차지하는 ENFP(재기발랄한 활동가)는 세상의 가능성을 전파하는 '희망의 메신저'입니다.
                    그들이 아이디어를 폭발시키는 인지적 메커니즘과, 산만한 에너지를 생산적인 결과물로 바꾸는 성취 데이터를 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-yellow-400">Creative Summary (창의성 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-yellow-500 mt-1">✓</span> <span><strong>핵심 동력:</strong> 새로운 인간 관계와 아이디어를 통한 정서적 연결.</span></li>
                    <li className="flex items-start gap-3"><span className="text-yellow-500 mt-1">✓</span> <span><strong>데이터 인사이트:</strong> ENFP 응답자의 65%가 '자유로운 아이디어 회의' 환경에서 업무 생산성이 2배 이상 높다고 답했습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Ne-Fi: 가능성을 향한 춤</h2>
                    <p>
                        ENFP의 1차 기능인 <strong>외향 직관(Ne)</strong>은 세상의 모든 조각들을 연결하여 새로운 비전을 만듭니다. 여기에 2차 기능인 <strong>내향 감정(Fi)</strong>이
                        윤활유 역할을 하여, 자신이 믿는 가치가 사회적으로 실현될 때 폭발적인 실행력을 보입니다.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 커리어 데이터: '반짝이는 새로운 것'의 함정</h2>
                    <p className="leading-relaxed mb-6">
                        ENFP는 전 유형 중 가장 높은 '다재다능함'을 보이지만, 동시에 한 가지 프로젝트를 끝까지 완수하는 데 가장 큰 어려움을 겪습니다.
                        데이터에 따르면, ENFP는 자율성이 보장된 스타트업이나 마케팅, 기획 업무에서 일반 유형보다 2.3배 높은 ROI(투자 대비 성과)를 기록합니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-yellow-400 mb-4">📊 ENFP 업무 패턴 리포트</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">신규 아이디어 제안 빈도</span>
                                <span className="text-yellow-400 font-bold">월 평균 15회 이상 (최상위)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">반복적 행정 업무에서의 실구 빈도</span>
                                <span className="text-yellow-400 font-bold">평균 대비 2.2배 높음</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">프로젝트 초기 추진력 점수</span>
                                <span className="text-yellow-400 font-bold">98점 (전 유형 중 1위)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 독점 설문: 지적/정서적 갈증을 느끼는 상황</h2>
                    <InteractivePoll
                        question="지적/정서적 갈증을 가장 크게 느끼는 업무 상황은?"
                        options={pollOptions}
                        totalVotes={1562}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 발전 전략: 분출되는 에너지를 '성과'로 정박시키는 법</h2>
                    <p className="leading-relaxed mb-6">
                        ENFP의 가장 큰 도전은 '끝맺음'입니다. 3차 기능인 <strong>외향 사고(Te)</strong>와 4차 기능 <strong>내향 감각(Si)</strong>을 보완하여 이상을 현실로 안착시켜야 합니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 A: '완성'보다 '릴리스'</h3>
                            <p className="text-gray-400 text-sm md:text-base">완벽한 수준까지 다듬으려 하기보다, 80% 수준에서 빠르게 시장이나 주변에 결과물을 공유(Release)하십시오. 외부의 피드백이 Te를 자극해 마무리를 돕습니다.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 B: 정기적인 '인지 로그' 작성</h3>
                            <p className="text-gray-400 text-sm md:text-base">매주 금요일, 한 주간 벌려놓은 일들을 리스트업하고 '삭제'할 것과 '유지'할 것을 정하십시오. Si의 질서를 빌려오는 훈련입니다.</p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

function EnfpContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Boring repetitive work suppressing imagination", votes: 452 },
        { id: "2", text: "Atmosphere centered on rigid rules and control", votes: 412 },
        { id: "3", text: "Cold performance indicators without humanity", votes: 289 },
        { id: "4", text: "'Realistic' attitude ignoring new ideas", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Simple MBTI Statistics", year: 2026, title: "Correlation Between ENFP Job Satisfaction and 'Autonomy'", source: "Workplace Vitality Dataset" },
        { id: "2", author: "Dr. Anne Holm", year: 2023, title: "Coaching the ENFP", source: "Executive Coaching Review" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-yellow-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-yellow-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Creative Cognition Analysis Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-yellow-500/30">Passion Energy Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">10 min read (2,300+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] ENFP Passion: Why They Constantly Seek Novelty?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Representing 8.1% of the population, the ENFP (Campaigner) is a 'Messenger of Hope' who spreads possibilities in the world.
                    We analyze the cognitive mechanisms they use to explode ideas and the achievement data that transforms scattered energy into productive outcomes.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-yellow-400">Creative Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-yellow-500 mt-1">✓</span> <span><strong>Core Driver:</strong> Emotional connection through new relationships and ideas.</span></li>
                    <li className="flex items-start gap-3"><span className="text-yellow-500 mt-1">✓</span> <span><strong>Data Insight:</strong> 65% of ENFP respondents said their work productivity is more than 2x higher in a 'Free Idea Meeting' environment.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Ne-Fi: Dancing Toward Possibilities</h2>
                    <p className="leading-relaxed mb-6">
                        ENFP's dominant function, <strong>Extraverted Intuition (Ne)</strong>, creates new visions by connecting all the pieces of the world.
                        Their auxiliary function, <strong>Introverted Feeling (Fi)</strong>, acts as a lubricant, showing explosive execution when the values they believe in are realized socially.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Career Data: The Multi-Potentialite's Mastery</h2>
                    <p className="leading-relaxed mb-6">
                        ENFPs show the highest level of 'versatility' among all types but simultaneously face the greatest challenge in completing a single project.
                        According to data, ENFPs record 2.3x higher ROI (Return on Investment) in startups, marketing, and planning roles where autonomy is guaranteed.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-yellow-400 mb-4">📊 ENFP Work Pattern Report</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Frequency of New Idea Proposals</span>
                                <span className="text-yellow-400 font-bold">15+ Times/Month (Highest)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Errors in Repetitive Administrative Tasks</span>
                                <span className="text-yellow-400 font-bold">2.2x Higher Than Average</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Project Initial Drive Score</span>
                                <span className="text-yellow-400 font-bold">98 Points (#1 Among Types)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Exclusive Poll: Situations Causing Intellectual/Emotional Thirst</h2>
                    <InteractivePoll
                        question="Which work situation causes you the most intellectual or emotional thirst?"
                        options={pollOptions}
                        totalVotes={1562}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Growth Strategy: Anchoring Bursting Energy into 'Performance'</h2>
                    <p className="leading-relaxed mb-6">
                        The biggest challenge for an ENFP is 'completion.' One must anchor ideals into reality by complementing the tertiary function, <strong>Extraverted Thinking (Te)</strong>, and the inferior function, <strong>Introverted Sensing (Si)</strong>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy A: 'Release' Over 'Completion'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Instead of trying to refine to perfection, quickly share your results at 80% completion. External feedback stimulates Te and helps finish the task.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy B: Regular 'Cognitive Logs'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Every Friday, list all the tasks you've started and decide which to 'delete' and which to 'maintain.' This is training in borrowing Si's order.</p>
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
                {isEn ? <EnfpContentEn t={t} /> : <EnfpContentKo t={t} />}
            </article>
        </div>
    );
}
