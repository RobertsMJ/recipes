import RecipeCard from "./RecipeCard";
import styles from "./RecipeList.module.scss";
import { getRecipes } from "./new/actions";

export default async function RecipeList() {
  const recipes = await getRecipes();
  console.log("rendering list", recipes.length);

  return (
    <ul className={styles.list}>
      {recipes.map((r) => (
        <RecipeCard recipe={r} key={r.id} />
      ))}
    </ul>
  );
}
