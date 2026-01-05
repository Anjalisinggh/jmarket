import React from 'react';

export default function Support() {
  const supportMethods = [
    {
      type: "TEL",
      label: "ヘルプセンター",
      icon: (
        <img src="/icons/tel.svg" alt="tel" className="w-28  h-28 mx-auto" />
      ),
      value: "0120 961 522",
      button: null,
    },
    {
      type: "MAIL",
      label: "メールで問い合わせ",
      icon: (
        <img src="/icons/mail.svg" alt="mail" className="w-28  h-28 mx-auto" />
      ),
      value: null,
      button: {
        text: "メールを送る",
        color: "bg-[#FFA500]",
        hover: "hover:bg-[#e69500]"
      },
    },
    {
      type: "LINE",
      label: "チャットで問い合わせ",
      icon: (
        <img src="/icons/line.svg" alt="line" className="w-28  h-28 mx-auto" />
      ),
      value: null,
      button: {
        text: "ラインを追加する",
        color: "bg-[#06C755]",
        hover: "hover:bg-[#05b34c]"
      },
    }
  ];

  return (
    <div className="bg-white px-4 md:px-20 py-24 font-sans text-[#4C4C4C]">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Header */}
        <div className="text-center mb-12">
        <div className="flex justify-center mb-15 -mt-10">
  <img src="/icons/support.svg" alt="support" className="max-w-[700px] w-full h-auto" />
</div>
          <div className="max-w-4xl mx-auto text-left md:text-left space-y-6 text-[16px] leading-relaxed text-[#4C4C4C]">
            <p>
              口座の登録・本人確認・入出金・取引ツール（MT4/MT5）の設定など、つまづきやすいポイントは人によって違います。<br className="hidden md:block" />
              JMarketsでは「まず自分で確認したい」「すぐに質問したい」「パートナー相談をしたい」など、状況に合わせて問い合わせ方法を選べるようにしています。
            </p>
            <p>
              また、資金の入出金に関しては、入金は決済側の確認後に口座へ反映され、出金依頼は通常数分以内の処理を目指す旨が明記されています（※処理時間は決済事業者側で変動する場合があります）。
            </p>
            <p >サポート受付：24/7（年中無休）</p>
          </div>
        </div>

        {/* Support Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {supportMethods.map((method, idx) => (
            <div key={idx} className="bg-[#F8F9FA] rounded-sm p-5 flex flex-col items-center text-center">
              <div className="relative mb-2 inline-block">
                <span className="text-[40px] font-black tracking-widest  text-[#000000] relative z-10">
                  {method.type}
                </span>
                <svg
                  className="absolute  -mt-5 left-0 w-full h-[10px] z-0 opacity-90"
                  viewBox="0 0 218 16"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
                </svg>
              </div>
              <p className="text-[14px] mb-5 text-[#333]">{method.label}</p>
              
              <div className="flex-grow flex items-center mb-5">
                {method.icon}
              </div>

              {method.value ? (
                <span className="text-[26px] font-bold text-[#333]">{method.value}</span>
              ) : (
                <button className={`${method.button?.color} ${method.button?.hover} text-white w-4/5 py-3.5 rounded-md font-bold flex items-center justify-center  gap-2 transition-colors`}>
                  {method.button?.text}
                  <span className="text-xs">{'>'}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
