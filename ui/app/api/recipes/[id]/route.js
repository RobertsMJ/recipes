import { NextResponse } from "next/server";
import { recipes } from "@/api/data";

export async function GET(request, { params }) {
  const id = params.id;
  const data = recipes[id];
  return NextResponse.json({ data });
}
