import React from "react";
import styled from "styled-components";


const DivInput = styled.div`
width: 60%;
background-color: #212121;
border-radius: 5px;
margin-bottom: 10px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
box-shadow: 0 3px 1px -2px rgb(100 100 100 / 20%), 0 2px 2px 0 rgb(100 100 100 / 14%), 0 1px 5px 0 rgb(100 100 100  / 12%);
@media(max-width: 800px) {
  width: 80%;
 }
 .icon {
   margin-left: 10px;
 }
`

const InputText = styled.input`
 width: 95%;
 height: 100%;
 line-height: none;
outline: none;
font-size: 16px;
padding: 10px;
background: transparent;
border: none;
color: #fff;
`;


function Input(props) {
  return (
    <DivInput>
      {props.Icon}  <InputText {...props} />
    </DivInput>
  );
}

export default Input;
