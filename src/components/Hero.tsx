import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 lg:px-24 py-6 border-b border-border/50">
        <div className="flex items-center gap-12">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer">
            <img src={logo} alt="360 VortexAI" className="h-28 md:h-32 lg:h-40 w-auto p-2 rounded-lg" style={{ background: 'transparent' }} />
          </a>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors font-medium">Solutions</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">How It Works</a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors font-medium">Impact</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            size="lg"
            className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Request Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Transform Your Supply Chain{" "}
            <span className="text-gradient">with AI</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stop guessing. Start predicting. AI-powered demand forecasting that optimizes inventory, reduces waste, and drives growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-6 py-4 h-auto font-semibold"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-border text-foreground hover:bg-card text-base px-6 py-4 h-auto font-semibold"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
