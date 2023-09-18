import { NextResponse } from "next/server";
import { addRecipe, recipes } from "@/api/data";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  const data = Object.values(recipes);
  return NextResponse.json({ data });
}

export async function POST(req) {
  const body = await req.json();

  const id = uuidv4();
  const created = { id, ...body };
  addRecipe(created);
  return new NextResponse(created);
}
