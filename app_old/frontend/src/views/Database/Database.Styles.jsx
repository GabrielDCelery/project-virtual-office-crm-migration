import React from 'react';

export default ToWrapComponent => {
  let DatabaseStyles = props => {
    return <ToWrapComponent {...props} />;
  };

  return DatabaseStyles;
};
