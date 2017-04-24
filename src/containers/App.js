import React from 'react';
import Header from '../components/Header/Header';
import SessionInfo from './SessionInfo/SessionInfo';
import './App.css';

const App = () => (
  <div className="App">
    <Header sessionName="Session Name" />
    <SessionInfo />
  </div>
);

export default App;
