import { styled } from "styled-components";

export default function Button({ text, onHandleClick }) {
  return (
    <StyledButton onClick={onHandleClick} type="button">
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
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

  &:hover {
    background-color: var(--main-contrast-color);
  }
`;
