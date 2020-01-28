import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {};

export default function AddContractStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
