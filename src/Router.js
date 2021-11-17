import React from 'react';
//Inportacoes de Roteadores
import { Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

import Teste from './pages/Teste';

import Cores from './pages/Cores';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/RouterHendlerPrivate';

function Router() {
  return (
    <Switch>

      <PrivateRoute exact path="/" >
        <Home />
      </PrivateRoute>

      <PrivateRoute exact path="teste" >
        <Teste />
      </PrivateRoute>

      <PrivateRoute exact path="/cores" >
        <Cores />
      </PrivateRoute>

      <PrivateRoute path="/login" >
        <Login />
      </PrivateRoute>

      <PrivateRoute path="*">
        <NotFound />
      </PrivateRoute>

    </ Switch>
  )
}


export default Router;
