import { NextResponse } from 'next/server';

export async function POST(_request: Request) {
  return NextResponse.json(undefined, { status: 204 });
}
