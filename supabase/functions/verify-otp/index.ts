import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VerifyOTPRequest {
  email: string;
  otp: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, otp }: VerifyOTPRequest = await req.json();

    console.log("Verifying OTP for:", email);

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Find the OTP record
    const { data: otpRecord, error: fetchError } = await supabase
      .from("otp_verifications")
      .select("*")
      .eq("email", email)
      .eq("otp", otp)
      .gt("expires_at", new Date().toISOString())
      .eq("is_verified", false)
      .single();

    if (fetchError || !otpRecord) {
      console.log("OTP not found or expired");
      return new Response(
        JSON.stringify({ valid: false }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Mark OTP as verified
    await supabase
      .from("otp_verifications")
      .update({ is_verified: true })
      .eq("id", otpRecord.id);

    console.log("OTP verified successfully");

    return new Response(
      JSON.stringify({ valid: true }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in verify-otp function:", error);
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
