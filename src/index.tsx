import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'src/styles/index.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
