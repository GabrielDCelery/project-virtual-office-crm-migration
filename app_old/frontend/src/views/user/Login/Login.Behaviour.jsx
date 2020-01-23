import React, { useCallback } from 'react';
import { UserLoginFormStoreDecorator, WithRouterDecorator } from 'components';
import _ from 'lodash';

export default ToWrapComponent => {
  let WrapperComponent = props => {
    const {
      actionLogin,
      actionSetUserLoginFormField,
      history,
      PATH_TO_DASHBOARD,
      stateUserLoginFormFieldGetter,
      stateIsUserLoginAjaxRequestInProgress
    } = props;

    const getters = {
      form: {
        ajaxInProgress: stateIsUserLoginAjaxRequestInProgress,
        email: stateUserLoginFormFieldGetter('email'),
        password: stateUserLoginFormFieldGetter('password')
      }
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      form: {
        setEmail: useCallback(
          event => {
            actionSetUserLoginFormField({
              what: 'email',
              value: event.target.value
            });
          },
          [actionSetUserLoginFormField]
        ),
        setPassword: useCallback(
          event => {
            actionSetUserLoginFormField({
              what: 'password',
              value: event.target.value
            });
          },
          [actionSetUserLoginFormField]
        ),
        submit: useCallback(
          event => {
            event.preventDefault();
            actionLogin(
              {
                email: stateUserLoginFormFieldGetter('email'),
                password: stateUserLoginFormFieldGetter('password')
              },
              () => {
                return history.push(PATH_TO_DASHBOARD);
              }
            );
          },
          [
            PATH_TO_DASHBOARD,
            actionLogin,
            history,
            stateUserLoginFormFieldGetter
          ]
        )
      }
    };

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    return (
      <ToWrapComponent
        {...{
          getter,
          handler
        }}
      />
    );
  };

  WrapperComponent = UserLoginFormStoreDecorator(WrapperComponent);
  WrapperComponent = WithRouterDecorator(WrapperComponent);

  return WrapperComponent;
};
