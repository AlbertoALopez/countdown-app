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
    };
  }

  componentDidMount() {
    base.listenTo('Configuration', {
      context: this,
      then(configData) {
        console.log(configData);

        this.setState({
          activeSession: configData.activeSessionId,
        });


        if (configData.activeSessionId !== '' || !configData.activeSessionId) {
          base.fetch(`Sessions/${configData.activeSessionId}/name`, {
            context: this,
            asArray: false,
            then(sessionName) {
              console.log(sessionName);
              this.setState({
                sessionName,
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
            <SessionInfo speakers={this.state.speakers} />
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
