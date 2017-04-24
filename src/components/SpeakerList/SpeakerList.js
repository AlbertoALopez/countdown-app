import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrimarySpeaker from '../PrimarySpeaker/PrimarySpeaker';
import SecondarySpeaker from '../SecondarySpeaker/SecondarySpeaker';


class SpeakerList extends Component { //eslint-disable-line
  render() {
    // Object.keys(this.props.speakers.forEach((key) => {
    //   console.log(key);
    // }));
    // console.log(this.props.speakers);
    // this.props.speakers.forEach(() => {
    //   console.log('kek');
    // });
    return (
      <div>{this.props.speakers.map((speaker, index) => {
        if (index === 0) {
          return <PrimarySpeaker key={Math.random()} fullName={speaker.fullName} region={speaker.region} secondsRemaining={31} />;
        }

        return <SecondarySpeaker key={Math.random()} fullName={speaker.fullName} region={speaker.region} />;
      })}</div>
    );
  }
}

SpeakerList.propTypes = {
  speakers: PropTypes.array.isRequired, // eslint-disable-line
};

export default SpeakerList;
