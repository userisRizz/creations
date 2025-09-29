import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ShopSection from "@/components/ShopSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import MyWorkSection from "@/components/PortfolioSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MyWorkSection />
        {/* <ShopSection /> */}
        {/* <AboutSection /> */}
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
