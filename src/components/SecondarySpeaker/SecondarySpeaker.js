import React from 'react';
import PropTypes from 'prop-types';

const SecondarySpeaker = props => (
  <div>
    <p>{props.fullName}</p>
    <span id="region-text">{props.region}</span>
  </div>
);

SecondarySpeaker.propTypes = {
  fullName: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default SecondarySpeaker;
