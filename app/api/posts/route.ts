import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/db';

export async function GET() {
  return NextResponse.json(getBlogPosts());
}
