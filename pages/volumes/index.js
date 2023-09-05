import Link from "next/link";
import { volumes } from "@/lib/data";
export default function Volumes() {
  return (
    <>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((book) => {
          return (
            <li key={book.slug}>
              <Link href={`./volumes/${book.slug}`}>{book.title}</Link>
            </li>
          );
        })}
      </ul>
      <Link href="/">← Back to the Home page</Link>
    </>
  );
}
