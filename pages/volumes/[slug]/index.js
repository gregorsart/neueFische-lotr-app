import Image from "next/image";
import { StyledLink } from "@/components/Link.styled";
import { StyledSection } from "@/components/Section.styled";
import { styled } from "styled-components";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import PrevNextNavigation from "@/components/PrevNextNavigation";
import ChevronLeft from "@/icons/chevron-left.svg";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

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
      <nav>
        <StyledLink href="/volumes">
          <ChevronLeft /> All Volumes
        </StyledLink>
      </nav>

      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <StyledSection>
        <Image
          src={data.cover}
          alt="Picture of the Book Cover"
          width={140}
          height={230}
        />
        <ul>
          {data.books.map((book) => (
            <StyledLi key={book.title}>
              {book.ordinal} <br /> <StyledSpan>{book.title}</StyledSpan>
            </StyledLi>
          ))}
        </ul>
      </StyledSection>

      <nav>
        <PrevNextNavigation volumes={volumes} currentIndex={currentIndex} />
      </nav>
    </>
  );
}

const StyledLi = styled.li`
  font-size: 0.8rem;
  color: turquoise;
`;

const StyledSpan = styled.span`
  color: var(--main-text-color-light);
  font-size: 1.2rem;
  font-family: ${lora.style.fontFamily}, serif;
`;
