import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import store from 'src/store';
import 'src/styles/index.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
