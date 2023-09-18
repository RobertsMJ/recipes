import FormInput from "./FormInput";
import styles from "./RecipeCreateForm.module.scss";

export default function RecipeCreateForm() {
  const create = async (formData) => {
    "use server";

    const name = formData.get("name");
    const desc = formData.get("description");
    console.log({ name, desc });
  };
  return (
    <form action={create} method="POST" className={styles.form}>
      <FormInput type="text" name="name" label="Name" />
      <FormInput type="textarea" name="description" label="Description" />
      <button type="submit">Save</button>
    </form>
  );
}
