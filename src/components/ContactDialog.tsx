import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { z } from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  const { user } = useAuth();
  const [step, setStep] = useState<Step>("form");
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [countryCode, setCountryCode] = useState("+1");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
      setFormData({
        name: user.user_metadata?.full_name || "",
        email: user.email || "",
        mobile: user.user_metadata?.mobile || "",
      });
    } else {
      setIsAuthenticated(false);
      setFormData({ name: "", email: "", mobile: "" });
    }
  }, [user, open]);

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
    // If user is authenticated, skip OTP and directly submit
    if (isAuthenticated) {
      await handleDirectSubmit();
      return;
    }

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

  const handleDirectSubmit = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase
        .from("contact_submissions")
        .insert([formData]);

      if (error) throw error;

      toast({ title: "Your request has been submitted successfully!" });
      setStep("success");
      setTimeout(() => {
        onOpenChange(false);
        resetForm();
      }, 3000);
    } catch (error: any) {
      console.error("Error submitting:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit request. Please try again.",
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
          {step === "form" && (
            <DialogDescription>
              {isAuthenticated 
                ? "Review your details and submit your demo request."
                : "Fill in your details to get started with our AI forecasting platform."}
            </DialogDescription>
          )}
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
                  disabled={isAuthenticated}
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
                  disabled={isAuthenticated}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <div className="flex gap-2">
                  <Select 
                    value={countryCode} 
                    onValueChange={setCountryCode}
                    disabled={isAuthenticated}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+1">🇺🇸 +1</SelectItem>
                      <SelectItem value="+44">🇬🇧 +44</SelectItem>
                      <SelectItem value="+91">🇮🇳 +91</SelectItem>
                      <SelectItem value="+86">🇨🇳 +86</SelectItem>
                      <SelectItem value="+81">🇯🇵 +81</SelectItem>
                      <SelectItem value="+49">🇩🇪 +49</SelectItem>
                      <SelectItem value="+33">🇫🇷 +33</SelectItem>
                      <SelectItem value="+61">🇦🇺 +61</SelectItem>
                      <SelectItem value="+55">🇧🇷 +55</SelectItem>
                      <SelectItem value="+82">🇰🇷 +82</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="234567890"
                    value={formData.mobile.replace(/^\+\d+/, '')}
                    onChange={(e) => handleInputChange("mobile", `${countryCode}${e.target.value}`)}
                    disabled={isAuthenticated}
                    className="flex-1"
                  />
                </div>
              </div>
              <Button
                onClick={handleSendOTP}
                disabled={!isFormValid() || isLoading}
                className="w-full"
              >
                {isLoading ? "Submitting..." : isAuthenticated ? "Submit Request" : "Send OTP to Email"}
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
