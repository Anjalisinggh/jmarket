export default function HeroSection() {
    return (
        <div className="md:h-[420px] h-[510px] md:mb-10 mb-5 mt-26 md:mt-0">
            <img src="/images/heroSection.png" alt="heroSection" className="w-full h-full object-cover hidden md:block" />
            <img src="/images/heroSectionMobile.webp" alt="heroSection" className="h-full w-full object-cover block md:hidden" />
        </div>
    )
}