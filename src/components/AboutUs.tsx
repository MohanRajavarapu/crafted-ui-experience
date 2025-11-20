import { Shield, Target, Users, Zap } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Empowering businesses with AI-driven insights to transform supply chain operations and drive sustainable growth."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Leveraging cutting-edge AI technology to deliver real-time, actionable forecasts that keep you ahead of market dynamics."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Building lasting partnerships through dedicated support, continuous innovation, and measurable results for every client."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Enterprise-grade security and data protection, ensuring your business intelligence remains confidential and secure."
    }
  ];

  return (
    <section id="about" className="py-8 md:py-10 lg:py-12 px-6 md:px-16 lg:px-24 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            About<span className="text-gradient">360 VortexAI</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are pioneers in AI-powered supply chain optimization, helping businesses make smarter decisions through predictive analytics and demand forecasting. Founded by industry experts, we combine deep supply chain knowledge with advanced machine learning to deliver unparalleled accuracy and actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group p-6 md:p-8 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
