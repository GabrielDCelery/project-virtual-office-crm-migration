import React from 'react';
import { connect } from 'react-redux';
import { actionLogoutUser } from '../../store';

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = { actionLogoutUser };

export default function LogoutPageStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
