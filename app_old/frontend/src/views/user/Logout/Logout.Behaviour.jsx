import React, { useEffect } from 'react';
import { UserStoreDecorator, WithRouterDecorator } from 'components';

export default ToWrapComponent => {
  let WrapperComponent = props => {
    const { actionLogout, history, PATH_TO_LOGIN } = props;

    useEffect(() => {
      actionLogout(() => {
        return history.push(PATH_TO_LOGIN);
      });
    }, [actionLogout, history, PATH_TO_LOGIN]);

    return <ToWrapComponent />;
  };

  WrapperComponent = UserStoreDecorator(WrapperComponent);
  WrapperComponent = WithRouterDecorator(WrapperComponent);

  return WrapperComponent;
};
