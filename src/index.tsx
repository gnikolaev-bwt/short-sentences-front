import React from 'react';
import ReactDOM from 'react-dom';

import 'src/styles/index.css';

import { AppRouter } from 'src/components/templates';
import { Provider } from 'react-redux';
import { store } from 'src/store';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
