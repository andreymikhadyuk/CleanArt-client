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
    };
  }

  handleChange = (selectedService) => {
    this.setState({ selectedService });
  };

  render() {
    return (
      <TaskServiceSelection
        services={services}
        selectedService={this.state.selectedService}
        onChange={this.handleChange}
      />
    );
  }
}

export default TaskServiceSelectionContainer;
