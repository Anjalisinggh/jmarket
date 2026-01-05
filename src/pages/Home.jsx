import HeroSection from "@/components/homeSection/HeroSection";
import BannerSection from "@/components/homeSection/BannerSection";
import WhyChoose from "@/components/homeSection/whychoose";
import AppDownloadSection from "@/components/homeSection/AppDownloadSection";
import ExecutionSection from "@/components/homeSection/ExecutionSection";
import Disclaimer from "@/components/homeSection/disclaimer";
import AccountOpening from "@/components/homeSection/AccountOpening";
import FNQSection from "@/components/homeSection/fnq";
import MarketInfo from "@/components/homeSection/MarketInfo";
import Support from "@/components/homeSection/Support";
import News from "@/components/homeSection/News";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <BannerSection />
      <WhyChoose />
      <AppDownloadSection />
      <ExecutionSection />
      <Disclaimer />
      <AccountOpening />
      <FNQSection />
      <MarketInfo />
      <Support />
      <News />
    </div>
  )
}