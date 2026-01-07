export default function WhyChoose() {
    const featurePoints = [
        {
            title: "安定した低スプレッド",
            desc: "取引コストが読みやすく、ムダを抑えやすい環境。"
        },
        {
            title: "超高速の注文執行",
            desc: "最短0.01秒の約定を目指す。"
        },
        {
            title: "スワップフリー取引",
            desc: "持ち越し時のコストを気にしすぎない取引へ。"
        },
        {
            title: "スピーディーな出金",
            desc: "出金手続きは24/7対応。"
        }
    ];

    return (
        <div className="md:px-40 px-4 md:pt-20 pt-4 md:pb-5 bg-white">
            {/* Main Header */}
            <div className="flex flex-col items-center md:mb-12 mb-2">

                <div className="flex items-end justify-center md:gap-4 gap-1 mb-5">
                    <img
                        src="/icons/jmarket.svg"
                        alt="jmarkets"
                        className="md:h-[40px] h-[30px]"
                    />
                    <img
                        src="/icons/whychoose.svg"
                        alt="whychoose"
                        className="md:h-[60px] h-[45px]"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
                {/* Left Card */}
                <div className="bg-[#F8F9FA] rounded-2xl md:p-10 md:pb-0 p-4 pb-0 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                    <div>
                        <h3 className="md:text-[28px] text-[20px] font-bold leading-relaxed mb-6 text-[#4C4C4C]">
                            <span className="relative inline-block">
                                <span className="z-50 relative">
                                    優れた約定スピードと安定した
                                </span>
                                <img src="/icons/detailline.svg" alt="whychoose1" className="absolute bottom-[6px] left-0 w-full h-[15px] z-0 opacity-90" />
                            </span><br />
                            <span className="relative inline-block">
                                <span className="z-50 relative">
                                    取引条件で平日24時間取引可能。
                                </span>
                                <img src="/icons/detailline.svg" alt="whychoose1" className="absolute bottom-0 left-0 w-full h-[15px] z-0 opacity-90" />
                            </span>
                        </h3>
                        <p className="md:text-[19px] text-[14px] md:leading-7 mb-8 text-[#4C4C4C] font-inter font-[400]">
                            超高速の注文執行で、スピードが求められる相場でも一歩先をリード。<br />
                            取引チャンスを逃さない優れた約定環境を体感。
                        </p>
                    </div>

                    <div className="relative mt-5 flex justify-center">
                        <img
                            src="/images/dynamic.png"
                            alt="Trading App"
                            className="w-200px h-200px object-cover"
                        />
                    </div>
                </div>

                {/* Right Card */}
                <div className="bg-[#F8F9FA] rounded-2xl md:p-10 md:pb-0 p-4 pb-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                    <h3 className="md:text-[28px] text-[20px] font-bold leading-relaxed mb-6 text-[#4C4C4C]">
                        とにかくCFD取引が、<br />
                        <span className="relative inline-block">
                            <span className="z-50 relative">
                                はやい。
                            </span>
                            <img src="/icons/short.svg" alt="whychoose1" className="absolute bottom-[2px] left-0 w-full h-[15px] z-0 opacity-90" />
                        </span>{' '}
                        <span className="relative inline-block">
                            <span className="z-50 relative">
                                やすい。
                            </span>
                            <img src="/icons/short.svg" alt="whychoose1" className="absolute bottom-[1px] left-0 w-full h-[15px] z-0 opacity-90" />
                        </span>{' '}
                        <span className="relative inline-block">
                            <span className="z-50 relative">
                                スムーズ。
                            </span>
                            <img src="/icons/short.svg" alt="whychoose1" className="absolute bottom-[1px] left-0 w-full h-[15px] z-0 opacity-90" />
                        </span>
                    </h3>
                    <p className="md:text-[18px] text-[14px] md:leading-7 md:mb-10 mb-4 text-[#4C4C4C] font-inter font-[400]">
                        低スプレッドと高速約定を目指す環境で、取引のストレスを減らして、CFD取引のムダ（コスト・待ち時間）を削って、チャンスだけに集中できる環境へ。
                    </p>

                    {/* Parent container centers the entire block inside the card */}
                    <div className="flex flex-col items-center w-full">
                        {/* This wrapper controls the alignment of the list items */}
                        <div className="flex flex-col gap-y-5 w-full">
                            {featurePoints.map((point, index) => (
                                <div key={index} className="flex md:gap-x-5 gap-x-3 items-start">
                                    {/* SVG Icon - Fixed width to ensure text alignment */}
                                    <div className="flex-shrink-0 pt-1 md:pl-10 pl-5">
                                        <svg className="md:w-[24px] w-[16px] md:h-[24px] h-[16px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.92248 16.0237L16.3771 5.54269C16.7657 5.15247 17.3959 5.15246 17.7847 5.54253C18.1737 5.93278 18.1739 6.56588 17.7851 6.95627L6.63508 18.1355C6.24232 18.5293 5.60266 18.5293 5.20993 18.1355L0.291502 13.1964C-0.0971673 12.8061 -0.0971674 12.1735 0.291502 11.7832C0.680171 11.393 1.31033 11.393 1.699 11.7832L5.92248 16.0237Z" fill="#15CF74" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M23.7093 5.85069C24.0996 6.24312 24.0965 6.87628 23.7024 7.26489L12.5572 18.2649C12.1631 18.6535 11.5272 18.6504 11.137 18.258C10.7467 17.8656 10.7498 17.2324 11.1439 16.8438L22.2891 5.8438C22.6832 5.45518 23.319 5.45827 23.7093 5.85069Z" fill="#15CF74" />
                                        </svg>

                                    </div>

                                    {/* Text Content - Always starts at the same line */}
                                    <div className="flex flex-col text-left">
                                        <h4 className="font-bold md:text-[18px] text-[16px] text-[#292929] font-inter leading-tight mb-1">
                                            {point.title}
                                        </h4>
                                        <p className="md:text-[14px] text-[12px] text-[#4C4C4C] font-inter font-[400] leading-relaxed">
                                            {point.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}