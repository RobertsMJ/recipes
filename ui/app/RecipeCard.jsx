import Link from "next/link";
import styles from "./RecipeCard.module.scss";
import thumbnail from "../public/images/blueb.png";
import Image from "next/image";

export default function RecipeCard({ recipe }) {
  return (
    <Link className={styles.card} href={"/" + recipe.id} key={recipe.id}>
      <Image
        src={thumbnail}
        className={styles.thumb}
        width="150"
        height="150"
        alt="Thumbnail image"
      />
      <div className={styles.content}>
        <h3 className={styles.title}>Recipe {recipe.id}</h3>
        <p className={styles.desc}>
          I am a blurb describing the recipe in question
        </p>
      </div>
    </Link>
  );
}
