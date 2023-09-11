import { NextResponse } from "next/server";

export async function GET() {
  const data = [{ id: 123 }, { id: 456 }];
  return NextResponse.json({ data });
}
