-- Fix security issue: Set search_path for cleanup function
CREATE OR REPLACE FUNCTION public.cleanup_expired_otps()
RETURNS void 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.otp_verifications
  WHERE expires_at < now();
END;
$$;