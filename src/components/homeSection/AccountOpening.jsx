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
        <div className="bg-white font-sans px-40 py-10 pb-5 pt-5">
            <div className="max-w-6xl mx-auto text-center">

                {/* Header Section */}
                <div className="mb-20 mt-10"> {/* Increased margin to give space for the overlapping badges */}
                    <div className="relative inline-block mb-4">
                        <span className="z-50 relative">
                            <h2 className="text-4xl font-bold text-[#4C4C4C] relative z-5">口座開設の流れ</h2>
                        </span>
                        <img src="/icons/acc.svg" alt="whychoose1" className="absolute left-0 w-full h-[15px] bottom-[-10px] opacity-90" />
                    </div>
                    <p className="text-[#4C4C4C] mt-4 text-[17px]">最短数時間で解説完了・取引可能</p>
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
                            <p className="text-[#4C4C4C] font-medium text-[16px] leading-relaxed mb-4 text-left mt-5 w-full whitespace-pre-wrap">
                                {item.title}
                            </p>

                            {/* Step 3 Campaign Badge */}
                            {item.hasBadge && (
                                <img src="/icons/stepcloud.svg" alt="whychoose1" className="absolute -top-10 -right-20 w-full h-[70px] z-0 opacity-90" />
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