import React from 'react';
import { UserStoreDecorator } from 'components';

export const AuthorizedComponent = ToWrapComponent => {
  const WrapperComponent = props => {
    const { stateIsUserAuthorized } = props;

    return stateIsUserAuthorized ? <ToWrapComponent {...props} /> : null;
  };

  return UserStoreDecorator(WrapperComponent);
};
