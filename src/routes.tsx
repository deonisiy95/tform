import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from 'src/signin/controllers/SignIn';

export default function routesHandler() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div>Home</div>
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}
