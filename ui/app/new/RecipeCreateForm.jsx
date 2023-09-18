import { revalidatePath } from "next/cache";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";
import styles from "./RecipeCreateForm.module.scss";
import { redirect } from "next/navigation";

export default function RecipeCreateForm() {
  async function create(formData) {
    "use server";

    const name = formData.get("name");
    const description = formData.get("description");

    const res = await fetch("http://localhost:3000/api/recipes", {
      method: "POST",
      body: JSON.stringify({ name, description }),
    });

    revalidatePath("/");

    // TODO: when the recipe is created, redirect to the created
    // recipe's details page.
    // const created = await res.json();
    // redirect(`/${created.id}`);
    redirect("/");
  }

  return (
    <form action={create} className={styles.form}>
      <FormInput type="text" name="name" label="Name" />
      <FormInput type="textarea" name="description" label="Description" />
      <FormSubmitButton />
    </form>
  );
}
