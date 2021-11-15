import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../helpers/AuthHandler";


export default ({ children, ...routerProps }) => {
  let logged = isAuthenticated();
  let authorized = (routerProps.private && !logged) ? false : true;
  return (
    <Route
      {...routerProps}
      render={() =>
        authorized ? children : <Redirect to="/login" />
      }
    />
  );
}