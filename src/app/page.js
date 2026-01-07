import HomePage from "@/pages/Home";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <div className="w-full md:max-w-[1512px] mx-auto">
        <Navbar />
        <HomePage />
      </div>
      <Footer />
    </>
  );
}