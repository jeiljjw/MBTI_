import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/src/i18n/routing';
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blogPage' });

  return {
    title: t('title'),
    description: t('subtitle'),
    keywords: ["MBTI", "블로그", "심리학", "커리어", "관계", "성격 유형"],
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
      type: "website",
    },
  };
}

const articlesKo = [
  {
    slug: "mbti-scientific-basis",
    title: "MBTI의 과학적 기반과 한계: 심리학자들이 말하는 진실",
    excerpt: "MBTI가 과학적으로 검증되었는지, 어떤 한계가 있는지 심층 분석합니다. Myers-Briggs Type Indicator의 역사와 현대 심리학계의 평가를 알아보세요.",
    category: "심리학",
    readTime: "8분",
    date: "2026-02-12",
  },
  {
    slug: "intj-complete-guide",
    title: "[데이터 리포트] INTJ의 전략적 메커니즘: 왜 그들은 '효율성'에 집착하는가?",
    excerpt: "INTJ(전략가) 유형에 대한 데이터 기반 심층 리포트입니다. 이 유형의 인지 메커니즘, 커리어 성공 통계, 그리고 성장을 위한 인사이트를 정리했습니다.",
    category: "심리학",
    readTime: "12분",
    date: "2026-03-09",
  },
  {
    slug: "intp-complete-guide",
    title: "[데이터 리포트] INTP의 뇌: 왜 그들은 끊임없이 의문을 던지는가?",
    excerpt: "INTP(논리술사) 유형의 독특한 인지 방식을 데이터로 분석합니다. Ti-Ne 알고리즘과 이들이 사회에서 겪는 고충, 해결책을 알아봅니다.",
    category: "심리학",
    readTime: "11분",
    date: "2026-03-09",
  },
  {
    slug: "entj-complete-guide",
    title: "[데이터 리포트] ENTJ의 지휘력: 어떻게 효율적으로 승리를 쟁취하는가?",
    excerpt: "ENTJ(지도자) 유형의 전략적 사고와 경영 성과 데이터를 분석합니다. 조직을 이끄는 효율적 메커니즘을 알아봅니다.",
    category: "심리학",
    readTime: "13분",
    date: "2026-03-09",
  },
  {
    slug: "entp-complete-guide",
    title: "[데이터 리포트] ENTP의 지적 유희: 왜 그들은 끊임없이 뒤집으려 하는가?",
    excerpt: "ENTP(변론가) 유형의 창의적 문제 해결과 혁신 데이터를 분석합니다. 지적 호기심이 비즈니스 성과로 이어지는 과정을 다룹니다.",
    category: "심리학",
    readTime: "10분",
    date: "2026-03-09",
  },
  {
    slug: "infp-complete-guide",
    title: "[데이터 리포트] INFP의 진정성: 왜 그들은 '나다움'에 그토록 집착하는가?",
    excerpt: "INFP(중재자) 유형의 정서적 메커니즘과 예술적 영감 데이터를 분석합니다. 진정성을 유지하며 세상과 소통하는 법을 알아봅니다.",
    category: "심리학",
    readTime: "11분",
    date: "2026-03-09",
  },
  {
    slug: "enfj-complete-guide",
    title: "[데이터 리포트] ENFJ의 리더십: 왜 그들은 타인의 성공을 돕는가?",
    excerpt: "ENFJ(선도자) 유형의 타인에 대한 공감과 리더십 지표를 분석합니다. 공동체의 성장을 이끄는 힘의 원천을 알아봅니다.",
    category: "심리학",
    readTime: "12분",
    date: "2026-03-09",
  },
  {
    slug: "enfp-complete-guide",
    title: "[데이터 리포트] ENFP의 열정: 왜 그들은 쉼 없이 새로운 것에 끌리는가?",
    excerpt: "ENFP(활동가) 유형의 혁신적 가능성과 직업적 만족도 데이터를 분석합니다. 열정적인 에너지로 주변을 변화시키는 메커니즘을 다룹니다.",
    category: "심리학",
    readTime: "11분",
    date: "2026-03-09",
  },
  {
    slug: "istj-complete-guide",
    title: "[데이터 리포트] ISTJ의 신뢰: 왜 그들은 '완벽한 체계'를 선호하는가?",
    excerpt: "ISTJ(논리주의자) 유형에 대한 심층 리포트입니다. Si-Te 조직화 메커니즘과 직장 내 신뢰성 통계를 분석합니다.",
    category: "심리학",
    readTime: "12분",
    date: "2026-03-09",
  },
  {
    slug: "isfj-complete-guide",
    title: "[데이터 리포트] ISFJ의 헌신: 왜 그들은 묵묵히 자리를 지키는가?",
    excerpt: "ISFJ(수호자) 유형의 헌신적 케어와 사회 심리학적 데이터를 분석합니다. 조직의 화합을 유지하는 메커니즘을 알아봅니다.",
    category: "심리학",
    readTime: "11분",
    date: "2026-03-09",
  },
  {
    slug: "estj-complete-guide",
    title: "[데이터 리포트] ESTJ의 추진력: 왜 그들은 '전통과 질서'를 지키는가?",
    excerpt: "ESTJ(경영자) 유형의 실용적 리더십과 성과 중심 데이터를 분석합니다. 복잡한 구조 속 실무 효율성을 다룹니다.",
    category: "심리학",
    readTime: "13분",
    date: "2026-03-09",
  },
  {
    slug: "esfj-complete-guide",
    title: "[데이터 리포트] ESFJ의 조화: 왜 그들은 '모두의 행복'을 추구하는가?",
    excerpt: "ESFJ(외교관) 유형의 사회적 메커니즘과 직장 내 협력 통계를 분석합니다. 공동체 조화를 이끄는 법을 알아봅니다.",
    category: "심리학",
    readTime: "11분",
    date: "2026-03-09",
  },
  {
    slug: "istp-complete-guide",
    title: "[데이터 리포트] ISTP의 적응력: 왜 그들은 위기 상황에서 빛나는가?",
    excerpt: "ISTP(재주꾼) 유형에 대한 심층 리포트입니다. Ti-Se 기계적 지능, 경력 유연성 통계, 그리고 냉철한 효율성으로 위기를 관리하는 법을 분석합니다.",
    category: "심리학",
    readTime: "10분",
    date: "2026-03-09",
  },
  {
    slug: "isfp-complete-guide",
    title: "[데이터 리포트] ISFP의 감수성: 왜 그들은 '현재의 아름다움'에 집중하는가?",
    excerpt: "ISFP(예술가) 유형의 Fi-Se 창의적 메커니즘, 예술 직군 내 성장 통계, 그리고 감각적 경험을 통해 진정성을 표현하는 법을 분석합니다.",
    category: "심리학",
    readTime: "11분",
    date: "2026-03-09",
  },
  {
    slug: "estp-complete-guide",
    title: "[데이터 리포트] ESTP의 리스크: 왜 그들은 위협 속에서 기회를 잡는가?",
    excerpt: "ESTP(사업가) 유형의 Se-Ti 행동 중심 지능, 비즈니스 리더십 통계, 그리고 긴박한 환경 속에서 최적의 기회를 포착하는 법을 분석합니다.",
    category: "심리학",
    readTime: "12분",
    date: "2026-03-09",
  },
  {
    slug: "esfp-complete-guide",
    title: "[데이터 리포트] ESFP의 에너지: 왜 그들은 '세상의 중심'인가?",
    excerpt: "ESFP(연예인) 유형의 Se-Fi 사회적 메커니즘, 성과 기반 커리어 통계, 그리고 정서적 표현을 통해 참여를 이끌어내는 인지적 방식을 분석합니다.",
    category: "심리학",
    readTime: "10분",
    date: "2026-03-09",
  },
  {
    slug: "mbti-compatibility-truth",
    title: "MBTI 궁합의 진실: 통계적 분석으로 알아본 호환성",
    excerpt: "MBTI 궁합이 정말 과학적인지 통계적 데이터로 분석합니다. 어떤 유형 조합이 실제로 성공적인 관계를 만드는지 연구 결과를 바탕으로 설명합니다.",
    category: "관계",
    readTime: "9분",
    date: "2026-02-12",
  },
  {
    slug: "stress-management-by-type",
    title: "각 유형별 스트레스 관리 가이드: MBTI로 알아보는 나만의 힐링법",
    excerpt: "16가지 MBTI 유형별로 효과적인 스트레스 관리 방법을 제시합니다. 각 유형의 스트레스 원인과 최적의 대처 전략을 심층적으로 분석합니다.",
    category: "웰빙",
    readTime: "12분",
    date: "2026-02-12",
  },
  {
    slug: "mbti-career-correlation",
    title: "MBTI와 진로 적성의 상관관계: 통계로 증명되는 커리어 적합도",
    excerpt: "MBTI 유형과 직업 만족도, 성과, 이직률 간의 상관관계를 데이터로 분석합니다. 어떤 유형이 어떤 직업에서 성공하는지 연구 결과를 소개합니다.",
    category: "커리어",
    readTime: "11분",
    date: "2026-02-12",
  },
  {
    slug: "infj-complete-guide",
    title: "[데이터 리포트] INFJ가 완벽주의 때문에 겪는 번아웃의 메커니즘과 극복 통계",
    excerpt: "INFJ 유형(인구의 1.5%)은 왜 그토록 번아웃에 취약할까요? 최근 10,000건 이상의 직장인 스트레스 데이터를 통해 심층 분석합니다.",
    category: "심리학",
    readTime: "10분",
    date: "2026-02-25",
  },
  {
    slug: "mbti-leadership",
    title: "MBTI로 보는 리더십 스타일: 유형별 소통과 영향력",
    excerpt: "16가지 MBTI 유형별로 다른 리더십 스타일과 소통 방식을 분석합니다. 팀을 효과적으로 이끌기 위한 유형별 맞춤 전략을 알아봅니다.",
    category: "커리어",
    readTime: "10분",
    date: "2026-02-18",
  },
  {
    slug: "emotional-intelligence-mbti",
    title: "감정지능(EQ)과 MBTI의 상관관계: 정서적 성장을 위한 안내",
    excerpt: "감정지능과 MBTI는 어떻게 연결될까요? 각 유형의 감정적 특성과 EQ를 높이는 방법을 과학적 관점에서 분석합니다.",
    category: "심리학",
    readTime: "8분",
    date: "2026-02-20",
  },
  {
    slug: "mbti-love-and-relationships",
    title: "MBTI 사랑과 관계: 유형별 연애 패턴과 관계 구축법",
    excerpt: "16가지 MBTI 유형별 연애 스타일을 분석합니다. 사랑의 언어, 관계에서의 필요, 더 깊은 유대 형성 방법을 알아봅니다.",
    category: "관계",
    readTime: "11분",
    date: "2026-02-20",
  },
  {
    slug: "mbti-learning-styles",
    title: "MBTI 학습 스타일: 유형별로 가장 효과적인 공부법",
    excerpt: "각 MBTI 유형별 가장 효과적인 학습 방법을 분석합니다. 자신의 장점을 살린 맞춤형 공부 전략을 알아봅니다.",
    category: "심리학",
    readTime: "10분",
    date: "2026-02-20",
  },
  {
    slug: "mbti-conflict-resolution",
    title: "MBTI 직장에서의 갈등 해결: 유형별 갈등 관리 전략",
    excerpt: "직장 갈등을 효과적으로 해결하는 방법을 MBTI 유형별로 분석합니다. 유형 차이를 이해하고 더 나은 커뮤니케이션하는 법을 알아봅니다.",
    category: "커리어",
    readTime: "12분",
    date: "2026-02-20",
  },
  {
    slug: "mbti-self-improvement",
    title: "MBTI 자기계발 가이드: 유형별 성장 전략과 발전 방법",
    excerpt: "각 MBTI 유형별로 자기계발 방법이 다릅니다. 자신의 강점을 살리고 약점을 보완하는 맞춤형 성장 전략을 알아봅니다.",
    category: "심리학",
    readTime: "8분",
    date: "2026-02-22",
  },
  {
    slug: "mbti-communication-styles",
    title: "MBTI 소통 스타일: 유형별 맞춤 커뮤니케이션 가이드",
    excerpt: "타인과 효과적으로 소통하는 방법은 MBTI 유형에 따라 다릅니다. 각 유형의 소통 스타일과 충돌 예방법을 알아봅니다.",
    category: "관계",
    readTime: "9분",
    date: "2026-02-22",
  },
  {
    slug: "mbti-parenting-guide",
    title: "MBTI 육아 가이드: 자녀 유형별 맞춤 교육 전략",
    excerpt: "자녀의 MBTI 유형에 따라 다른 육아 접근이 필요합니다. 각 유형의 아이에게 맞는 교육 방법과 소통 전략을 알아봅니다.",
    category: "관계",
    readTime: "10분",
    date: "2026-02-23",
  },
];

const articlesEn = [
  {
    slug: "mbti-scientific-basis",
    title: "The Scientific Basis and Limitations of MBTI: What Psychologists Say",
    excerpt: "An in-depth analysis of whether MBTI is scientifically validated and what limitations it has. Learn about the history of Myers-Briggs Type Indicator and modern psychology's assessment.",
    category: "Psychology",
    readTime: "8 min",
    date: "2026-02-12",
  },
  {
    slug: "intj-complete-guide",
    title: "[Data Report] The Strategic Mechanism of INTJ: Why Are They Obsessed with Efficiency?",
    excerpt: "An in-depth data-driven report on the INTJ (Architect) type. Explore their strategic mechanism, career success statistics, and growth strategies.",
    category: "Psychology",
    readTime: "12 min",
    date: "2026-03-09",
  },
  {
    slug: "intp-complete-guide",
    title: "[Data Report] The INTP Brain: Why Do They Constantly Question Everything?",
    excerpt: "A scientific deep-dive into the INTP (Logician) type. Understanding their Ti-Ne mechanism and bridge the gap to real-world execution.",
    category: "Psychology",
    readTime: "11 min",
    date: "2026-03-09",
  },
  {
    slug: "entj-complete-guide",
    title: "[Data Report] ENTJ Command: How They Strategically Secure Victory",
    excerpt: "A comprehensive data-driven analysis of the ENTJ (Commander) type. Understanding their leadership style and career mobility patterns.",
    category: "Psychology",
    readTime: "13 min",
    date: "2026-03-09",
  },
  {
    slug: "entp-complete-guide",
    title: "[Data Report] The Intellectual Play of ENTP: Why They Constant Challenge Status Quo",
    excerpt: "An investigation into the ENTP (Debater) type's innovation DNA. How their intellectual play drives real-world breakthroughs.",
    category: "Psychology",
    readTime: "10 min",
    date: "2026-03-09",
  },
  {
    slug: "infp-complete-guide",
    title: "[Data Report] INFP Authenticity: Why Do They Seek True Self?",
    excerpt: "A sentimental yet data-driven analysis of the INFP (Mediator) type. Explore their Fi-Ne mechanism and artistic career paths.",
    category: "Psychology",
    readTime: "11 min",
    date: "2026-03-09",
  },
  {
    slug: "enfj-complete-guide",
    title: "[Data Report] ENFJ Leadership: Why Do They Support Others' Success?",
    excerpt: "A scientific look at the ENFJ (Protagonist) type. Analyzing their Fe-Ni mechanism and impact on community growth.",
    category: "Psychology",
    readTime: "12 min",
    date: "2026-03-09",
  },
  {
    slug: "enfp-complete-guide",
    title: "[Data Report] ENFP Passion: Why They Constantly Seek Novelty?",
    excerpt: "A deep-dive data report on the ENFP (Campaigner) type. Explore their Ne-Fi cognitive process and passion-driven career growth.",
    category: "Psychology",
    readTime: "11 min",
    date: "2026-03-09",
  },
  {
    slug: "istj-complete-guide",
    title: "[Data Report] ISTJ Reliability: Why They Prefer Structured Systems?",
    excerpt: "A deep-dive data report on the ISTJ (Inspector) type. Analyzing their Si-Te organizational mechanism and reliability.",
    category: "Psychology",
    readTime: "12 min",
    date: "2026-03-09",
  },
  {
    slug: "isfj-complete-guide",
    title: "[Data Report] ISFJ Dedication: Why They Are the Silent Heroes?",
    excerpt: "A deep-dive analysis of the ISFJ (Defender) type. Explore their Si-Fe mechanism and career longevity.",
    category: "Psychology",
    readTime: "11 min",
    date: "2026-03-09",
  },
  {
    slug: "estj-complete-guide",
    title: "[Data Report] ESTJ Execution: Why They Champion Tradition and Order?",
    excerpt: "A deep-dive analysis of the ESTJ (Executive) type. Explore their Te-Si organizational mechanism and leadership.",
    category: "Psychology",
    readTime: "13 min",
    date: "2026-03-09",
  },
  {
    slug: "esfj-complete-guide",
    title: "[Data Report] ESFJ Harmony: Why They Seek 'Happiness for All'?",
    excerpt: "A scientific deep-dive into the ESFJ (Consul) type. Analyzing their Fe-Si social mechanism and hospitality.",
    category: "Psychology",
    readTime: "11 min",
    date: "2026-03-09",
  },
  {
    slug: "istp-complete-guide",
    title: "[Data Report] ISTP Adaptability: Why They Shine in Crisis?",
    excerpt: "A deep-dive data report on the ISTP (Virtuoso) type. Analyzing their Ti-Se mechanical intelligence and crisis management.",
    category: "Psychology",
    readTime: "10 min",
    date: "2026-03-09",
  },
  {
    slug: "isfp-complete-guide",
    title: "[Data Report] ISFP Sensibility: Why They Focus on the 'Beauty of Now'?",
    excerpt: "A deep-dive analysis of the ISFP (Adventurer) type. Exploring their Fi-Se creative mechanism and expression.",
    category: "Psychology",
    readTime: "11 min",
    date: "2026-03-09",
  },
  {
    slug: "estp-complete-guide",
    title: "[Data Report] ESTP Risk: Why They Seize Opportunities in Threat?",
    excerpt: "An investigation into the ESTP (Entrepreneur) type's risk-reward mechanism and strategic influence.",
    category: "Psychology",
    readTime: "12 min",
    date: "2026-03-09",
  },
  {
    slug: "esfp-complete-guide",
    title: "[Data Report] ESFP Energy: Why Are They the 'Center of the World'?",
    excerpt: "A data-driven report on the ESFP (Entertainer) type. Analyzing their Se-Fi social mechanism and performance.",
    category: "Psychology",
    readTime: "10 min",
    date: "2026-03-09",
  },
  {
    slug: "mbti-compatibility-truth",
    title: "The Truth About MBTI Compatibility: Statistical Analysis of Type Matchups",
    excerpt: "Analyzing whether MBTI compatibility is truly scientific with statistical data. Explaining which type combinations actually create successful relationships based on research.",
    category: "Relationships",
    readTime: "9 min",
    date: "2026-02-12",
  },
  {
    slug: "stress-management-by-type",
    title: "Stress Management Guide by Type: Your Personal Healing Method Through MBTI",
    excerpt: "Presenting effective stress management methods for each of the 16 MBTI types. In-depth analysis of stress causes and optimal coping strategies for each type.",
    category: "Wellness",
    readTime: "12 min",
    date: "2026-02-12",
  },
  {
    slug: "mbti-career-correlation",
    title: "MBTI and Career Aptitude Correlation: Career Fit Proven by Statistics",
    excerpt: "Analyzing correlations between MBTI types and job satisfaction, performance, and turnover rates with data. Introducing research results on which types succeed in which jobs.",
    category: "Career",
    readTime: "11 min",
    date: "2026-02-12",
  },
  {
    slug: "infj-complete-guide",
    title: "[Data Report] INFJ Burnout Mechanisms and Recovery Statistics Based on Perfectionism",
    excerpt: "Why are INFJs (1.5% of population) so prone to burnout? An in-depth analysis through the lens of 10,000 workplace stress data points.",
    category: "Psychology",
    readTime: "10 min",
    date: "2026-02-25",
  },
  {
    slug: "mbti-leadership",
    title: "Leadership Styles Through MBTI: Communication and Influence by Type",
    excerpt: "Analyzing different leadership styles and communication methods for each of the 16 MBTI types. Learning type-specific strategies for effective team leadership.",
    category: "Career",
    readTime: "10 min",
    date: "2026-02-18",
  },
  {
    slug: "emotional-intelligence-mbti",
    title: "The Correlation Between Emotional Intelligence (EQ) and MBTI: A Guide to Emotional Growth",
    excerpt: "How are emotional intelligence and MBTI connected? Analyzing the emotional characteristics of each type and methods to increase EQ from a scientific perspective.",
    category: "Psychology",
    readTime: "8 min",
    date: "2026-02-20",
  },
  {
    slug: "mbti-love-and-relationships",
    title: "MBTI Love and Relationships: Dating Patterns and Building Connections by Type",
    excerpt: "Analyzing dating styles for each of the 16 MBTI types. Learning about love languages, needs in relationships, and methods for forming deeper bonds.",
    category: "Relationships",
    readTime: "11 min",
    date: "2026-02-20",
  },
  {
    slug: "mbti-learning-styles",
    title: "MBTI Learning Styles: The Most Effective Study Methods by Type",
    excerpt: "Analyzing the most effective learning methods for each MBTI type. Discovering customized study strategies that leverage your strengths.",
    category: "Psychology",
    readTime: "10 min",
    date: "2026-02-20",
  },
  {
    slug: "mbti-conflict-resolution",
    title: "MBTI Conflict Resolution at Work: Conflict Management Strategies by Type",
    excerpt: "Analyzing effective methods to resolve workplace conflicts through MBTI types. Understanding type differences and learning better communication.",
    category: "Career",
    readTime: "12 min",
    date: "2026-02-20",
  },
  {
    slug: "mbti-self-improvement",
    title: "MBTI Self-Improvement Guide: Growth Strategies by Type",
    excerpt: "Self-improvement methods differ for each MBTI type. Learn customized growth strategies that leverage your strengths and compensate for weaknesses.",
    category: "Psychology",
    readTime: "8 min",
    date: "2026-02-22",
  },
  {
    slug: "mbti-communication-styles",
    title: "MBTI Communication Styles: Customized Communication Guide",
    excerpt: "Effective communication methods vary by MBTI type. Learn about each type's communication style and conflict prevention strategies.",
    category: "Relationships",
    readTime: "9 min",
    date: "2026-02-22",
  },
  {
    slug: "mbti-parenting-guide",
    title: "MBTI Parenting Guide: Customized Education Strategies by Child Type",
    excerpt: "Different parenting approaches are needed based on your child's MBTI type. Learn education methods and communication strategies suited for each type.",
    category: "Relationships",
    readTime: "10 min",
    date: "2026-02-23",
  },
];

function getArticles(locale: string) {
  return locale === 'en' ? articlesEn : articlesKo;
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blogPage' });

  const articles = getArticles(locale);

  const categories = t.raw('categories') as string[];
  const readTimeText = t('readTime');

  // Find the featured post (let's use the first one as featured)
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  // Group remaining articles by category
  const categorizedArticles = categories.map(cat => ({
    name: cat,
    posts: remainingArticles.filter(a => a.category === cat)
  })).filter(g => g.posts.length > 0);

  return (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Featured Article Banner */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🌟</span>
            <h2 className="text-2xl font-bold text-white">{t('featuredTitle') || 'Featured Article'}</h2>
          </div>
          <Link href={`/blog/${featuredArticle.slug}`} className="group block">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-md rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {featuredArticle.category}
                    </span>
                    <span className="text-gray-400 text-sm">{featuredArticle.readTime} {readTimeText}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="inline-flex items-center text-purple-400 font-semibold group-hover:text-purple-300 group-hover:translate-x-2 transition-all">
                    {t('readMore')} <span className="ml-2 text-xl">→</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Categorized Magazine Layout */}
        <div className="space-y-16 mb-16">
          {categorizedArticles.map((group) => (
            <section key={group.name} className="border-t border-white/5 pt-12">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                  {t('latestIn', { category: group.name })}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.posts.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="group block h-full">
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-gray-500 transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-2.5 py-1 bg-white/5 text-gray-300 rounded text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-xs">{article.readTime} {readTimeText}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed flex-grow line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-500 font-medium group-hover:text-purple-400 transition-colors">
                        {t('readMore')} →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('ctaTitle')}
            </h3>
            <p className="text-gray-400 mb-6">
              {t('ctaDescription')}
            </p>
            <Link href="/test">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
                {t('ctaButton')}
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
