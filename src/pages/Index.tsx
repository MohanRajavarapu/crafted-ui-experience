import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import OurEdge from "@/components/OurEdge";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <HowItWorks />
      <OurEdge />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
