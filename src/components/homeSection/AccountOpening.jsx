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
        <div className="bg-white px-40 pt-5 mb-20">
            <div className="">

                {/* Header Section */}
                <div className="mb-16 mt-10 text-center"> {/* Increased margin to give space for the overlapping badges */}
                    <div className="relative inline-block mb-4">
                        <span className="z-50 relative">
                            <h2 className="text-4xl font-[500] text-[#4C4C4C] relative z-5 font-inter">口座開設の流れ</h2>
                        </span>
                        <img src="/icons/acc.svg" alt="whychoose1" className="absolute left-0 w-full h-[15px] bottom-[-10px] opacity-90" />
                    </div>
                    <p className="text-[#4C4C4C] mt-4 text-[17px]">最短数時間で解説完了・取引可能</p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12 mt-24">
                    {steps.map((item) => (
                        /* Removed overflow-hidden so the badge can sit outside */
                        <div key={item.step} className="bg-[#F8F9FA] rounded-xl pt-10 pb-10 flex flex-col relative">

                            {/* Step Badge - Positioned Absolute, Left Top, Overlapping */}
                            <div className="absolute -top-5 left-6 bg-[#FFA500] text-white font-black px-3.5 tracking-[1px] py-1 rounded-full text-[12px] z-30 flex items-center font-inter gap-1.5 shadow-md">
                                <span className="text-[20px] font-black font-inter">STEP {item.step}</span>
                            </div>

                            {/* Title */}
                            <p className="text-[#4C4C4C] font-[600] text-[17px] leading-relaxed mb-4 text-left mt-5 w-full whitespace-pre-wrap font-inter px-6">
                                {item.title}
                            </p>

                            {/* Step 3 Campaign Badge */}
                            {item.hasBadge && (
                                <img src="/icons/stepcloud.svg" alt="whychoose1" className="absolute -top-14 -right-18 w-full h-[85px] z-0 opacity-90" />
                            )}

                            {/* Illustration */}
                            <img src={item.image} alt="whychoose1" className="h-[350px]" />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="flex flex-col items-center mt-3">
                    <p className="text-bold font-bold text-[#4C4C4C] text-[18px] mb-6">
                        新規口座開設＋条件達成で<span className="text-[#00D084] font-bold text-[24px]">5,000円</span>プレゼント
                    </p>

                    <button className="w-full bg-[#FFA500] tracking-[1.5px] hover:bg-[#e69500] transition-colors text-white text-[20px] font-[600] py-4 px-8 rounded-full shadow-md font-inter">
                        無料新規口座開設はこちら
                    </button>
                </div>

            </div>
        </div>
    );
}