import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params.id;
  const data = { id };
  return NextResponse.json({ data });
}
