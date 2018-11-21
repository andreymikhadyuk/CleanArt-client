import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCityByValue } from 'helpers/cityHelper';
import TaskAddress from '../../../components/task-creation/TaskAddress';
import { updateAddress } from '../../../actions/address';

class TaskAddressContainer extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.updateAddress({
      ...this.props.address,
      [name]: value,
    });
  };

  handleCityChange = (cityOption) => {
    if (!cityOption) return;
    this.props.updateAddress({
      ...this.props.address,
      city: cityOption.value,
    });
  };

  render() {
    const { address: { city, street }, isServiceSelectionCompleted } = this.props;
    const props = {
      isActive: isServiceSelectionCompleted,
      city: getCityByValue(city),
      street,
      handleChange: this.handleChange,
      handleCityChange: this.handleCityChange,
    };

    return (
      <TaskAddress {...props} />
    );
  }
}

TaskAddressContainer.propTypes = {
  isServiceSelectionCompleted: PropTypes.bool.isRequired,
  address: PropTypes.object.isRequired,
  updateAddress: PropTypes.func.isRequired,
};

const mapStateToProps = ({ task: { serviceSelection, address } }) => ({
  isServiceSelectionCompleted: serviceSelection.isCompleted,
  address,
});

const mapDispatchToProps = {
  updateAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskAddressContainer);
