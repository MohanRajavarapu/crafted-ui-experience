const TrustedPartners = () => {
  const partners = [
    "Amazon Web Services",
    "Microsoft Azure",
    "Google Cloud",
    "SAP",
    "Oracle",
    "Salesforce",
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm md:text-base text-muted-foreground font-medium tracking-wide uppercase">
            Trusted by Industry Leaders
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-primary opacity-20" />
                <p className="text-xs md:text-sm text-muted-foreground font-medium">
                  {partner}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;