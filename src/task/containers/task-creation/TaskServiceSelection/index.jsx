import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskServiceSelection from '../../../components/task-creation/TaskServiceSelection';
import { selectService, cleanSelectedService } from '../../../actions/serviceSelection';

class TaskServiceSelectionContainer extends Component {
  handleSectionClick = () => {
    if (this.props.isCompleted) {
      this.props.cleanSelectedService();
    }
  };

  handleChange = (selectedService) => {
    const serviceId = selectedService ? selectedService.value : null;
    this.props.selectService(serviceId);
  };

  render() {
    const { services, isCompleted, serviceId } = this.props;
    const props = {
      services,
      selectedServiceId: serviceId,
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
  isCompleted: PropTypes.bool.isRequired,
  serviceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectService: PropTypes.func.isRequired,
  cleanSelectedService: PropTypes.func.isRequired,
};

TaskServiceSelectionContainer.defaultProps = {
  serviceId: null,
};

const mapStateToProps = ({ services, task: { serviceSelection } }) => ({
  services,
  ...serviceSelection,
});

const mapDispatchToProps = {
  selectService,
  cleanSelectedService,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskServiceSelectionContainer);
