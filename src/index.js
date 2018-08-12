import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import store from './store';

import App from './App';

import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import 'semantic-ui-css/semantic.min.css';

// ReactDOM.render(<App />, document.getElementById('root'));
const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
