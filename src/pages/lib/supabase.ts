import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

// Load .env file
const env = await load();

const supabaseUrl = env["SUPABASE_URL"] || Deno.env.get("SUPABASE_URL");
const supabaseKey = env["SUPABASE_KEY"] || Deno.env.get("SUPABASE_KEY");

export const supabase = createClient(supabaseUrl, supabaseKey);