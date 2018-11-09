import React from 'react';
import TaskServiceSelection from '../../../containers/task-creation/TaskServiceSelection';
import './styles.scss';

const TaskCreationForm = () => (
  <div className="task-creation-form">
    <TaskServiceSelection />
  </div>
);

export default TaskCreationForm;
