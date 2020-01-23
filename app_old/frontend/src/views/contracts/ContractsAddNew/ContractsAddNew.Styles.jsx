import React from 'react';
//import styled from 'styled-components';

export default ToWrapComponent => {
  let ContractsAddNewStyles = props => {
    return <ToWrapComponent {...props} />;
  };

  return ContractsAddNewStyles;
};
