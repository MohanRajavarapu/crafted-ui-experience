import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us, including your name, 
              email address, phone number, and any other information you choose to provide 
              when using our AI forecasting platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              to communicate with you, to monitor and analyze trends, usage, and activities, 
              and to detect, prevent, and address technical issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Information Sharing
            </h2>
            <p>
              We do not share your personal information with third parties except as described 
              in this policy. We may share information with service providers who perform services 
              on our behalf, when required by law, or with your consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Data Security
            </h2>
            <p>
              We take reasonable measures to help protect your personal information from loss, 
              theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal information at any time. 
              You may also opt out of receiving promotional communications from us by following the 
              instructions in those messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@360vortexai.com
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

export default Privacy;
