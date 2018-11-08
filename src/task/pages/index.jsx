import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import TaskCreationPage from './TaskCreationPage';

const TaskPages = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/create`} component={TaskCreationPage} />
    <Redirect to="/not-found" />
  </Switch>
);

TaskPages.propTypes = {
  match: PropTypes.object.isRequired,
};

export default TaskPages;
