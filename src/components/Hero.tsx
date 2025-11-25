import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/Logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CaseStudiesDialog from "./CaseStudiesDialog";
import ContactDialog from "./ContactDialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Hero = () => {
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
              className="h-28 md:h-36 lg:h-44 w-auto"
              style={{ background: 'hsl(210 30% 8%)', padding: '10px', borderRadius: '12px' }}
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
        <div className="flex-shrink-0 ml-4 flex items-center gap-3">
          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="lg"
              onClick={() => setShowContact(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 md:px-6 py-2 h-auto text-sm md:text-base"
            >
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                <a 
                  href="#about" 
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="#solutions" 
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </a>
                <a 
                  href="#impact" 
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Impact
                </a>
                <a 
                  href="#contact" 
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                  <Button
                    size="lg"
                    onClick={() => {
                      setShowContact(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <CaseStudiesDialog open={showCaseStudies} onOpenChange={setShowCaseStudies} />
      <ContactDialog open={showContact} onOpenChange={setShowContact} />
    </section>
  );
};

export default Hero;
