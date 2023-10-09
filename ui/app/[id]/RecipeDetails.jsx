import { Suspense } from "react";
import RecipeDetailsIngredientsList from "./RecipeDetailsIngredientsList";
import RecipeDetailsDirectionsList from "./RecipeDetailsDirectionsList";
import styles from "./RecipeDetails.module.scss";

export default async function RecipeDetails({ recipe }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <article className={styles.article}>
        <h1 className={styles.title}>{recipe?.name}</h1>
        <p className={styles.desc}>{recipe?.description}</p>
        <RecipeDetailsIngredientsList
          ingredients={recipe?.ingredients}
          className={styles.ingredients}
        />
        <RecipeDetailsDirectionsList
          directions={recipe?.directions}
          className={styles.directions}
        />
      </article>
    </Suspense>
  );
}
