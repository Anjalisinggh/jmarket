import React from 'react';

export default function AccountOpening() {
    const steps = [
        {
            step: 1,
            title: "まずは基本情報を入力して、\nアカウントを作成します。",
            image: "/icons/step1.svg",
        },
        {
            step: 2,
            title: "安全にお取引いただくために、\n本人確認（KYC）の手続きを行います。",
            image: "/icons/step2.svg",
        },
        {
            step: 3,
            title: "入金が完了したら、取引ツール\n（MT4/MT5）で取引を開始できます。",
            image: "/icons/step3.svg",
            hasBadge: true,
        }
    ];

    return (
        <div className="bg-white font-sans py-16 px-4 pt-5">
            <div className="max-w-6xl mx-auto text-center">

                {/* Header Section */}
                <div className="mb-20"> {/* Increased margin to give space for the overlapping badges */}
                    <div className="relative inline-block mb-4">
                        <h2 className="text-4xl font-bold text-[#4C4C4C] relative z-10">口座開設の流れ</h2>
                        <svg
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[110%] h-[30px] z-0 opacity-80"
                            viewBox="0 0 218 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
                        </svg>
                    </div>
                    <p className="text-gray-600 mt-2 text-[17px]">最短数時間で解説完了・取引可能</p>
                </div>

              {/* Steps Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-30">
    {steps.map((item) => (
        /* Removed overflow-hidden so the badge can sit outside */
        <div key={item.step} className="bg-[#F8F9FA] rounded-xl p-6 pt-10 flex flex-col relative">

            {/* Step Badge - Positioned Absolute, Left Top, Overlapping */}
            <div className="absolute -top-5 left-6 bg-[#FFA500] text-white font-black px-6 py-2 rounded-full text-[12px] z-30 flex items-center gap-1.5 shadow-md">
                <span className="text-[14px] font-black">STEP</span>
                <span className="text-lg font-black">{item.step}</span>
            </div>

            {/* Title */}
            <p className="text-[#4C4C4C] font-bold text-[16px] leading-relaxed mb-4 text-left mt-5 w-full whitespace-pre-wrap">
                {item.title}
            </p>

            {/* Step 3 Campaign Badge */}
            {item.hasBadge && (
               <div className="absolute -top-14 right-0 z-30">
               <div className="relative">
                   {/* Main Bubble */}
                   <div className="border-[2px] border-[#FFA500] text-[#FFA500] text-[16px] font-bold py-4 px-8 rounded-[50px] md:rounded-[100px] bg-white leading-tight text-left whitespace-nowrap">
                       お得なお年玉<br />
                       キャンペーン実施中！
                   </div>
                   
                   {/* Speech Bubble Triangle - Adjusted placement and size to match image */}
                   <div 
                       className="absolute -bottom-[9px] left-10 w-5 h-5 bg-white border-r-[2px] border-b-[2px] border-[#FFA500] rotate-[45deg] z-10"
                       style={{ borderRadius: '0 0 4px 0' }} // Slight rounding on the tip for a hand-drawn feel
                   ></div>
               </div>
           </div>
            )}

            {/* Illustration */}
            <div className="mt-auto w-full relative flex justify-center items-end overflow-hidden rounded-b-xl">
                <img
                    src={item.image}
                    alt={`Step ${item.step}`}
                    className="w-full h-auto object-contain object-bottom"
                    style={{ 
                        maxHeight: '380px', 
                        marginBottom: '-1px' 
                    }}
                />
            </div>
        </div>
    ))}
</div>

                {/* Bottom CTA Section */}
                <div className="flex flex-col items-center">
                    <p className="text-bold font-bold text-[#4C4C4C] text-[18px]  mb-6">
                        新規口座開設＋条件達成で<span className="text-[#00D084] font-bold text-[24px]"> 5,000円</span>プレゼント
                    </p>

                    <button className="w-full bg-[#FFA500] hover:bg-[#e69500] transition-colors text-white text-[18px] font-bold py-4 px-8 rounded-full shadow-md">
    無料新規口座開設はこちら
</button>
                </div>

            </div>
        </div>
    );
}