export default function ExecutionSection() {
    return (
        <div className="px-40 py-10 pb-5 pt-5 bg-white">
            <div className="bg-[#F8F9FA] rounded-2xl p-16 flex items-center justify-between overflow-hidden relative">

                {/* Left Column - 60% width */}
                <div className="w-[60%] z-10 ">
                    <div className="relative mb-8 inline-block">
                        {/* Heading Text */}
                        <h3 className="relative z-10 text-[28px] font-bold leading-tight text-[#4C4C4C]">
                            MT4/MT5で、分析から執行まで一気通貫。
                        </h3>
                        {/* Hand-drawn Highlighter SVG */}
                        <svg
                            className="absolute bottom-[-5px] left-[-5px] w-[105%] h-[18px] z-0 "
                            viewBox="0 0 218 16"
                            fill="none"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.5 8C30.5 4.5 180.5 1.5 217.5 7.5C187.5 11.5 37.5 14.5 0.5 8Z"
                                fill="#62FF00"
                                filter="blur(0.5px)"
                            />
                        </svg>
                    </div>

                    <p className="text-[17px] leading-[1.7] mb-12 -mt-2 text-[#4C4C4C] font-inter">
                        スマホでもPCでも、自分のスタイルに合わせて「いつでも<br />
                        も・どこでも」取引と管理を。Android または iOS デバイ<br />
                        スで MT4・MT5 プラットフォームにアクセス。移動中で<br />
                        も取引を継続し、市場の動きを逃さずにキャッチ。
                    </p>
                    <div className="flex gap-4">
                        {/* Windows Button */}
                        <button className="bg-[#00A3FF] text-white px-5 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-[#008bdb] transition-all shadow-md hover:shadow-lg">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M0 3.449L9.75 2.1V11.7H0V3.449zm0 17.1L9.75 21.9V12.3H0v8.249zM10.5 2L24 0v11.7H10.5V2zm0 19.9V12.3H24v11.7L10.5 21.9z" />
                                </svg>
                            </div>
                            <span className="text-[12px]">Windows 版 MT5をダウンロード</span>
                        </button>

                        {/* Mac Button */}
                        <button className="bg-[#00A3FF] text-white px-5 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-[#008bdb] transition-all shadow-md hover:shadow-lg">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M17.057 12.002c.01 3.178 2.643 4.234 2.673 4.247-.021.072-.418 1.442-1.383 2.855-.83 1.221-1.696 2.438-3.058 2.463-1.334.026-1.763-.794-3.291-.794-1.528 0-2.004.77-3.267.818-1.314.052-2.306-1.315-3.142-2.529-1.713-2.486-3.018-7.025-1.262-10.08 1.104-1.926 3.08-3.145 4.908-3.172 1.391-.026 2.705.945 3.561.945.856 0 2.454-1.161 4.132-1.161.7 0 2.668.252 3.931 2.112-.102.063-2.341 1.369-2.31 4.106zm-2.545-8.406c.762-.924 1.272-2.207 1.132-3.491-1.103.045-2.437.734-3.228 1.658-.709.821-1.331 2.13-1.162 3.385 1.229.096 2.496-.628 3.258-1.552z" />
                                </svg>
                            </div>
                            <span className="text-[15px]">Mac 版 MT5をダウンロード</span>
                        </button>
                    </div>
                </div>

                {/* Right Column - 40% width */}
                <div className="w-[40%] -pr-10 -mr-15 flex justify-end ">
                    <img
                        src="/images/trading.png"
                        alt="Desktop Platform"
                        className="w-full h-auto "
                    />
                </div>

            </div>
        </div>
    );
}