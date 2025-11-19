import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-24 py-6">
        <div className="flex items-center gap-4">
          <img src={logo} alt="360 VortexAI" className="h-12 md:h-14 w-auto" />
        </div>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
          Request Demo
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-gradient">PREDICT.</span>{" "}
            <span className="text-gradient">OPTIMIZE.</span>{" "}
            <span className="text-gradient">GROW.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Transform your supply chain with AI-powered demand forecasting and optimization
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-teal">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Visualization placeholder - referencing the uploaded design */}
        <div className="mt-16 w-full max-w-6xl mx-auto relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm p-8 md:p-12 glow-teal">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center animate-glow-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                    <div className="w-8 h-8 border-2 border-primary-foreground rounded" />
                  </div>
                  <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary animate-pulse" style={{ width: `${60 + i * 10}%`, animationDelay: `${i * 0.3}s` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
