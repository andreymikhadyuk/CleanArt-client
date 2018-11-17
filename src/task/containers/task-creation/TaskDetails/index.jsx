import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskDetails from '../../../components/task-creation/TaskDetails';
import { updateDetails } from '../../../actions/details';

class TaskDetailsContainer extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.updateDetails({
      ...this.props.details,
      [name]: value,
    });
  };

  render() {
    const { details: { taskName } } = this.props;
    const props = {
      taskName,
      handleChange: this.handleChange,
    };

    return (
      <TaskDetails {...props} />
    );
  }
}

TaskDetailsContainer.propTypes = {
  details: PropTypes.object.isRequired,
  updateDetails: PropTypes.func.isRequired,
};

TaskDetailsContainer.defaultProps = {
};

const mapStateToProps = ({ task: { details } }) => ({
  details,
});

const mapDispatchToProps = {
  updateDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailsContainer);
