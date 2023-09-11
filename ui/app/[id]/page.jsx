import Link from "next/link";

export function generateMetadata({ params }) {
  return {
    title: `Recipe ${params.id}`,
  };
}

export default function Page({ params }) {
  return (
    <>
      <Link href="/">Back to home page</Link>
      <div>Recipe ID: {params.id}</div>
    </>
  );
}
