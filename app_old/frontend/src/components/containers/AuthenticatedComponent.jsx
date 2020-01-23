import React from 'react';
import { UserStoreDecorator } from 'components';

export const AuthenticatedComponent = ToWrapComponent => {
  const WrapperComponent = props => {
    const { stateIsUserAuthenticated } = props;

    return stateIsUserAuthenticated ? <ToWrapComponent {...props} /> : null;
  };

  return UserStoreDecorator(WrapperComponent);
};
