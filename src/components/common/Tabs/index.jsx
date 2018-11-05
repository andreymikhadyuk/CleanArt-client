import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import get from 'lodash/get';
import TabPane from './TabPane';
import './styles.scss';

const getTabsChildren = children => React.Children.toArray(children).filter(child => child.type === TabPane);

const TabTitle = ({ tab, isActive, onChange }) => {
  const props = {
    className: classNames('tab-title', {
      'tab-title_not-active': !isActive,
    }),
    onClick: onChange,
  };

  return (
    <div {...props}>
      <span className="tab-title__text">{tab.props.title}</span>
    </div>
  );
};

const TabTitles = ({ tabs, activeKey, onChange }) => {
  return (
    <div className="tab-titles">
      {tabs.map((tab) => {
        const props = {
          key: tab.key,
          tab,
          isActive: tab.key === activeKey,
          onChange: () => onChange(tab),
        };

        return (
          <TabTitle {...props} />
        );
      })}
    </div>
  );
};

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: '',
    };
  }

  handleChangeTab = (tab) => {
    if (tab.key !== this.state.activeKey) {
      this.setState({ activeKey: tab.key });
    }
  };

  render() {
    const { children, defaultActiveKey } = this.props;
    const tabsChildren = getTabsChildren(children);
    if (tabsChildren.length === 0) {
      return null;
    }
    const activeKey = this.state.activeKey || defaultActiveKey || tabsChildren[0].key;
    const activeTabChild = tabsChildren.find(tab => tab.key === activeKey);
    const childDataToDisplay = get(activeTabChild, 'props.children');
    return (
      <div className="tabs">
        <TabTitles
          tabs={tabsChildren}
          activeKey={activeKey}
          onChange={this.handleChangeTab}
        />
        {childDataToDisplay}
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  defaultActiveKey: PropTypes.string,
};

Tabs.defaultProps = {
  defaultActiveKey: '',
};

export default Tabs;
