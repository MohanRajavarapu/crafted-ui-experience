import { Database, Brain, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Ingestion",
    description: "Seamlessly collect and integrate data from multiple sources across your supply chain",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced algorithms analyze patterns and generate accurate demand forecasts",
  },
  {
    icon: CheckCircle,
    title: "Optimized Decisions",
    description: "Receive actionable recommendations to optimize inventory and operations",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 relative bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined three-step process that transforms data into decisions
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-cyan -translate-y-1/2 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon container */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform glow-teal">
                  <step.icon className="h-12 w-12 text-primary-foreground" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm md:text-base max-w-xs">
                  {step.description}
                </p>

                {/* Arrow connector (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-6 xl:-right-8 text-accent opacity-50">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 20H35M35 20L25 10M35 20L25 30"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
