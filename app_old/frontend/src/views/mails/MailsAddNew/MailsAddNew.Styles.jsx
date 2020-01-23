import React from 'react';
//import styled from 'styled-components';

export default ToWrapComponent => {
  let MailsAddNewStyles = props => {
    return <ToWrapComponent {...props} />;
  };

  return MailsAddNewStyles;
};
