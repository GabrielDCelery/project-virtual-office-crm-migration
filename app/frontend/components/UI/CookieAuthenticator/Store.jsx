import React from 'react';
import { connect } from 'react-redux';
import { actionAuthenticateUserByCookie } from '../../../store';

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  actionAuthenticateUserByCookie
};

export default function CookieAuthenticatorStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
