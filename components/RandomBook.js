import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Button from "./Button";

export default function RandomBook() {
  function handleClick() {
    router.push(`volumes/${slug.slug}`);
  }
  const randomNumber = Math.floor(Math.random() * 3);
  const router = useRouter();
  const slug = volumes[randomNumber];
  return <Button text="Show a random book" onHandleClick={handleClick} />;
}
