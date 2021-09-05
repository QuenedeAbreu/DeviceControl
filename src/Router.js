import React from 'react';
//Inportacoes de Roteadores
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Cores from './pages/Cores';
import NotFound from './pages/NotFound';

function Router() {
  return (
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>

      <Route exact path="/cores" >
        <Cores />
      </Route>

      <Route path="/login" >
        <Login />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>

    </ Switch>
  )
}


export default Router;
