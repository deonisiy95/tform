import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from 'src/store';
import React from 'react';
import Routes from 'src/routes';

export const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
};
