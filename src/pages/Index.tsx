import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
    </div>
  );
};

export default Index;
