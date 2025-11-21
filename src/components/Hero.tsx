import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/Logo.png";
import { useState } from "react";
import CaseStudiesDialog from "./CaseStudiesDialog";
import ContactDialog from "./ContactDialog";

const Hero = () => {
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="relative flex flex-col bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 md:py-6 border-b border-border/50">
        {/* Logo and Desktop Links - Left Section */}
        <div className="flex items-center gap-8 md:gap-12 flex-1">
          <a 
            href="#" 
            onClick={(e) => { 
              e.preventDefault(); 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }} 
            className="cursor-pointer flex-shrink-0"
          >
            <img 
              src={logo} 
              alt="360 VortexAI" 
              className="h-14 md:h-16 lg:h-20 w-auto" 
              style={{ background: 'transparent' }} 
            />
          </a>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              About Us
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              How It Works
            </a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Solutions
            </a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Impact
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Contact
            </a>
          </div>
        </div>

        {/* Right Section - CTA Button */}
        <div className="flex-shrink-0 ml-4">
          <Button
            size="lg"
            onClick={() => setShowContact(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 md:px-6 py-2 h-auto text-sm md:text-base"
          >
            Request Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      <CaseStudiesDialog open={showCaseStudies} onOpenChange={setShowCaseStudies} />
      <ContactDialog open={showContact} onOpenChange={setShowContact} />
    </section>
  );
};

export default Hero;
