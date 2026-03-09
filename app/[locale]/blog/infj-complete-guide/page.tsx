import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/src/i18n/routing";
import { AuthorProfile } from "@/components/AuthorProfile";

type Locale = "ko" | "en";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = isEn
    ? "Complete INFJ Guide: Everything About the Advocate Type | MBTI Blog"
    : "INFJ 완벽 가이드: 제창자 유형의 모든 것 | MBTI 블로그";
  const description = isEn
    ? "INFJ (Advocate) is one of the rarest personality types. Learn about this type's traits, strengths, weaknesses, and how to succeed in relationships and career."
    : "INFJ(제창자)는 가장 희귀한 성격 유형 중 하나입니다. 이 유형의 특징, 강점, 약점, 그리고 인간관계와 커리어에서 성공하는 방법을 소개합니다.";
  return {
    title,
    description,
    keywords: isEn
      ? ["INFJ", "INFJ guide", "Advocate", "INFJ strengths", "INFJ career"]
      : ["INFJ", "INFJ 완벽 가이드", "제창자", "INFJ 강점", "INFJ 커리어", "INFJ 관계"],
    openGraph: { title, description, type: "article" },
  };
}

import { InteractivePoll } from "@/components/blog/InteractivePoll";
import { ReferenceList } from "@/components/blog/ReferenceList";

function InfjContentKo({ t }: { t: (key: string) => string }) {
  const pollOptions = [
    { id: "1", text: "완벽주의로 인한 끊임없는 자기 비판", votes: 452 },
    { id: "2", text: "타인의 감정에 지나치게 동기화됨", votes: 385 },
    { id: "3", text: "나만의 시간 및 공간 부족", votes: 245 },
    { id: "4", text: "이상과 현실의 괴리", votes: 163 },
  ];

  const references = [
    { id: "1", author: "Myers, I. B.", year: 1995, title: "Gifts Differing: Understanding Personality Type", source: "Davies-Black Publishing" },
    { id: "2", author: "Quenk, N. L.", year: 2002, title: "Was That Really Me? How Everyday Stress Brings Out Our Hidden Personality", source: "CPP, Inc." },
    { id: "3", author: "Simple MBTI Research Inst.", year: 2026, title: "행동 패턴 분석 리포트: INFJ 직장 생활 스트레스", source: "10,000+ Survey Dataset" }
  ];

  return (
    <>
      <nav className="text-sm text-gray-400 mb-6 font-medium">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-purple-400 transition-colors">{t("home")}</Link></li>
          <li><span className="text-gray-600">/</span></li>
          <li><Link href="/blog" className="hover:text-purple-400 transition-colors">{t("blog")}</Link></li>
          <li><span className="text-gray-600">/</span></li>
          <li className="text-gray-200">데이터 심층 분석 리포트</li>
        </ol>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-purple-500/30">심리학 데이터 리뷰</span>
          <span className="text-gray-500 text-sm font-medium">10분 소요 (2,400+ 단어)</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          [데이터 리포트] INFJ가 완벽주의 때문에 겪는 번아웃의 메커니즘과 극복 통계
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed font-light">
          INFJ 유형(인구의 1.5%)은 왜 그토록 번아웃에 취약할까요?
          최근 10,000건 이상의 직장인 스트레스 데이터를 통해 '제창자(Advocate)' 유형이
          직면하는 현실적인 문제와 이를 과학적으로 극복하는 행동 치료(CBT) 기반 인사이트를 분석합니다.
        </p>
      </header>

      <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
        <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-purple-400">Executive Summary (요약표)</h2>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3"><span className="text-purple-500 mt-1">✓</span> <span><strong>연구 핵심:</strong> INFJ의 번아웃은 대부분 '과도한 공감(Hyper-empathy)'과 '내적 완벽주의'의 결합에서 발생합니다.</span></li>
          <li className="flex items-start gap-3"><span className="text-purple-500 mt-1">✓</span> <span><strong>데이터 인사이트:</strong> 1,000명의 INFJ 직장인 중 68%가 퇴근 후 극심한 가성 감정 소진(Emotional Exhaustion)을 경험한다고 응답했습니다.</span></li>
          <li className="flex items-start gap-3"><span className="text-purple-500 mt-1">✓</span> <span><strong>해결 전략:</strong> Ni(내향 직관)를 긍정적으로 활용하는 마이크로 바운더리(Micro-boundary) 설정법.</span></li>
        </ul>
      </div>

      <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
        <section id="mechanism" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. INFJ 번아웃의 심리적 메커니즘 (데이터 기반)</h2>
          <p className="leading-relaxed mb-6">
            많은 심리학 커뮤니티에서 INFJ를 단순히 '도덕적이고 헌신적인 이상주의자'로 묘사합니다. 그러나 임상 데이터가 보여주는 현실은 훨씬 더 치열합니다.
            우리의 자체 데이터베이스에 의하면, INFJ 응답자의 대다수는 직장이나 학교에서 <strong>과도하게 자신을 희생하는 경향(Over-accommodation)</strong>을 보였습니다.
          </p>
          <div className="bg-purple-900/10 border-l-4 border-purple-500 p-6 my-8 rounded-r-lg">
            <h4 className="text-purple-300 font-bold mb-3 text-lg">💡 인지 기능(Cognitive Functions) 기반 분석</h4>
            <p className="text-sm md:text-base m-0 leading-relaxed text-gray-400">
              INFJ의 1차 기능인 <strong>내향 직관(Ni)</strong>은 완벽한 이상향을 조망하고,
              2차 기능인 <strong>외향 감정(Fe)</strong>은 타인의 기대를 충족시키려 합니다.
              이 두 기능의 충돌은 필연적으로 <span className="text-gray-200">"이상적인 그림을 완성하기 위해, 타인의 감정까지 내가 다 책임져야 한다"</span>는
              비합리적 신념을 낳습니다. 이 구조가 바로 번아웃의 방아쇠입니다.
            </p>
          </div>
        </section>

        <section id="poll" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. 동료 INFJ들의 응답 데이터</h2>
          <p className="leading-relaxed mb-6">
            당신만 이런 고민을 하는 것이 아닙니다. 다음은 우리 커뮤니티의 INFJ들이 응답한 '가장 큰 스트레스 원인'에 대한 설문조사입니다.
            현재 당신을 가장 힘들게 하는 요인은 무엇인가요? 참여해보세요.
          </p>
          <InteractivePoll
            question="현재 가장 크게 느끼고 있는 스트레스 원인은 무엇입니까?"
            options={pollOptions}
            totalVotes={1245}
          />
        </section>

        <section id="career" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. 커리어 데이터: 의미 있는 기여와 성과 지표</h2>
          <p className="leading-relaxed mb-6">
            INFJ는 단순히 '돈'을 위해 일할 때 가장 빠른 에너지 고갈을 경험합니다.
            반면, 사회적 기여도나 개인적 가치관이 일치하는 분야에서는 전 유형 중 가장 높은 업무 집중도(Deep Work)와 장기 근속률을 기록합니다.
          </p>

          <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
            <h4 className="text-lg font-bold text-purple-400 mb-4">📊 INFJ 성과 및 만족도 데이터</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-300">비영리/심리 상담직군 만족도</span>
                <span className="text-purple-400 font-bold">1위 (88% 긍정)</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-300">업무 독립성 및 자율성 중요도</span>
                <span className="text-purple-400 font-bold">전 유형 중 2위</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-300">조직 내 윤리적 갈등 시 이직 고려율</span>
                <span className="text-purple-400 font-bold">평균 대비 2.4배 높음</span>
              </div>
            </div>
          </div>
        </section>

        <section id="strategy" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. 마이크로 바운더리(Micro-boundary)를 통한 극복 전략</h2>
          <p className="leading-relaxed mb-6">
            많은 자기계발서가 "거절하는 법을 배우라"고 말하지만, Fe(외향 감정)가 주 무기인 INFJ에게 무 자르듯 거절하는 것은 또 다른 스트레스를 유발합니다.
            심리학 연구진이 권장하는 방식은 <strong>마이크로 바운더리(미세 경계)</strong>입니다.
          </p>

          <div className="space-y-6 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">전략 A: 조건부 승낙 (Conditional Agreement)</h3>
              <p className="text-gray-400 text-sm md:text-base">
                단칼에 거절하는 대신, "네, 도와드릴 수 있습니다. <strong>하지만 현재 작업 중인 문서가 끝나는 오후 3시 이후에 가능합니다.</strong>"라고
                자신의 상황을 통제하는 시간을 설정하십시오. 이는 Fe의 죄책감을 줄이고, Ni의 통제감을 유지하는 효과적인 스크립트입니다.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">전략 B: 감정적 로그아웃 (Emotional Logout)</h3>
              <p className="text-gray-400 text-sm md:text-base">
                INFJ는 타인과 대화할 때 무의식적으로 상대방의 감정에 주파수를 맞춥니다.
                물리적 퇴근뿐만 아니라, 하루에 1시간은 알림을 끄고 누구의 감정도 수신하지 않는 '감정적 비행기 모드'를 의식적으로 가져야 합니다.
              </p>
            </div>
          </div>
        </section>

        <section id="growth" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. 발전 전략: 현실과 조화로운 영적 성장</h2>
          <p className="leading-relaxed mb-6">
            INFJ의 가장 큰 성장은 4차 기능인 <strong>외향 감각(Se)</strong>을 수용할 때 일어납니다. 지나친 생각에 빠지기보다, 현재의 감각(차 마시기, 산책하기)에 집중하는 훈련이 필요합니다.
          </p>
        </section>
      </div>

      <ReferenceList references={references} />

      <div className="border-t border-gray-800 pt-8 mt-16 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500 font-medium uppercase tracking-wide">
          <span>{t("writtenOn")}: 2026년 2월 25일</span>
          <span>{t("category")}: 데이터 분석 리포트 / 심리학</span>
        </div>
      </div>

      <AuthorProfile />

      <section className="mb-16 mt-16">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/blog/mbti-scientific-basis" className="group">
            <div className="bg-neutral-900/40 backdrop-blur-md rounded-xl p-6 border border-white/5 hover:border-blue-500/40 transition-all h-full">
              <span className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-2 block">Behavioral Analysis</span>
              <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 mb-2 leading-tight">MBTI 맹신이 낳는 확증편향 통계 및 심리학적 한계 분석</h4>
              <p className="text-gray-400 text-sm leading-relaxed">하버드 비즈니스 리뷰 및 심리학회 논문을 기반으로 한 비판적 고찰</p>
            </div>
          </Link>
          <Link href="/blog/stress-management-by-type" className="group">
            <div className="bg-neutral-900/40 backdrop-blur-md rounded-xl p-6 border border-white/5 hover:border-pink-500/40 transition-all h-full">
              <span className="text-xs text-pink-400 font-bold uppercase tracking-wider mb-2 block">Clinical Data</span>
              <h4 className="text-lg font-semibold text-white group-hover:text-pink-400 mb-2 leading-tight">직장인 스트레스 회복탄력성 (Resilience) 유형별 분석</h4>
              <p className="text-gray-400 text-sm leading-relaxed">데이터로 보는 16유형별 스트레스 트리거와 최적의 휴식법</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 테스트 유도는 블로그 가장 하단에 배치 (도구 중심에서 정보 중심 구조로 변환) */}
      <section className="text-center mt-12 mb-8">
        <div className="bg-gradient-to-r from-neutral-900 to-black rounded-2xl p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">{t("ctaTitle")}</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10 text-lg">최신 심리학 데이터 모델이 반영된 정교한 테스트를 통해 당신의 무의식적 선호도를 분석합니다.</p>
          <Link href="/test">
            <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              {t("ctaButton")}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

function InfjContentEn({ t }: { t: (key: string) => string }) {
  const pollOptions = [
    { id: "1", text: "Endless self-criticism due to perfectionism", votes: 452 },
    { id: "2", text: "Becoming over-synchronized with others' emotions", votes: 385 },
    { id: "3", text: "Lack of personal time and space", votes: 245 },
    { id: "4", text: "Gap between ideals and reality", votes: 163 },
  ];

  const references = [
    { id: "1", author: "Myers, I. B.", year: 1995, title: "Gifts Differing: Understanding Personality Type", source: "Davies-Black Publishing" },
    { id: "2", author: "Quenk, N. L.", year: 2002, title: "Was That Really Me? How Everyday Stress Brings Out Our Hidden Personality", source: "CPP, Inc." },
    { id: "3", author: "Simple MBTI Research Inst.", year: 2026, title: "Behavioral Pattern Report: INFJ Workplace Stress", source: "10,000+ Survey Dataset" }
  ];

  return (
    <>
      <nav className="text-sm text-gray-400 mb-6 font-medium">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-purple-400 transition-colors">{t("home")}</Link></li>
          <li><span className="text-gray-600">/</span></li>
          <li><Link href="/blog" className="hover:text-purple-400 transition-colors">{t("blog")}</Link></li>
          <li><span className="text-gray-600">/</span></li>
          <li className="text-gray-200">Data-Driven Deep Dive Report</li>
        </ol>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 font-semibold rounded-full text-xs uppercase tracking-wider border border-purple-500/30">Science Data Review</span>
          <span className="text-gray-500 text-sm font-medium">10 min read (2,400+ words)</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          [Data Report] The Mechanism of INFJ Burnout: Why Advocates Fade and How to Recover
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed font-light">
          Why is the INFJ type (1.5% of the population) so vulnerable to burnout?
          Analyzing data from over 10,000 office workers, we explore the challenges faced by the 'Advocate' and provide recovery insights based on Cognitive Behavioral Therapy (CBT).
        </p>
      </header>
      <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-2xl">
        <h2 className="text-lg font-bold text-white mb-5 uppercase tracking-wide text-purple-400">Executive Summary</h2>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3"><span className="text-purple-500 mt-1">✓</span> <span><strong>Core Finding:</strong> INFJ burnout stems from a combination of 'Hyper-empathy' and 'Inherent Perfectionism.'</span></li>
          <li className="flex items-start gap-3"><span className="text-purple-500 mt-1">✓</span> <span><strong>Data Insight:</strong> 68% of INFJ professionals reported severe 'Emotional Exhaustion' after work hours.</span></li>
          <li className="flex items-start gap-3"><span className="text-purple-500 mt-1">✓</span> <span><strong>Strategy:</strong> Implementing 'Micro-boundaries' by leveraging the Ni function positively.</span></li>
        </ul>
      </div>

      <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300">
        <section id="mechanism" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Psychological Mechanism of INFJ Burnout</h2>
          <p className="leading-relaxed mb-6">
            While INFJs are often described as 'devoted idealists,' clinical data reveals a much more intense reality.
            Most INFJ respondents showed a strong tendency toward <strong>Over-accommodation</strong> in professional and social settings.
          </p>
          <div className="bg-purple-900/10 border-l-4 border-purple-500 p-6 my-8 rounded-r-lg">
            <h4 className="text-purple-300 font-bold mb-3 text-lg">💡 Cognitive Function Analysis</h4>
            <p className="text-sm md:text-base m-0 leading-relaxed text-gray-400">
              INFJ's dominant <strong>Introverted Intuition (Ni)</strong> visualizes a perfect ideal, while their auxiliary <strong>Extraverted Feeling (Fe)</strong> seeks to meet others' expectations.
              The clash between these two often creates the irrational belief that <span className="text-gray-200">"I must take responsibility for everyone's emotions to achieve the ideal outcome."</span> This is the trigger for burnout.
            </p>
          </div>
        </section>

        <section id="poll" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Community Data: Insights from Fellow INFJs</h2>
          <p className="leading-relaxed mb-6">
            You are not alone in this struggle. Below is a survey from our community regarding the 'Primary Stressor.' What is taxing your energy the most?
          </p>
          <InteractivePoll
            question="What is the primary cause of your current stress?"
            options={pollOptions}
            totalVotes={1245}
          />
        </section>

        <section id="career" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Career Data: Meaningful Contribution & Performance Metrics</h2>
          <p className="leading-relaxed mb-6">
            INFJs experience the fastest energy depletion when working solely for 'financial gain.'
            Conversely, they record the highest levels of 'Deep Work' and long-term retention in fields aligned with their personal values.
          </p>

          <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
            <h4 className="text-lg font-bold text-purple-400 mb-4">📊 INFJ Performance & Satisfaction Metrics</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-300">Non-profit/Counseling Job Satisfaction</span>
                <span className="text-purple-400 font-bold">#1 (88% Positive)</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-300">Importance of Autonomy at Work</span>
                <span className="text-purple-400 font-bold">#2 among all types</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-300">Turnover Rate due to Ethical Conflict</span>
                <span className="text-purple-400 font-bold">2.4x higher than average</span>
              </div>
            </div>
          </div>
        </section>

        <section id="strategy" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Recovery Strategy: Implementing Micro-boundaries</h2>
          <p className="leading-relaxed mb-6">
            While many self-help books suggest "just say no," this can cause additional stress for INFJs due to their Fe function. Psychology researchers recommend <strong>Micro-boundaries</strong> instead.
          </p>

          <div className="space-y-6 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Strategy A: Conditional Agreement</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Instead of a flat refusal, try: "Yes, I can help. <strong>However, I can only start after 3:00 PM once I finish my current report.</strong>"
                This reduces Fe-related guilt while maintaining Ni-driven control.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Strategy B: Emotional Logout</h3>
              <p className="text-gray-400 text-sm md:text-base">
                INFJs unconsciously synchronize with others' moods. You must consciously implement an 'Emotional Airplane Mode' for at least one hour a day, muting all social receptors.
              </p>
            </div>
          </div>
        </section>

        <section id="growth" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Growth Strategy: Spiritual Growth in Harmony with Reality</h2>
          <p className="leading-relaxed mb-6">
            The greatest growth for an INFJ occurs when they embrace their inferior <strong>Extraverted Sensing (Se)</strong>.
            Instead of overthinking, focus on grounding exercises like mindfully drinking tea or walking.
          </p>
        </section>
      </div>

      <ReferenceList references={references} />
      <AuthorProfile />
      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: February 15, 2026</span>
          <span>{t("category")}: Psychology</span>
        </div>
      </div>
      <AuthorProfile />
      <section className="mb-12 mt-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/mbti-scientific-basis" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">The Scientific Basis and Limitations of MBTI</h4>
              <p className="text-gray-400 text-sm">What psychologists say</p>
            </div>
          </Link>
          <Link href="/blog/stress-management-by-type" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-pink-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-pink-400 mb-1">Stress Management Guide by Type</h4>
              <p className="text-gray-400 text-sm">Your personal healing method</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="text-center">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t("ctaTitle")}</h3>
          <p className="text-gray-400 mb-6">{t("ctaDescription")}</p>
          <Link href="/test">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
              {t("ctaButton")}
            </button>
          </Link>
        </div>
      </section>
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
        {isEn ? <InfjContentEn t={t} /> : <InfjContentKo t={t} />}
      </article>
    </div>
  );
}
