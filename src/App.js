import React, { Component } from 'react';
import './App.css';

import { Grommet } from 'grommet';

import Home from './components/Home';
import Nav from './components/Nav';
import PlaceBid from './components/PlaceBid';
import PostProject from './components/PostProject';

import { Router } from "@reach/router"

const theme = {
  global: {
    font: {
      size: '14px',
      height: '20px'
    }
  },
  formField: {
    border: false,
  }
};

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <div className="App">
          <Nav />
          <Router>
            <Home path="/" />
            <PostProject path="/post-project" />
            <PlaceBid path="/place-bid" />
          </Router>
        </div>
      </Grommet>
    );
  }
}

export default App;
