import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage, NotFoundPage } from '../pages';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default App;
