import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskServiceSelection from '../../../components/task-creation/TaskServiceSelection';

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
    const { services } = this.props;
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

TaskServiceSelectionContainer.propTypes = {
  services: PropTypes.array.isRequired,
};

const mapStateToProps = ({ services }) => ({
  services,
});

export default connect(mapStateToProps)(TaskServiceSelectionContainer);
