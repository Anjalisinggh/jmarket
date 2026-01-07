'use client';
import { useStaggerCardReveal } from '@/utils/scrollAnimations';

export default function AppDownloadSection() {
  const cardsRef = useStaggerCardReveal(0.1);
  
  return (
    <div className="md:px-40 px-4 md:pt-5 pt-3 pb-5 bg-white ">
      <div ref={cardsRef} className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
        {/* Left Card - Spread and Cost Information */}
        <div className="bg-[#F8F9FA] rounded-2xl md:p-10 md:pb-0 p-4 pb-0 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
          <h3 className="md:text-[30px] text-[20px] font-bold leading-relaxed mb-6 text-[#4C4C4C]">
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
          <p className="md:text-[17px] text-[14px] md:leading-7 md:mb-5 text-[#4C4C4C] font-inter font-[400]">
            相場が急に動く場面でも「いくらかかるか」が読みやすく、同じルールで取引を続けたい人に向いています。
          </p>

          <div className="mb-8 flex flex-col items-start md:ml-10 ml-7">
            {/* Container for the 0.0 pips text and the highlighter background */}
            <div className="relative inline-block md:mb-1 md:-mt-4">

              <img src="/icons/00pip.svg" alt="whychoose1" className="md:w-full md:h-full h-[60px]" />


            </div>

            {/* Subtext */}
            <p className="md:text-[14px] text-[12px] text-[#4C4C4C] mt-1 font-inter font-[400] whitespace-nowrap">
              最速の約定と業界最小クラスのスプレッド
            </p>
          </div>
          <div className="w-full flex justify-center mt-6">

            <img
              src="/images/feature3.png"
              alt="feature"
              className="md:w-[700px] md:h-[250px] h-[180px] object-cover"
            />
          </div>


        </div>

        {/* Right Card - Mobile App Information */}
        <div className="bg-[#F8F9FA] rounded-2xl md:p-10 md:pb-0 p-4 relative overflow-visible h-[450px] md:h-auto transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
          <div>
            <h3 className="md:text-[30px] text-[22px] font-[500] leading-relaxed mb-6 text-[#4C4C4C]">
              Meta Traderモバイルアプリで<br />
              <span className="relative inline-block">
                <span className="z-50 relative">
                  移動中もラクラク。
                </span>
                <img src="/icons/lineee.svg" alt="whychoose1" className="absolute bottom-[1px] left-0 w-full h-[15px] z-0 opacity-90" />
              </span>
            </h3>
            <p className="md:text-[20px] text-[15px] leading-5.2 md:leading-7 mb-8 text-[#4C4C4C] font-inter font-[400]">
              Android または iOS デバイスでMT5 プラットフォームにアクセス。移動中でも取引を継続し、市場の動きを逃さずにキャッチ。
            </p>

            <div className="flex flex-col md:gap-4 gap-2 md:max-w-[180px]">
              <a href="#"><img src="/icons/apple-btn.svg" alt="Download on App Store" className="md:w-full h-[35px] md:h-auto" /></a>
              <a href="#"><img src="/icons/android-btn.svg" alt="Get it on Google Play" className="md:w-full h-[36px] md:h-auto" /></a>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 flex justify-end items-end">
            <img
              src="/images/invest.png"
              alt="MetaTrader Mobile"
              className="md:w-full md:max-w-[400px] max-w-[330px] h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}