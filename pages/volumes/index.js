import { StyledLink } from "@/components/Link.styled";
import { StyledSection } from "@/components/Section.styled";
import { volumes } from "@/lib/data";
import ArrowLeft from "@/icons/arrow-left.svg";
import ChevronLeft from "@/icons/chevron-left.svg";
export default function Volumes() {
  return (
    <StyledSection>
      <div>
        <StyledLink href="/">
          <ChevronLeft /> Back to the Home page
        </StyledLink>
        <ul>
          {volumes.map((book) => {
            return (
              <li key={book.slug}>
                <StyledLink href={`./volumes/${book.slug}`}>
                  {book.title}
                </StyledLink>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledSection>
  );
}
