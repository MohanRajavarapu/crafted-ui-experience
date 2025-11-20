import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const resendApiKey = Deno.env.get("RESEND_API_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SendOTPRequest {
  name: string;
  email: string;
  mobile: string;
}

const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, mobile }: SendOTPRequest = await req.json();

    console.log("Sending OTP to:", email);

    // Generate OTP
    const otp = generateOTP();

    // Store OTP in database
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Clean up old OTPs for this email
    await supabase
      .from("otp_verifications")
      .delete()
      .eq("email", email);

    // Insert new OTP
    const { error: dbError } = await supabase
      .from("otp_verifications")
      .insert({
        email,
        otp,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store OTP");
    }

    // Send OTP via email
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "360 VortexAI <onboarding@resend.dev>",
        to: [email],
        subject: "Your OTP for Contact Verification",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #333;">Hello ${name}!</h1>
            <p style="font-size: 16px; color: #666;">Thank you for contacting 360 VortexAI. Please use the following OTP to verify your request:</p>
            <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #333; font-size: 32px; letter-spacing: 8px; margin: 0;">${otp}</h2>
            </div>
            <p style="font-size: 14px; color: #999;">This OTP is valid for 10 minutes.</p>
            <p style="font-size: 14px; color: #999;">If you didn't request this, please ignore this email.</p>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error("Resend API error:", errorData);
      throw new Error("Failed to send email");
    }

    console.log("Email sent successfully");

    // Store contact submission
    await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        mobile,
      });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-otp function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
