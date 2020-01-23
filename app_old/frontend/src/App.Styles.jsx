import React from 'react';
//import styled from 'styled-components';

export default ToWrapComponent => {
  let AppStyles = props => {
    return <ToWrapComponent {...props} />;
  };

  return AppStyles;
};
