import React from "react";
import { connect } from 'react-redux';
import {
  All,
  Content,
  H1,
  // P,
  Ul,
  Li,
  A
} from './style'

function Page(props) {
  return (
    <All>
      <Content>

        <A href="https://wiki.servarr.com/">https://wiki.servarr.com/</A>
        <H1>Cores</H1>
        <Ul>
          <Li bgColor="#171717">Primary Color : #171717</Li>
          <Li bgColor="#1E1E1E">Secundary Color : #1E1E1E</Li>
          <Li bgColor="#303030">tertiary Color : #303030</Li>
          <Li bgColor="#000000">quaternary color : #000000</Li>
          <Li bgColor="#0D47A1">Infor color : #0D47A1</Li>
          <Li bgColor="#2196F3">Infor color icon: #2196F3</Li>
          <Li bgColor="#149285">Buttons Color: #149285</Li>
          <Li bgColor="#212121">Buttons Color: #212121</Li>
          <Li bgColor="#55BFD6">Buttons Color: #55BFD6</Li>
        </Ul>
      </Content>
    </All>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    userName: state.user.username

  };
}

export default connect(mapStateToProps)(Page);