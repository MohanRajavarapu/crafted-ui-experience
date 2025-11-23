// src/integrations/supabase/client.ts

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Please ensure the following are set in your .env file:\n" +
    "  • VITE_SUPABASE_URL\n" +
    "  • VITE_SUPABASE_ANON_KEY"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY);
