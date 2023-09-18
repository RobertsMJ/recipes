export default function RecipeDetailsIngredientsList({
  className,
  ingredients,
}) {
  return (
    <ul className={className}>
      {(ingredients || []).map((i, idx) => (
        <li key={idx}>{`${i.qty}${i.unit} ${i.name}`}</li>
      ))}
    </ul>
  );
}
