import Link from "next/link";
export default function PrevNextNavigation({ volumes, currentIndex }) {
  const previousSlug = volumes[currentIndex - 1];
  const nextSlug = volumes[currentIndex + 1];

  return (
    <>
      {previousSlug && (
        <Link href={`/volumes/${previousSlug.slug}`}> ← Previous</Link>
      )}
      {nextSlug && <Link href={`/volumes/${nextSlug.slug}`}>Next →</Link>}
    </>
  );
}
