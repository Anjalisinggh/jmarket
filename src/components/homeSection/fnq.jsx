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

    <div className="bg-[#F8F9FA] md:px-40 px-4 md:py-14 py-14 font-sans">
      <div className="">

        <div className='flex justify-center'>
          <img src="/images/jmphone.svg" alt="" className='h-[80px] md:hidden block'/>
          <img src="/images/jmdestop.svg" alt="" className='h-[50px] md:block hidden'/>
        </div>

        <p className='text-[#4C4C4C] md:text-[19px] text-[15px] mt-5 font-inter font-[400] text-center md:mb-24 mb-12'>質問コーナー</p>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-20 md:gap-6 gap-12">
          {faqData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg md:p-8 p-5 md:pt-10 pt-10 relative shadow-sm relative">


              {/* Badge with circled number */}
              <div className="absolute -top-4 left-8 bg-[#FFA500] text-white md:px-8 px-5 md:py-1.5 py-2 font-bold flex items-center justify-center gap-2">
                <span className="md:text-[16px] text-[13px]">質問</span>
                <span className="md:w-5.5 md:h-5.5 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center md:text-[13px] text-[10px] font-inter font-[800]">
                  {item.id}
                </span>
              </div>
              {/* Content */}
              <div className="flex flex-col h-full">
                <h3 className="md:text-[30px] text-[20px] font-bold text-[#4C4C4C] leading-tight mb-5 whitespace-pre-wrap">
                  {item.question}
                </h3>

                <p className="text-[#666] md:text-[16px] text-[13px] font-inter font-[500] leading-relaxed flex-grow whitespace-pre-wrap">
                  {item.description}
                </p>

                <div className='mb-10'>
                  <button className='border border-[#E5E5E5] text-[#909090] font-inter font-[900] mt-10 rounded-sm px-4 py-2.5 text-[13px] flex items-center gap-3'>
                    詳しく見る
                    <img src="/icons/right-arrow.svg" alt="" className='h-2' />
                  </button>
                </div>
              </div>

              <div className='absolute md:w-[150px] w-[130px] md:h-[150px] h-[130px] right-5 bottom-5'>
                <img src={item.image} alt="" className='w-full h-full object-contain' />
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}