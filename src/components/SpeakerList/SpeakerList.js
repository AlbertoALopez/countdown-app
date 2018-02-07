import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrimarySpeaker from '../PrimarySpeaker/PrimarySpeaker';
import SecondarySpeaker from '../SecondarySpeaker/SecondarySpeaker';


class SpeakerList extends Component { //eslint-disable-line
  render() {
    return (
      <div>{this.props.speakers.map((speaker, index) => {
        if (index === 0) {
          return (
            <PrimarySpeaker
              key={Math.random()}
              fullName={speaker.fullName}
              region={speaker.region}
              secondsRemaining={this.props.speakerEndTime - (Date.now() / 1000)}
              warning={this.props.warning}
            />
          );
        }

        return <SecondarySpeaker key={Math.random()} fullName={speaker.fullName} region={speaker.region} />;
      })}</div>
    );
  }
}

SpeakerList.propTypes = {
  speakers: PropTypes.array.isRequired, // eslint-disable-line
  speakerEndTime: PropTypes.number.isRequired,
  warning: PropTypes.object.isRequired, // eslint-disable-line
};

export default SpeakerList;
