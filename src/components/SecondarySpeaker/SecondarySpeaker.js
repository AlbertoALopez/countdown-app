import React from 'react';
import PropTypes from 'prop-types';
import './SecondarySpeaker.css';

const SecondarySpeaker = props => (
  <div className="secondary-speaker">
    <p>{props.fullName}</p>
    <p className="secondary-region">{props.region}</p>
  </div>
);

SecondarySpeaker.propTypes = {
  fullName: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default SecondarySpeaker;
