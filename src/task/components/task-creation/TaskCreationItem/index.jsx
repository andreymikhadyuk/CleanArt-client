import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

const TaskCreationItem = ({ title, completed, active, children, className }) => {
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
    <div className={styles.block}>
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
};

TaskCreationItem.defaultProps = {
  completed: false,
  active: false,
  children: 'Subtitle',
  className: '',
};

export default TaskCreationItem;
