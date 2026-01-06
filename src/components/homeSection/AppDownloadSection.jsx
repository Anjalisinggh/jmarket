export default function AppDownloadSection() {
  return (
    <div className="px-40 pt-5 pb-5 bg-white ">
      <div className="grid grid-cols-2 gap-10">
        {/* Left Card - Spread and Cost Information */}
        <div className="bg-[#F8F9FA] rounded-2xl p-10 pb-0">
          <h3 className="text-[30px] font-bold leading-relaxed mb-6 text-[#4C4C4C]">
            <span className="relative inline-block">
              <span className="z-50 relative">
              スプレッド
              </span>
              <img src="/icons/l1.svg" alt="whychoose1" className="absolute bottom-[4px] left-0 w-full h-[15px] z-0 opacity-90" />
               
            </span>が読みやすい。<br />
            <span className="relative inline-block">
              <span className="z-50 relative">
              コスト
              </span>
              <img src="/icons/l2.svg" alt="whychoose1" className="absolute bottom-[6px] left-0 w-full h-[15px] z-0 opacity-90" />
            </span>を抑えて入りやすい。
          </h3>
          <p className="text-[17px] leading-7 mb-5 text-[#4C4C4C] font-inter font-[400]">
            相場が急に動く場面でも「いくらかかるか」が読みやすく、同じルールで取引を続けたい人に向いています。
          </p>

          <div className="mb-8 flex flex-col items-start ml-10 ">
            {/* Container for the 0.0 pips text and the highlighter background */}
            <div className="relative inline-block mb-1 -mt-4">
             
                <img src="/icons/00pip.svg" alt="whychoose1"  className="w-full h-full" />
                

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
                <span className="z-50 relative">  
                移動中もラクラク。
                </span>
                <img src="/icons/lineee.svg" alt="whychoose1" className="absolute bottom-[1px] left-0 w-full h-[15px] z-0 opacity-90" />
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
              className="w-full max-w-[400px] h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}