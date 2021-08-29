import React, { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { AiFillUnlock } from "react-icons/ai";
import { FaKey } from "react-icons/fa";
import { connect } from 'react-redux';

import {
  All,
  // Content,
  ContentLeft,
  ContentRight,
  H1
} from './style'
import Input from '../../components/Input';
import ImgLogo from "../../assets/images/logo150x150.png";

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    props.setName('Quenede', 30)


  }

  const logout = () => {

    props.revomeUser()

  }

  return (
    <All>
      <ContentRight>
        {props.name}
        {props.idade}
        <button onClick={logout}>Remover</button>
        <img src={ImgLogo} alt="logo" />
        <form >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Usuário"
            Icon={<HiOutlineMail className="icon" />}
          />

          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            Icon={<FaKey className="icon" />}
          />
          {/* Botao de Login  */}
          <label>
            <AiFillUnlock />
            <span>Login</span>
            <button onClick={handleSubmit}>Login</button>
          </label>


        </form>
      </ContentRight>
      <ContentLeft>
        <H1>BNDV</H1>
      </ContentLeft>
    </All>
  );
}
const mapStateToProps = state => {
  return {
    name: state.user.name,
    idade: state.user.idade
  };
}
// Actions do redux
const mapDispatchToProps = (dispatch) => {

  return {
    setName: (NewName, NewIdade) => dispatch({
      type: 'SET_USER',
      payload: {
        name: NewName,
        idade: NewIdade
      }
    }),
    revomeUser: () => dispatch({
      type: 'REMOVE_USER'
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);