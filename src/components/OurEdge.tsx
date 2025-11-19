import { Sparkles, TrendingUp, Shield, Rocket } from "lucide-react";

const OurEdge = () => {
  const edges = [
    {
      icon: Sparkles,
      title: "AI-Powered Intelligence",
      description: "Proprietary ML models trained on billions of data points across industries",
    },
    {
      icon: TrendingUp,
      title: "Proven Accuracy",
      description: "99%+ forecast accuracy validated across Fortune 500 companies",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with bank-grade encryption and compliance",
    },
    {
      icon: Rocket,
      title: "Infinite Scale",
      description: "From startups to global enterprises - built to handle any volume",
    },
  ];

  return (
    <section id="solutions" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Why Choose 360 VortexAI
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            The most advanced demand forecasting platform on the market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {edges.map((edge, index) => {
            const Icon = edge.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-4">{edge.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{edge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurEdge;
