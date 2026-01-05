import React from 'react';

export default function FNQSection() {
  const faqData = [
    {
      id: 1,
      circledNumber: "①",
      question: "CFD・FXって、\nなにができるの？",
      description: "FX（為替）や指数・商品などの値動き（差額)）で取 \n引できるのがCFD。現物を持たずに、値上がり・値 \n 下がりの動きに合わせて取引できます。",
      image: "/icons/fnq1.svg",
    },
    {
      id: 2,
      circledNumber: "②",
      question: "スプレッドってなに？\n＝実質コスト",
      description: "取引のコストは「買値と売値の差」＝スプレッド。\npips（ピップス）は、その差や値動きを表す単位で、\n小さいほどコストが読みやすいです。",
      image: "/icons/fnq2.svg",
    },
    {
      id: 3,
      circledNumber: "③",
      question: "レバレッジとは？\n＝便利だけど、リスクあり",
      description: "少ない証拠金で取引できる一方、損益の振れ幅も大  \n きくなります。まずは取引量を抑える・損切りを決め\n る・余裕資金でが基本です。",
      image: "/icons/fnq3.svg",
    },
    {
      id: 4,
      circledNumber: "④",
      question: "迷ったら\nデモと動画を見よう！",
      description: "最初はデモで操作→慣れたら口座開設→入金→取引開\n 始。MT4/MT5で、チャート確認から注文までシンプ \n ルに進められます。",
      image: "/icons/fnq4.svg",
    },
  ];

  return (

    <div className="bg-[#F8F9FA] px-4 md:px-40 py-20 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            <h2 className="text-[45px] font-bold text-[#4C4C4C] relative z-10">
              <span className="text-[#000000]">JMarkets</span><span> が提供する </span> <span className="text-[#FFA500]">CFD・FX</span> 取引とは？
            </h2>
            <svg
              className="absolute -mt-6 left-0 w-full h-[15px] z-0 opacity-90"
              viewBox="0 0 218 16"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
            </svg>
          </div>
          <p className="text-[#000000] mt-2 text-[16px]">質問コーナー</p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {faqData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-8 pt-10 relative shadow-sm">


             {/* Badge with circled number */}
<div className="absolute -top-4 left-8 bg-[#FFA500] text-white px-5 py-1.5 font-bold rounded flex items-center justify-center gap-2">
  <span className="text-[16px]">質問</span>
  <span className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold">
    {item.id}
  </span>
</div>
              {/* Content */}
              <div className="flex flex-col h-full">
                <h3 className="text-[34px] font-bold text-[#4C4C4C] leading-tight mb-5 whitespace-pre-wrap">
                  {item.question}
                </h3>

                <p className="text-[#666] text-[16px] leading-relaxed mb-8 flex-grow whitespace-pre-wrap">
                  {item.description}
                </p>

                <div className="flex justify-between items-end">
                  <button className="border border-gray-200 rounded-sm px-4 py-2 text-[12px] text-[#888] hover:bg-gray-50 transition-colors flex items-center gap-2">
                    詳しく見る
                    <span className="text-[#888]">{'>'}</span>
                  </button>

                  <div className="w-[45%] flex justify-end">
                    <img
                      src={item.image}
                      alt=""
                      className="max-h-[180px] w-auto object-contain"
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