import { TrendingUp, Users, Award, Zap } from "lucide-react";

const ImpactSection = () => {
  const impacts = [
    {
      icon: TrendingUp,
      title: "Enhanced Profitability",
      description: "Reduce overstock by 40% and minimize stockouts with precise demand forecasting",
      metric: "40%",
      label: "Cost Reduction",
    },
    {
      icon: Zap,
      title: "Operational Excellence",
      description: "Streamline operations and cut lead times with AI-driven insights",
      metric: "30%",
      label: "Faster Operations",
    },
    {
      icon: Users,
      title: "Superior Experience",
      description: "Achieve industry-leading order fulfillment rates",
      metric: "98%",
      label: "Fulfillment Rate",
    },
    {
      icon: Award,
      title: "Market Leadership",
      description: "Stay ahead with real-time analytics and predictive insights",
      metric: "24/7",
      label: "Real-time Insights",
    },
  ];

  return (
    <section id="impact" className="py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Real Results That Matter
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join leading companies achieving measurable supply chain transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={index}
                className="relative group p-10 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-8">
                  <Icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-primary">{impact.metric}</div>
                    <div className="text-sm text-muted-foreground font-medium">{impact.label}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{impact.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{impact.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
