import React from 'react';

export default function Support() {
  const supportMethods = [
    {
      type: "TEL",
      label: "ヘルプセンター",
      icon: (
        <img src="/icons/tel.svg" alt="tel" className="w-38 h-38 mx-auto" />
      ),
      value: "0120 961 522",
      button: null,
    },
    {
      type: "MAIL",
      label: "メールで問い合わせ",
      icon: (
        <img src="/icons/mail.svg" alt="mail" className="w-38 h-38 mx-auto" />
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
    <div className="bg-[#F8F9FA] px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 pt-10 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-28 font-sans text-[#4C4C4C]">
      <div className="">

        {/* Main Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 -mt-6 sm:-mt-8 md:-mt-10">
            <img src="/icons/support.svg" alt="support" className="max-w-[700px] w-full h-auto" />
          </div>
          <div className="max-w-4xl mx-auto text-left md:text-left space-y-4 sm:space-y-5 md:space-y-6 text-[14px] sm:text-[15px] md:text-[16px] font-inter font-[500] leading-relaxed text-[#696969] px-2 sm:px-0">
            <p>
              口座の登録・本人確認・入出金・取引ツール（MT4/MT5）の設定など、つまづきやすいポイントは人によって違います。<br className="" /><br className="" />
              JMarketsでは「まず自分で確認したい」「すぐに質問したい」「パートナー相談をしたい」など、状況に合わせて問い合わせ方法を選べるようにしています。
            </p>
            <p>
              また、資金の入出金に関しては、入金は決済側の確認後に口座へ反映され、出金依頼は通常数分以内の処理を目指す旨が明記されています（※処理時間は決済事業者側で変動する場合があります）。
            </p>
            <p>サポート受付：24/7（年中無休）</p>
          </div>
        </div>

        {/* Support Methods Grid */}
        <div className="grid grid-cols-3 gap-1 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10">
          <div className="bg-[#F5F5F5] rounded-sm px-1 sm:px-5 py-2 sm:py-4 md:py-5 flex flex-col items-center text-center">
            <div className="relative md:mb-1 sm:mb-2 inline-block">
              <span className="text-[15px] sm:text-[32px] md:text-[35px] font-[700] tracking-[1px] text-[#000000] relative z-10">
                TEL
              </span>
              <svg
                className="absolute -mt-1 sm:-mt-4.5 md:-mt-5 left-0 w-full h-[3px] sm:h-[9px] md:h-[10px] z-0 opacity-90"
                viewBox="0 0 218 16"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
              </svg>
            </div>
            <p className="text-[10px] sm:text-[14px] md:text-[15px] font-inter font-[500] text-[#000] mb-1 sm:mb-2 md:mb-3 hidden sm:block">ヘルプセンター</p>

            <div className="mb-1 sm:mb-2 md:mb-3">
              <img src="/icons/tel.svg" alt="" className='w-16 h-16 sm:w-32 sm:h-32 md:w-38 md:h-38' />
            </div>

            <span className="text-[13px] sm:text-[24px] md:text-[28px] font-inter font-[500] text-[#333] leading-tight">0120 961 522</span>

          </div>

          <div className="bg-[#F5F5F5] rounded-sm px-1 sm:px-5 py-2 sm:py-4 md:py-5 flex flex-col items-center text-center">
            <div className="relative sm:mb-2 inline-block">
              <span className="text-[15px] sm:text-[32px] md:text-[35px] font-[700] tracking-[1px] text-[#000000] relative z-10">
                MAIL
              </span>
              <svg
                className="absolute -mt-1 sm:-mt-4.5 md:-mt-5 left-0 w-full h-[3px] sm:h-[9px] md:h-[10px] z-0 opacity-90"
                viewBox="0 0 218 16"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
              </svg>
            </div>
            <p className="text-[10px] sm:text-[14px] md:text-[15px] font-inter font-[500] text-[#000] mb-1 sm:mb-2 md:mb-3 hidden sm:block">メールで問い合わせ</p>

            <div className="mb-1 sm:mb-3 md:mb-4">
              <img src="/icons/mail.svg" alt="" className='w-16 h-16 sm:w-32 sm:h-32 md:w-38 md:h-38' />
            </div>

            <button className={`bg-[#FFA500] hover:bg-[#e69500] px-2 md:px-0 text-white sm:w-4/5 md:w-4/5 py-1 sm:py-3 md:py-3.5 rounded-sm md:rounded-md font-bold text-[10px] sm:text-[15px] md:text-[16px] flex items-center justify-center gap-1 sm:gap-2 transition-colors`}>
              メールを送る
              <img src="/icons/white-arrow-right.svg" alt="" className='h-1.5 sm:h-2 hidden md:block' />
            </button>

          </div>

          <div className="bg-[#F5F5F5] rounded-sm px-1 sm:px-5 py-2 sm:py-4 md:py-5 flex flex-col items-center text-center">
            <div className="relative sm:mb-2 inline-block">
              <span className="text-[15px] sm:text-[32px] md:text-[35px] font-[700] tracking-[1px] text-[#000000] relative z-10">
                LINE
              </span>
              <svg
                className="absolute -mt-1 sm:-mt-4.5 md:-mt-5 left-0 w-full h-[3px] sm:h-[9px] md:h-[10px] z-0 opacity-90"
                viewBox="0 0 218 16"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
              </svg>
            </div>
            <p className="text-[10px] sm:text-[14px] md:text-[15px] font-inter font-[500] text-[#000] mb-1 sm:mb-2 md:mb-3 hidden sm:block">チャットで問い合わせ</p>

            <div className="mb-1 sm:mb-3 md:mb-4 md:mt-5">
              <img src="/icons/line.svg" alt="" className='w-12 h-12 sm:w-26 sm:h-26 md:w-28 md:h-28' />
            </div>

            <button className={`bg-[#06C755] hover:bg-[#05b34c] text-white px-4 md:px-0 sm:w-4/5 md:w-4/5 py-1 sm:py-3 md:py-3.5 rounded-sm md:rounded-md font-bold text-[10px] sm:text-[15px] md:text-[16px] flex items-center justify-center gap-1 sm:gap-2 transition-colors md:mt-5`}>
              <span className="sm:hidden">友達追加</span>
              <span className="hidden sm:inline">ラインを追加する</span>
              <img src="/icons/white-arrow-right.svg" alt="" className='h-1.5 sm:h-2' />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
