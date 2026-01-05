export default function AppDownloadSection() {
  return (
    <div className="px-40 pt-5 pb-5 bg-white ">
      <div className="grid grid-cols-2 gap-10">
        {/* Left Card - Spread and Cost Information */}
        <div className="bg-[#F8F9FA] rounded-2xl p-10 pb-0">
          <h3 className="text-[30px] font-bold leading-relaxed mb-6 text-[#4C4C4C]">
            <span className="relative inline-block">
              スプレッド
              <svg
                className="absolute -bottom-2 left-0 w-full h-[15px] z-0 opacity-90"
                viewBox="0 0 218 16"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
              </svg>
            </span>が読みやすい。<br />
            <span className="relative inline-block">
              コスト
              <svg
                className="absolute -bottom-2 left-0 w-full h-[15px] z-0 opacity-90"
                viewBox="0 0 218 16"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
              </svg>
            </span>を抑えて入りやすい。
          </h3>
          <p className="text-[17px] leading-7 mb-5 text-[#4C4C4C] font-inter font-[400]">
            相場が急に動く場面でも「いくらかかるか」が読みやすく、同じルールで取引を続けたい人に向いています。
          </p>

          <div className="mb-8 flex flex-col items-start ml-10 ">
            {/* Container for the 0.0 pips text and the highlighter background */}
            <div className="relative inline-block mb-2">
              {/* The Text Layer */}
              <h3 className="relative z-10 text-[58px] font-bold text-[#4C4C4C] leading-none tracking-tight -mb-3">
                0<span className="text-[32px]">.0</span> <span className="text-[32px]">pips</span> <span className="text-[42px]">~</span>
              </h3>

              {/* The Green Brushstroke Underline (hand-drawn style) */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-[15px] z-0 opacity-90"
                viewBox="0 0 218 16"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
              </svg>
            </div>

            {/* Subtext */}
            <p className="text-[14px] text-[#4C4C4C]  mt-1 font-inter font-[400] whitespace-nowrap">
              最速の約定と業界最小クラスのスプレッド
            </p>
          </div>
          <div className="w-full flex justify-center mt-6">

            <img
              src="/images/feature3.png"
              alt="feature"
              className="w-[700px] h-[250px] object-cover"
            />
          </div>


        </div>

        {/* Right Card - Mobile App Information */}
        <div className="bg-[#F8F9FA] rounded-2xl p-10 relative overflow-visible">
          <div>
            <h3 className="text-[30px] font-bold leading-relaxed mb-6 text-[#4C4C4C]">
              Meta Traderモバイルアプリで<br />
              <span className="relative inline-block">
                移動中もラクラク。
                <svg
                  className="absolute -bottom-2 left-0 w-full h-[15px] z-0 opacity-90"
                  viewBox="0 0 218 16"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
                </svg>
              </span>
            </h3>
            <p className="text-[20px] leading-7 mb-8 text-[#4C4C4C] font-inter font-[400]">
              Android または iOS デバイスでMT5 プラットフォームにアクセス。移動中でも取引を継続し、市場の動きを逃さずにキャッチ。
            </p>

            <div className="flex flex-col gap-4 max-w-[180px]">
              <a href="#"><img src="/icons/apple-btn.svg" alt="Download on App Store" className="w-full h-auto" /></a>
              <a href="#"><img src="/icons/android-btn.svg" alt="Get it on Google Play" className="w-full h-auto" /></a>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 flex justify-end items-end">
            <img
              src="/images/invest.png"
              alt="MetaTrader Mobile"
              className="w-full max-w-[421px] h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}