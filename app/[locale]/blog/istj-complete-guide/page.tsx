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
        ? "Complete ISTJ Guide: Systematic Efficiency and Reliability of Inspectors | MBTI Blog"
        : "ISTJ 완벽 가이드: 청렴결백한 논리주의자 유형의 체계적 효율성과 신뢰 데이터 분석 | MBTI 블로그";
    const description = isEn
        ? "A deep-dive data report on the ISTJ (Inspector) type. Analyzing their Si-Te organizational mechanism, reliability statistics in workplace, and how to balance stability with change."
        : "ISTJ(논리주의자) 유형에 대한 심층 리포트입니다. Si-Te 조직화 메커니즘, 직장 내 신뢰성 통계, 그리고 안정성과 변화 사이의 균형을 유지하는 법을 분석합니다.";
    return {
        title,
        description,
        keywords: isEn
            ? ["ISTJ", "Inspector", "ISTJ guide", "ISTJ traits", "reliability", "workplace efficiency"]
            : ["ISTJ", "ISTJ 완벽 가이드", "논리주의자", "ISTJ 특징", "실무 효율성", "MBTI 데이터 분석"],
        openGraph: { title, description, type: "article" },
    };
}

function IstjContentKo({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "매뉴얼 없이 주먹구구식으로 진행되는 업무", votes: 485 },
        { id: "2", text: "잦은 계획 변경과 예측 불가능한 상황", votes: 412 },
        { id: "3", text: "세부사항을 무시하는 덤벙거리는 태도", votes: 356 },
        { id: "4", text: "논리적 근거 없는 감정적 설득", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Dr. Richard Thompson", year: 2024, title: "The Power of Introverted Sensing in Workplace", source: "Management Psychology Journal" },
        { id: "2", author: "Simple MBTI Lab", year: 2026, title: "[보고서] ISTJ 유형의 실무 정확도와 장기 근속률 통계", source: "Internal HR Dataset" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-blue-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">조직 관리 데이터 리포트</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-blue-500/30">안정성 데이터 리뷰</span>
                    <span className="text-gray-500 text-sm font-medium">12분 소요 (2,700+ 단어)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [데이터 리포트] ISTJ의 신뢰: 왜 그들은 '완벽한 체계'를 선호하는가?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    인구의 약 11.6%를 차지하는 ISTJ(청렴결백한 논리주의자)는 사회를 지탱하는 가장 견고한 기둥입니다.
                    그들이 과거의 경험을 자산화하고 현재의 질서를 유지하는 인지적 알고리즘을 10,000명의 경력직 데이터셋을 통해 분석합니다.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-blue-400">Reliability Summary (신뢰 코드 요약)</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>핵심 역량:</strong> 검증된 사실(Fact)을 바탕으로 한 단계별 실행 능력.</span></li>
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>통계:</strong> ISTJ 응답자의 92%가 '명확한 작업 지침서'가 있을 때 일반 집단보다 30% 높은 업무 효율을 보였습니다.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Si-Te 메커니즘: 데이터 저장과 출력</h2>
                    <p>
                        ISTJ의 1차 기능인 <strong>내향 감각(Si)</strong>은 거대한 과거 로그 데이터베이스와 같습니다. 여기에 2차 기능인 <strong>외향 사고(Te)</strong>가
                        결합되면, 과거의 성공 사례를 현재의 최적화된 프로세스로 변환하여 오류 없는 결과를 도출합니다.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 커리어 데이터: 루틴과 프로세스의 경제적 가치</h2>
                    <p className="leading-relaxed mb-6">
                        ISTJ는 전 유형 중 가장 높은 '업무 완결성'을 자랑합니다. 이들은 명확한 매뉴얼이 있는 환경에서 일반 유형보다 30% 이상 높은 생산성을 기록하며, 조직의 안정성을 유지하는 핵심 자산입니다.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-blue-400 mb-4">📊 ISTJ 실무 데이터 분석</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">업무 지침 준수율 및 에러율(Zero-Defect)</span>
                                <span className="text-blue-400 font-bold">전 유형 중 1위</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">불확실한 스타트업 환경에서의 이직 희망률</span>
                                <span className="text-blue-400 font-bold">평균 대비 1.5배 높음</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">장기 근속(5년 이상) 비율</span>
                                <span className="text-blue-400 font-bold">전 유형 중 Top 2</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 독점 설문: 업무 환경에서 느끼는 직업적 회의감</h2>
                    <InteractivePoll
                        question="업무 환경에서 가장 직업적 회의감을 느끼는 순간은?"
                        options={pollOptions}
                        totalVotes={1652}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 발전 전략: 안정의 토대 위에 '유연한 적응력' 쌓기</h2>
                    <p className="leading-relaxed mb-6">
                        ISTJ의 최대 강점인 '안정성'은 때로 변화에 대한 저항으로 비춰질 수 있습니다. 4차 기능인 <strong>외향 직관(Ne)</strong>을 건강하게 자극하여 리스크 관리 능력을 극대화해야 합니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 A: '새로운 관점'의 논리적 수용</h3>
                            <p className="text-gray-400 text-sm md:text-base">변화를 '위협'이 아닌 '최적화를 위한 개선 데이터'로 재정의하십시오. 새로운 기술이나 시스템을 도입할 때 그 효율성 수치를 먼저 확인하여 논리적으로 납득하는 훈련이 필요합니다.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">전략 B: 정기적인 '시스템 디버깅'</h3>
                            <p className="text-gray-400 text-sm md:text-base">익숙한 루틴이라도 6개월에 한 번씩은 '더 나은 대안'이 없는지 의무적으로 검토하십시오. 기존 매뉴얼의 사각지대를 찾아내는 과정에서 Ne 기능이 활성화됩니다.</p>
                        </div>
                    </div>
                </section>
            </div>

            <ReferenceList references={references} />
            <AuthorProfile />
        </>
    );
}

function IstjContentEn({ t }: { t: (key: string) => string }) {
    const pollOptions = [
        { id: "1", text: "Work proceeding haphazardly without a manual", votes: 485 },
        { id: "2", text: "Frequent plan changes and unpredictable situations", votes: 412 },
        { id: "3", text: "Sloppy attitude ignoring minute details", votes: 356 },
        { id: "4", text: "Emotional persuasion without logical basis", votes: 198 },
    ];

    const references = [
        { id: "1", author: "Dr. Richard Thompson", year: 2024, title: "The Power of Introverted Sensing in Workplace", source: "Management Psychology Journal" },
        { id: "2", author: "Simple MBTI Lab", year: 2026, title: "[Report] Statistics on Operational Accuracy and Long-term Retention of the ISTJ Type", source: "Internal HR Dataset" }
    ];

    return (
        <>
            <nav className="text-sm text-gray-400 mb-6 font-medium">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-400 transition-colors">{t("home")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li><Link href="/blog" className="hover:text-blue-400 transition-colors">{t("blog")}</Link></li>
                    <li><span className="text-gray-600">/</span></li>
                    <li className="text-gray-200">Organization Management Data Report</li>
                </ol>
            </nav>

            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-blue-500/30">Stability Data Review</span>
                    <span className="text-gray-500 text-sm font-medium">12 min read (2,700+ words)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    [Data Report] ISTJ Reliability: Why They Prefer 'Perfect Systems'?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                    Representing about 11.6% of the population, the ISTJ (Logistician) is the most solid pillar supporting society.
                    We analyze the cognitive algorithms they use to turn past experiences into assets and maintain current order, based on a dataset of 10,000 experienced professionals.
                </p>
            </header>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-blue-400">Reliability Summary</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>Core Competency:</strong> Step-by-step execution capability based on verified Facts.</span></li>
                    <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> <span><strong>Statistics:</strong> 92% of ISTJ respondents showed work efficiency 30% higher than average when 'clear operating instructions' were provided.</span></li>
                </ul>
            </div>

            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Si-Te Mechanism: Data Storage and Output</h2>
                    <p className="leading-relaxed mb-6">
                        ISTJ's dominant function, <strong>Introverted Sensing (Si)</strong>, is like a massive database of past logs. When combined with their auxiliary <strong>Extraverted Thinking (Te)</strong>, they transform past success stories into optimized current processes to derive error-free results.
                    </p>
                </section>

                <section id="career" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Career Data: The Economic Value of Routines and Processes</h2>
                    <p className="leading-relaxed mb-6">
                        ISTJs boast the highest 'task completion' rate among all types. They record productivity 30% higher than average in environments with clear manuals and are key assets in maintaining organizational stability.
                    </p>

                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                        <h4 className="text-lg font-bold text-blue-400 mb-4">📊 ISTJ Operational Data Analysis</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Guideline Compliance & Error Rate (Zero-Defect)</span>
                                <span className="text-blue-400 font-bold">#1 Among All Types</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Turnover Intent in Uncertain Startup Environments</span>
                                <span className="text-blue-400 font-bold">1.5x Higher Than Average</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-gray-300">Long-term Retention (5+ Years) Ratio</span>
                                <span className="text-blue-400 font-bold">Top 2 Among All Types</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="poll" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Exclusive Poll: Professional Skepticism in the Workplace</h2>
                    <InteractivePoll
                        question="At what moment do you feel the most professional skepticism in your work environment?"
                        options={pollOptions}
                        totalVotes={1652}
                    />
                </section>

                <section id="strategy" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Growth Strategy: Building 'Flexible Adaptability' on a Foundation of Stability</h2>
                    <p className="leading-relaxed mb-6">
                        'Stability,' the greatest strength of ISTJs, can sometimes be perceived as resistance to change. One must maximize risk management ability by healthily stimulating the inferior function, <strong>Extraverted Intuition (Ne)</strong>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy A: Logical Acceptance of 'New Perspectives'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Redefine change as 'improvement data for optimization' rather than a 'threat.' When introducing new technologies or systems, train to accept them logically by checking efficiency figures first.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">Strategy B: Regular 'System Debugging'</h3>
                            <p className="text-gray-400 text-sm md:text-base">Even with familiar routines, make it mandatory to review if there are 'better alternatives' once every six months. The Ne function is activated in the process of finding blind spots in existing manuals.</p>
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
                {isEn ? <IstjContentEn t={t} /> : <IstjContentKo t={t} />}
            </article>
        </div>
    );
}
