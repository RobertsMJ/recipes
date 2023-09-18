import Link from "next/link";

export default function RecipeCreateButton() {
  return (
    <Link href="/new">
      <button>Create recipe</button>
    </Link>
  );
}
