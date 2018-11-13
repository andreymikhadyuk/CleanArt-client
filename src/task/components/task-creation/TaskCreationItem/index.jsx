import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

const TaskCreationItem = ({ title, completed, active, children, className, onClick }) => {
  const styles = {
    block: classNames('task-creation-item', {
      'task-creation-item_completed': completed,
      'task-creation-item_active': !completed && active,
    }, className),
    title: 'task-creation-item__title',
    content: 'task-creation-item__content',
    completeIcon: 'task-creation-item__complete-icon',
  };
  const renderContent = completed || active;

  return (
    <div className={styles.block} onClick={onClick} role="presentation">
      <div className={styles.title}>
        {title}
        {completed && <FontAwesomeIcon className={styles.completeIcon} icon="check" />}
      </div>
      {renderContent && children && <div className={styles.content}>{children}</div>}
    </div>
  );
};

TaskCreationItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.node,
  onClick: PropTypes.func,
};

TaskCreationItem.defaultProps = {
  completed: false,
  active: false,
  children: 'Subtitle',
  className: '',
  onClick: null,
};

export default TaskCreationItem;
