import React from 'react';
import { All } from './style';

function redirect() {
  window.location.href = '/';
}

function NotFound() {

  return (
    <All>
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={redirect}>Voltar para Home</button>
    </All>
  );
}

export default NotFound;