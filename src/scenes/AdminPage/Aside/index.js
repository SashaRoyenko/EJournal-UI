import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, MenuItem } from './styled';
import getMenuItems from './menuItems';

export default class Aside extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      menuItems: getMenuItems(props.matchPath),
    };
  }

  render() {
    const { menuItems } = this.state;
    return (
      <Wrapper>
        {
          menuItems.map(menuItem => (
            <MenuItem key={menuItem.id} to={menuItem.to}>{menuItem.title}</MenuItem>
          ))
        }
      </Wrapper>
    );
  }
}

Aside.propTypes = {
  matchPath: PropTypes.string,
};

Aside.defaultProps = {
  matchPath: '/',
};
