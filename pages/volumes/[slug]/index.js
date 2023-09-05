import Image from "next/image";
import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import PrevNextNavigation from "@/components/PrevNextNavigation";

export default function DetailPage() {
  // get slug from URL
  const router = useRouter();
  const slugfromRouter = router.query.slug;
  // find Index and assign it to variable
  const currentIndex = volumes.findIndex((book) => book.slug == slugfromRouter);
  // find Object and assign it to variable
  const data = volumes[currentIndex];

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <Image
        src={data.cover}
        alt="Picture of the Book Cover"
        width={140}
        height={230}
      />
      <ul>
        {data.books.map((book) => (
          <li key={book.title}>
            {book.ordinal} － {book.title}
          </li>
        ))}
      </ul>
      <nav>
        <Link href="/volumes">All Volumes</Link>
        <PrevNextNavigation volumes={volumes} currentIndex={currentIndex} />
      </nav>
    </>
  );
}
