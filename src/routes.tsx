import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectIsAuth, selectAuthLoading} from 'src/auth/selectors';
import {history} from 'src/core/scripts/navigation';
import App from 'src/app/controllers/App';
import Login from 'src/auth/controllers/Login';
import SignUp from 'src/auth/controllers/SignUp';
import DashBoard from 'src/dashboard/controllers';

function Basis() {
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectAuthLoading);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!isAuth) {
    return <Redirect to={'/login'} />;
  }

  return (
    <App>
      <PrivateRoute path='/dashboard'>
        <DashBoard />
      </PrivateRoute>
      <PrivateRoute path='/home'>
        <div>HOMe</div>
      </PrivateRoute>
    </App>
  );
}

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
        <Route path='/'>
          <Basis />
        </Route>
      </Switch>
    </Router>
  );
}

function PrivateRoute({children, ...args}) {
  const isAuth = useSelector(selectIsAuth);

  return (
    <Route
      {...args}
      render={({location}) =>
        isAuth ? (
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
