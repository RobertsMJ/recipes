"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Save"}
    </button>
  );
}
