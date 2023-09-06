import { styled } from "styled-components";

export default function Button({ text, onHandleClick }) {
  return (
    <StyledButton onClick={onHandleClick} type="button">
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  font-size: 0.9rem;
  font-weight: 100;
  color: #348a81;
  text-decoration: none;
  background-color: lightgray;
  padding: 0.5rem 1rem;
  width: fit-content;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: aquamarine;
  }
`;
