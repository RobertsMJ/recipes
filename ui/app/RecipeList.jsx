import RecipeCard from "./RecipeCard";

async function getData() {
  const res = await fetch("http://localhost:3000/api/recipes");
  if (!res.ok) throw new Error("Failed to fetch recipes");
  return res.json();
}

export default async function RecipeList() {
  const { data } = await getData();
  const recipes = data;

  return recipes.map((r) => <RecipeCard recipe={r} />);
}
