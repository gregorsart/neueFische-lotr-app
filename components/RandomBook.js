import { useRouter } from "next/router";
import { volumes } from "@/lib/data";

export default function RandomBook() {
  const randomNumber = Math.floor(Math.random() * 3);
  const router = useRouter();
  const slug = volumes[randomNumber];
  return (
    <button onClick={() => router.push(`volumes/${slug.slug}`)}>
      Show a random book
    </button>
  );
}
