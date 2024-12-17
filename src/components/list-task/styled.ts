import styled from "styled-components";

export const ListTaskMain = styled.div`
  width: 95%;
  height: 40rem;
  margin: 1rem auto;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-color: #facc15 #0a0a0a;
  scrollbar-width: thin;

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
  li {
    letter-spacing: 0.2rem;
  }
  li div {
    display: flex;
    flex-direction: column;
  }
  li div span:first-child {
    color: #facc15;
    font-weight: bold;
    font-size: 1.1rem;
  }
  li div span:last-child {
    color: #fff;
    font-weight: bold;
    font-size: 1.3rem;
  }
`;
