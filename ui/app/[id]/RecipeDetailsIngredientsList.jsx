export default function RecipeDetailsIngredientsList({
  className,
  ingredients,
}) {
  return (
    <ul className={className}>
      {(ingredients || []).map((i) => (
        <li>{`${i.qty}${i.unit} ${i.name}`}</li>
      ))}
    </ul>
  );
}
