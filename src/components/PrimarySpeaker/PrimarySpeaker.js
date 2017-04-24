import React from 'react';
import PropTypes from 'prop-types';
import './PrimarySpeaker.css';

const PrimarySpeaker = props => (
  <div className="primary-speaker-container">
    <p>{props.fullName}</p>
    <span id="primary-speaker-region"><p>{props.region}</p></span>
    <div className={`time-warning ${props.timeWarning}`} />
  </div>
);

PrimarySpeaker.propTypes = {
  fullName: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  timeWarning: PropTypes.string.isRequired,
};

export default PrimarySpeaker;
