import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TrendingUp, Package, ShoppingCart, Factory } from "lucide-react";

interface CaseStudiesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CaseStudiesDialog = ({ open, onOpenChange }: CaseStudiesDialogProps) => {
  const caseStudies = [
    {
      icon: ShoppingCart,
      company: "Global Retail Chain",
      industry: "Retail",
      challenge: "Inventory overstock causing $5M annual losses",
      solution: "AI-powered demand forecasting reduced excess inventory by 40%",
      results: ["$2M saved annually", "30% faster stock turnover", "95% forecast accuracy"]
    },
    {
      icon: Factory,
      company: "Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Production delays due to inaccurate material forecasting",
      solution: "Real-time predictive analytics for supply chain optimization",
      results: ["25% reduction in delays", "20% cost savings", "Enhanced supplier relationships"]
    },
    {
      icon: Package,
      company: "E-Commerce Platform",
      industry: "E-Commerce",
      challenge: "Seasonal demand fluctuations causing stockouts",
      solution: "ML-driven seasonal forecasting with automated reordering",
      results: ["98% product availability", "35% revenue increase", "Customer satisfaction up 40%"]
    },
    {
      icon: TrendingUp,
      company: "Pharmaceutical Distributor",
      industry: "Healthcare",
      challenge: "Complex multi-location inventory management",
      solution: "Centralized AI forecasting with location-specific insights",
      results: ["50% reduction in waste", "$3M cost savings", "Improved compliance"]
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold">
            Success Stories
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 mt-6">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <div 
                key={index}
                className="p-6 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{study.company}</h3>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Challenge:</p>
                        <p className="text-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Solution:</p>
                        <p className="text-foreground">{study.solution}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Results:</p>
                        <ul className="grid md:grid-cols-3 gap-2">
                          {study.results.map((result, idx) => (
                            <li 
                              key={idx}
                              className="text-sm px-3 py-2 bg-primary/5 rounded-lg text-foreground"
                            >
                              ✓ {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudiesDialog;
