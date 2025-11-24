import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Cookies = () => {
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
          Cookie Policy
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable 
                  basic functions like page navigation and access to secure areas of the website.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Analytics Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with our website by 
                  collecting and reporting information anonymously.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Functionality Cookies</h3>
                <p>
                  These cookies enable the website to remember choices you make and provide 
                  enhanced, more personal features.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. How We Use Cookies
            </h2>
            <p>
              We use cookies to remember your login information, understand your preferences, 
              analyze site traffic and usage patterns, and improve our services based on the 
              information we collect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Managing Cookies
            </h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. 
              However, limiting cookies may impact your experience of our website. You can choose 
              to delete cookies at any time or set your browser to reject cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Third-Party Cookies
            </h2>
            <p>
              We may use third-party services that also use cookies. These third parties have 
              their own privacy policies, and we have no control over their cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Updates to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted 
              on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Contact Us
            </h2>
            <p>
              If you have questions about our use of cookies, please contact us at 
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

export default Cookies;
