import React from 'react';
import PageWrapper from 'containers/PageWrapper';
import TaskCreationForm from '../../containers/TaskCreationForm';
import './styles.scss';

const TaskCreationPage = () => (
  <PageWrapper>
    <div className="task-creation-page">
      <div className="task-creation-page__task-creation-form">
        <TaskCreationForm />
      </div>
    </div>
  </PageWrapper>
);

export default TaskCreationPage;
