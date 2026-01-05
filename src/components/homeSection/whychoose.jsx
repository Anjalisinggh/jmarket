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
        <div className="px-40 pt-20 pb-5 bg-white">
            {/* Main Header */}
            <div className="flex flex-col items-center mb-12">

                <div className="flex items-end justify-center gap-4 mb-5">
                    <img
                        src="/icons/jmarket.svg"
                        alt="jmarkets"
                        className="h-[40px] w-auto"
                    />
                    <img
                        src="/icons/whychoose.svg"
                        alt="whychoose"
                        className="h-[60px] w-200px"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10  ">
                {/* Left Card */}
                <div className="bg-[#F8F9FA] rounded-2xl p-10  pb-0 flex flex-col justify-between  overflow-hidden">
                    <div>
                        <h3 className="text-[28px] font-bold leading-relaxed mb-6 text-[#4C4C4C]">
                            <span className="relative inline-block">
                                優れた約定スピードと安定した
                                <svg
                                    className="absolute -bottom-2 left-0 w-full h-[15px] z-0 opacity-90"
                                    viewBox="0 0 218 16"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
                                </svg>
                            </span><br />
                            <span className="relative inline-block">
                                取引条件で平日24時間取引可能。
                                <svg
                                    className="absolute -bottom-2 left-0 w-full h-[15px] z-0 opacity-90"
                                    viewBox="0 0 218 16"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
                                </svg>
                            </span>
                        </h3>
                        <p className=" text-[19px] leading-7 mb-8 text-[#4C4C4C] font-inter font-[400]">
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
                <div className="bg-[#F8F9FA] rounded-2xl p-10 pb-5">
                    <h3 className="text-[28px] font-bold leading-relaxed mb-6 text-[#4C4C4C]">
                        とにかくCFD取引が、<br />
                        <span className="relative inline-block">
                            はやい。
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-[15px] z-0 opacity-90"
                                viewBox="0 0 218 16"
                                fill="none"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
                            </svg>
                        </span>{' '}
                        <span className="relative inline-block">
                            やすい。
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-[15px] z-0 opacity-90"
                                viewBox="0 0 218 16"
                                fill="none"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
                            </svg>
                        </span>{' '}
                        <span className="relative inline-block">
                            スムーズ。
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-[15px] z-0 opacity-90"
                                viewBox="0 0 218 16"
                                fill="none"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z" fill="#62FF00" />
                            </svg>
                        </span>
                    </h3>
                    <p className=" text-[18px] leading-7 mb-10 text-[#4C4C4C] font-inter font-[400]">
                        低スプレッドと高速約定を目指す環境で、取引のストレスを減らして、CFD取引のムダ（コスト・待ち時間）を削って、チャンスだけに集中できる環境へ。
                    </p>

                    {/* Parent container centers the entire block inside the card */}
                    <div className="flex flex-col items-center w-full">
                        {/* This wrapper controls the alignment of the list items */}
                        <div className="flex flex-col gap-y-5 w-full">
                            {featurePoints.map((point, index) => (
                                <div key={index} className="flex gap-x-5 items-start">
                                    {/* SVG Icon - Fixed width to ensure text alignment */}
                                    <div className="flex-shrink-0 pt-1 pl-10 ">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.92248 16.0237L16.3771 5.54269C16.7657 5.15247 17.3959 5.15246 17.7847 5.54253C18.1737 5.93278 18.1739 6.56588 17.7851 6.95627L6.63508 18.1355C6.24232 18.5293 5.60266 18.5293 5.20993 18.1355L0.291502 13.1964C-0.0971673 12.8061 -0.0971674 12.1735 0.291502 11.7832C0.680171 11.393 1.31033 11.393 1.699 11.7832L5.92248 16.0237Z" fill="#15CF74" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M23.7093 5.85069C24.0996 6.24312 24.0965 6.87628 23.7024 7.26489L12.5572 18.2649C12.1631 18.6535 11.5272 18.6504 11.137 18.258C10.7467 17.8656 10.7498 17.2324 11.1439 16.8438L22.2891 5.8438C22.6832 5.45518 23.319 5.45827 23.7093 5.85069Z" fill="#15CF74" />
                                        </svg>

                                    </div>

                                    {/* Text Content - Always starts at the same line */}
                                    <div className="flex flex-col text-left">
                                        <h4 className="font-bold text-[18px] text-[#292929] font-inter leading-tight mb-1">
                                            {point.title}
                                        </h4>
                                        <p className="text-[14px] text-[#4C4C4C] font-inter font-[400] leading-relaxed">
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