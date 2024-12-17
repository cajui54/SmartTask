import styled from "styled-components";

export const MessageStyled = styled.p<{ $type: string }>`
  background-color: ${(props) =>
    props.$type === "success" ? "#86efac" : "#fda4af"};
  color: ${(props) => (props.$type === "success" ? "#166534" : "#4c0519")};
  border: 2px solid
    ${(props) => (props.$type === "success" ? "#166534" : "#4c0519")};
  width: 20rem;
  margin: 0 auto;
  padding: 0.5rem;
  margin-left: 7rem;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: bold;
`;
