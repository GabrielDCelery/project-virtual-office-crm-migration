import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

import AppBehaviour from './App.Behaviour';
import AppStyles from './App.Styles';
import AppView from './App.View';

const App = AppBehaviour(AppStyles(AppView));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
