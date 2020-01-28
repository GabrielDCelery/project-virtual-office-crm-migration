import React from 'react';
import { connect } from 'react-redux';
import { actionLoginUser } from '../../store';

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = { actionLoginUser };

export default function LoginPageStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
