export default function RecipeDetailsDirectionsList({ className, directions }) {
  return (
    <ul className={className}>
      {(directions || []).map((d, idx) => (
        <li key={idx}>{d}</li>
      ))}
    </ul>
  );
}
