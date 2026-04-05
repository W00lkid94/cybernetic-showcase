import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReviewsSection from "@/components/ReviewsSection";
import PricingSection from "@/components/PricingSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden scanline">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ReviewsSection />
        <PricingSection />
        <CommunitySection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
