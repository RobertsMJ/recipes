"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createRecipe(data) {
  const res = await fetch("http://localhost:3000/api/recipes", {
    method: "POST",
    body: JSON.stringify(data),
  });

  const created = await res.json();

  revalidatePath("/");
  redirect(`/`);
}
