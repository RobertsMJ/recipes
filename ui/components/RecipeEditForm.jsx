"use client";

import { useCallback, useState } from "react";
import RecipeEditFormDirections from "./RecipeEditFormDirections";
import styles from "./RecipeEditForm.module.scss";
import FormSubmitButton from "./FormSubmitButton";

export default function RecipeEditForm({ recipe, method, onSubmit }) {
  const [form, setForm] = useState({
    name: recipe?.name || "",
    description: recipe?.description || "",
    directions: recipe?.directions || [""],
  });

  // const handleSubmit = useCallback(
  //   (e) => {
  //     e.preventDefault();

  //     onSubmit(e, { ...form });
  //   },
  //   [form],
  // );

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(e, { ...form });
  }

  return (
    <form method={method} onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={styles.field}
      />

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className={styles.field}
      />

      <label>Directions</label>
      <RecipeEditFormDirections
        value={form.directions}
        onChange={(updatedDirections) =>
          setForm({ ...form, directions: updatedDirections })
        }
        className={styles.field}
      />

      <FormSubmitButton />
    </form>
  );
}
