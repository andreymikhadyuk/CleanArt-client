import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskDetails from '../../../components/task-creation/TaskDetails';
import { updateDetails } from '../../../actions/details';

class TaskDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confidentialDataOpened: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.updateDetails({
      ...this.props.details,
      [name]: value,
    });
  };

  handleConfidentialDataToggle = () => {
    const { confidentialDataOpened } = this.state;
    this.setState({ confidentialDataOpened: !confidentialDataOpened });
  };

  render() {
    const { details: { taskName, taskDescription, confidentialData }, isServiceSelectionCompleted } = this.props;
    const { confidentialDataOpened } = this.state;
    const props = {
      isActive: isServiceSelectionCompleted,
      taskName,
      taskDescription,
      confidentialData,
      confidentialDataOpened,
      handleChange: this.handleChange,
      toggleConfidentialDataInput: this.handleConfidentialDataToggle,
    };

    return (
      <TaskDetails {...props} />
    );
  }
}

TaskDetailsContainer.propTypes = {
  isServiceSelectionCompleted: PropTypes.bool.isRequired,
  details: PropTypes.object.isRequired,
  updateDetails: PropTypes.func.isRequired,
};

TaskDetailsContainer.defaultProps = {
};

const mapStateToProps = ({ task: { serviceSelection, details } }) => ({
  isServiceSelectionCompleted: serviceSelection.isCompleted,
  details,
});

const mapDispatchToProps = {
  updateDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailsContainer);
