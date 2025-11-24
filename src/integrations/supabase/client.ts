// src/integrations/supabase/client.ts

import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://xkmkkqztojbjhxadrfmb.supabase.co";

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrbWtrcXp0b2piamh4YWRyZm1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1ODk4NjYsImV4cCI6MjA3OTE2NTg2Nn0.UAsLW6Kpr_RCSEy4TQu8-XRBUz4kQ19wgT9eqPHXSd4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY);
