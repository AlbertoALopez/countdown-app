import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => (
  <div className="app-header">
    <p>{props.sessionName}</p>
  </div>
);

Header.propTypes = {
  sessionName: PropTypes.string.isRequired,
};

export default Header;
