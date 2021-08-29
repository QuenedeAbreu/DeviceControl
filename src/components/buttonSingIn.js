import React from "react";
import styled from "styled-components";
import { AiFillUnlock } from "react-icons/ai";


const Button = styled.button`
  background-color: #171717;
  padding: 10px;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 1.0em;
  font-weight: bold;
  width: 60%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #2196F3;
  }

  @media(max-width: 800px) {
    width: 85%;
   }
`

function ButtonSingIn() {
  return (
    <Button>
      <AiFillUnlock /> Sing In
    </Button>
  );
}

export default ButtonSingIn;