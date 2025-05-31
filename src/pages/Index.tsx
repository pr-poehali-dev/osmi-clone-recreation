import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-osmi-dark">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
    </div>
  );
};

export default Index;
