export default function FormInput({ type, name, label, required }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea name={name} required={required} />
      ) : (
        <input type={type} name={name} required={required} />
      )}
    </>
  );
}
