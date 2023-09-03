import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from 'src/store';
import React from 'react';
import Routes from 'src/routes';
import {MobileWarning} from 'src/app/controllers/MobileWarning';

export const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <MobileWarning>
          <Routes />
        </MobileWarning>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
};
