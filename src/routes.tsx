import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectIsAuth} from 'src/auth/selectors';
import {history} from 'src/core/scripts/navigation';
import App from 'src/app/controllers/App';
import Login from 'src/auth/controllers/Login';
import SignUp from 'src/auth/controllers/SignUp';
import DashBoard from 'src/dashboard/controllers';

export default function routesHandler() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={'/login'}>
          <Login />
        </Route>
        <Route path={'/signup'}>
          <SignUp />
        </Route>
        <Redirect exact from='/' to='/dashboard' />
        <PrivateRoute path='/'>
          <App>
            <PrivateRoute path='/dashboard'>
              <DashBoard />
            </PrivateRoute>
            <PrivateRoute path='/home'>
              <div>HOMe</div>
            </PrivateRoute>
          </App>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

function PrivateRoute({children, ...args}) {
  const auth = useSelector(selectIsAuth);

  return (
    <Route
      {...args}
      render={({location}) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location}
            }}
          />
        )
      }
    />
  );
}
