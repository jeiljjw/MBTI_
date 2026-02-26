import type { MBTIDetail } from '../mbti-detailed';
import { mbtiDetails } from '../mbti-detailed';

// English translations for all MBTI type data
const mbtiDetailsEn: Record<string, Partial<MBTIDetail>> = {
  ISTJ: {
    name: "Logistician",
    nickname: "Administrator",
    group: "Sentinel (SJ)",
    characteristics: `ISTJ (Logistician) is classified as the most practical and systematic personality type among the 16 MBTI types. They focus on realistic and concrete facts, and value tradition and discipline. ISTJs have a strong sense of responsibility and duty, and are praised as conscientious people who complete tasks to the end. They have excellent attention to detail and maintain accurate records, handling work in a planned and organized manner.

They prefer stability and predictability and resist abrupt changes. However, once they make a decision, they show unwavering determination not to give up that decision. ISTJs prove love through actions rather than emotional expression, maintaining loyal and devoted relationships. They solve problems based on objective and logical judgments, showing confidence through tangible results.`,

    cognitiveFunctions: {
      dominant: { name: "Introverted Sensing (Si)", description: "Judges current situations based on past experiences and concrete facts. Exhibits exceptional memory for details and ability to maintain accurate records." },
      auxiliary: { name: "Extraverted Intuition (Ne)", description: "Explores possibilities and considers various alternatives. However, this is mainly used in work contexts and applied conservatively in personal areas." },
      tertiary: { name: "Introverted Feeling (Fi)", description: "Forms inner values and beliefs. Has personal ethical standards but values them internally rather than expressing them externally." },
      inferior: { name: "Extraverted Feeling (Fe)", description: "Understanding others' emotions and responding to social harmony. This is the most difficult area for ISTJs to develop, but can be improved through conscious effort." }
    },

    strengths: ["Exceptional responsibility and dedication", "Meticulous and precise attention", "Logical and objective judgment", "Stable and consistent performance", "Respect for tradition and discipline", "Practical problem-solving skills", "Loyal and trustworthy personality"],

    weaknesses: ["Resistance to change", "Difficulty expressing emotions", "Stubbornness and rigidity", "Excessive workload", "Closed-mindedness to new ideas", "Tendency toward depression under stress", "Intolerance of inefficiency"],

    careers: {
      recommended: [
        { job: "Accountant/Auditor", reason: "This profession requiring meticulous attention and precision perfectly utilizes ISTJ strengths. Number games and rule-based work align well with their logical thinking and systematic approach." },
        { job: "Legal Professional", reason: "The legal field valuing discipline and precedent requires ISTJ's dedication and accuracy. Their research abilities and attention to detail greatly assist in legal analysis." },
        { job: "Project Manager", reason: "In roles where organization and planning are essential, ISTJs can meet deadlines and lead teams effectively. Their sense of responsibility becomes a key element of project success." },
        { job: "Librarian", reason: "Systematic information organization and management are ISTJ strengths. An ideal environment to utilize their accurate and detailed record-keeping abilities." },
        { job: "Medical Staff (Nurse, Pharmacist)", reason: "In healthcare where accuracy and responsibility are crucial, ISTJs can contribute to patient safety and welfare. Their dedicated nature fits well with caregiving professions." }
      ],
      avoid: [
        { job: "Marketing/Advertising", reason: "This field where creativity and spontaneous decision-making are important is far from ISTJ strengths. Unpredictable trends and emotional persuasion can cause them stress." },
        { job: "Sales Representative", reason: "Sales requiring natural emotional bonding and spontaneous conversation skills can be challenging for ISTJs. They prefer approaches based on numbers and facts." },
        { job: "Art/Creative Field", reason: "This area centered on subjective and creative expression may not align well with ISTJ's logical and systematic approach." }
      ]
    },

    relationships: {
      datingStyle: "ISTJs show very serious and dedicated attitudes in dating. They prove love through actions rather than emotional expression, and always keep their promises. They think about relationships from a long-term perspective and value marriage and family. They enjoy planning dates and remember their partner's preferences and important dates.",
      communicationStyle: "Prefers direct and factual communication. Uses clear and logical expressions rather than emotional flowing. Listens carefully to others and tends to focus on problem-solving. Prefers substantive conversations over emotional ones.",
      loveLanguage: ["Practical help", "Spending time together", "Practical gifts", "Words of affirmation", "Trust and commitment"],
      idealPartner: "ISTJs want a stable and loyal partner. Extraverted types like ENFP or ENTJ can bring new experiences to ISTJs, while ISTJs can provide stability to them."
    },

    stressManagement: {
      stressSources: ["Change without planning", "Rule violations", "Excessive responsibility increase", "Emotional conflict", "Inefficient environments", "Uncertainty"],
      copingMethods: ["Recharging through solitude", "Avoiding spontaneous activities", "Systematic problem-solving", "Prioritizing tasks", "Reflecting on past successes"],
      warningSigns: ["Overwork", "Social withdrawal", "Depressive mood", "Increased critical attitude", "Difficulty making decisions"]
    },

    growthPoints: {
      strengthsToDevelop: ["Flexibility", "Emotional awareness and expression", "Openness to new ideas", "Willingness to take risks", "Understanding others' perspectives"],
      challenges: ["Stubbornness", "Resistance to change", "Emotional distance", "Perfectionism", "Self-criticism"],
      developmentTips: ["Experience gradual changes", "Keep an emotional journal", "Interact with different personality types", "Participate in creativity exercises", "Let go of perfectionism"]
    },

    celebrities: [
      { name: "George Washington", description: "The first President of the United States, demonstrating ISTJ characteristics of responsibility, dedication, and respect for tradition. His meticulous planning and precise judgment greatly contributed to nation-building." },
      { name: "Henry Ford", description: "Founder of Ford Motors, demonstrating ISTJ's practicality and obsession with efficiency. The introduction of mass production systems was a product of his systematic thinking." },
      { name: "Anne Mulcahy", description: "Former CEO of Xerox, demonstrating ISTJ's balanced approach to tradition and change. She succeeded in modernizing while maintaining the brand's core values." }
    ]
  },

  ISFJ: {
    name: "Defender",
    nickname: "Protector",
    group: "Sentinel (SJ)",
    characteristics: `ISFJ (Defender) is a dedicated and warm personality who finds great meaning in caring for and protecting those around them. They have deep empathy and keenly perceive others' emotions and needs. ISFJs have a quiet but decisive presence and provide great comfort to those around them through attentive care and practical help.

They highly value tradition and family values and prefer stable environments. They have excellent memory and remember important dates and their partner's preferences accurately. ISFJs like to avoid conflict and maintain harmony, and have an altruistic nature that puts others' needs before their own. They have a strong sense of responsibility and faithfully complete any task entrusted to them.`,

    cognitiveFunctions: {
      dominant: { name: "Introverted Sensing (Si)", description: "Understands the present through past experiences and concrete sensations. Anticipates and meets others' needs with exceptional memory for details." },
      auxiliary: { name: "Extraverted Feeling (Fe)", description: "Understands others' emotions and maintains harmonious relationships. Has excellent empathy and responds sensitively to others' needs." },
      tertiary: { name: "Introverted Thinking (Ti)", description: "Performs logical analysis internally. However, it's mainly used for personal decisions and valued internally rather than actively expressed externally." },
      inferior: { name: "Extraverted Intuition (Ne)", description: "Function of exploring possibilities and new ideas. This is the most difficult area for ISFJs to develop, but accepting new perspectives can help with creative problem-solving." }
    },

    strengths: ["Exceptional empathy", "Dedicated and loyal personality", "Meticulous attention", "Practical help", "Maintaining harmony", "Excellent memory", "Patience", "Gentle attitude"],

    weaknesses: ["Lack of self-care", "Resistance to change", "Excessive responsibility", "Emotional suppression", "Avoiding competitive environments", "Difficulty expressing own needs", "Perfectionism", "Exploding with impatience"],

    careers: {
      recommended: [
        { job: "Nurse", reason: "This profession of caring for patients perfectly utilizes ISFJ's dedicated nature and empathy. Their meticulous attention doesn't miss even small changes in patients." },
        { job: "Elementary School Teacher", reason: "The teacher role of helping children grow requires ISFJ's warmth and patience. Systematic educational schedule management is also their strength." },
        { job: "Social Worker", reason: "This profession of supporting people in need aligns well with ISFJ's altruistic nature. They genuinely care about others' needs and provide practical support." },
        { job: "Secretary/Assistant", reason: "ISFJs can excel in roles requiring detailed attention and organizational skills. They are skilled at anticipating and meeting their boss's needs." },
        { job: "Librarian/Archivist", reason: "Systematic information organization and management are ISFJ strengths. A quiet and focused work environment also suits them." }
      ],
      avoid: [
        { job: "Sales Representative", reason: "Competitive and goal-oriented sales environments may not align well with ISFJ's cooperative and harmonious nature." },
        { job: "Senior Executive", reason: "This role requiring big-picture thinking and quick decision-making is far from ISFJ's detail-oriented approach." },
        { job: "Marketing/Advertising", reason: "Creativity and emotional persuasion important in this field may not align well with ISFJ's practical and factual approach." }
      ]
    },

    relationships: {
      datingStyle: "ISFJs are very dedicated and considerate partners in dating. They express love through actions rather than words, and like to anticipate and meet their partner's needs. They think about long-term relationships and marriage, and value family values. They try to maintain harmony even in conflict situations.",
      communicationStyle: "Uses gentle and considerate communication. Respects others' emotions and provides non-critical feedback. Open to emotional conversations and listens empathetically.",
      loveLanguage: ["Care", "Practical help", "Spending time together", "Gifts", "Encouragement and support"],
      idealPartner: "ISFJs want a stable and dedicated partner. Feeling types like ESFJ or ENFJ can meet ISFJ's emotional needs, while ESTP or ENTP can bring new experiences."
    },

    stressManagement: {
      stressSources: ["Conflict and criticism", "Change", "Excessive responsibility", "Emotional storms", "Isolation", "Ignoring own needs"],
      copingMethods: ["Comforting daily routines", "Having quiet time", "Talking with trusted people", "Practical activities (cooking, gardening)", "Spending time in nature"],
      warningSigns: ["Excessive sacrifice", "Emotional burnout", "Frustration", "Social withdrawal", "Health problems"]
    },

    growthPoints: {
      strengthsToDevelop: ["Self-care", "Healthy boundary setting", "Adaptability to change", "Expressing own needs", "Self-worth recognition"],
      challenges: ["Perfectionism", "Excessive responsibility", "Emotional suppression", "Self-deprecation", "Anxiety about change"],
      developmentTips: ["Create self-care routines", "Practice setting boundaries", "Try new experiences gradually", "Keep an emotional journal", "Ask for help"]
    },

    celebrities: [
      { name: "John F. Kennedy", description: "The 35th President of the United States, demonstrating ISFJ's charisma and warmth. His empathy and human approach were loved by many people." },
      { name: "Saint Peter", description: "The first Pope of Christianity, demonstrating ISFJ's dedication and faith. A faithful protector who led the church." },
      { name: "Elsa", description: "The main character of Disney's Frozen, demonstrating ISFJ's dedicated sisterly love and protective instincts." }
    ]
  },

  INFJ: {
    name: "Advocate",
    nickname: "Idealist",
    group: "Diplomat (NF)",
    characteristics: `INFJ (Advocate) is one of the rarest personality types, possessing deep insight and strong idealism. They hold a passionate vision to create positive change in the world and have an exceptional ability to see others' potential. INFJs have quiet but powerful influence and possess a strong inner world that deeply empathizes with others' emotions while maintaining their own principles.

They envision future possibilities through creative and intuitive thinking, and work to make the world a better place. They have excellent empathy and understand and support others' emotions. They prefer deep relationships and seek meaningful connections rather than surface-level interactions.`,

    cognitiveFunctions: {
      dominant: { name: "Introverted Intuition (Ni)", description: "Provides deep insight and future-oriented vision. Exceptional ability to recognize patterns and grasp symbolic meanings. Identifies the essence in complex situations." },
      auxiliary: { name: "Extraverted Feeling (Fe)", description: "Responds sensitively to others' emotions and maintains harmonious relationships. Has excellent empathy and understands others' needs." },
      tertiary: { name: "Introverted Thinking (Ti)", description: "Performs logical analysis internally. Used to logically support one's beliefs and values." },
      inferior: { name: "Extraverted Sensing (Se)", description: "Function of focusing on the present moment and concrete sensory experiences. This is the most difficult area for INFJs to develop, but focusing on the present can lead to a more complete life." }
    },

    strengths: ["Deep empathy", "Insight", "Idealistic vision", "Creativity", "Principled", "Dedication", "Inspiring leadership", "Humanity", "Quiet strength"],

    weaknesses: ["Excessive idealism", "Avoiding opinion conflicts", "Emotional burnout", "Avoiding competitive environments", "Lack of practicality", "Loneliness", "Self-sacrifice", "Resistance to change"],

    careers: {
      recommended: [
        { job: "Psychological Counselor", reason: "This profession requiring deep empathy and insight perfectly utilizes INFJ strengths. Their intuition and interest in people greatly assist in counseling." },
        { job: "Writer/Poet", reason: "This role requiring creative expression and deep insight aligns well with INFJ's introverted nature. They can influence the world through meaningful stories." },
        { job: "Non-profit Activist", reason: "Their passion to make the world a better place is expressed in non-profit work. They choose causes they truly want to change." },
        { job: "Professor/Educator", reason: "The educator role of seeing students' potential and helping them grow fits INFJs well. Their insight and empathy deeply influence students." },
        { job: "Social Worker", reason: "This profession of supporting people in need requires INFJ's dedication and empathy." }
      ],
      avoid: [
        { job: "Senior Executive", reason: "Competitive and goal-oriented business environments may not align well with INFJ's cooperative and values-based approach." },
        { job: "Sales Representative", reason: "Sales centered on numbers and goals can conflict with INFJ's human-centered values." },
        { job: "Military/Police", reason: "This hierarchical and discipline-centered environment may not align well with INFJ's flexible and idealistic nature." }
      ]
    },

    relationships: {
      datingStyle: "INFJs seek very serious and deep relationships in dating. They want spiritual and emotional connection and prefer deep conversations over surface-level interactions. They like giving rather than receiving love, and encourage and support their partner's growth. They imagine long-term partnerships and future together.",
      communicationStyle: "Prefers deep and meaningful conversations. Listens carefully to others and shows genuine interest. Open to emotional topics as well.",
      loveLanguage: ["Deep conversation", "Quality time", "Care", "Encouragement", "Trust and honesty"],
      idealPartner: "INFJs want a partner they can share deep connection and growth with. Intuitive types like ENFP or INFP can resonate with INFJ's vision, while INTJ or ENTJ can provide intellectual connection."
    },

    stressManagement: {
      stressSources: ["Conflict and criticism", "Gap between reality and ideals", "Excessive responsibility", "Emotional burnout", "Isolation", "Change"],
      copingMethods: ["Creative expression (writing, art)", "Alone time", "Spending time in nature", "Talking with trusted people", "Meditation/yoga"],
      warningSigns: ["Emotional exhaustion", "Depression", "Self-isolation", "Excessive criticism", "Indifference"]
    },

    growthPoints: {
      strengthsToDevelop: ["Practical awareness", "Healthy boundaries", "Adaptability to change", "Self-care", "Expressing own needs"],
      challenges: ["Perfectionism", "Self-sacrifice", "Escaping reality", "Excessive idealism", "Loneliness"],
      developmentTips: ["Set realistic goals", "Create self-care routines", "Practice setting boundaries", "Practice focusing on the present", "Ask for help"]
    },

    celebrities: [
      { name: "Mahatma Gandhi", description: "Indian independence activist, demonstrating INFJ's idealism and strong beliefs. His philosophy of non-violence and inspiring leadership brought great change to the world." },
      { name: "Nelson Mandela", description: "Former President of South Africa, demonstrating INFJ's courage and tolerance. His struggle against apartheid was a product of deep insight and humanity." },
      { name: "Mary Shelley", description: "Author of Frankenstein, demonstrating INFJ's deep insight and creativity. Her works provoke deep reflection on the human condition." }
    ]
  },

  INTJ: {
    name: "Architect",
    nickname: "Architect",
    group: "Analyst (NT)",
    characteristics: `INTJ (Architect) is the rarest and most strategic personality type, enjoying analyzing complex problems and finding innovative solutions. They see the big picture, set long-term goals, and have exceptional ability to execute efficiently. As independent thinkers, INTJs are never satisfied with existing methods and constantly seek better approaches.

They perform cold analysis based on logical and objective judgments, and gain satisfaction through results and achievements rather than emotional expression. INTJs like understanding and improving complex systems through strategic thinking and innovative ideas.`,

    cognitiveFunctions: {
      dominant: { name: "Introverted Intuition (Ni)", description: "Provides deep insight and long-term vision. Exceptional ability to recognize patterns and predict future possibilities. Integrates complex information to grasp the essence." },
      auxiliary: { name: "Extraverted Thinking (Te)", description: "Organizes the external world efficiently and logically. Can make objective judgments and systematic approaches. Prefers decisions based on data and facts." },
      tertiary: { name: "Introverted Feeling (Fi)", description: "Forms inner values and beliefs. Has personal ethical standards and stands up for their beliefs." },
      inferior: { name: "Extraverted Sensing (Se)", description: "Function of focusing on the present moment and concrete sensory experiences. This is the most difficult area for INTJs to develop, but focusing on the present can lead to a more complete life." }
    },

    strengths: ["Strategic thinking", "Analytical ability", "Independence", "Decisiveness", "Creativity", "Efficiency", "High standards", "Intellectual ability", "Long-term vision"],

    weaknesses: ["Lack of emotional expression", "Stubbornness", "Excessive criticism", "Difficulty with social interaction", "Resistance to change", "Self-satisfaction", "Lack of practicality", "Difficulty with interpersonal relationships"],

    careers: {
      recommended: [
        { job: "Strategic Consultant", reason: "This role of analyzing complex problems and presenting innovative solutions fits INTJ's strategic thinking well. Their long-term vision adds great value to business strategy." },
        { job: "Software Engineer", reason: "This profession centered on logical thinking and problem-solving allows INTJs to utilize their strengths. They like understanding and improving complex systems." },
        { job: "Scientist/Researcher", reason: "The scientific field requiring deep research and innovative discoveries aligns well with INTJ's intellectual curiosity. Their patience and analytical ability greatly assist in research." },
        { job: "Investment Analyst", reason: "This role of analyzing data and patterns to make investment decisions requires INTJ's analytical ability. Their long-term perspective fits investment strategies." },
        { job: "Systems Designer", reason: "Designing and optimizing complex systems is an ideal field for INTJ's strategic thinking and creativity." }
      ],
      avoid: [
        { job: "Sales Representative", reason: "Sales requiring natural emotional bonding and spontaneous conversation skills can be challenging for INTJs." },
        { job: "Human Resources (HR)", reason: "This role requiring emotional sensitivity and interpersonal skills may not align well with INTJ's logical and distanced approach." },
        { job: "Service Industry", reason: "This environment requiring customer service and immediate emotional responses may not align well with INTJ's analytical and cautious approach." }
      ]
    },

    relationships: {
      datingStyle: "INTJs are very selective in dating. They want deep intellectual connection and value sharing, and have no interest in surface-level interactions. They express love through actions and results, and invest in their partner's growth. They think about long-term partnerships and strategically allocate time and energy.",
      communicationStyle: "Prefers direct and logical communication. Likes conversations based on facts and ideas rather than emotional expression. Listens carefully but focuses on problem-solving over emotional conversations.",
      loveLanguage: ["Quality time", "Help", "Information sharing", "Respect", "Growing together"],
      idealPartner: "INTJs want a partner who shares intellectual depth and independence. ENFP or ENTJ can open up the emotional needs beneath INTJ's cold exterior."
    },

    stressManagement: {
      stressSources: ["Change without planning", "Inefficiency", "Emotional conflict", "Incompetent people", "Loss of control", "Social expectations"],
      copingMethods: ["Having alone time", "Strategic problem-solving", "Intellectual activities", "Exercise", "Spending time in nature"],
      warningSigns: ["Critical attitude", "Avoidance", "Overwork", "Isolation", "Emotional outbursts"]
    },

    growthPoints: {
      strengthsToDevelop: ["Emotional awareness and expression", "Flexibility", "Interpersonal skills", "Focusing on the present", "Compassion"],
      challenges: ["Emotional distancing", "Stubbornness", "Excessive criticism", "Social difficulties", "Perfectionism"],
      developmentTips: ["Keep an emotional journal", "Interact with different personality types", "Learn practical skills", "Practice focusing on the present", "Cultivate compassion"]
    },

    celebrities: [
      { name: "Bill Gates", description: "Founder of Microsoft, demonstrating INTJ's strategic thinking and innovative vision. His long-term vision and analytical ability led the tech revolution." },
      { name: "Carl Jung", description: "Swiss psychiatrist, demonstrating INTJ's deep insight and theoretical thinking. As the founder of analytical psychology, he sought to understand complex psychological systems." },
      { name: "Nikola Tesla", description: "Inventor, demonstrating INTJ's innovative thinking and independence. His vision and creativity laid the foundation for modern technology." }
    ]
  },

  ISTP: {
    name: "Virtuoso",
    nickname: "Jack of All Trades",
    group: "Explorer (SP)",
    characteristics: `ISTP (Virtuoso) is a practical and spontaneous personality who enjoys learning through direct experience. They have excellent problem-solving skills and understand the world through hands-on, tactile interaction. ISTPs are independent personalities who prefer to act freely in their own way.

They have interest in tools and machines and enjoy finding practical solutions. They have the ability to stay calm in crisis situations and focus on the present moment. ISTPs prove themselves through actions rather than words and are flexible and adaptable.`,

    cognitiveFunctions: {
      dominant: { name: "Introverted Sensing (Si)", description: "Understands the present through past concrete experiences and sensations. Has exceptional ability to learn by touching things with their hands. Sensitive to product textures and how things work." },
      auxiliary: { name: "Extraverted Thinking (Te)", description: "Solves problems efficiently and logically. Proves their abilities through practical actions and results. Prefers fact-based decision-making." },
      tertiary: { name: "Introverted Intuition (Ni)", description: "Explores possibilities internally. However, it's mainly used in personal situations and focuses on the present rather than long-term planning." },
      inferior: { name: "Extraverted Feeling (Fe)", description: "Function of understanding others' emotions and maintaining social harmony. This is the most difficult area for ISTPs to develop, but can be improved through conscious effort." }
    },

    strengths: ["Practical problem-solving", "Adaptability", "Independence", "Technical mastery", "Calmness", "Boldness", "Flexibility", "Action-oriented", "Crisis response ability"],

    weaknesses: ["Difficulty keeping commitments", "Lack of emotional expression", "Resistance to change", "Tendency toward risk-taking", "Lack of dedication", "Ignoring rules", "Lack of future planning", "Difficulty with social interaction"],

    careers: {
      recommended: [
        { job: "Engineer/Technician", reason: "This profession requiring practical problem-solving and technical mastery allows ISTPs to utilize their strengths. They enjoy learning by touching things with their hands." },
        { job: "Mechanic", reason: "This role of working with machines and tools fits ISTP's practical nature well. Their adaptability and problem-solving skills greatly assist in repair work." },
        { job: "Pilot/Driver", reason: "This profession requiring immediate judgment and calm response needs ISTP's strengths. Their present focus contributes to safe operations." },
        { job: "Athlete/Coach", reason: "This field where physical activity and technical mastery are important fits ISTPs well. Their adaptability and practical skills are reflected in performance." },
        { job: "Chef", reason: "Creative and practical cooking work requires ISTP's hands-on learning style. Their sensitivity to taste and texture helps in cooking." }
      ],
      avoid: [
        { job: "Accountant/Auditor", reason: "This profession requiring long-term focus and detailed records may not align well with ISTP's spontaneous nature." },
        { job: "Human Resources (HR)", reason: "This role requiring emotional sensitivity and long-term relationship building may not align well with ISTP's independent and distanced approach." },
        { job: "Elementary School Teacher", reason: "This profession requiring patience and repetitive education may not align well with ISTP's preference for change and spontaneous nature." }
      ]
    },

    relationships: {
      datingStyle: "ISTPs are independent and spontaneous partners in dating. They show love through actions and experiences rather than words. They enjoy new activities and adventures together, and value giving their partner space. They enjoy present connections rather than long-term commitments.",
      communicationStyle: "Uses direct and action-oriented communication. Speaks little but provides practical advice and help. Prefers conversations about activities or hobbies over emotional conversations.",
      loveLanguage: ["Doing activities together", "Practical help", "Space and freedom", "Spontaneous surprises", "Physical touch"],
      idealPartner: "ISTPs want a partner who respects their freedom and independence. ESFJ or ENFJ can meet ISTP's emotional needs, while ESTP or ENTP can enjoy adventures together."
    },

    stressManagement: {
      stressSources: ["Long-term commitments", "Emotional conflict", "Rules and constraints", "Boredom", "Excessive responsibility", "Emotional demands"],
      copingMethods: ["Physical activity", "Having alone time", "Practical problem-solving", "Learning new skills", "Spending time in nature"],
      warningSigns: ["Avoidance", "Risky behavior", "Emotional indifference", "Isolation", "Excessive activity"]
    },

    growthPoints: {
      strengthsToDevelop: ["Long-term planning", "Emotional awareness", "Keeping commitments", "Building healthy relationships", "Dedication"],
      challenges: ["Anxiety about change", "Emotional suppression", "Keeping commitments", "Healthy relationships", "Future planning"],
      developmentTips: ["Practice setting long-term goals", "Keep an emotional journal", "Learn soft skills", "Learn healthy relationship models", "Understand the value of rules"]
    },

    celebrities: [
      { name: "James Bond", description: "Literary and film character, demonstrating ISTP's boldness, technical mastery, and calmness. Their immediate response ability and risk-taking nature are quintessential ISTP." },
      { name: "Clara Barton", description: "Pioneer in nursing, demonstrating ISTP's practical problem-solving ability and technical innovation. Founded the American Red Cross." },
      { name: "Michael Jordan", description: "Basketball legend, demonstrating ISTP's competitive spirit, technical mastery, and crisis response ability. His calmness and decisiveness shone in important moments of games." }
    ]
  },

  ISFP: {
    name: "Adventurer",
    nickname: "Artist",
    group: "Explorer (SP)",
    characteristics: `ISFP (Adventurer) is a soft and artistic personality who pursues beauty and harmony. They have rich emotions and value living according to their values. ISFPs enjoy the present moment and have exceptional aesthetic sensitivity. They have a quiet but deep emotional world and express themselves through free expression.

They have strong interest in nature and art and understand and empathize with others' emotions well. They like to avoid conflict and maintain harmonious environments. ISFPs appear soft on the outside but have firm values inside.`,

    cognitiveFunctions: {
      dominant: { name: "Introverted Feeling (Fi)", description: "Understands the world through deep inner emotions and values. Has strong personal ethical standards and expresses their emotions authentically." },
      auxiliary: { name: "Extraverted Sensing (Se)", description: "Enjoys the present moment and concrete sensory experiences. Has exceptional aesthetic sensitivity and conveys emotions through artistic expression." },
      tertiary: { name: "Introverted Intuition (Ni)", description: "Explores possibilities and future directions internally. However, it's mainly used in personal situations and focuses on the present rather than long-term planning." },
      inferior: { name: "Extraverted Thinking (Te)", description: "Function of organizing the external world efficiently and logically. This is the most difficult area for ISFPs to develop, but can assist in decision-making." }
    },

    strengths: ["Artistic sensitivity", "Deep empathy", "Soft attitude", "Focus on present", "Authenticity", "Flexibility", "Affinity for nature", "Emotional sensitivity", "Free expression"],

    weaknesses: ["Difficulty making decisions", "Avoiding conflict", "Anxiety about change", "Lack of practicality", "Lack of self-care", "Excessive sensitivity", "Lack of patience", "Lack of future planning"],

    careers: {
      recommended: [
        { job: "Artist/Designer", reason: "This profession requiring creative expression and aesthetic sensitivity allows ISFPs to utilize their strengths. Their authenticity and artistic sense create original works." },
        { job: "Musician", reason: "Music requiring emotional expression and artistic interpretation fits ISFPs well. Their deep emotional world is reflected in music." },
        { job: "Photographer", reason: "Capturing the present moment and expressing it aesthetically requires ISFP's strengths." },
        { job: "Landscape Architect", reason: "This field combining nature and aesthetics allows ISFP's natural affinity and artistic sensitivity to flourish." },
        { job: "Psychological Counselor", reason: "Counseling requiring deep empathy and emotional connection needs ISFP's strengths. Their authenticity provides a safe environment for clients." }
      ],
      avoid: [
        { job: "Senior Executive", reason: "Competitive and goal-oriented business environments may not align well with ISFP's cooperative and values-based approach." },
        { job: "Sales Representative", reason: "Sales centered on numbers and goals can conflict with ISFP's human-centered values." },
        { job: "Military/Police", reason: "This hierarchical and discipline-centered environment may not align well with ISFP's flexible and free-spirited nature." }
      ]
    },

    relationships: {
      datingStyle: "ISFPs are very romantic and emotional partners in dating. They express love authentically and want deep emotional connection with their partner. They enjoy the present moment and show love through romantic gestures and gifts. They value freedom and understand giving their partner space.",
      communicationStyle: "Uses soft and emotional communication. Responds sensitively to others' emotional needs and listens without criticism. Prefers deep conversations but tends to show through actions rather than words.",
      loveLanguage: ["Romantic expressions", "Gifts", "Physical touch", "Quality time", "Sincere words"],
      idealPartner: "ISFPs want a partner who respects their freedom while providing deep emotional connection. ENFJ or ENFP can enrich ISFP's life."
    },

    stressManagement: {
      stressSources: ["Conflict and criticism", "Excessive responsibility", "Change", "Emotional demands", "Rules and constraints", "Future uncertainty"],
      copingMethods: ["Artistic expression", "Spending time in nature", "Physical activity", "Listening to/playing music", "Talking with trusted people"],
      warningSigns: ["Emotional withdrawal", "Depression", "Avoidance", "Self-destructive behavior", "Isolation"]
    },

    growthPoints: {
      strengthsToDevelop: ["Decision-making ability", "Healthy boundaries", "Long-term planning", "Practical awareness", "Self-advocacy"],
      challenges: ["Difficulty making decisions", "Healthy boundaries", "Future planning", "Self-care", "Dealing with conflict"],
      developmentTips: ["Practice decision-making", "Practice setting boundaries", "Set long-term goals", "Create realistic plans", "Recognize self-worth"]
    },

    celebrities: [
      { name: "Marie Antoinette", description: "Last Queen of France, demonstrating ISFP's artistic sensitivity and romantic nature. Her court life and interests reflect ISFP characteristics." },
      { name: "Frida Kahlo", description: "Mexican painter, demonstrating ISFP's deep emotions and artistic expression. Her self-portraits convey deep inner emotions." },
      { name: "Michael Jackson", description: "The King of Pop, demonstrating ISFP's artistic sensitivity and expressive ability. His music, dance, and stage presence created a unique and sensory artistic world." }
    ]
  },

  INFP: {
    name: "Mediator",
    nickname: "Idealist",
    group: "Diplomat (NF)",
    characteristics: `INFP (Mediator) is an idealistic and creative personality who holds a passion to make the world a better place. They pursue deep inner values and value authenticity and meaning. INFPs have excellent empathy and respond sensitively to others' pain. They convey their thoughts and emotions through creative expression and have a flexible and open attitude.

They have a quiet but deep emotional world and value personal growth. They have an idealistic vision and value living according to their values. INFPs like to avoid conflict and maintain harmony but respond decisively when their beliefs are threatened.`,

    cognitiveFunctions: {
      dominant: { name: "Introverted Feeling (Fi)", description: "Understands the world through deep inner emotions and values. Has strong personal ethical standards and expresses their emotions authentically. Deeply empathizes with others' emotions as well." },
      auxiliary: { name: "Extraverted Intuition (Ne)", description: "Explores possibilities and new ideas. Finds creative solutions and accepts various perspectives. Has exceptional ability to see future potential." },
      tertiary: { name: "Introverted Sensing (Si)", description: "Understands the present through past experiences and concrete sensations. Values personal memories and traditions." },
      inferior: { name: "Extraverted Thinking (Te)", description: "Function of organizing the external world efficiently and logically. This is the most difficult area for INFPs to develop, but can assist in decision-making." }
    },

    strengths: ["Deep empathy", "Creativity", "Idealism", "Authenticity", "Flexibility", "Openness", "Altruism", "Strong values", "Inspiring personality"],

    weaknesses: ["Lack of practicality", "Difficulty making decisions", "Excessive idealism", "Avoiding conflict", "Emotional overreaction", "Self-deprecation", "Resistance to change", "Difficulty with social interaction"],

    careers: {
      recommended: [
        { job: "Writer/Poet", reason: "This profession requiring creative expression and deep emotional exploration allows INFPs to utilize their strengths. Their authenticity and imagination create original works." },
        { job: "Psychological Counselor", reason: "Counseling requiring deep empathy and emotional connection needs INFP's strengths. Their authenticity provides a safe environment for clients." },
        { job: "Non-profit Activist", reason: "Their passion to make the world a better place is expressed in non-profit work. They choose causes they truly want to change." },
        { job: "Professor/Educator", reason: "The educator role of seeing students' potential and helping them grow fits INFPs well. Their insight and empathy deeply influence students." },
        { job: "Art Therapist", reason: "This field combining art and healing allows INFP's creativity and empathy to flourish." }
      ],
      avoid: [
        { job: "Senior Executive", reason: "Competitive and goal-oriented business environments may not align well with INFP's cooperative and values-based approach." },
        { job: "Sales Representative", reason: "Sales centered on numbers and goals can conflict with INFP's human-centered values." },
        { job: "Military/Police", reason: "This hierarchical and discipline-centered environment may not align well with ISFP's flexible and free-spirited nature." }
      ]
    },

    relationships: {
      datingStyle: "INFPs are very romantic and dedicated partners in dating. They view love as a spiritual and emotional connection and want deep bonds with their partner. They encourage and support their partner's growth and express their emotions authentically. They imagine long-term partnerships and future together.",
      communicationStyle: "Prefers deep and meaningful conversations. Listens carefully to others and shows genuine interest. Open to emotional topics and listens empathetically.",
      loveLanguage: ["Deep conversation", "Quality time", "Sincere words", "Care", "Creative expression"],
      idealPartner: "INFPs want a partner they can share deep connection and growth with. ENFJ or ENFP can empathize with INFP's emotional world, while INTJ or ENTJ can provide intellectual connection."
    },

    stressManagement: {
      stressSources: ["Conflict and criticism", "Gap between reality and ideals", "Excessive responsibility", "Emotional burnout", "Feeling worthless", "Change"],
      copingMethods: ["Creative expression (writing, art)", "Alone time", "Spending time in nature", "Talking with trusted people", "Meditation/yoga"],
      warningSigns: ["Emotional exhaustion", "Depression", "Self-isolation", "Excessive criticism", "Indifference"]
    },

    growthPoints: {
      strengthsToDevelop: ["Practical awareness", "Healthy boundaries", "Decision-making ability", "Self-care", "Expressing own needs"],
      challenges: ["Perfectionism", "Self-sacrifice", "Escaping reality", "Excessive idealism", "Loneliness"],
      developmentTips: ["Set realistic goals", "Create self-care routines", "Practice setting boundaries", "Practice decision-making", "Ask for help"]
    },

    celebrities: [
      { name: "William Shakespeare", description: "British writer, demonstrating INFP's deep emotions and creativity. His works explore the complex emotional world of humans." },
      { name: "Augustus", description: "First Roman Emperor, demonstrating INFP's deep emotions and complex inner world. His policies and decisions reflect deep insight." },
      { name: "Hans Christian Andersen", description: "Master of fairy tales, demonstrating INFP's idealism and creativity. His stories convey deep emotional messages." }
    ]
  },

  INTP: {
    name: "Logician",
    nickname: "Inventor",
    group: "Analyst (NT)",
    characteristics: `INTP (Logician) is a logical and curious personality who enjoys analyzing complex problems and developing new theories. They pursue original ideas and understand the world through systematic thinking. INTP has strong intellectual curiosity and likes to deeply immerse themselves in their areas of interest.

They tend to prefer intellectual pursuits over social interaction, but enjoy deep conversations with people who can share their interests. INTP performs objective and logical judgments and makes decisions based on facts and logic rather than emotions.`,

    cognitiveFunctions: {
      dominant: { name: "Introverted Thinking (Ti)", description: "Performs logical analysis internally. Has exceptional ability to decompose complex problems and understand principles. Understands the world through objective judgments." },
      auxiliary: { name: "Extraverted Intuition (Ne)", description: "Explores possibilities and new ideas. Finds creative solutions and accepts various perspectives. Has exceptional ability to see future potential." },
      tertiary: { name: "Introverted Feeling (Fi)", description: "Forms inner values and beliefs. Has personal ethical standards and stands up for their beliefs." },
      inferior: { name: "Extraverted Feeling (Fe)", description: "Function of understanding others' emotions and maintaining social harmony. This is the most difficult area for INTPs to develop, but can be improved through conscious effort." }
    },

    strengths: ["Logical thinking", "Creativity", "Analytical ability", "Independence", "Curiosity", "Objectivity", "Intellectual ability", "Problem-solving skills", "New ideas"],

    weaknesses: ["Lack of emotional expression", "Difficulty with social interaction", "Lack of practicality", "Perfectionism", "Decision delay", "Avoiding conflict", "Self-centeredness"],

    careers: {
      recommended: [
        { job: "Scientist/Researcher", reason: "The scientific field requiring deep research and innovative discoveries aligns well with INTP's intellectual curiosity. Their patience and analytical ability greatly assist in research." },
        { job: "Philosopher", reason: "Philosophy requiring deep thinking and theoretical exploration is a field where INTPs can utilize their strengths." },
        { job: "Software Developer", reason: "This profession centered on logical thinking and problem-solving allows INTPs to utilize their strengths. Their creativity is reflected in innovative solutions." },
        { job: "Data Scientist", reason: "This role where data analysis and pattern recognition are important requires INTP's analytical ability." },
        { job: "Professor/Scholar", reason: "Education field requiring intellectual exploration and knowledge transmission fits INTPs well. Their deep knowledge can inspire students." }
      ],
      avoid: [
        { job: "Sales Representative", reason: "Sales requiring natural emotional bonding and spontaneous conversation skills can be challenging for INTPs." },
        { job: "Human Resources (HR)", reason: "This role requiring emotional sensitivity and interpersonal skills may not align well with INTP's logical and distanced approach." },
        { job: "Service Industry", reason: "This environment requiring customer service and immediate emotional responses may not align well with INTP's analytical and cautious approach." }
      ]
    },

    relationships: {
      datingStyle: "INTPs are very selective in dating. They want intellectual connection and value sharing, and have no interest in surface-level interactions. They show love through actions and attention rather than words. They enjoy sharing and exploring their partner's thoughts together.",
      communicationStyle: "Prefers direct and logical communication. Likes conversations based on facts and ideas. Listens carefully and enjoys discussing various perspectives.",
      loveLanguage: ["Intellectual conversation", "Solving problems together", "Space and freedom", "Respect", "Being silent together"],
      idealPartner: "INTPs want a partner who shares intellectual depth and independence. ENFJ or ENTJ can open up the emotional needs beneath INTP's cold exterior."
    },

    stressManagement: {
      stressSources: ["Social expectations", "Emotional demands", "Change", "Inefficiency", "Emotional conflict", "Decision pressure"],
      copingMethods: ["Intellectual activities", "Having alone time", "Analyzing problems", "Reading", "Meditation/yoga"],
      warningSigns: ["Isolation", "Critical attitude", "Avoidance", "Excessive analysis", "Emotional outbursts"]
    },

    growthPoints: {
      strengthsToDevelop: ["Emotional awareness and expression", "Healthy relationships", "Practicality", "Decision-making ability", "Compassion"],
      challenges: ["Emotional distancing", "Social difficulties", "Lack of practicality", "Perfectionism", "Self-centeredness"],
      developmentTips: ["Keep an emotional journal", "Participate in social activities", "Learn practical skills", "Practice decision-making", "Cultivate compassion"]
    },

    celebrities: [
      { name: "Albert Einstein", description: "Giant of physics, demonstrating INTP's logical thinking and creative vision. His theory of relativity was a challenge to existing thinking." },
      { name: "Charlie Chaplin", description: "Film legend, demonstrating INTP's complex inner world and creativity. His works contain deep insight and social commentary." },
      { name: "Isaac Newton", description: "Pioneer of science, demonstrating INTP's analytical ability and intellectual curiosity. His contributions to physics and mathematics were innovations of the era." }
    ]
  },

  ESTP: {
    name: "Entrepreneur",
    nickname: "Adventurer",
    group: "Explorer (SP)",
    characteristics: `ESTP (Entrepreneur) is an active and practical personality who enjoys the present moment and learns through direct experience. They have excellent quick judgment and problem-solving abilities and stay calm even in crisis situations. ESTPs are social and active personalities who enjoy being with people.

They prefer realistic and practical approaches and are action-oriented. They aren't afraid of new challenges and pursue thrill and excitement. ESTPs have exceptional ability to respond spontaneously to situations and quickly find practical solutions.`,

    cognitiveFunctions: {
      dominant: { name: "Extraverted Sensing (Se)", description: "Enjoys the present moment and concrete sensory experiences. Has exceptional immediate response ability and quickly recognizes changes in the environment. Action-oriented personality." },
      auxiliary: { name: "Introverted Thinking (Ti)", description: "Performs logical analysis internally. Understands the principles of problems and finds practical solutions. Understands the world through objective judgments." },
      tertiary: { name: "Extraverted Feeling (Fe)", description: "Responds to others' emotions and maintains social harmony. As a social personality, enjoys interacting with people." },
      inferior: { name: "Introverted Intuition (Ni)", description: "Function of exploring possibilities and future directions internally. This is the most difficult area for ESTPs to develop, but long-term vision can assist in decision-making." }
    },

    strengths: ["Practical problem-solving", "Adaptability", "Social skills", "Action-oriented", "Crisis response ability", "Energy", "Spontaneity", "Risk-taking", "Present focus"],

    weaknesses: ["Lack of long-term planning", "Lack of emotional awareness", "Lack of patience", "Ignoring rules", "Impulsiveness", "Creating conflict", "Dependency", "Lack of perfectionism", "Ignoring details"],

    careers: {
      recommended: [
        { job: "Entrepreneur/Business Owner", reason: "The business world requiring risk-taking and quick decision-making allows ESTPs to utilize their strengths. Their realistic approach greatly helps in business." },
        { job: "Sales Representative", reason: "Sales requiring natural persuasion and social skills fit ESTPs well. Their spontaneous response ability helps in building customer relationships." },
        { job: "Marketing/Advertising", reason: "This field requiring creativity and spontaneous campaign development needs ESTP's strengths." },
        { job: "Financial Investor", reason: "Investment requiring quick judgment and risk analysis needs ESTP's analytical ability and intuition." },
        { job: "Emergency Medical Technician", reason: "Medical field requiring immediate judgment and calm response needs ESTP's strengths." }
      ],
      avoid: [
        { job: "Accountant/Auditor", reason: "This profession requiring long-term focus and detailed records may not align well with ESTP's spontaneous nature." },
        { job: "Researcher/Scientist", reason: "This profession requiring long-term research and patience may not align well with ESTP's spontaneous nature." },
        { job: "Librarian", reason: "Quiet and systematic work environments may not align well with ESTP's active nature." }
      ]
    },

    relationships: {
      datingStyle: "ESTPs are active and thrilling partners in dating. They express love through direct actions and experiences. They enjoy new activities and adventures together and bring energy and vitality to their partner. They enjoy the present moment and don't worry much about the future.",
      communicationStyle: "Uses direct and active communication. Is talkative and social, and enjoys spontaneous conversations. Likes making others laugh and having fun.",
      loveLanguage: ["Doing activities together", "Spontaneous surprises", "Physical touch", "Gifts", "Thrill"],
      idealPartner: "ESTPs want an active partner they can grow with. ISFJ or ESFJ can bring stability to ESTP's life, while INTJ or ENTJ can provide intellectual connection."
    },

    stressManagement: {
      stressSources: ["Boredom", "Long-term commitments", "Rules and constraints", "Emotional conflict", "Excessive responsibility", "Isolation"],
      copingMethods: ["Physical activity", "Social interaction", "Spontaneous activities", "New experiences", "Spending time in nature"],
      warningSigns: ["Impulsive behavior", "Excessive activity", "Isolation", "Emotional outbursts", "Risky behavior"]
    },

    growthPoints: {
      strengthsToDevelop: ["Long-term planning", "Patience", "Emotional awareness", "Healthy relationships", "Value of rules"],
      challenges: ["Impulsiveness", "Lack of long-term planning", "Emotional distancing", "Ignoring rules", "Dependency"],
      developmentTips: ["Set long-term goals", "Practice meditation", "Keep an emotional journal", "Learn healthy relationships", "Understand the value of rules"]
    },

    celebrities: [
      { name: "Donald Trump", description: "American businessman and politician, demonstrating ESTP's realistic approach and social nature. His risk-taking nature and spontaneous decision-making are quintessential ESTP." },
      { name: "Mike Tyson", description: "Boxer, demonstrating ESTP's boldness and crisis response ability. His immediate power and aggressive style are characteristic of ESTP." },
      { name: "Ernest Hemingway", description: "Novelist, demonstrating ESTP's direct experience and action-oriented nature. His works contain direct exploration of life and death." }
    ]
  },

  ESFP: {
    name: "Entertainer",
    nickname: "Performer",
    group: "Explorer (SP)",
    characteristics: `ESFP (Entertainer) is an active and social personality who enjoys being with people and radiates positive energy. They have rich emotions and expressive abilities and like making others happy. ESFPs are spontaneous and free-spirited, welcoming change and new experiences.

They have a realistic and practical attitude and enjoy living in the moment. ESFPs like being the center of attention and feel energized at parties and events. They tend to prefer maintaining broad social networks over deep relationships.`,

    cognitiveFunctions: {
      dominant: { name: "Extraverted Sensing (Se)", description: "Enjoys the present moment and concrete sensory experiences. Has a flashy and expressive personality and likes being the center of attention. Has exceptional artistic expression ability." },
      auxiliary: { name: "Introverted Feeling (Fi)", description: "Understands the world through inner emotions and values. Has strong personal ethical standards and expresses emotions authentically." },
      tertiary: { name: "Extraverted Intuition (Ne)", description: "Explores possibilities and new ideas. Finds creative solutions and accepts various perspectives." },
      inferior: { name: "Introverted Thinking (Ti)", description: "Function of performing logical analysis internally. This is the most difficult area for ESFPs to develop, but can assist in decision-making." }
    },

    strengths: ["Social skills", "Positive energy", "Expressiveness", "Adaptability", "Present focus", "Passion", "Practicality", "Making others happy", "Humor"],

    weaknesses: ["Lack of long-term planning", "Difficulty making decisions", "Avoiding conflict", "Lack of organization", "Dependency", "Ignoring details", "Lack of patience", "Difficulty with deep relationships"],

    careers: {
      recommended: [
        { job: "Entertainer/Actor", reason: "This profession requiring stage attention and expression allows ESFPs to utilize their strengths. Their energy and expressiveness captivate audiences." },
        { job: "Event Planner", reason: "This role requiring creative event planning and execution needs ESFP's spontaneity and social skills." },
        { job: "Sales Representative", reason: "Sales requiring natural persuasion and social skills fit ESFPs well. Their positive energy makes good impressions on customers." },
        { job: "Wedding Planner", reason: "This role requiring event planning and customer service needs ESFP's strengths." },
        { job: "Travel Guide", reason: "This profession of being with people and sharing new experiences fits ESFPs well." }
      ],
      avoid: [
        { job: "Accountant/Auditor", reason: "This profession requiring long-term focus and detailed records may not align well with ESFP's spontaneous nature." },
        { job: "Researcher/Scientist", reason: "This profession requiring long-term research and patience may not align well with ESFP's spontaneous nature." },
        { job: "Long-term Care Facility Staff", reason: "Rule-based and quiet environments may not align well with ESFP's active nature." }
      ]
    },

    relationships: {
      datingStyle: "ESFPs are very active and enjoyable partners in dating. They express love through direct actions and spontaneous surprises. They like making their partner laugh and experiencing new things together. They focus on present enjoyment rather than long-term commitments.",
      communicationStyle: "Uses lively and social communication. Is talkative and has humor, and likes making others happy. Open to emotional conversations as well.",
      loveLanguage: ["Spontaneous surprises", "Doing activities together", "Physical touch", "Gifts", "Humor"],
      idealPartner: "ESFPs want a partner they can share vitality and joy with. ISFJ or ESFJ can bring stability to ESFP's life, while ENTP or ENFP can provide intellectual connection."
    },

    stressManagement: {
      stressSources: ["Boredom", "Long-term commitments", "Rules and constraints", "Conflict", "Isolation", "Excessive responsibility"],
      copingMethods: ["Social interaction", "Physical activity", "Spontaneous activities", "Music/art", "Spending time in nature"],
      warningSigns: ["Impulsive behavior", "Excessive activity", "Isolation", "Emotional outbursts", "Health problems"]
    },

    growthPoints: {
      strengthsToDevelop: ["Long-term planning", "Decision-making ability", "Healthy relationships", "Detail management", "Patience"],
      challenges: ["Impulsiveness", "Lack of long-term planning", "Superficial relationships", "Ignoring details", "Avoiding conflict"],
      developmentTips: ["Set long-term goals", "Practice decision-making", "Build deep relationships", "Use checklists", "Practice meditation"]
    },

    celebrities: [
      { name: "Marilyn Monroe", description: "Legendary Hollywood actress, demonstrating ESFP's charm and expressiveness. Her charisma and spontaneous nature captivated audiences." },
      { name: "Elvis Presley", description: "King of Rock and Roll, demonstrating ESFP's energy and stage expressiveness. His spontaneous performances greatly influenced music history." },
      { name: "Jennifer Lopez", description: "Singer and actress, demonstrating ESFP's versatility and vitality. Her stage energy and expressiveness captivate fans." }
    ]
  },

  ENFP: {
    name: "Campaigner",
    nickname: "Enthusiast",
    group: "Diplomat (NF)",
    characteristics: `ENFP (Campaigner) is an enthusiastic and creative personality who pursues new ideas and possibilities. They value relationships with people and encourage others' potential. ENFP has a flexible and open attitude and accepts various perspectives. They are idealistic and work to make the world a better place.

They have abundant imagination and passion and constantly explore new possibilities. ENFP focuses on the present while having vision for the future. They seek deep emotional connection and value authenticity and meaning.`,

    cognitiveFunctions: {
      dominant: { name: "Extraverted Intuition (Ne)", description: "Explores possibilities and new ideas. Finds creative solutions and accepts various perspectives. Has exceptional ability to see future potential." },
      auxiliary: { name: "Introverted Feeling (Fi)", description: "Understands the world through inner emotions and values. Has strong personal ethical standards and expresses emotions authentically. Deeply empathizes with others' emotions as well." },
      tertiary: { name: "Extraverted Sensing (Se)", description: "Enjoys the present moment and concrete sensory experiences. Learns through new experiences and is open to sensory pleasures." },
      inferior: { name: "Introverted Thinking (Ti)", description: "Function of performing logical analysis internally. This is the most difficult area for ENFPs to develop, but can assist in decision-making." }
    },

    strengths: ["Creativity", "Passion", "Social skills", "Openness", "Idealism", "Empathy ability", "Adaptability", "Inspiring personality", "Discovering new possibilities"],

    weaknesses: ["Difficulty making decisions", "Lack of long-term planning", "Avoiding conflict", "Lack of organization", "Excessive idealism", "Lack of practicality", "Emotional overreaction", "Difficulty keeping commitments"],

    careers: {
      recommended: [
        { job: "Writer/Poet", reason: "This profession requiring creative expression and deep emotional exploration allows ENFPs to utilize their strengths. Their authenticity and imagination create original works." },
        { job: "Marketing/Advertising", reason: "This field requiring creative campaign development and connecting with people needs ENFP's strengths." },
        { job: "Entrepreneur/Innovator", reason: "Entrepreneurship that turns new ideas into reality is a field where ENFP's creativity and passion can flourish." },
        { job: "Psychological Counselor", reason: "Counseling requiring deep empathy and emotional connection needs ENFP's strengths. Their authenticity provides a safe environment for clients." },
        { job: "Journalist/Blogger", reason: "This profession where storytelling and unique perspectives are important fits ENFPs well." }
      ],
      avoid: [
        { job: "Accountant/Auditor", reason: "This profession requiring long-term focus and detailed records may not align well with ENFP's spontaneous nature." },
        { job: "Researcher/Scientist", reason: "This profession requiring long-term research and patience may not align well with ENFP's spontaneous nature." },
        { job: "Long-term Care Facility Staff", reason: "Rule-based and quiet environments may not align well with ENFP's active nature." }
      ]
    },

    relationships: {
      datingStyle: "ENFPs are very enthusiastic and romantic partners in dating. They view love as a spiritual and emotional connection and want deep bonds with their partner. They encourage their partner's potential and enjoy growing together. They enjoy the present moment and imagine future possibilities together.",
      communicationStyle: "Uses lively and deep conversations. Listens carefully to others and shows genuine interest. Open to emotional topics and listens empathetically.",
      loveLanguage: ["Deep conversation", "Quality time", "Spontaneous surprises", "Encouragement", "Creative expression"],
      idealPartner: "ENFPs want a partner they can share deep connection and growth with. INTJ or INFJ can understand ENFP's passion and provide stability."
    },

    stressManagement: {
      stressSources: ["Conflict and criticism", "Excessive responsibility", "Emotional burnout", "Feeling worthless", "Change", "Isolation"],
      copingMethods: ["Creative expression", "Social interaction", "New experiences", "Talking with trusted people", "Spending time in nature"],
      warningSigns: ["Emotional exhaustion", "Depression", "Avoidance", "Excessive activity", "Indifference"]
    },

    growthPoints: {
      strengthsToDevelop: ["Decision-making ability", "Healthy boundaries", "Long-term planning", "Practicality", "Self-care"],
      challenges: ["Difficulty making decisions", "Healthy boundaries", "Long-term planning", "Self-care", "Dealing with conflict"],
      developmentTips: ["Practice decision-making", "Practice setting boundaries", "Set long-term goals", "Create realistic plans", "Create self-care routines"]
    },

    celebrities: [
      { name: "Walt Disney", description: "Founder of Disney, demonstrating ENFP's creativity and passion. His unlimited imagination and idealism revolutionized the animation industry." },
      { name: "Robin Williams", description: "Genius comedic actor and actor, demonstrating ENFP's creativity and warm humanity. His spontaneous creativity and deep empathy brought laughter and moved people's hearts." },
      { name: "René Descartes", description: "Philosopher and mathematician, demonstrating ENFP's creative thinking and exploratory spirit. His philosophy of 'I think, therefore I am' greatly influenced the era." }
    ]
  },

  ENTP: {
    name: "Debater",
    nickname: "Inventor",
    group: "Analyst (NT)",
    characteristics: `ENTP (Debater) is an innovative and strategic personality who enjoys new ideas and challenges. They combine logical thinking and creativity to solve complex problems. ENTPs like debates and arguments and enjoy exploring various perspectives.

They have an independent and flexible attitude and pursue change and innovation. They have a future-oriented vision and like challenging established ways. ENTP has strong intellectual curiosity and enjoys exploring new fields.`,

    cognitiveFunctions: {
      dominant: { name: "Extraverted Intuition (Ne)", description: "Explores possibilities and new ideas. Finds creative solutions and accepts various perspectives. Has exceptional ability to see future potential." },
      auxiliary: { name: "Introverted Thinking (Ti)", description: "Performs logical analysis internally. Has exceptional ability to decompose complex problems and understand principles. Understands the world through objective judgments." },
      tertiary: { name: "Extraverted Feeling (Fe)", description: "Responds to others' emotions and maintains social harmony. As a social personality, enjoys interacting with people." },
      inferior: { name: "Introverted Sensing (Si)", description: "Function of understanding the present through past experiences and concrete sensations. This is the most difficult area for ENTPs to develop, but lessons from the past can assist in decision-making." }
    },

    strengths: ["Creativity", "Logical thinking", "Adaptability", "Willpower", "Innovation", "Exploratory spirit", "Various perspectives", "Problem-solving ability", "Inspiring personality"],

    weaknesses: ["Difficulty making decisions", "Lack of practicality", "Creating conflict", "Ignoring rules", "Impulsiveness", "Excessive analysis", "Difficulty keeping commitments", "Ignoring others' emotions"],

    careers: {
      recommended: [
        { job: "Entrepreneur/Innovator", reason: "Entrepreneurship that turns new ideas into reality is a field where ENTP's creativity and passion can flourish." },
        { job: "Lawyer", reason: "The legal field where debate and argumentation are important needs ENTP's strengths. Their logical thinking and language skills greatly help in court." },
        { job: "Strategic Consultant", reason: "This role of analyzing complex problems and presenting innovative solutions fits ENTP's strategic thinking well." },
        { job: "Scientist/Inventor", reason: "Research fields requiring creative discovery and innovation allow ENTP's strengths to flourish." },
        { job: "Product Designer", reason: "This role of conceiving and improving new products needs ENTP's creativity and problem-solving ability." }
      ],
      avoid: [
        { job: "Accountant/Auditor", reason: "This profession requiring long-term focus and detailed records may not align well with ENTP's spontaneous nature." },
        { job: "Long-term Care Facility Staff", reason: "Rule-based and quiet environments may not align well with ENTP's active nature." },
        { job: "Civil Servant", reason: "This profession where rules and procedures are important may not align well with ENTP's pursuit of change." }
      ]
    },

    relationships: {
      datingStyle: "ENTPs are intellectual and challenging partners in dating. They express love through debate and sharing. They enjoy sharing and exploring their partner's thoughts together. They like new experiences and adventures together and provide intellectual stimulation to their partner.",
      communicationStyle: "Uses intellectual and challenging communication. Enjoys debates and arguments. Listens carefully and enjoys discussing various perspectives.",
      loveLanguage: ["Intellectual conversation", "Debating together", "Spontaneous surprises", "New experiences", "Challenge"],
      idealPartner: "ENTPs want a partner they can share intellectual depth and growth with. ENFJ or ENTJ can understand ENTP's energy, while INTJ or INFP can provide deep connection."
    },

    stressManagement: {
      stressSources: ["Rules and constraints", "Monotony", "Emotional conflict", "Excessive responsibility", "Change", "Isolation"],
      copingMethods: ["Intellectual activities", "New experiences", "Social interaction", "Analyzing problems", "Exercise"],
      warningSigns: ["Excessive analysis", "Impulsive behavior", "Avoidance", "Critical attitude", "Isolation"]
    },

    growthPoints: {
      strengthsToDevelop: ["Decision-making ability", "Healthy relationships", "Practicality", "Patience", "Awareness of others' emotions"],
      challenges: ["Impulsiveness", "Difficulty making decisions", "Healthy relationships", "Lack of practicality", "Ignoring others' emotions"],
      developmentTips: ["Practice decision-making", "Learn healthy relationships", "Create realistic plans", "Cultivate patience", "Practice empathy"]
    },

    celebrities: [
      { name: "Thomas Edison", description: "Inventor, demonstrating ENTP's innovative thinking and relentless exploratory spirit. His persistence and originality in inventing the light bulb after thousands of failures are quintessential ENTP." },
      { name: "Richard Feynman", description: "Nobel Prize-winning physicist, demonstrating ENTP's exploratory spirit and creativity. His teaching methods and humor enriched the scientific community." },
      { name: "Mark Twain", description: "Writer, demonstrating ENTP's wit and critical thinking. His works contain sharp social observation and satire." }
    ]
  },

  ESTJ: {
    name: "Executive",
    nickname: "Administrator",
    group: "Sentinel (SJ)",
    characteristics: `ESTJ (Executive) is a practical and systematic personality who values efficiency and organization. They have strong sense of responsibility and prefer handling work in a planned manner. ESTJs have excellent leadership and are good at leading teams and achieving goals. They value tradition and rules and prefer stable environments.

They are reliable and conscientious and always complete tasks entrusted to them. They perform objective and logical judgments and make decisions based on facts rather than emotions. ESTJs value order and discipline and take pride in protecting society's traditions and values.`,

    cognitiveFunctions: {
      dominant: { name: "Extraverted Thinking (Te)", description: "Organizes the external world efficiently and logically. Can make objective judgments and systematic approaches. Prefers decisions based on facts and data." },
      auxiliary: { name: "Introverted Sensing (Si)", description: "Understands the present through past experiences and concrete facts. Maintains tradition and discipline with excellent memory for details." },
      tertiary: { name: "Extraverted Intuition (Ne)", description: "Explores possibilities and new ideas. However, it's mainly used in work contexts and applied conservatively in personal areas." },
      inferior: { name: "Introverted Feeling (Fi)", description: "Function of forming inner emotions and values. This is the most difficult area for ESTJs to develop, but can reflect personal values in decision-making." }
    },

    strengths: ["Leadership", "Organization", "Responsibility", "Efficiency", "Reliability", "Respect for tradition", "Logical judgment", "Practicality", "Decisiveness"],

    weaknesses: ["Excessive authority", "Resistance to change", "Lack of emotional awareness", "Rigidity", "Stubbornness", "Creating conflict", "Lack of humanity", "Perfectionism"],

    careers: {
      recommended: [
        { job: "Executive/CEO", reason: "This role requiring leadership to lead organizations and achieve goals allows ESTJs to utilize their strengths." },
        { job: "Military/Police", reason: "This field where discipline and leadership are important needs ESTJ's organization and responsibility." },
        { job: "Project Manager", reason: "In roles where organization and planning are essential, ESTJs can meet deadlines and lead teams effectively." },
        { job: "Accountant/Auditor", reason: "This profession requiring meticulous attention and precision allows ESTJ strengths to flourish." },
        { job: "Judge/Legal Professional", reason: "The legal field where discipline and fairness are important fits ESTJ's objective judgment and systematic approach well." }
      ],
      avoid: [
        { job: "Artist/Writer", reason: "This area centered on creative and subjective expression may not align well with ESTJ's logical and systematic approach." },
        { job: "Counselor/Social Worker", reason: "This role requiring emotional sensitivity and empathy may not align well with ESTJ's logical and distanced approach." },
        { job: "Research Scientist", reason: "This profession requiring long-term research and patience may not align well with ESTJ's result-oriented nature." }
      ]
    },

    relationships: {
      datingStyle: "ESTJs are very serious and traditional partners in dating. They express love through actions and responsibility. They think about long-term relationships and marriage and value family values. They like meeting their partner's needs and maintaining order in relationships.",
      communicationStyle: "Uses direct and clear communication. Prefers facts and practical discussions over emotional expression. Listens carefully and focuses on problem-solving.",
      loveLanguage: ["Practical help", "Responsibility", "Tradition", "Practical gifts", "Trust and commitment"],
      idealPartner: "ESTJs want stable and traditional relationships. ISFJ or ESFJ can meet ESTJ's emotional needs, while ENTJ or ENTP can provide intellectual connection."
    },

    stressManagement: {
      stressSources: ["Change without planning", "Rule violations", "Excessive responsibility increase", "Emotional conflict", "Inefficiency"],
      copingMethods: ["Systematic problem-solving", "Traditional activities", "Social interaction", "Exercise", "Spending time in nature"],
      warningSigns: ["Overwork", "Critical attitude", "Emotional outbursts", "Health problems", "Isolation"]
    },

    growthPoints: {
      strengthsToDevelop: ["Flexibility", "Emotional awareness and expression", "Others' perspectives", "Compassion", "Adaptability to change"],
      challenges: ["Rigidity", "Emotional distancing", "Stubbornness", "Excessive authority", "Lack of humanity"],
      developmentTips: ["Experience gradual changes", "Keep an emotional journal", "Interact with different personality types", "Cultivate compassion", "Healthy rest"]
    },

    celebrities: [
      { name: "Margaret Thatcher", description: "Former UK Prime Minister, demonstrating ESTJ's decisiveness and leadership. Her strong governing style earned her the nickname 'Iron Lady.'" },
      { name: "Andrew Jackson", description: "7th President of the United States, demonstrating ESTJ's strong will and tradition-protecting nature. His presidency was based on firm principles." },
      { name: "John D. Rockefeller", description: "Oil tycoon, demonstrating ESTJ's business acumen and organization. His systematic approach became a model for modern business." }
    ]
  },

  ESFJ: {
    name: "Consul",
    nickname: "Diplomat",
    group: "Sentinel (SJ)",
    characteristics: `ESFJ (Consul) is a warm and social personality who finds joy in caring for and helping others. They are cooperative and considerate and value maintaining harmonious relationships. ESFJ has a practical and realistic attitude and takes good care of everyday details.

They provide stability and support in relationships and value social recognition and praise. ESFJs like keeping promises and meeting others' needs. They are skilled at planning festivals and events and play a role in strengthening community cohesion.`,

    cognitiveFunctions: {
      dominant: { name: "Extraverted Feeling (Fe)", description: "Responds sensitively to others' emotions and maintains harmonious relationships. Has excellent empathy and understands others' needs. Values social recognition and harmony." },
      auxiliary: { name: "Introverted Sensing (Si)", description: "Understands the present through past experiences and concrete facts. Meets people's needs with excellent memory for details." },
      tertiary: { name: "Extraverted Intuition (Ne)", description: "Explores possibilities and new ideas. However, it's mainly used in social contexts and applied conservatively in personal areas." },
      inferior: { name: "Introverted Thinking (Ti)", description: "Function of performing logical analysis internally. This is the most difficult area for ESFJs to develop, but can reflect logical considerations in decision-making." }
    },

    strengths: ["Social skills", "Consideration", "Cooperation", "Dedication", "Practicality", "Maintaining harmony", "Organization", "Encouraging others", "Event planning"],

    weaknesses: ["Excessive consideration", "Avoiding conflict", "Resistance to change", "Excessive need for recognition", "Lack of self-care", "Organizational issues", "Sensitivity to criticism", "Dependency"],

    careers: {
      recommended: [
        { job: "Nurse", reason: "This profession of caring for patients perfectly utilizes ESFJ's dedicated nature and empathy." },
        { job: "Elementary School Teacher", reason: "The teacher role of helping children grow requires ESFJ's warmth and patience." },
        { job: "Secretary/Assistant", reason: "ESFJs can excel in roles requiring detailed attention and organizational skills." },
        { job: "Party Planner", reason: "This role requiring event and festival planning needs ESFJ's social skills and organization." },
        { job: "Human Resources (HR)", reason: "The HR field where relationships and harmony are important allows ESFJ strengths to flourish." }
      ],
      avoid: [
        { job: "Research Scientist", reason: "This profession requiring long-term research and patience may not align well with ESFJ's social nature." },
        { job: "Long-term Care Facility Staff", reason: "Rule-based and quiet environments may not align well with ESFJ's active nature." },
        { job: "Night shift work", reason: "Working alone environments may not align well with ESFJ's social nature." }
      ]
    },

    relationships: {
      datingStyle: "ESFJs are very dedicated and considerate partners in dating. They express love through actions and consideration. They like meeting their partner's needs and maintaining harmony in relationships. They think about long-term partnerships and marriage and value family events.",
      communicationStyle: "Uses warm and social communication. Responds sensitively to others' emotional needs. Provides non-critical feedback and listens empathetically.",
      loveLanguage: ["Care", "Practical help", "Spending time together", "Gifts", "Encouragement and support"],
      idealPartner: "ESFJs want a stable and dedicated partner. ISFJ or ESTJ share ESFJ's traditional values, while ENFP or ENTP can bring new experiences."
    },

    stressManagement: {
      stressSources: ["Conflict and criticism", "Excessive responsibility", "Change", "Feeling worthless", "Isolation", "Health problems"],
      copingMethods: ["Social interaction", "Traditional activities", "Spending time in nature", "Talking with trusted people", "Rest"],
      warningSigns: ["Overwork", "Emotional burnout", "Health problems", "Social overcommitment", "Self-destructive behavior"]
    },

    growthPoints: {
      strengthsToDevelop: ["Healthy boundaries", "Self-care", "Adaptability to change", "Expressing own needs", "Practical awareness"],
      challenges: ["Excessive responsibility", "Healthy boundaries", "Self-care", "Dealing with conflict", "Own needs"],
      developmentTips: ["Practice setting boundaries", "Create self-care routines", "Try new experiences gradually", "Practice decision-making", "Have alone time"]
    },

    celebrities: [
      { name: "Jennifer Garner", description: "Actress, demonstrating ESFJ's warmth and social nature. Her charity work and social involvement reflect ESFJ's altruistic nature." },
      { name: "Taylor Swift", description: "Singer-songwriter, demonstrating ESFJ's emotional expression and social charisma. Her music connects with audiences emotionally." },
      { name: "Billy Graham", description: "Evangelist, demonstrating ESFJ's inspiring leadership and compassion. His ability to connect with people was legendary." }
    ]
  },

  ENFJ: {
    name: "Protagonist",
    nickname: "Teacher",
    group: "Diplomat (NF)",
    characteristics: `ENFJ (Protagonist) is a charismatic personality with exceptional empathy who excels at encouraging and leading others. They are idealistic and work to make the world a better place. ENFJ has exceptional intuition and well understands others' emotions and needs.

They inspire through leadership and value teamwork and cooperation. ENFJs like seeing and developing others' potential and naturally perform roles as educators or mentors. They are highly interested in social recognition and social change.`,

    cognitiveFunctions: {
      dominant: { name: "Extraverted Feeling (Fe)", description: "Responds sensitively to others' emotions and maintains harmonious relationships. Has excellent empathy and understands others' needs. Inspires through leadership." },
      auxiliary: { name: "Extraverted Intuition (Ne)", description: "Explores possibilities and new ideas. Finds creative solutions and accepts various perspectives. Has exceptional ability to see future potential." },
      tertiary: { name: "Introverted Thinking (Ti)", description: "Performs logical analysis internally. Used to logically support one's beliefs and values." },
      inferior: { name: "Introverted Sensing (Si)", description: "Function of understanding the present through past experiences and concrete sensations. This is the most difficult area for ENFJs to develop, but lessons from the past can assist in decision-making." }
    },

    strengths: ["Charisma", "Empathy ability", "Leadership", "Inspiring personality", "Idealism", "Cooperation", "Intuition", "Developing others", "Social interest"],

    weaknesses: ["Excessive idealism", "Avoiding conflict", "Emotional overreaction", "Lack of self-care", "Dependency", "Perfectionism", "Excessive responsibility", "Lack of humanity"],

    careers: {
      recommended: [
        { job: "Teacher/Educator", reason: "This educator role of helping students grow and inspire fits ENFJ's strengths well." },
        { job: "Counselor/Psychotherapist", reason: "Counseling requiring deep empathy and emotional connection needs ENFJ's strengths." },
        { job: "Non-profit Activist", reason: "Their passion to make the world a better place is expressed in non-profit work." },
        { job: "Human Resources (HR)", reason: "The HR field where relationships and harmony are important allows ENFJ strengths to flourish." },
        { job: "Politician/Social Activist", reason: "This role where social change and inspiring leadership are important fits ENFJ's idealism well." }
      ],
      avoid: [
        { job: "Research Scientist", reason: "This profession requiring long-term research and patience may not align well with ENFJ's social nature." },
        { job: "Long-term Care Facility Staff", reason: "Rule-based and quiet environments may not align well with ENFJ's active nature." },
        { job: "Night shift work", reason: "Working alone environments may not align well with ENFJ's social nature." }
      ]
    },

    relationships: {
      datingStyle: "ENFJs are very dedicated and passionate partners in dating. They view love as a spiritual and emotional connection and want deep bonds with their partner. They encourage and support their partner's growth and imagine the future together. They like playing a central role in relationships.",
      communicationStyle: "Uses warm and inspiring communication. Listens carefully to others and shows genuine interest. Open to emotional conversations and freely gives encouragement and support.",
      loveLanguage: ["Deep conversation", "Quality time", "Encouragement", "Care", "Growing together"],
      idealPartner: "ENFJs want a partner they can share deep connection and growth with. INFP or ISFP can empathize with ENFJ's emotional world, while INTJ or ENTJ can provide intellectual connection."
    },

    stressManagement: {
      stressSources: ["Conflict and criticism", "Excessive responsibility", "Emotional burnout", "Feeling worthless", "Change", "Isolation"],
      copingMethods: ["Social interaction", "Creative expression", "Spending time in nature", "Talking with trusted people", "Rest"],
      warningSigns: ["Emotional exhaustion", "Depression", "Overwork", "Health problems", "Self-destructive behavior"]
    },

    growthPoints: {
      strengthsToDevelop: ["Healthy boundaries", "Self-care", "Practical awareness", "Expressing own needs", "Compassion"],
      challenges: ["Excessive responsibility", "Healthy boundaries", "Self-care", "Escaping reality", "Excessive idealism"],
      developmentTips: ["Practice setting boundaries", "Create self-care routines", "Set realistic goals", "Practice decision-making", "Cultivate compassion"]
    },

    celebrities: [
      { name: "Barack Obama", description: "Former US President, demonstrating ENFJ's charisma and inspiring leadership. His speeches and vision inspired many people." },
      { name: "Martin Luther King Jr.", description: "Civil rights leader, demonstrating ENFJ's passion and struggle for social change. His speeches had deep emotional impact." },
      { name: "Oprah Winfrey", description: "Media mogul, demonstrating ENFJ's stage charisma and social involvement. Her authenticity and connection with people inspire millions." }
    ]
  },

  ENTJ: {
    name: "Commander",
    nickname: "Leader",
    group: "Analyst (NT)",
    characteristics: `ENTJ (Commander) is a decisive and strategic personality who sees the big picture and makes long-term plans. They value efficiency and results and work systematically to achieve goals. ENTJ has excellent leadership and is good at organizing and leading teams.

They make difficult decisions based on logical thinking and pursue innovation and development. ENTJs like competition and enjoy setting and achieving challenging goals. They lead teams with clear vision and strong will, and want to improve the world through change.`,

    cognitiveFunctions: {
      dominant: { name: "Extraverted Thinking (Te)", description: "Organizes the external world efficiently and logically. Can make objective judgments and systematic approaches. Prefers decisions based on facts and data." },
      auxiliary: { name: "Introverted Intuition (Ni)", description: "Provides deep insight and long-term vision. Has exceptional ability to recognize patterns and predict future possibilities." },
      tertiary: { name: "Extraverted Feeling (Fe)", description: "Responds to others' emotions and maintains social harmony. Used to understand others' needs in leadership situations." },
      inferior: { name: "Introverted Sensing (Si)", description: "Function of understanding the present through past experiences and concrete sensations. This is the most difficult area for ENTJs to develop, but lessons from the past can assist in decision-making." }
    },

    strengths: ["Leadership", "Decisiveness", "Efficiency", "Strategic thinking", "Logical judgment", "Confidence", "Innovation", "Organization", "Goal achievement"],

    weaknesses: ["Excessive authority", "Lack of emotional awareness", "Stubbornness", "Competitiveness", "Resistance to change", "Lack of patience", "Ignoring others' emotions", "Perfectionism"],

    careers: {
      recommended: [
        { job: "CEO/Senior Executive", reason: "This role requiring leadership to lead organizations and achieve goals allows ENTJs to utilize their strengths." },
        { job: "Strategic Consultant", reason: "This role of analyzing complex problems and presenting innovative solutions fits ENTJ's strategic thinking well." },
        { job: "Entrepreneur/Business Owner", reason: "Entrepreneurship leading and growing business is a field where ENTJ's strengths can flourish." },
        { job: "Politician/Administrator", reason: "The political field requiring leadership and strategic thinking fits ENTJ's characteristics well." },
        { job: "Investment Analyst/Financier", reason: "The financial field requiring quick judgment and strategic thinking needs ENTJ's strengths." }
      ],
      avoid: [
        { job: "Counselor/Social Worker", reason: "This role requiring emotional sensitivity and empathy may not align well with ENTJ's logical and distanced approach." },
        { job: "Artist/Writer", reason: "This area centered on creative and subjective expression may not align well with ENTJ's logical and systematic approach." },
        { job: "Long-term Care Facility Staff", reason: "Rule-based and quiet environments may not align well with ENTJ's active nature." }
      ]
    },

    relationships: {
      datingStyle: "ENTJs are very decisive partners in dating. They express love through actions and achievements. They think about long-term partnerships and like setting and achieving relationship goals. They invest in their partner's growth and enjoy pursuing goals together.",
      communicationStyle: "Uses direct and clear communication. Enjoys debates and arguments. Listens carefully and focuses on efficient problem-solving.",
      loveLanguage: ["Growing together", "Quality time", "Challenge", "Practical help", "Intellectual conversation"],
      idealPartner: "ENTJs want a partner they can share intellectual depth and growth with. ENFJ or ENFP can meet ENTJ's emotional needs, while INTJ or INTP can provide deep connection."
    },

    stressManagement: {
      stressSources: ["Loss of control", "Inefficiency", "Emotional conflict", "Change", "Failure to achieve goals", "Isolation"],
      copingMethods: ["Resetting goals", "Analyzing problems", "Social interaction", "Exercise", "Intellectual activities"],
      warningSigns: ["Critical attitude", "Overwork", "Emotional outbursts", "Health problems", "Isolation"]
    },

    growthPoints: {
      strengthsToDevelop: ["Emotional awareness and expression", "Compassion", "Flexibility", "Others' perspectives", "Healthy relationships"],
      challenges: ["Rigidity", "Emotional distancing", "Stubbornness", "Excessive authority", "Lack of patience"],
      developmentTips: ["Keep an emotional journal", "Cultivate compassion", "Experience gradual changes", "Interact with different personality types", "Learn healthy relationships"]
    },

    celebrities: [
      { name: "Napoleon Bonaparte", description: "Emperor of France, demonstrating ENTJ's powerful leadership and strategic thinking. His military talents and ambition are quintessential ENTJ." },
      { name: "Steve Jobs", description: "Co-founder of Apple, demonstrating ENTJ's innovative vision and powerful leadership. His pursuit of change and perfectionism led the tech revolution." },
      { name: "Jeff Bezos", description: "Founder of Amazon, demonstrating ENTJ's strategic thinking and entrepreneurship. His long-term vision and decisiveness revolutionized e-commerce." }
    ]
  }
};

// Get MBTI details by locale
export function getMBTIDetails(locale: 'ko' | 'en'): Record<string, MBTIDetail> {
  if (locale === 'ko') {
    return mbtiDetails;
  }

  // Return English version with merged translations
  const enDetails: Record<string, MBTIDetail> = {};
  for (const [code, originalDetail] of Object.entries(mbtiDetails)) {
    const translation = mbtiDetailsEn[code];
    if (translation) {
      enDetails[code] = {
        ...originalDetail,
        ...translation
      } as MBTIDetail;
    } else {
      enDetails[code] = originalDetail;
    }
  }
  return enDetails;
}

// Re-export original for backward compatibility
export { mbtiDetails };
export type { MBTIDetail };
