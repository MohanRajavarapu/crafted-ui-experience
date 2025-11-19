import { TrendingUp, Users, Package, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const impacts = [
  {
    icon: TrendingUp,
    title: "Enhanced Profitability",
    description: "Reduce operational spend by 25%",
    color: "from-primary to-accent",
  },
  {
    icon: Users,
    title: "Superior Customer Experience",
    description: "Boost service levels by 18%",
    color: "from-accent to-cyan",
  },
  {
    icon: Package,
    title: "Optimized Inventory",
    description: "Cut carrying costs by 30%",
    color: "from-cyan to-primary",
  },
  {
    icon: Target,
    title: "Unrivaled Forecasting Precision",
    description: "Achieve 15% higher accuracy",
    color: "from-primary to-accent",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable ROI across every aspect of your supply chain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {impacts.map((impact, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-card border-primary/20 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${impact.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <impact.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {impact.title}
                </h3>
                
                <p className="text-muted-foreground text-sm md:text-base">
                  {impact.description}
                </p>

                {/* Decorative gradient border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
