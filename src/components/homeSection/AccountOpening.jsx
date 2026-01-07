'use client'
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
        <div className="bg-white md:px-40 px-4 md:pt-5 pt-3 mb-20">
            <div className="">

                {/* Header Section */}
                <div className="md:mb-16 mt-10 text-center"> {/* Increased margin to give space for the overlapping badges */}
                    <div className="relative inline-block mb-4">
                        <span className="z-50 relative">
                            <h2 className="md:text-4xl text-[24px] font-[500] text-[#4C4C4C] relative z-5 font-inter">口座開設の流れ</h2>
                        </span>
                        <img src="/icons/acc.svg" alt="whychoose1" className="absolute left-0 w-full h-[15px] bottom-[-10px] opacity-90" />
                    </div>
                    <p className="text-[#4C4C4C] md:mt-4 mt-2 md:text-[17px] text-[15px]">最短数時間で解説完了・取引可能</p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 gap-5 mb-12 md:mt-24 mt-10">
                    {steps.map((item) => (
                        /* Removed overflow-hidden so the badge can sit outside */
                        <div key={item.step} className="bg-[#F8F9FA] rounded-xl md:py-10 py-5 flex flex-col relative">

                            {/* Step Badge - Positioned Absolute, Left Top, Overlapping */}
                            <div className="absolute md:-top-5 -top-1 left-6 bg-[#FFA500] text-white font-black px-3.5 tracking-[1px] py-1 rounded-full text-[12px] z-30 flex items-center font-inter gap-1.5 shadow-md">
                                <span className="md:text-[20px] text-[13px] font-black font-inter">STEP {item.step}</span>
                            </div>

                            {/* Title */}
                            <p className="text-[#4C4C4C] md:w-full w-[70%] md:font-[600] font-[500] md:text-[17px] text-[15px] md:leading-relaxed leading-[1.4] mb-4 text-left mt-5 font-inter px-6">
                                {item.title}
                            </p>

                            {/* Step 3 Campaign Badge */}
                            {item.hasBadge && (
                                <img src="/icons/stepcloud.svg" alt="whychoose1" className="absolute md:-top-14 -top-6 md:-right-18 -right-4 w-full md:h-[85px] h-[58px] z-0 animate-badge-float" />
                            )}

                            {/* Illustration */}
                            <img src={item.image} alt="whychoose1" className="h-[350px] md:block hidden" />
                            <img src={item.image} alt="whychoose1" className="absolute h-[125px] right-2 bottom-0 md:hidden block"/>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="flex flex-col items-center mt-3">
                    <p className="text-bold font-bold text-[#4C4C4C] md:text-[18px] text-[15px] mb-6">
                        新規口座開設＋条件達成で<span className="text-[#00D084] font-bold md:text-[24px] text-[20px]">5,000円</span>プレゼント
                    </p>

                    <button className="w-full bg-[#FFA500] tracking-[1.5px] hover:bg-[#e69500] transition-all duration-300 text-white md:text-[20px] text-[14px] font-[600] md:py-4 py-3 px-8 rounded-full shadow-md hover:shadow-lg cursor-pointer">
                        無料新規口座開設はこちら
                    </button>
                </div>

            </div>
            <style jsx global>{`
                @keyframes badgeFloat {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .animate-badge-float {
                    animation: badgeFloat 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}