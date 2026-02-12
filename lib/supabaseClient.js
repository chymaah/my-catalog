"use client"; // pour pouvoir utiliser côté client

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL ou KEY non définie. Vérifie ton .env.local !");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
