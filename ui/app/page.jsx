import RecipeList from "./RecipeList";
import styles from "./page.module.scss";

export async function generateMetadata() {
  return {
    title: "Recipes",
  };
}

export default async function Home() {
  return (
    <main className={styles.main}>
      <RecipeList />
    </main>
  );
}
