import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://cqfbhgnjyfskonmfggfr.supabase.co';

export const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxZmJoZ25qeWZza29ubWZnZ2ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5OTc2ODUsImV4cCI6MjA5MjU3MzY4NX0.u26MIbl4iP1MbtUqOTWQksyXl9NI2WVXazip3YxKJTg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
