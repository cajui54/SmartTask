import styled from "styled-components";

export const MainApp = styled.div`
  padding: 1rem;
  width: 40rem;
  min-height: 50rem;
  background-color: #121214;
  border-radius: 0.5rem;
`;
export const ButtonContainer = styled.div`
  button {
    width: 20rem;
    margin: 3rem auto;
    display: block;
    padding: 0.5rem 0;
    border-radius: 0.5rem;
    border: none;
    border: 1px solid #facc15;
    background-color: transparent;
    color: #facc15;
    transition: all 0.8s ease-in-out;
  }
  button:hover {
    background-color: #facc15;
    color: #121214;
  }
`;
