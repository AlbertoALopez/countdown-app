import React, { Component } from 'react';
import SpeakerList from '../../components/SpeakerList/SpeakerList';
import './SessionInfo.css';


const speakerObject = {
  0: {
    fullName: 'Meow Meow',
    region: 'Ontario',
    timeWarning: 'amber',
  },
  1: {
    fullName: 'Woof Woof',
    region: 'Saskatchewan',
  },
  2: {
    fullName: 'Caw Caw',
    region: 'British Coumbia',
  },
};

class SessionInfo extends Component { //eslint-disable-line
  render() {
    return (
      <div className="session-info-container">
        <SpeakerList speakers={speakerObject} />
      </div>
    );
  }
}

export default SessionInfo;
