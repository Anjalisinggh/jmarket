import React from 'react';

export default function MarketInfo() {
  const marketData = [
    {
      id: 1,
      title: "経済カレンダー",
      description: "雇用統計や政策金利など、相場が動きやすいイベントを事前にチェック。「いつ・何があるか」が見えるだけで、エントリーやポジション管理の迷いが減ります。",
      image: "/icons/calender.svg", // Replace with your actual path
    },
    {
      id: 2,
      title: "マーケットニュース",
      description: "相場が動いた背景を、ニュースで素早く把握。「なぜ動いたのか」を理解できると、次の判断がブレにくくなります。",
      image: "/icons/stock.svg", 
    },
    {
      id: 3,
      title: "相場分析・ヒント",
      description: "チャートの見方、注目されやすい水準、相場の流れの捉え方などを整理。考え方の軸を作って、感覚任せの取引を減らすためのコンテンツです。",
      image: "/icons/search.svg",
    },
    {
      id: 4,
      title: "用語・はじめての方向け",
      description: "pips、スプレッド、証拠金、ロスカット...つまずきやすい言葉をその場で解決。わからないまま進めず、理解しながら取引を始めたい人におすすめです。",
      image: "/icons/book.svg",
    },
  ];

  return (
    <div className="bg-[#F8F9FA] px-4 md:px-20 py-24 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-2">
            {/* Orange Badge */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#FFA500] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center justify-center after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#FFA500]">
              ちょこっと
            </div>
            
            {/* Title with Brush Stroke Underline */}
            <div className="relative">
              <h2 className="text-[32px] md:text-[42px] font-bold text-[#4C4C4C] relative z-10">
                知っておくと得するマーケット情報
              </h2>
              <svg
                className="absolute bottom-0 left-0 w-full h-[12px] z-0 opacity-80 -mt-10 md:-mt-7"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-50 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex justify-between items-center mb-1 ">
                  {/* Icon */}
                  <div className="w-24 h-24">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Button */}
                  <button className="border border-gray-200 rounded-md px-4 py-2 text-[14px] text-[#888] hover:bg-gray-50 transition-colors flex items-center gap-3">
                    詳しく見る
                    <span className="text-[10px] text-gray-400">{'>'}</span>
                  </button>
                </div>

                {/* Text Content */}
                <h3 className="text-[20px] font-bold text-[#4C4C4C] mb-1">
                  {item.title}
                </h3>
                <p className="text-[#4C4C4C] text-[12px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}