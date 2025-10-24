// lib/supabaseClient.js
// ---------------------------------------------
// This file initializes a Supabase client for your Next.js app.
// It connects using your environment variables and can be reused anywhere in your project.

import { createClient } from '@supabase/supabase-js'

// Get the Supabase project URL and public (anon) key from environment variables.
// These must be set in your `.env.local` or Vercel Environment Variables.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Safety check – helpful for debugging if the environment variables aren't set.
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '⚠️ Missing Supabase credentials. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment.'
  )
}

// Create a single reusable Supabase client instance.
// You can import this client anywhere: `import { supabase } from '@/lib/supabaseClient'`
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
