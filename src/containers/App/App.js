import React, { Component, PropTypes } from 'react';
import Header from '../../components/Header/Header';
import SessionInfo from '../SessionInfo/SessionInfo';
import OnHold from '../../components/onHold';
import base from '../../utils/helpers';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      session: [],
      speakers: [],
      activeSession: false,
      sessionName: '',
      speakerEndTime: 0,
      totalSpeakingTime: 0,
      warning: {},
    };
  }

  componentDidMount() {
    base.listenTo('Configuration', {
      context: this,
      then(configData) {
        this.setState({
          activeSession: configData.activeSessionId,
          speakerEndTime: configData.speakerEndTime,
          totalSpeakingTime: configData.totalSpeakingTime,
          warning: {
            amberWarningTime: configData.amberWarningTime,
            flashingRedWarningTime: configData.flashingRedWarningTime,
            redWarningTime: configData.redWarningTime,
          },
        });


        if (configData.activeSessionId !== '' || !configData.activeSessionId) {
          base.fetch(`Sessions/${configData.activeSessionId}`, {
            context: this,
            asArray: false,
            then(session) {
              this.setState({
                sessionName: session.name,
              });
            },
          });

          base.listenTo(`Speakers/${configData.activeSessionId}`, {
            context: this,
            asArray: true,
            queries: {
              orderByChild: 'position',
              limitToFirst: 3,
            },
            then(speakers) {
              const fullInfo = Object.assign([], speakers);
              this.setState({
                speakers: [],
              });

              speakers.forEach((speaker, index) => {
                if (speaker.onHold) {
                  return;
                }

                base.fetch(`Delegates/${speaker.delegateId}`, {
                  context: this,
                  asArray: false,
                  then(data) {
                    const tempSpeaker = fullInfo[index];

                    fullInfo[index] = Object.assign({}, tempSpeaker, data);

                    this.setState({
                      speakers: fullInfo,
                      activeSession: configData.activeSessionId,
                    });
                  },
                });
              });
            },
          });
        }
      },
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.activeSession ?
          <div>
            <Header activeSession={this.state.sessionName} />
            <SessionInfo
              warning={this.state.warning}
              totalSpeakingTime={this.state.totalSpeakingTime}
              speakers={this.state.speakers}
              speakerEndTime={this.state.speakerEndTime}
            />
          </div>
          :
          <OnHold />
        }
      </div>
    );
  }
}

App.propTypes = {
  activeSession: PropTypes.string.isRequired,
};

export default App;
