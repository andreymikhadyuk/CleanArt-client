import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

class Balloon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };
  }

  handleMouseOver = () => {
    this.setState({ isHovered: true });
  };

  handleMouseOut = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { down, children } = this.props;
    const { isHovered } = this.state;
    const downBalloon = down;

    const styles = {
      wrapper: 'balloon-wrapper',
      block: classNames('balloon-wrapper__balloon', {
        'balloon-wrapper__balloon_hidden': !isHovered,
        'balloon-wrapper__balloon_down': downBalloon,
      }),
    };

    return (
      <div className={styles.wrapper} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        {children}
        <div className={styles.block}>
          Эта информация будет доступна только выбранному исполнителю.
          Укажите здесь номер подъезда и квартиры, дополнительные контакты и пр.
        </div>
      </div>
    );
  }
}

Balloon.propTypes = {
  down: PropTypes.bool,
  children: PropTypes.node,
};

Balloon.defaultProps = {
  down: true,
};

export default Balloon;
