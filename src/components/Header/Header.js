import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => (
  <div className="app-header">
    <p>{props.activeSession}</p>
  </div>
);

Header.propTypes = {
  activeSession: PropTypes.string.isRequired,
};

export default Header;
