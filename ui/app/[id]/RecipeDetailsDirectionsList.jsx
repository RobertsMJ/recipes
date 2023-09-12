export default function RecipeDetailsDirectionsList({ className, directions }) {
  return (
    <ul className={className}>
      {(directions || []).map((d) => (
        <li>{d}</li>
      ))}
    </ul>
  );
}
