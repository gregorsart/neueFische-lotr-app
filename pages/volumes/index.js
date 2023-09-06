import { StyledLink } from "@/components/Link.styled";
import { volumes } from "@/lib/data";
export default function Volumes() {
  return (
    <>
      <h2>All Volumes</h2>
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
      <StyledLink href="/">← Back to the Home page</StyledLink>
    </>
  );
}
