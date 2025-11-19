import { Database, Brain, Gauge } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Database,
      title: "Connect Your Data",
      description: "Seamlessly integrate with your existing systems - ERPs, POS, and supply chain tools. No complex setup required.",
    },
    {
      icon: Brain,
      title: "AI Analyzes & Predicts",
      description: "Our advanced AI models process historical data, market trends, and external factors to generate accurate forecasts.",
    },
    {
      icon: Gauge,
      title: "Act on Insights",
      description: "Receive clear, actionable recommendations for inventory, procurement, and distribution in real-time.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Simple. Powerful. Effective.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in three easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group text-center"
              >
                <div className="space-y-8">
                  <div className="relative inline-flex">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto">
                      <Icon className="w-10 h-10 text-primary-foreground" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold border-4 border-background">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
