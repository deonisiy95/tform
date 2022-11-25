import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

history.listen((location) => {
  console.log('location', location);
});

export const navigate = (path: string) => {
  history.push(path);
};
