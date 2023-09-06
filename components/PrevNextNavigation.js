import { StyledLink } from "./Link.styled";
export default function PrevNextNavigation({ volumes, currentIndex }) {
  const previousSlug = volumes[currentIndex - 1];
  const nextSlug = volumes[currentIndex + 1];

  return (
    <>
      {previousSlug && (
        <StyledLink href={`/volumes/${previousSlug.slug}`}>
          {" "}
          ← Previous
        </StyledLink>
      )}
      {nextSlug && (
        <StyledLink href={`/volumes/${nextSlug.slug}`}>Next →</StyledLink>
      )}
    </>
  );
}
