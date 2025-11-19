import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-hero border-t border-primary/20">
      {/* CTA Section */}
      <div className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Join leading companies leveraging AI for smarter demand forecasting
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-teal text-lg px-8">
            Contact Us
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-primary/20 py-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="360 VortexAI" className="h-10 w-auto" />
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2024 360 VortexAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
