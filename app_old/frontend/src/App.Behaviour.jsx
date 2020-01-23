import React, { useEffect } from 'react';
import {
  AppStoreDecorator,
  RouterDecorator,
  SnackBarStoreDecorator,
  StoreDecorator,
  ThemeDecorator,
  UserStoreDecorator
} from 'components';
import _ from 'lodash';

export default ToWrapComponent => {
  let AppBehaviour = props => {
    const {
      actionAuthenticateUserByCookie,
      actionCloseSnackBar,
      stateIsAppLoadingScreenOn,
      stateSnackBarMessage,
      stateSnackBarOpen,
      stateSnackBarVariant
    } = props;

    const getters = {
      app: {
        isLoadingScreenOn: stateIsAppLoadingScreenOn
      },
      snackbar: {
        type: stateSnackBarVariant,
        message: stateSnackBarMessage,
        isOpen: stateSnackBarOpen
      }
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      snackbar: {
        handleClose: actionCloseSnackBar
      }
    };

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    useEffect(() => {
      actionAuthenticateUserByCookie();
    }, [actionAuthenticateUserByCookie]);

    return <ToWrapComponent {...{ getter, handler }} />;
  };

  AppBehaviour = SnackBarStoreDecorator(AppBehaviour);
  AppBehaviour = UserStoreDecorator(AppBehaviour);
  AppBehaviour = AppStoreDecorator(AppBehaviour);
  AppBehaviour = ThemeDecorator(AppBehaviour);
  AppBehaviour = StoreDecorator(AppBehaviour);
  AppBehaviour = RouterDecorator(AppBehaviour);

  return AppBehaviour;
};
