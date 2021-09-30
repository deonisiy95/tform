import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from 'src/auth/controllers/Login';
import SignUp from 'src/auth/controllers/SignUp';
import {history} from 'src/core/scripts/navigation';
import {useSelector} from 'react-redux';
import {selectIsAuth} from 'src/app/selectors';

export default function routesHandler() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path='/'>
          <div onClick={() => history.push('/login')}>Home</div>
        </PrivateRoute>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
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
