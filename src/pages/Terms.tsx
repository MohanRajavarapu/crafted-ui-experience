import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-6 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using 360 VortexAI's services, you accept and agree to be bound 
              by the terms and provision of this agreement. If you do not agree to these terms, 
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Use of Services
            </h2>
            <p>
              You agree to use our AI forecasting platform only for lawful purposes and in 
              accordance with these Terms. You agree not to use our services in any way that 
              could damage, disable, overburden, or impair our servers or networks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. User Accounts
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials 
              and for all activities that occur under your account. You agree to notify us immediately 
              of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of our services, including but not limited 
              to text, graphics, logos, and software, are the exclusive property of 360 VortexAI 
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Limitation of Liability
            </h2>
            <p>
              In no event shall 360 VortexAI be liable for any indirect, incidental, special, 
              consequential, or punitive damages resulting from your use of or inability to use 
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Modifications to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of 
              any changes by posting the new Terms of Service on this page. Your continued use 
              of our services after such modifications constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Contact Information
            </h2>
            <p>
              For questions about these Terms of Service, please contact us at legal@360vortexai.com
            </p>
          </section>

          <p className="text-sm mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
