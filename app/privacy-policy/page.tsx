"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center gap-6 px-4 text-center pt-25 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter mb-4">
            개인정보처리방침
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
            Simple MBTI의 개인정보 처리에 대한 정책입니다
          </p>
        </div>

        {/* Content */}
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10 text-left">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제1조 (목적)</h2>
              <p className="text-gray-300 leading-relaxed">
                 Simple MBTI(이하 &quot;서비스&quot;)는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다.
                본 개인정보처리방침은 이용자의 개인정보가 어떠한 용도와 방식으로 이용되고 있으며,
                개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제2조 (수집하는 개인정보의 항목)</h2>
              <p className="text-gray-300 leading-relaxed mb-3">서비스는 회원가입, 서비스 이용 등을 위해 아래와 같은 개인정보를 수집합니다.</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• 이메일 주소</li>
                <li>• 닉네임</li>
                <li>• MBTI 검사 결과 (선택적 저장)</li>
                <li>• 서비스 이용 기록</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제3조 (개인정보의 수집 및 이용 목적)</h2>
              <p className="text-gray-300 leading-relaxed mb-3">수집된 개인정보는 다음의 목적을 위해 이용됩니다.</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• 회원 관리 및 서비스 제공</li>
                <li>• MBTI 검사 결과 저장 및 조회</li>
                <li>• 고객 문의 응대</li>
                <li>• 서비스 개선 및 분석</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제4조 (개인정보의 보유 및 이용 기간)</h2>
              <p className="text-gray-300 leading-relaxed">
                이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.
                단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보존합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제5조 (개인정보의 파기 절차 및 방법)</h2>
              <p className="text-gray-300 leading-relaxed mb-3">서비스는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제</li>
                <li>• 종이 문서에 기록된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제6조 (이용자의 권리와 그 행사 방법)</h2>
              <p className="text-gray-300 leading-relaxed mb-3">이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 삭제를 요청할 수 있습니다.</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• 개인정보 조회/수정: 설정 메뉴에서 프로필</li>
                <li>• 개인정보 삭제: 고객센터 문의</li>
                <li>• 동의 철회: 설정 메뉴에서 개인정보</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제7조 (개인정보의 안전성 확보 조치)</h2>
              <p className="text-gray-300 leading-relaxed mb-3">서비스는 이용자의 개인정보를 안전하게 관리하기 위해 다음과 같은 조치를 취하고 있습니다.</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• 암호화: 개인정보는 암호화하여 저장 및 전송</li>
                <li>• 접근 제한: 개인정보에 대한 접근 권한을 최소화</li>
                <li>• 보안 프로그램: 최신 보안 프로그램을 설치 및 운영</li>
                <li>• 정기 감사: 개인정보 취급 현황을 정기적으로 점검</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제8조 (개인정보처리방침의 변경)</h2>
              <p className="text-gray-300 leading-relaxed">
                본 개인정보처리방침은 법령 및 정책에 따라 변경될 수 있으며,
                변경 시에는 변경 사항을 최소 7일 전부터 서비스 내 공지사항을 통해 고지합니다.
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