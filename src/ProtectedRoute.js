import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { fakeAuth } from './Auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default ProtectedRoute;
