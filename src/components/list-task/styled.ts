import styled from "styled-components";

export const ListTaskMain = styled.div`
  width: 95%;
  height: 40rem;
  margin: 1rem auto;
  overflow-y: auto;
  h2 {
    color: #fff;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    margin-left: 2rem;
  }
  ul {
    width: 90%;
    margin: 2rem auto;
    list-style: none;
  }
  li {
    padding: 2rem;
    background-color: #0a0a0a;
    border-radius: 0.5rem;
    border: 0.5px solid #facc15;
    margin-top: 1.2rem;
  }
  li span {
    color: #fff;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
`;
