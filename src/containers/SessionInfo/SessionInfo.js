import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeakerList from '../../components/SpeakerList/SpeakerList';
import './SessionInfo.css';


const speakersObject = [
  {
    fullName: 'Meow',
    region: 'British Columbia',
  },
  {
    fullName: 'Woof',
    region: 'Atlantic',
  },
  {
    fullName: 'Caw',
    region: 'Ontario',
  },
];

class SessionInfo extends Component { //eslint-disable-line
  render() {
    return (
      <div className="session-info-container">
        <SpeakerList speakers={speakersObject} />
      </div>
    );
  }
}

SessionInfo.propTypes = {
  speakers: PropTypes.array.isRequired, //eslint-disable-line
};

export default SessionInfo;
