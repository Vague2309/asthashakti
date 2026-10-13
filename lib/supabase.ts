import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. " +
      "Copy .env.example to .env.local and fill in your project's values."
  );
}

/**
 * Browser-safe Supabase client, using the public anon key. Access control
 * is enforced entirely by Row Level Security policies (see
 * supabase/schema.sql) — this key has no special privilege on its own.
 */
export const supabase = createClient(url, anonKey);
