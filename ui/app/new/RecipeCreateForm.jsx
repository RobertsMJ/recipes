"use client";
import { createRecipe } from "./actions";
import RecipeEditForm from "@/components/RecipeEditForm";

export default function RecipeCreateForm() {
  function handleSubmit(e, recipe) {
    e.preventDefault();

    createRecipe(recipe);
  }

  return <RecipeEditForm recipe={null} method="POST" onSubmit={handleSubmit} />;
}
