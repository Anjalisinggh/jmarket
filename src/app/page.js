import HomePage from "@/pages/Home";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="w-full md:max-w-[1440px] mx-auto">
      <Navbar />
      <HomePage />
    </div>
  );
}