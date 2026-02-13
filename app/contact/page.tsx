import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center gap-6 px-4 text-center pt-25 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter mb-4">
            문의하기
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl mx-auto">
            Simple MBTI에 대해 궁금한 점이 있으신가요?
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-white mb-2">이메일 문의</h3>
              <p className="text-gray-300 mb-4">일반 문의 및 기술 지원</p>
              <div className="text-cyan-400 font-medium">support@simplembti.com</div>
              <div className="text-sm text-gray-400 mt-2">평일 24시간 응답</div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">기능 제안</h3>
              <p className="text-gray-300 mb-4">새로운 기능이나 개선 아이디어</p>
              <div className="text-cyan-400 font-medium">ideas@simplembti.com</div>
              <div className="text-sm text-gray-400 mt-2">영업일 기준 2-3일 내 응답</div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="text-4xl mb-4">🐛</div>
              <h3 className="text-xl font-bold text-white mb-2">버그 신고</h3>
              <p className="text-gray-300 mb-4">서비스 오류나 문제점 보고</p>
              <div className="text-cyan-400 font-medium">bugs@simplembti.com</div>
              <div className="text-sm text-gray-400 mt-2">긴급한 경우 우선 처리</div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
            자주 묻는 질문
          </h2>

          <div className="space-y-6 text-left">
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-bold text-white mb-3">Q. MBTI 검사는 얼마나 정확한가요?</h3>
              <p className="text-gray-300 leading-relaxed">
                MBTI 검사는 통계적 확률에 기반한 성격 유형 분석 도구입니다. 절대적인 진단 도구가 아니며,
                상황에 따라 행동이 달라질 수 있습니다. 참고용으로 활용해 주세요.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-bold text-white mb-3">Q. 검사 결과를 저장할 수 있나요?</h3>
              <p className="text-gray-300 leading-relaxed">
                현재는 검사 결과를 임시로 확인할 수 있으며, 회원 가입 시 결과를 저장할 수 있는 기능을 제공합니다.
                추후 업데이트에서 더 많은 기능이 추가될 예정입니다.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-bold text-white mb-3">Q. MBTI 유형이 바뀔 수 있나요?</h3>
              <p className="text-gray-300 leading-relaxed">
                네, MBTI 유형은 성장과 환경 변화에 따라 바뀔 수 있습니다. 정기적으로 검사를 통해
                자신의 변화를 확인하는 것을 추천합니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">Q. 전문적인 상담을 받고 싶어요.</h3>
              <p className="text-gray-300 leading-relaxed">
                저희 서비스는 참고용 도구입니다. 전문적인 심리 상담이 필요한 경우
                관련 자격을 갖춘 전문가에게 상담을 받으시기를 추천합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Placeholder */}
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
            문의 양식
          </h2>

           <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
             <div className="flex items-center space-x-2 mb-2">
               <span className="text-green-400">💌</span>
               <span className="text-green-300 font-medium">이메일 문의</span>
             </div>
             <p className="text-green-200 text-sm">
               아래 이메일 주소로 문의사항을 보내주시면 24시간 이내에 답변드리겠습니다.
             </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-semibold text-white mb-2">빠른 연락처</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>📧 support@simplembti.com</p>
                <p>🕒 평일 09:00 - 18:00 (KST)</p>
                <p>📱 응답 시간: 24시간 이내</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">응답 우선순위</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>🔴 긴급 버그 신고</p>
                <p>🟡 일반 문의</p>
                <p>🟢 기능 제안</p>
              </div>
            </div>
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