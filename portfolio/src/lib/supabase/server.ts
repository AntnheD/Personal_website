// src/lib/supabase/server.ts
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// For React Server Components (RSC)
export function createSupabaseServerClient() {
  return createServerComponentClient({ cookies });
}

// For API routes or server actions
export function createClient() {
  return createServerActionClient({ cookies });
}
