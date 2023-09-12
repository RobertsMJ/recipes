import { NextResponse } from "next/server";
import { recipes } from "@/api/data";

export async function GET() {
  const data = Object.values(recipes);
  return NextResponse.json({ data });
}
