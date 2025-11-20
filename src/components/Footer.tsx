import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Twitter, Mail, Facebook } from "lucide-react";
import logo from "@/assets/Logo.png";
import { useState } from "react";
import ContactDialog from "./ContactDialog";

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <footer id="contact" className="bg-card/50">
      {/* CTA Section */}
      <div className="px-6 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of companies making smarter decisions with AI
          </p>
          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              onClick={() => setShowContact(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 h-auto font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto border-t border-border/50" />
      </div>

      {/* Footer Content */}
      <div className="px-6 md:px-16 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer inline-block">
                <img src={logo} alt="360 VortexAI" className="h-24 w-auto p-2 rounded-lg" style={{ background: 'transparent', height: '150%' }} />
              </a>
              <p className="text-muted-foreground leading-relaxed">
                AI-powered demand forecasting and supply chain optimization for modern businesses
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                  <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                  <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Product</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#solutions" className="hover:text-primary transition-colors">Solutions</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#impact" className="hover:text-primary transition-colors">Impact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
            <p>&copy; 2024 360 VortexAI. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      <ContactDialog open={showContact} onOpenChange={setShowContact} />
    </footer>
  );
};

export default Footer;
