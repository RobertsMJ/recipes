import { NextResponse } from "next/server";
import { addRecipe, recipes } from "@/api/data";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";

export async function GET() {
  const data = Object.values(recipes);

  console.log("Getting recipes");

  return NextResponse.json({ data });
}

export async function POST(req) {
  const body = await req.json();

  const id = uuidv4();
  const created = { id, ...body };
  addRecipe(created);

  console.log("Created recipe");

  return new NextResponse(JSON.stringify(created));
}
