import styled from "styled-components";

export const FormPage = styled.div`
  width: 100%;
`;
export const FormContainer = styled.div`
  padding: 0.8rem;
  width: 40rem;
  height: 50rem;
  border-radius: 0.5rem;
  background-color: #121214;
  form {
    width: 80%;
    margin: 3rem auto;
  }
  fieldset {
    border: none;
  }
  legend {
    color: #facc15;
    font-size: 1.2rem;
    font-weight: lighter;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 8rem;
    color: #fff;
    text-decoration: none;
    svg {
      font-size: 2rem;
      color: #facc15;
    }
  }
`;

export const InputContainer = styled.div`
  margin: 2rem auto;
  min-height: 6rem;

  label {
    position: relative;
  }
  label span:first-child {
    position: absolute;
    top: -2.5rem;
    left: 1rem;
    font-size: 1.1rem;
    color: #fff;
  }
  input {
    background-color: #0a0a0a;
    padding: 2rem 1rem;
    min-width: 80%;
    border-radius: 0.5rem;
    border: none;
    border: 1px solid #e2e8f0;
    outline: none;
    color: #fff;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  input:focus {
    border: 1px solid #facc15;
    background-color: #18181b;
  }
  label span:last-child {
    color: #fff;
    font-size: 1.8rem;
    display: inline-block;
    position: absolute;
    right: -2rem;
  }
  p {
    color: #ff0000;
    font-size: 1.1rem;
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  button {
    padding: 0.8rem 0;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: none;
    font-weight: bold;
  }
  button:first-child {
    background-color: #facc15;
    svg {
      margin-right: 1rem;
    }
  }
  button:last-child {
    background-color: #0a0a0a;
    color: #fff;
  }
`;
