import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage, LoginPage, NotFoundPage, SignupPage } from '../pages';
import { Pages as TaskPages } from '../task';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/registration" component={SignupPage} />
    <Route path="/task" component={TaskPages} />
    <Route path="/not-found" component={NotFoundPage} />
    <Redirect to="/not-found" />
  </Switch>
);

export default App;
