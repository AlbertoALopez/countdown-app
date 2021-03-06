import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PrimarySpeaker.css';

class PrimarySpeaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      timeWarning: '',
      secondsRemaining: 0,
    };
  }

  componentDidMount() {
    this.setState({ //eslint-disable-line
      secondsRemaining: this.props.secondsRemaining,
    });
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1,
    });

    if (this.state.secondsRemaining > this.props.warning.amberWarningTime) {
      this.setState({
        timeWarning: 'green',
      });
    }

    else if (this.state.secondsRemaining <= this.props.warning.amberWarningTime &&
        this.state.secondsRemaining > this.props.warning.redWarningTime) {
      this.setState({
        timeWarning: 'amber',
      });
    }

    else if (this.state.secondsRemaining <= this.props.warning.redWarningTime &&
             this.state.secondsRemaining > this.props.warning.flashingRedWarningTime) {
      this.setState({
        timeWarning: 'red',
      });
    }

    else if (this.state.secondsRemaining <= this.props.warning.flashingRedWarningTime) {
      clearInterval(this.interval);
      this.setState({
        timeWarning: 'flashing-red',
      });
    }
  }

  render() {
    return (
      <div className="primary-speaker-container">
        <p>{this.props.fullName}</p>
        <span id="primary-speaker-region"><p>{this.props.region}</p></span>
        <div className={`time-warning ${this.state.timeWarning}`} />
      </div>
    );
  }
}

PrimarySpeaker.propTypes = {
  fullName: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  secondsRemaining: PropTypes.number.isRequired,
  warning: PropTypes.object.isRequired, // eslint-disable-line
};

export default PrimarySpeaker;
