import Link from "next/link";
import styles from "./layout.module.scss";
export default function RecipeCreateLayout({ children }) {
  return (
    <main className={styles.main}>
      <Link className={styles.back} href="/">
        Back to home page
      </Link>
      {children}
    </main>
  );
}
