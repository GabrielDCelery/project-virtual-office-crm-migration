import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const RouterDecorator = ToWrapComponent => {
  return props => (
    <Router>
      <ToWrapComponent {...props} />
    </Router>
  );
}