import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../context/auth";

function AuthRoute({ component: Component, ...rest }) {
  const { authTokens }  = useAuth();

  return(
    <Route 
      {...rest} 
      render={ props => authTokens ?
        (<Redirect to="/dashboard" /> ) : 
        ( <Component {...props} /> )
      }
    />
  );
}

export default AuthRoute;