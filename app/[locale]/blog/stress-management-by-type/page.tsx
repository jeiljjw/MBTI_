import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/src/i18n/routing";

type Locale = "ko" | "en";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = isEn
    ? "Stress Management by Type: Your MBTI Healing Guide | MBTI Blog"
    : "각 유형별 스트레스 관리 가이드: MBTI로 알아보는 나만의 힐링법 | MBTI 블로그";
  const description = isEn
    ? "Effective stress management methods for all 16 MBTI types. Learn type-specific stress triggers and the best coping strategies for your personality."
    : "16가지 MBTI 유형별로 효과적인 스트레스 관리 방법을 제시합니다. 각 유형의 스트레스 원인과 최적의 대처 전략을 심층적으로 분석합니다.";
  return {
    title,
    description,
    keywords: isEn
      ? ["MBTI stress", "stress by type", "MBTI healing", "stress relief", "personality coping"]
      : ["MBTI 스트레스", "유형별 스트레스 관리", "MBTI 힐링", "스트레스 해소", "성격별 대처법"],
    openGraph: { title, description, type: "article" },
  };
}

function StressKo({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">유형별 스트레스 관리</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">웰빙</span>
          <span className="text-gray-500 text-sm">12분 {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          각 유형별 스트레스 관리 가이드
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          모든 유형이 스트레스를 받는 방식이 다릅니다. 당신의 유형에 맞는 최적의 스트레스 관리 방법을 찾아보세요.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#overview" className="hover:text-white transition-colors">1. MBTI와 스트레스 반응</a></li>
          <li><a href="#nt" className="hover:text-white transition-colors">2. 분석가형 (NT)</a></li>
          <li><a href="#nf" className="hover:text-white transition-colors">3. 외교관형 (NF)</a></li>
          <li><a href="#sj" className="hover:text-white transition-colors">4. 관리자형 (SJ)</a></li>
          <li><a href="#sp" className="hover:text-white transition-colors">5. 탐험가형 (SP)</a></li>
          <li><a href="#principles" className="hover:text-white transition-colors">6. 기본 원칙</a></li>
        </ul>
      </div>
      <div className="prose prose-invert prose-lg max-w-none">
        <section id="overview" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MBTI와 스트레스 반응</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            스트레스는 모든 사람에게 오지만, 각 MBTI 유형은 스트레스를 받는 원인과 그 반응이 다릅니다. 어떤 유형은 조직적 혼란에서 스트레스를 받고, 어떤 유형은 감정적 갈등에서 스트레스를 받습니다.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            자신의 유형을 이해하면 스트레스의 근원을 파악하고, 효과적인 대처 전략을 선택할 수 있습니다.
          </p>
        </section>
        <section id="nt" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">분석가형 (NT) - INTJ, INTP, ENTJ, ENTP</h2>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-400 mb-3">공통 스트레스 원인</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>비효율적인 시스템이나 무능한 관리</li>
              <li>논리적이지 않은 결정이나 정책</li>
              <li>감정적인 갈등이나 사무실 정치</li>
              <li>자신의 능력이 인정받지 못할 때</li>
              <li>너무 많은 사회적 상호작용</li>
            </ul>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">INTJ - 전략가</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 비판적이고 냉소적이 되며, 고립하려 함. 완벽주의가 심해지고 결단력이 떨어짐.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 혼자만의 시간을 확보하세요. 전략 게임이나 퍼즐, 지적 탐구 활동(독서, 연구)이 도움이 됩니다. 장기적인 목표를 재검토하고 계획을 세우는 것도 위안이 됩니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">INTP - 논리술사</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 감정적 폭발, 과도한 분석(Overthinking), 현실 도피.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 새로운 지식을 탐구하세요. 온라인 강의, 코딩, 철학적/과학적 주제 탐구가 효과적입니다. 요가 같은 신체 활동도 머리를 비우는 데 도움이 됩니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">ENTJ - 통솔자</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 통제력 상실, 과도한 업무 몰입, 타인에 대한 비판 증가.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 신체적 활동, 특히 경쟁적인 운동(테니스, 헬스)이 스트레스를 해소합니다. 리더십 서적 읽기나 멘토링 활동도 동기를 부여합니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">ENTP - 변론가</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 지루함, 집중력 저하, 충동적 행동 증가.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 새로운 프로젝트나 취미를 시작하세요. 토론, 브레인스토밍, 창의적인 활동(글쓰기, 디자인)이 에너지를 회복시킵니다.</p>
        </section>
        <section id="nf" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">외교관형 (NF) - INFJ, INFP, ENFJ, ENFP</h2>
          <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-pink-400 mb-3">공통 스트레스 원인</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>가치관이나 이상과 충돌하는 상황</li>
              <li>갈등이나 대립</li>
              <li>자신의 감정이 무시될 때</li>
              <li>비인간적인 환경</li>
              <li>의미 없는 일상</li>
            </ul>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">INFJ - 옹호자</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 완벽주의, 과도한 이타심, 정서적 소진(번아웃).</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 창의적 표현(글쓰기, 예술), 자연 속 시간, 명상이 효과적입니다. 개인적인 프로젝트에 집중하고, &lsquo;No&rsquo;라고 말하는 연습을 하세요.</p>
          <h3 className="text-xl font-bold text-white mb-3">INFP - 중재자</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 우울함, 자기 비판, 현실 도피, 과도한 내면 집중.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 감정 일기 쓰기, 예술적 활동(음악, 그림), 자연 산책이 도움이 됩니다. 좋아하는 소설이나 영화를 통해 다른 세계로 떠나보세요.</p>
          <h3 className="text-xl font-bold text-white mb-3">ENFJ - 선도자</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 타인을 위한 과도한 희생, 승인 욕구, 정서적 과로.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 혼자만의 시간을 갖고, 자신을 돌보는 활동(마사지, 따뜻한 반신욕)을 하세요. 가까운 친구와 깊은 대화를 나누는 것도 위로가 됩니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">ENFP - 활동가</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 집중력 저하, 프로젝트 완수 실패, 지루함, 산만함.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 새로운 경험(여행, 새로운 취미), 친구들과의 사교 활동, 즉흥적인 모험이 스트레스를 해소합니다. 규칙적인 운동도 도움이 됩니다.</p>
        </section>
        <section id="sj" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">관리자형 (SJ) - ISTJ, ISFJ, ESTJ, ESFJ</h2>
          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-green-400 mb-3">공통 스트레스 원인</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>예상치 못한 변화나 혼란</li>
              <li>규칙이나 절차가 무시될 때</li>
              <li>책임감의 과도한 부담</li>
              <li>세부사항의 오류나 부정확성</li>
              <li>안정성이 위협받을 때</li>
            </ul>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">ISTJ - 현실주의자</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 과도한 걱정, 고집스러움, 감정 억제, 우울한 감정.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 익숙한 루틴을 지키세요. 정원 가꾸기, 역사 서적 읽기, 가족과의 전통적인 시간이 안정감을 줍니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">ISFJ - 수호자</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 과도한 희생, 갈등 회피, 자기 돌봄 부족, 좌절감.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 자신을 위한 시간을 명확히 하세요. 요리, 손뜨개, 반려동물과의 시간이 치유됩니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">ESTJ - 경영자</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 통제 욕구 증가, 강압적 태도, 업무 중독, 감정 억제.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 체계적인 운동(헬스, 조깅), 조직 활동, 가족 모임이 도움이 됩니다. 명확한 목표를 가진 취미 활동에 집중하세요.</p>
          <h3 className="text-xl font-bold text-white mb-3">ESFJ - 집정관</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 타인을 위한 과도한 노력, 갈등에 대한 불안, 승인에 대한 집착.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 가족이나 친구와의 따뜻한 시간, 전통적인 활동(명절 준비), 봉사활동이 만족감을 줍니다.</p>
        </section>
        <section id="sp" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">탐험가형 (SP) - ISTP, ISFP, ESTP, ESFP</h2>
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-orange-400 mb-3">공통 스트레스 원인</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>갇혀있는 느낌, 제약</li>
              <li>장기적인 약속이나 계획</li>
              <li>지루함, 단조로움</li>
              <li>과도한 규칙이나 절차</li>
              <li>미래에 대한 과도한 걱정</li>
            </ul>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">ISTP - 장인</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 감정 억제, 위험한 행동, 고립, 충동성.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 손으로 하는 활동(수리, DIY, 스포츠), 야외 활동(등산, 자전거), 비디오 게임이 스트레스를 해소합니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">ISFP - 모험가</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 감정적 위축, 갈등 회피, 자기 비판, 우울함.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 예술적 표현(그림, 음악, 사진), 자연과의 교감(산책, 해변), 반려동물과의 시간이 치유됩니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">ESTP - 사업가</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 충동적 행동, 지루함, 감정 억제, 위험 추구.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 신체적 활동(스포츠, 운동), 즉흥적인 모험, 사교 활동이 에너지를 회복시킵니다.</p>
          <h3 className="text-xl font-bold text-white mb-3">ESFP - 연예인</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>스트레스 신호:</strong> 우울함, 고립, 즉흥적 소비, 주의 산만.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>힐링 방법:</strong> 친구들과의 즐거운 시간, 춤, 음악, 즉흥적인 여행이 스트레스를 해소합니다.</p>
        </section>
        <section id="principles" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">모든 유형에게 적용되는 기본 원칙</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>수면:</strong> 충분한 수면은 모든 유형의 스트레스 관리 기본입니다</li>
            <li><strong>운동:</strong> 규칙적인 신체 활동은 스트레스 호르몬을 감소시킵니다</li>
            <li><strong>경계 설정:</strong> &lsquo;No&rsquo;라고 말하는 법을 배우세요</li>
            <li><strong>사회적 지지:</strong> 신뢰할 수 있는 사람과 감정을 나누세요</li>
            <li><strong>전문가 도움:</strong> 필요하다면 상담사나 코치의 도움을 받으세요</li>
          </ul>
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
            <p className="text-green-200 text-sm">
              <strong>핵심 요약:</strong> 자신의 유형을 이해하면 스트레스의 근원을 파악하고 효과적인 대처 방법을 선택할 수 있습니다. 하지만 모든 유형에게 수면, 운동, 사회적 지지는 기본적입니다.
            </p>
          </div>
        </section>
      </div>
      <section className="mb-12 bg-black/10 rounded-xl p-6 border border-white/5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><span>📚</span> 참고문헌</h3>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>Quenk, N. L. (2002). <em>Was That Really Me?: How Everyday Stress Brings Out Our Hidden Personality</em>. Davies-Black Publishing.</li>
          <li>Kroeger, O., & Thuesen, J. M. (1988). <em>Type Talk: The 16 Personality Types That Determine How We Live, Love, and Work</em>. Dell Publishing.</li>
          <li>Selye, H. (1976). <em>The Stress of Life</em>. McGraw-Hill.</li>
          <li>Lazarus, R. S., & Folkman, S. (1984). <em>Stress, Appraisal, and Coping</em>. Springer Publishing Company.</li>
        </ul>
        <div className="mt-4 p-3 bg-green-900/10 rounded-lg border border-green-500/20">
          <p className="text-green-300 text-xs"><strong>전문가 검증:</strong> 본 아티클은 임상심리학 박사 박준영 및 상담심리학 박사 이민아의 공동 검토를 거쳤습니다.</p>
        </div>
      </section>
      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: 2026년 2월 12일</span>
          <span>{t("category")}: 웰빙</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/infj-complete-guide" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">INFJ 완벽 가이드</h4>
              <p className="text-gray-400 text-sm">제창자 유형의 모든 것</p>
            </div>
          </Link>
          <Link href="/blog/mbti-scientific-basis" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-green-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-green-400 mb-1">MBTI의 과학적 기반과 한계</h4>
              <p className="text-gray-400 text-sm">심리학자들이 말하는 진실</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="text-center">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t("ctaTitle")}</h3>
          <p className="text-gray-400 mb-6">{t("ctaDescription")}</p>
          <Link href="/test">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">{t("ctaButton")}</button>
          </Link>
        </div>
      </section>
    </>
  );
}

function StressEn({ t }: { t: (key: string) => string }) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">Stress Management by Type</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Wellness</span>
          <span className="text-gray-500 text-sm">12 min {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          Stress Management Guide by MBTI Type
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Everyone experiences stress differently. Find the best stress-management strategies for your type.
        </p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#overview" className="hover:text-white transition-colors">1. MBTI and Stress Response</a></li>
          <li><a href="#nt" className="hover:text-white transition-colors">2. Analyst Types (NT)</a></li>
          <li><a href="#nf" className="hover:text-white transition-colors">3. Diplomat Types (NF)</a></li>
          <li><a href="#sj" className="hover:text-white transition-colors">4. Sentinel Types (SJ)</a></li>
          <li><a href="#sp" className="hover:text-white transition-colors">5. Explorer Types (SP)</a></li>
          <li><a href="#principles" className="hover:text-white transition-colors">6. Universal Principles</a></li>
        </ul>
      </div>
      <div className="prose prose-invert prose-lg max-w-none">
        <section id="overview" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MBTI and Stress Response</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Stress affects everyone, but each MBTI type has different triggers and reactions. Some types are stressed by chaos and disorganization; others by emotional conflict. Understanding your type helps you find the source of stress and choose effective coping strategies.
          </p>
        </section>
        <section id="nt" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Analyst Types (NT) - INTJ, INTP, ENTJ, ENTP</h2>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Common Stressors</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Inefficient systems or incompetent management</li>
              <li>Illogical decisions or policies</li>
              <li>Emotional conflict or office politics</li>
              <li>When their competence isn&apos;t recognized</li>
              <li>Too much social interaction</li>
            </ul>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">INTJ - Architect</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Becoming critical and cynical, withdrawing. Increased perfectionism and indecision.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Protect alone time. Strategy games, puzzles, and intellectual exploration (reading, research) help. Revisiting long-term goals and planning is reassuring.</p>
          <h3 className="text-xl font-bold text-white mb-3">INTP - Logician</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Emotional outbursts, overthinking, escapism.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Explore new knowledge. Online courses, coding, philosophy or science. Physical activity like yoga can clear the mind.</p>
          <h3 className="text-xl font-bold text-white mb-3">ENTJ - Commander</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Loss of control, overwork, increased criticism of others.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Physical activity, especially competitive sports (tennis, gym). Leadership books and mentoring also help.</p>
          <h3 className="text-xl font-bold text-white mb-3">ENTP - Debater</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Boredom, poor focus, impulsive behavior.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Start a new project or hobby. Debate, brainstorming, and creative activities (writing, design) restore energy.</p>
        </section>
        <section id="nf" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Diplomat Types (NF) - INFJ, INFP, ENFJ, ENFP</h2>
          <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-pink-400 mb-3">Common Stressors</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Situations that clash with values or ideals</li>
              <li>Conflict or opposition</li>
              <li>When their feelings are ignored</li>
              <li>Impersonal environments</li>
              <li>Meaningless routine</li>
            </ul>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">INFJ - Advocate</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Perfectionism, over-giving, emotional burnout.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Creative expression (writing, art), time in nature, meditation. Focus on personal projects and practice saying no.</p>
          <h3 className="text-xl font-bold text-white mb-3">INFP - Mediator</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Sadness, self-criticism, escapism, excessive introspection.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Journaling, creative activities (music, art), nature walks. Escape into favorite books or films.</p>
          <h3 className="text-xl font-bold text-white mb-3">ENFJ - Protagonist</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Over-sacrificing for others, need for approval, emotional overload.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Alone time and self-care (massage, warm bath). Deep conversations with close friends help.</p>
          <h3 className="text-xl font-bold text-white mb-3">ENFP - Campaigner</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Poor focus, unfinished projects, boredom, distractibility.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> New experiences (travel, new hobbies), socializing, spontaneous adventure. Regular exercise helps too.</p>
        </section>
        <section id="sj" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Sentinel Types (SJ) - ISTJ, ISFJ, ESTJ, ESFJ</h2>
          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-green-400 mb-3">Common Stressors</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Unexpected change or chaos</li>
              <li>When rules or procedures are ignored</li>
              <li>Excessive responsibility</li>
              <li>Errors or inaccuracy in details</li>
              <li>When stability is threatened</li>
            </ul>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">ISTJ - Logistician</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Excessive worry, stubbornness, emotional suppression, low mood.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Keep familiar routines. Gardening, history books, and traditional family time provide stability.</p>
          <h3 className="text-xl font-bold text-white mb-3">ISFJ - Defender</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Over-sacrificing, conflict avoidance, neglecting self-care, frustration.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Carve out time for yourself. Cooking, crafts, and time with pets are healing.</p>
          <h3 className="text-xl font-bold text-white mb-3">ESTJ - Executive</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Increased need for control, authoritarian attitude, work addiction, emotional suppression.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Structured exercise (gym, jogging), group activities, family gatherings. Hobbies with clear goals help.</p>
          <h3 className="text-xl font-bold text-white mb-3">ESFJ - Consul</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Overdoing for others, anxiety about conflict, need for approval.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Warm time with family or friends, traditional activities, volunteering bring satisfaction.</p>
        </section>
        <section id="sp" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Explorer Types (SP) - ISTP, ISFP, ESTP, ESFP</h2>
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-orange-400 mb-3">Common Stressors</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Feeling trapped or restricted</li>
              <li>Long-term commitments or plans</li>
              <li>Boredom, monotony</li>
              <li>Excessive rules or procedures</li>
              <li>Excessive worry about the future</li>
            </ul>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">ISTP - Virtuoso</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Emotional suppression, risky behavior, isolation, impulsivity.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Hands-on activities (repairs, DIY, sports), outdoor activities (hiking, cycling), video games.</p>
          <h3 className="text-xl font-bold text-white mb-3">ISFP - Adventurer</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Emotional withdrawal, conflict avoidance, self-criticism, sadness.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Artistic expression (art, music, photography), nature (walks, beach), time with pets. Meditation or yoga help.</p>
          <h3 className="text-xl font-bold text-white mb-3">ESTP - Entrepreneur</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Impulsive behavior, boredom, emotional suppression, risk-taking.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Physical activity (sports, exercise), spontaneous adventure, social events restore energy.</p>
          <h3 className="text-xl font-bold text-white mb-3">ESFP - Entertainer</h3>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Stress signs:</strong> Sadness, isolation, impulsive spending, distractibility.</p>
          <p className="text-gray-300 leading-relaxed mb-4"><strong>Healing:</strong> Fun time with friends, dance, music, spontaneous travel. Performance or stage activities bring satisfaction.</p>
        </section>
        <section id="principles" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Universal Principles for All Types</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>Sleep:</strong> Adequate sleep is the foundation of stress management for every type</li>
            <li><strong>Exercise:</strong> Regular physical activity reduces stress hormones</li>
            <li><strong>Boundaries:</strong> Learn to say no</li>
            <li><strong>Social support:</strong> Share your feelings with people you trust</li>
            <li><strong>Professional help:</strong> See a counselor or coach when needed</li>
          </ul>
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
            <p className="text-green-200 text-sm">
              <strong>Summary:</strong> Understanding your type helps you find the source of stress and choose effective coping strategies. But for every type, sleep, exercise, and social support are basics.
            </p>
          </div>
        </section>
      </div>
      <section className="mb-12 bg-black/10 rounded-xl p-6 border border-white/5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><span>📚</span> References</h3>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>Quenk, N. L. (2002). <em>Was That Really Me?: How Everyday Stress Brings Out Our Hidden Personality</em>. Davies-Black Publishing.</li>
          <li>Kroeger, O., & Thuesen, J. M. (1988). <em>Type Talk: The 16 Personality Types That Determine How We Live, Love, and Work</em>. Dell Publishing.</li>
          <li>Selye, H. (1976). <em>The Stress of Life</em>. McGraw-Hill.</li>
          <li>Lazarus, R. S., & Folkman, S. (1984). <em>Stress, Appraisal, and Coping</em>. Springer Publishing Company.</li>
        </ul>
        <div className="mt-4 p-3 bg-green-900/10 rounded-lg border border-green-500/20">
          <p className="text-green-300 text-xs"><strong>Expert review:</strong> This article was jointly reviewed by Dr. Park Jun-young (clinical psychology) and Dr. Lee Min-ah (counseling psychology).</p>
        </div>
      </section>
      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: February 12, 2026</span>
          <span>{t("category")}: Wellness</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/infj-complete-guide" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">Complete INFJ Guide</h4>
              <p className="text-gray-400 text-sm">Everything about the Advocate type</p>
            </div>
          </Link>
          <Link href="/blog/mbti-scientific-basis" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-green-400 transition-all">
              <h4 className="font-semibold text-white group-hover:text-green-400 mb-1">MBTI Scientific Basis and Limitations</h4>
              <p className="text-gray-400 text-sm">What psychologists say</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="text-center">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t("ctaTitle")}</h3>
          <p className="text-gray-400 mb-6">{t("ctaDescription")}</p>
          <Link href="/test">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">{t("ctaButton")}</button>
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
        {isEn ? <StressEn t={t} /> : <StressKo t={t} />}
      </article>
    </div>
  );
}
