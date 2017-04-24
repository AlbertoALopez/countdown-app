import React from 'react';
import PropTypes from 'prop-types';
import PrimarySpeaker from '../PrimarySpeaker/PrimarySpeaker';
import SecondarySpeaker from '../SecondarySpeaker/SecondarySpeaker';


const SpeakerList = props => (
  <div>
    <PrimarySpeaker
      fullName={props.speakers[0].fullName}
      region={props.speakers[0].region}
      timeWarning={props.speakers[0].timeWarning}
    />
    <SecondarySpeaker
      fullName={props.speakers[1].fullName}
      region={props.speakers[1].region}
    />
    <SecondarySpeaker
      fullName={props.speakers[2].fullName}
      region={props.speakers[2].region}
    />
  </div>
);

SpeakerList.propTypes = {
  speakers: PropTypes.object.isRequired, // eslint-disable-line
};

export default SpeakerList;
