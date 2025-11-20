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
      <div className="text-center py-12 md:py-16 px-6 md:px-16 lg:px-24">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Transform Your Supply Chain{" "}
          <span className="text-gradient">with AI</span>
        </h2>
      </div>
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
