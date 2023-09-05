import Link from "next/link";
import { introduction } from "/lib/data";
import RandomBook from "@/components/RandomBook";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <nav>
        <Link href="./volumes">Go to the Overview</Link>
        <RandomBook />
      </nav>
    </div>
  );
}
