export default function BannerSection() {

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
        <div className="px-40">
            <div className="w-full border border-[#E4E4E4] rounded-xl flex items-center gap-2 py-5 px-7 mb-8">
                <img src="/icons/warning.svg" alt="warning" className="h-7 mr-4" />
                <p className="text-[14px] font-inter font-[900] text-[#363636] flex-1">【重要】投資家を狙った投資詐欺にご注意ください。</p>
                <img src="/icons/rightArrow.svg" alt="arrow" className="h-4" />
            </div>
            <div className="grid grid-cols-3 gap-4">
                {bannerItems.map((item) => (
                    <div key={item.image}>
                        <img src={item.image} alt="banner" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}