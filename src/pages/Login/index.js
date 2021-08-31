import React, { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { AiFillUnlock } from "react-icons/ai";
import { FaKey } from "react-icons/fa";
import { connect } from 'react-redux';
import useApi from '../../helpers/ApiDeviceControl';
import { doLogin } from '../../helpers/AuthHandler';
import { ErrorMessage } from '../../components/MainComponents';
import '../../assets/css/loading.css'

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
  const api = useApi();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();
    setDisabled(true);
    const btn = document.querySelector('.buttonLogin');
    const content = btn.innerHTML;
    btn.innerHTML = '<div class="ld ld-spin ld-ring"></div>';
    const response = await api.login(email, password);
    btn.innerHTML = content;


    if (response.status !== 200) {
      if (response.password) {
        setError('A senha deve ter de 8 a 13 caracteres.');
      } else {
        setError('Email ou senha incorretos.');
      }

    } else {
      props.setUser(response.user);
      doLogin(response.token.key, remember);
      // window.location.href = '/';
    }
    setDisabled(false);
  }


  return (
    <All>
      <ContentRight>
        <img src={ImgLogo} alt="logo" />
        <form onSubmit={handleSubmit}>

          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Usuário"
            Icon={<HiOutlineMail className="icon" />}
            disabled={disabled}
            required
          />

          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            Icon={<FaKey className="icon" />}
            disabled={disabled}
            required
          />
          <label className="remember">
            <input type="checkbox" onChange={() => setRemember(!remember)} disabled={disabled} />
            <span>Lembrar-me</span>
          </label>

          {/* Botao de Login  */}
          <label className="buttonLogin ">

            <AiFillUnlock />
            <span>Login</span>
            <button disabled={disabled}>Login</button>
          </label>


          {error && <ErrorMessage>{error}</ErrorMessage>}
        </form>
      </ContentRight>
      <ContentLeft>
        <H1>BNDV</H1>
      </ContentLeft>
    </All>
  );
}

const mapStateToProps = (state) => {
  return { };
}

const mapDispatchToProps = (dispatch) => {

  return {
    setUser: (NewUser) => dispatch({
      type: 'SET_USER',
      payload: NewUser
    }),
    revomeUser: () => dispatch({
      type: 'REMOVE_USER'
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);