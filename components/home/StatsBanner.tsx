"use client";

import { useTranslations } from 'next-intl';

export function StatsBanner() {
  const t = useTranslations('home');

  const stats = [
    { 
      value: "150,000+", 
      label: t('stats.users'), 
      description: "함께한 분들",
      color: "from-blue-400 to-cyan-400"
    },
    { 
      value: "92%", 
      label: t('stats.accuracy'), 
      description: "정확도",
      color: "from-purple-400 to-pink-400"
    },
    { 
      value: "16", 
      label: t('stats.types'), 
      description: "유형",
      color: "from-amber-400 to-orange-400"
    },
    { 
      value: "4.9/5", 
      label: t('stats.rating'), 
      description: "평점",
      color: "from-emerald-400 to-teal-400"
    },
  ];

  return (
    <section className="w-full py-16 bg-neutral-950 border-y border-white/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 border border-white/10 overflow-hidden">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Label */}
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                    {stat.label}
                  </div>
                  
                  {/* Value */}
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  
                  {/* Description */}
                  <div className="text-gray-400 text-sm">
                    {stat.description}
                  </div>
                </div>

                {/* Bottom Corner Accent */}
                <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${stat.color} opacity-10 rounded-tl-full`} />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Message */}
        <p className="text-center text-gray-500 mt-8 text-sm">
          *&quot;이미 많은 사람들이 자신의 성격을 이해했습니다&quot;*
        </p>
      </div>
    </section>
  );
}
