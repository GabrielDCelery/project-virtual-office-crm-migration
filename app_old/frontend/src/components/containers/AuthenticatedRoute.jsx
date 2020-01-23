import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserStoreDecorator, WithRouterDecorator } from 'components';

let AuthenticatedRoute = ({
  stateIsUserAuthenticated,
  exact,
  path,
  ComponentToRender,
  redirectTo,
  history
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        stateIsUserAuthenticated ? (
          <ComponentToRender />
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: history.location.pathname }
            }}
          />
        )
      }
    />
  );
};

AuthenticatedRoute = UserStoreDecorator(AuthenticatedRoute);
AuthenticatedRoute = WithRouterDecorator(AuthenticatedRoute);

export { AuthenticatedRoute };
