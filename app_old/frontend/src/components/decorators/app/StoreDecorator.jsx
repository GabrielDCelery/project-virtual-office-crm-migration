import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

export const StoreDecorator = ToWrapComponent => {
  return props => (
    <Provider store={store.store}>
      <ToWrapComponent {...props} />
    </Provider>
  );
}