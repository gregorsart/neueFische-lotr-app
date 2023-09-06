import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 200;
  color: var(--main-text-color-dark);
  text-decoration: none;
  background-color: var(--main-button-bg-color);
  padding: 0.5rem 1rem;
  width: fit-content;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  min-width: 8rem;

  &:hover {
    background-color: var(--main-contrast-color);
  }
`;
