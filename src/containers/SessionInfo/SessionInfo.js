import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeakerList from '../../components/SpeakerList/SpeakerList';
import './SessionInfo.css';


class SessionInfo extends Component { //eslint-disable-line
  render() {
    return (
      <div className="session-info-container">
        <SpeakerList
          speakerEndTime={this.props.speakerEndTime}
          speakers={this.props.speakers}
          warning={this.props.warning}
          totalSpeakingTime={this.props.totalSpeakingTime}
        />
      </div>
    );
  }
}

SessionInfo.propTypes = {
  speakers: PropTypes.array.isRequired, //eslint-disable-line
  speakerEndTime: PropTypes.number.isRequired,
  warning: PropTypes.object.isRequired, //eslint-disable-line
  totalSpeakingTime: PropTypes.number.isRequired,
};

export default SessionInfo;
