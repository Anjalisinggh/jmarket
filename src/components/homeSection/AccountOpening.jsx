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
                <div className="mb-12">
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
                    <p className="text-gray-600 mt-2 text-[15px]">最短数時間で解説完了・取引可能</p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {steps.map((item) => (
                        <div key={item.step} className="bg-[#F8F9FA] rounded-2xl p-8 flex flex-col relative min-h-[500px]">

                            {/* Step Badge */}
                            <div className="bg-[#FFA500] text-white font-bold px-5 py-1 rounded-full text-sm mb-6 self-start  ">
                                <span>STEP</span>
                                <span>{item.step}</span>
                            </div>

                            {/* Title */}
                            <p className="text-[#444] font-medium text-sm leading-relaxed mb-8 text-left w-full whitespace-pre-wrap">
                                {item.title}
                            </p>

                            {/* Step 3 Campaign Badge */}
                            {item.hasBadge && (
                                <div className="absolute top-4 right-4 animate-bounce">
                                    <div className="relative">
                                        <div className="border-2 border-[#FFA500] text-[#FFA500] text-[10px] font-bold py-2 px-3 rounded-2xl bg-white leading-tight">
                                            お得なお年玉<br />キャンペーン実施中！
                                        </div>
                                        {/* Little triangle for speech bubble */}
                                        <div className="absolute -bottom-1 left-4 w-2 h-2 bg-white border-r-2 border-b-2 border-[#FFA500] rotate-45"></div>
                                    </div>
                                </div>
                            )}

                            {/* Illustration - Increased size */}
                            <div className="mt-auto w-full flex justify-center items-end">
                                <img
                                    src={item.image}
                                    alt={`Step ${item.step}`}
                                    className="w-full max-w-none h-auto object-contain"
                                    style={{ maxHeight: '320px', minHeight: '280px' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="flex flex-col items-center">
                    <p className="text-gray-700 text-lg mb-6">
                        新規口座開設＋条件達成で<span className="text-[#00D084] font-bold text-2xl">5,000円</span>プレゼント
                    </p>

                    <button className="w-full bg-[#FFA500] hover:bg-[#e69500] transition-colors text-white text-xl font-bold py-3 px-10 rounded-full ">
                        無料新規口座開設はこちら
                    </button>
                </div>

            </div>
        </div>
    );
}