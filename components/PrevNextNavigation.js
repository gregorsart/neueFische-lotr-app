import styled from "styled-components";
import { StyledLink } from "./Link.styled";
import ArrowLeft from "@/icons/arrow-left.svg";
import ArrowRight from "@/icons/arrow-right.svg";
export default function PrevNextNavigation({ volumes, currentIndex }) {
  const previousSlug = volumes[currentIndex - 1];
  const nextSlug = volumes[currentIndex + 1];

  return (
    <StyledDiv>
      {previousSlug && (
        <StyledLink href={`/volumes/${previousSlug.slug}`}>
          <ArrowLeft /> Previous
        </StyledLink>
      )}
      {nextSlug && (
        <StyledLink href={`/volumes/${nextSlug.slug}`}>
          Next <ArrowRight />{" "}
        </StyledLink>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
