import { getRecipeByID } from "../new/actions";
import RecipeDetails from "./RecipeDetails";

export async function generateMetadata({ params }) {
  const recipe = await getRecipeByID(params.id);
  return {
    title: `Recipe ${recipe?.name}`,
  };
}

export default async function Page({ params }) {
  const recipe = await getRecipeByID(params.id);
  return <RecipeDetails recipe={recipe} />;
}
