import React, { PropTypes } from 'react';
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
