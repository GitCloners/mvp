import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AceEditor from 'react-ace';

class App extends Component {
  render() {
    return (
      <div>
        <AceEditor mode="javascript" />
        Output:
        <div></div>
      </div>
    );
  }
}

export default App;
