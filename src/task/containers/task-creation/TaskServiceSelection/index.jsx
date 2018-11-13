import React, { Component } from 'react';
import TaskServiceSelection from '../../../components/task-creation/TaskServiceSelection';

const services = [
  { id: 1, name: 'Уборка квартир' },
  { id: 2, name: 'Генеральная уборка' },
];

class TaskServiceSelectionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedService: null,
      isCompleted: false,
    };
  }

  handleSectionClick = () => {
    if (this.state.isCompleted) {
      this.setState({ selectedService: null, isCompleted: false });
    }
  };

  handleChange = (selectedService) => {
    const isCompleted = selectedService !== null;
    this.setState({ selectedService, isCompleted });
  };

  render() {
    const { selectedService, isCompleted } = this.state;
    const props = {
      services,
      selectedService,
      isCompleted,
      onChange: this.handleChange,
      onClick: this.handleSectionClick,
    };

    return (
      <TaskServiceSelection {...props} />
    );
  }
}

export default TaskServiceSelectionContainer;
