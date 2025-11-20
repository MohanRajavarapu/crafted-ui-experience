import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  mobile: z.string().trim().regex(/^\+?[1-9]\d{9,14}$/, "Invalid mobile number"),
});

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = "form" | "otp" | "success" | "error";

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [step, setStep] = useState<Step>("form");
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    try {
      contactSchema.parse(formData);
      return true;
    } catch {
      return false;
    }
  };

  const handleSendOTP = async () => {
    try {
      setIsLoading(true);
      const validatedData = contactSchema.parse(formData);

      const { error } = await supabase.functions.invoke("send-otp", {
        body: validatedData,
      });

      if (error) throw error;

      toast({ title: "OTP sent to your email" });
      setStep("otp");
    } catch (error: any) {
      console.error("Error sending OTP:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleValidateOTP = async () => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase.functions.invoke("verify-otp", {
        body: { email: formData.email, otp },
      });

      if (error) throw error;

      if (data?.valid) {
        setStep("success");
        setTimeout(() => {
          onOpenChange(false);
          resetForm();
        }, 3000);
      } else {
        setStep("error");
      }
    } catch (error: any) {
      console.error("Error validating OTP:", error);
      toast({
        title: "Error",
        description: "Failed to validate OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setOtp("");
    await handleSendOTP();
  };

  const resetForm = () => {
    setStep("form");
    setFormData({ name: "", email: "", mobile: "" });
    setOtp("");
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(resetForm, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {step === "form" && "Contact Us"}
            {step === "otp" && "Verify OTP"}
            {step === "success" && "Success"}
            {step === "error" && "Invalid OTP"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {step === "form" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+1234567890"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange("mobile", e.target.value)}
                />
              </div>
              <Button
                onClick={handleSendOTP}
                disabled={!isFormValid() || isLoading}
                className="w-full"
              >
                {isLoading ? "Sending..." : "Send OTP to Email"}
              </Button>
            </>
          )}

          {step === "otp" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <Input
                  id="otp"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                />
              </div>
              <Button
                onClick={handleValidateOTP}
                disabled={otp.length !== 6 || isLoading}
                className="w-full"
              >
                {isLoading ? "Validating..." : "Validate OTP"}
              </Button>
              <Button
                onClick={handleResendOTP}
                variant="outline"
                disabled={isLoading}
                className="w-full"
              >
                Resend OTP
              </Button>
            </>
          )}

          {step === "success" && (
            <div className="text-center space-y-4 py-6">
              <div className="text-4xl font-bold text-green-600">Validated</div>
              <p className="text-muted-foreground">
                Our representative will reach out to you shortly.
                <br />
                Thanks for your patience.
              </p>
            </div>
          )}

          {step === "error" && (
            <div className="text-center space-y-4 py-6">
              <div className="text-4xl font-bold text-red-600">Invalid</div>
              <p className="text-muted-foreground">Please re-enter the OTP.</p>
              <Button onClick={() => setStep("otp")} className="w-full">
                Try Again
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
