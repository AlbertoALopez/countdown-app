import React, { Component, PropTypes } from 'react';
import Header from '../../components/Header/Header';
import SessionInfo from '../SessionInfo/SessionInfo';
import OnHold from '../../components/onHold';
// import base from '../../utils/helpers';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      session: [],
      speakers: [],
      activeSession: '1',
    };
  }

  componentWillMount() {
    // base.listenTo('Configuration', {
    //   context: this,
    //   then(configData) {
    //     if (configData.activeSessionId !== '' || !configData.activeSessionId) {
    //       base.listenTo(`Speakers/${configData.activeSessionId}`, {
    //         context: this,
    //         asArray: true,
    //         queries: {
    //           orderByChild: 'position',
    //           limitToFirst: 3,
    //         },
    //         then(speakers) {
    //           const fullInfo = [];

    //           const firebasePromise = new Promise((resolve) => { //eslint-disable-line
    //             Object.keys(speakers).forEach((key, index) => {
    //               base.fetch(`Delegates/${speakers[key].delegateId}`, {
    //                 context: this,
    //                 asArray: true,
    //                 then(data) {
    //                   fullInfo.push(Object.assign({}, data, speakers[key]));
    //                 },
    //               });

    //               if (index === 2) {
    //                 resolve(firebasePromise);
    //               }
    //             });
    //           }).then(() => {
    //             this.setState({
    //               speakers: fullInfo,
    //               activeSession: configData.activeSessionId,
    //             });
    //           });
    //         },
    //       });
    //     }

    //     else {
    //       this.setState({
    //         activeSession: false,
    //       });
    //     }
    //   },
    // });
  }

  render() {
    return (
      <div className="App">
        {this.state.activeSession ?
          <div>
            <Header activeSession={this.state.activeSession} />
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
