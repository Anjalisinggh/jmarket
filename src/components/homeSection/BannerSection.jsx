'use client';
import { useFadeInUp } from '@/utils/scrollAnimations';

export default function BannerSection() {
    const warningRef = useFadeInUp(0);
    const bannersRef = useFadeInUp(0.2);

    const bannerItems = [
        {
            image: "/images/banners/banner1.svg",
        },
        {
            image: "/images/banners/banner2.svg",
        },
        {
            image: "/images/banners/banner3.svg",
        }
    ]

    return (
        <div className="md:px-40 px-0">
            <div className="px-4 md:px-0">
                <div ref={warningRef} className="w-full border border-[#E4E4E4] rounded-xl flex items-center gap-2 md:py-5 py-3 md:px-7 px-4 mb-4 md:mb-8 group cursor-pointer hover:border-[#FFA500] transition-all duration-300">
                    <img src="/icons/warning.svg" alt="warning" className="md:h-7 h-5 mr-1 md:mr-4" />
                    <p className="md:text-[14px] text-[11px] font-inter font-[900] text-[#363636] flex-1">【重要】投資家を狙った投資詐欺にご注意ください。</p>
                    <img src="/icons/rightArrow.svg" alt="arrow" className="md:h-4 h-2.5 animate-arrow-slide" />
                </div>
            </div>

            <div
                ref={bannersRef}
                className="flex md:grid md:grid-cols-3 md:gap-4 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scroll-smooth hide-scrollbar"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
            >
                {bannerItems.map((item) => (
                    <div key={item.image} className="flex-shrink-0 w-[67vw] md:w-auto">
                        <img src={item.image} alt="banner" className="w-full h-full object-cover rounded-lg md:rounded-lg md:max-h-none" />
                    </div>
                ))}
            </div>
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                @keyframes arrowSlide {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(8px);
                    }
                }
                .animate-arrow-slide {
                    animation: arrowSlide 1.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}