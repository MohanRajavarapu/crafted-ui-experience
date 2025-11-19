import { Cpu, TrendingUp, Smile, Zap } from "lucide-react";

const edges = [
  {
    icon: Cpu,
    title: "AI-Driven",
    description: "Advanced machine learning algorithms continuously improve accuracy",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description: "Built to grow with your business from startup to enterprise",
  },
  {
    icon: Smile,
    title: "User-Friendly Interface",
    description: "Intuitive design that requires minimal training",
  },
  {
    icon: Zap,
    title: "Actionable Intelligence",
    description: "Clear insights that drive immediate business value",
  },
];

const OurEdge = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Edge</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            What sets 360 VortexAI apart from traditional forecasting solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {edges.map((edge, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 md:p-8 rounded-2xl border border-primary/20 bg-card hover:bg-card/80 transition-all h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:animate-glow-pulse transition-transform">
                  <edge.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                  {edge.title}
                </h3>
                
                <p className="text-muted-foreground text-sm md:text-base">
                  {edge.description}
                </p>
              </div>

              {/* Decorative glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurEdge;
