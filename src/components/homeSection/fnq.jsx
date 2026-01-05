import React from 'react';

export default function FAQSection() {
  const faqData = [
    {
      id: 1,
      question: "CFD・FXって、\nなにができるの？",
      description: "FX（為替）や指数・商品などの値動き（差額））で取引できるのがCFD。現物を持たずに、値上がり・値下がりの動きに合わせて取引できます。",
      image: "/icons/fnq1.svg", 
    },
    {
      id: 2,
      question: "スプレッドってなに？\n＝実質コスト",
      description: "取引のコストは「買値と売値の差」＝スプレッド。pips（ピップス）は、その差や値動きを表す単位で、小さいほどコストが読みやすいです。",
      image: "/icons/fnq2.svg", 
    },
    {
      id: 3,
      question: "レバレッジとは？\n＝便利だけど、リスクあり",
      description: "少ない証拠金で取引できる一方、損益の振れ幅も大きくなります。まずは取引量を抑える・損切りを決める・余裕資金でが基本です。",
      image: "/icons/fnq3.svg", 
    },
    {
      id: 4,
      question: "迷ったら\nデモと動画を見よう！",
      description: "最初はデモで操作→慣れたら口座開設→入金→取引開始。MT4/MT5で、チャート確認から注文までシンプルに進められます。",
      image: "/icons/fnq4.svg", 
    },
  ];

  return (
    /* Change 1: Section background is light gray, consistent with the image */
    <div className="bg-[#F8F9FA] px-4 md:px-40 py-20 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333] relative z-10">
              JMarkets が提供する <span className="text-[#FFA500]">CFD・FX</span> 取引とは？
            </h2>
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
          <p className="text-gray-500 mt-2 text-[16px]">質問コーナー</p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {faqData.map((item) => (
            /* Change 2: Card background is white with sharp/slight corners */
            <div key={item.id} className="bg-white rounded-sm p-8 pt-10 relative shadow-sm">
              
              {/* Change 3: Badge is a sharp rectangle in the image */}
              <div className="absolute -top-4 left-8 bg-[#FFA500] text-white px-5 py-1.5 font-bold flex items-center gap-2">
                <span className="text-sm">質問</span>
                <span className="border border-white rounded-full w-5 h-5 flex items-center justify-center text-[11px]">
                  {item.id}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col h-full">
                <h3 className="text-[22px] font-bold text-[#4C4C4C] leading-tight mb-5 whitespace-pre-wrap">
                  {item.question}
                </h3>
                
                <p className="text-[#666] text-[14px] leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                <div className="flex justify-between items-end">
                  <button className="border border-gray-200 rounded-sm px-4 py-2 text-[12px] text-[#888] hover:bg-gray-50 transition-colors flex items-center gap-2">
                    詳しく見る
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="w-[45%] flex justify-end">
                    <img 
                      src={item.image} 
                      alt="" 
                      className="max-h-[110px] w-auto object-contain"
                    />
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