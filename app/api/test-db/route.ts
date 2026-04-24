import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return NextResponse.json(
      { error: { message: 'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY' }, data: null },
      { status: 500 }
    );
  }

  const supabase = createClient(url, anonKey);

  const { data, error } = await supabase.from('products').select('*').limit(5);

  return NextResponse.json(
    { data, error },
    { status: error ? 500 : 200 }
  );
}

