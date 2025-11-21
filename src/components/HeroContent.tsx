import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import CaseStudiesDialog from "./CaseStudiesDialog";

const HeroContent = () => {
  const [showCaseStudies, setShowCaseStudies] = useState(false);

  return (
    <>
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Stop guessing. Start predicting. AI-powered demand forecasting that optimizes inventory, reduces waste, and drives growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            onClick={() => setShowCaseStudies(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-6 py-4 h-auto font-semibold"
          >
            Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-2 border-border text-foreground hover:bg-card text-base px-6 py-4 h-auto font-semibold"
          >
            <a href="https://www.youtube.com/watch?v=Lpp9bHtPAN0" target="_blank" rel="noopener noreferrer">
              Watch Demo
            </a>
          </Button>
        </div>
      </div>

      <CaseStudiesDialog open={showCaseStudies} onOpenChange={setShowCaseStudies} />
    </>
  );
};

export default HeroContent;
