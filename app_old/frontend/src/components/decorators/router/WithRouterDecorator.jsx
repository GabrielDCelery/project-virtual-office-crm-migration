import React from 'react';
import { withRouter } from 'react-router';
import { PATH_TO_DASHBOARD, PATH_TO_LOGIN, PATH_TO_LOGOUT } from 'consts';

export const WithRouterDecorator = ToWrapComponent => {
  return withRouter(props => {
    return (
      <ToWrapComponent
        {...props}
        {...{
          PATH_TO_DASHBOARD,
          PATH_TO_LOGIN,
          PATH_TO_LOGOUT
        }}
      />
    );
  });
};
