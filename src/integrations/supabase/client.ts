// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yqdkpwsmlsbsymdneemb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxZGtwd3NtbHNic3ltZG5lZW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwODkzNzcsImV4cCI6MjA1NjY2NTM3N30.mQijSzZ8WLL_Gp4J8D9BXl2Y2lz3NUI6D3GNnggtV5M";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);