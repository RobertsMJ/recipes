import RecipeDetails from "./RecipeDetails";
import styles from "./page.module.scss";

async function getRecipe(id) {
  const res = await fetch(`http://localhost:3000/api/recipes/${id}`);
  return res.json();
}

export async function generateMetadata({ params }) {
  const { data: recipe } = await getRecipe(params.id);
  return {
    title: `Recipe ${recipe.name}`,
  };
}

export default async function Page({ params }) {
  const { data: recipe } = await getRecipe(params.id);
  return <RecipeDetails recipe={recipe} />;
}
