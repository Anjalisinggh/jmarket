import React from 'react';

export default function MarketInfo() {
  const marketData = [
    {
      id: 1,
      title: "経済カレンダー",
      description: <p>雇用統計や政策金利など、相場が動きやすいイベントを事前にチェック。 <br />「いつ・何があるか」が見えるだけで、エントリーやポジション管理の迷いが減ります。</p>,
      image: "/icons/calender.svg",
    },
    {
      id: 2,
      title: "マーケットニュース",
      description: <p>相場が動いた背景を、ニュースで素早く把握。 <br />「なぜ動いたのか」を理解できると、次の判断がブレにくくなります。</p>,
      image: "/icons/stock.svg",
    },
    {
      id: 3,
      title: "相場分析・ヒント",
      description: <p>チャートの見方、注目されやすい水準、相場の流れの捉え方などを整理。<br />考え方の軸を作って、感覚任せの取引を減らすためのコンテンツです。</p>,
      image: "/icons/search.svg",
    },
    {
      id: 4,
      title: "用語・はじめての方向け",
      description: <p>pips、スプレッド、証拠金、ロスカット…つまずきやすい言葉をその場で解決。<br />わからないまま進めず、理解しながら取引を始めたい人におすすめです。</p>,
      image: "/icons/book.svg",
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 py-20 sm:py-16 md:py-24 font-sans">
      <div className="">

        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="relative inline-block mb-2">
            <div className='absolute -top-13 sm:-top-10 md:-top-12 left-[50%] sm:left-[38%] md:left-[40%] -translate-x-1/2'>
              <img src="/icons/cloud.svg" alt="" className='h-12 sm:h-10 md:h-12' />
              <p className='text-[16px] sm:text-[14px] md:text-[16px] font-inter font-[600] text-white relative z-10 -top-9 sm:-top-8 md:-top-9.5 text-center'>ちょこっと</p>
            </div>

            {/* Title with Brush Stroke Underline */}
            <div className="relative">
              <h2 className="text-[19px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#4C4C4C] relative z-10">
                知っておくと得するマーケット情報
              </h2>
              <svg
                className="absolute bottom-1 sm:bottom-2 md:bottom-3 left-0 w-full h-[8px] sm:h-[10px] md:h-[12px] z-0 opacity-80 -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-7"
                viewBox="0 0 218 16"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 hidden md:grid">
          {marketData.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white ${index < marketData.length - 1 ? 'border-b border-gray-200 md:border-b-0' : ''} ${index === 0 ? 'md:border-r border-gray-200' : ''} ${index === 1 ? 'md:border-b border-gray-200' : ''} ${index === 2 ? 'md:border-r border-gray-200' : ''} rounded-none md:rounded-xl pb-6 sm:pb-8 md:pb-12 shadow-none md:shadow-sm md:border md:border-gray-50 flex flex-col justify-between hover:shadow-md transition-shadow`}
            >
              <div className=''>
                <div className="flex justify-between items-start px-4 sm:px-5 md:px-6 pt-4 sm:pt-5 md:pt-6">
                  {/* Icon */}
                  <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Button */}
                  <div className='flex-shrink-0'>
                    <button className={`border border-[#E5E5E5] text-[#909090] font-inter font-[900] rounded-sm px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-[11px] sm:text-[12px] md:text-[13px] flex items-center gap-2 sm:gap-2.5 md:gap-3`}>
                      詳しく見る
                      <img src="/icons/right-arrow.svg" alt="" className='h-1.5 sm:h-1.5 md:h-2' />
                    </button>
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold font-inter text-[#4C4C4C] mb-1 sm:mb-1.5 px-4 sm:px-6 md:px-8">
                  {item.title}
                </h3>
                <p className="text-[#4C4C4C] text-[11px] sm:text-[11.5px] md:text-[12px] font-inter font-[500] leading-relaxed pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 md:hidden block">
          {marketData.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white border border-gray-200 rounded-xl py-4 shadow-none md:shadow-sm md:border md:border-gray-50 flex flex-col justify-between hover:shadow-md transition-shadow`}
            >
              <div className='flex items-start gap-2'>
                <img src={item.image} alt="" className='h-[80px] mt-4' />
                <div>
                  {/* Text Content */}
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold font-inter text-[#4C4C4C] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#4C4C4C] text-[11px] sm:text-[11.5px] md:text-[12px] font-inter font-[500] leading-relaxed">
                    {item.description}
                  </p>
                  <div className='flex-shrink-0 w-full flex justify-center mt-3'>
                    <button className={`border border-[#E5E5E5] text-[#909090] font-inter font-[900] rounded-sm px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-[11px] sm:text-[12px] md:text-[13px] flex items-center gap-2 sm:gap-2.5 md:gap-3`}>
                      詳しく見る
                      <img src="/icons/right-arrow.svg" alt="" className='h-1.5 sm:h-1.5 md:h-2' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}