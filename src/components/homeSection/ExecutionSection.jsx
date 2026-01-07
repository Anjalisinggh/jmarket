'use client';
import { useFadeInUp } from '@/utils/scrollAnimations';

export default function ExecutionSection() {
    const cardRef = useFadeInUp(0.2);
    
    return (
        <div className="md:px-40 px-4 md:py-10 pb-5 md:pt-5 bg-white">
            <div ref={cardRef} className="bg-[#F8F9FA] rounded-2xl flex flex-col md:flex-row items-center justify-between transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">

                {/* Left Column - 60% width */}
                <div className="md:w-[62%] w-full md:p-14 p-4">
                    <div className="relative mb-8 inline-block">
                        {/* Heading Text */}
                        <h3 className="relative font-inter z-10 md:text-[28px] text-[22px] font-[500] leading-tight text-[#4C4C4C]">
                            MT4/MT5で、<br className="md:hidden block"/>分析から執行まで一気通貫。
                        </h3>
                        {/* Hand-drawn Highlighter SVG */}
                        <img src="/icons/sv.svg" alt="whychoose1" className="absolute bottom-[1px] left-0 w-full h-[15px] z-0 opacity-90" />
                    </div>

                    <p className="md:text-[17px] text-[14px] md:leading-[1.7] mb-8 -mt-2 text-[#4C4C4C] font-inter">
                        スマホでもPCでも、自分のスタイルに合わせて「いつでも<br className="md:block hidden" />
                        も・どこでも」取引と管理を。Android または iOS デバイ<br className="md:block hidden" />
                        スで MT4・MT5 プラットフォームにアクセス。移動中で<br className="md:block hidden" />
                        も取引を継続し、市場の動きを逃さずにキャッチ。
                    </p>

                    <div className="md:hidden flex justify-end mb-8">
                        <img src="/images/trading.png" alt="mobile-app" className="h-[220px]" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                        {/* Windows Button */}
                        <button className="bg-[#00A3FF] w-fit md:w-full font-inter text-white px-5 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-[#008bdb] transition-all shadow-md hover:shadow-lg cursor-pointer">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M0 3.449L9.75 2.1V11.7H0V3.449zm0 17.1L9.75 21.9V12.3H0v8.249zM10.5 2L24 0v11.7H10.5V2zm0 19.9V12.3H24v11.7L10.5 21.9z" />
                                </svg>
                            </div>
                            <span className="md:text-[12px] text-[13px] font-inter font-[500]">Windows 版 MT5をダウンロード</span>
                        </button>

                        {/* Mac Button */}
                        <button className="bg-[#00A3FF] w-fit md:w-full font-inter text-white px-5 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-[#008bdb] transition-all shadow-md hover:shadow-lg cursor-pointer">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M17.057 12.002c.01 3.178 2.643 4.234 2.673 4.247-.021.072-.418 1.442-1.383 2.855-.83 1.221-1.696 2.438-3.058 2.463-1.334.026-1.763-.794-3.291-.794-1.528 0-2.004.77-3.267.818-1.314.052-2.306-1.315-3.142-2.529-1.713-2.486-3.018-7.025-1.262-10.08 1.104-1.926 3.08-3.145 4.908-3.172 1.391-.026 2.705.945 3.561.945.856 0 2.454-1.161 4.132-1.161.7 0 2.668.252 3.931 2.112-.102.063-2.341 1.369-2.31 4.106zm-2.545-8.406c.762-.924 1.272-2.207 1.132-3.491-1.103.045-2.437.734-3.228 1.658-.709.821-1.331 2.13-1.162 3.385 1.229.096 2.496-.628 3.258-1.552z" />
                                </svg>
                            </div>
                            <span className="text-[15px] font-inter font-[500]">Mac 版 MT5をダウンロード</span>
                        </button>
                    </div>
                </div>

                <div className="w-[38%] h-full hidden md:block">
                    <img
                        src="/images/trading.png"
                        alt="Desktop Platform"
                        className="h-full"
                    />
                </div>
            </div>
        </div>
    );
}