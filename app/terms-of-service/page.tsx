"use client";

import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center gap-6 px-4 text-center pt-25 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter mb-4">
            이용약관
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
            Simple MBTI 서비스 이용에 대한 약관입니다
          </p>
        </div>

        {/* Content */}
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10 text-left">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제1조 (목적)</h2>
              <p className="text-gray-300 leading-relaxed">
                 본 약관은 Simple MBTI(이하 &quot;서비스&quot;)가 제공하는 모든 서비스의 이용 조건 및 절차,
                이용자와 서비스 제공자의 권리, 의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제2조 (용어의 정의)</h2>
              <ul className="text-gray-300 space-y-2 ml-4">
                 <li>• &quot;서비스&quot;란 Simple MBTI가 제공하는 모든 온라인 서비스를 의미합니다.</li>
                 <li>• &quot;이용자&quot;란 서비스에 접속하여 본 약관에 따라 서비스를 이용하는 모든 사용자를 의미합니다.</li>
                 <li>• &quot;MBTI 검사&quot;란 서비스에서 제공하는 성격 유형 검사를 의미합니다.</li>
                 <li>• &quot;결과&quot;란 MBTI 검사 후 제공되는 성격 유형 분석 결과를 의미합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제3조 (약관의 효력 및 변경)</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• 서비스는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.</li>
                <li>• 약관 변경 시 최소 7일 전부터 서비스 내 공지사항을 통해 고지합니다.</li>
                <li>• 이용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제4조 (서비스의 제공)</h2>
              <p className="text-gray-300 leading-relaxed mb-3">서비스는 다음과 같은 서비스를 제공합니다.</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• MBTI 성격 유형 검사</li>
                <li>• 검사 결과 분석 및 해석</li>
                <li>• 유형별 특징 및 설명</li>
                <li>• 궁합 분석</li>
                <li>• 교육 및 정보 콘텐츠</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제5조 (서비스 이용의 제한)</h2>
              <p className="text-gray-300 leading-relaxed mb-3">다음 각 호에 해당하는 경우 서비스 이용이 제한될 수 있습니다.</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• 타인의 권리를 침해하거나 불법 행위를 하는 경우</li>
                <li>• 서비스의 정상적인 운영을 방해하는 경우</li>
                <li>• 허위 정보 기재 또는 타인 정보 도용</li>
                <li>• 본 약관을 위반하는 경우</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제6조 (결과의 해석 및 한계)</h2>
              <p className="text-gray-300 leading-relaxed mb-3">MBTI 검사 결과는 참고용이며 다음과 같은 한계를 가집니다.</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• 절대적인 진단 도구가 아닙니다.</li>
                <li>• 상황에 따라 행동이 달라질 수 있습니다.</li>
                <li>• 전문적인 심리 상담을 대체하지 않습니다.</li>
                <li>• 결과는 통계적 확률에 기반합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제7조 (면책 조항)</h2>
              <p className="text-gray-300 leading-relaxed mb-3">서비스는 다음과 같은 사항에 대해 책임을 지지 않습니다.</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• 검사 결과를 근거로 한 이용자의 결정 및 행동</li>
                <li>• 서비스 이용으로 인한 정신적·물질적 손해</li>
                <li>• 천재지변, 시스템 장애 등 불가항력적 사유</li>
                <li>• 제3자의 불법 행위로 인한 손해</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제8조 (지적 재산권)</h2>
              <p className="text-gray-300 leading-relaxed">
                서비스의 모든 콘텐츠, 디자인, 소프트웨어 등에 대한 지적 재산권은 서비스에 귀속됩니다.
                이용자는 서비스의 사전 서면 동의 없이 이를 복제, 배포, 전송할 수 없습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제9조 (분쟁 해결)</h2>
              <p className="text-gray-300 leading-relaxed">
                본 약관과 관련된 분쟁은 대한민국 법률을 적용하며,
                관할 법원은 서비스 제공자의 본점 소재지를 관할하는 법원으로 합니다.
              </p>
            </section>


          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/">
            <button className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-gray-700 transition-all duration-300 transform hover:scale-105">
              홈으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}