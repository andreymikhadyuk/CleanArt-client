import React from 'react';
import { Separator } from 'components/common';
import TaskServiceSelection from '../../../containers/task-creation/TaskServiceSelection';
import TaskDetails from '../../../containers/task-creation/TaskDetails';
import './styles.scss';

const TaskCreationForm = () => {
  const separatorEl = <div className="task-creation-form__separator"><Separator /></div>

  return (
    <div className="task-creation-form">
      <TaskServiceSelection />
      {separatorEl}
      <TaskDetails />
    </div>
  );
}

export default TaskCreationForm;
