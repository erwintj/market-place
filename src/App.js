import React, { Component } from 'react';
import './App.css';

import { Grommet } from 'grommet';

import Home from './components/home';
import Nav from './components/nav';
import PlaceBid from './components/place-bid';
import PostProject from './components/post-project';

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
            <PlaceBid path="/place-bid/:id" />
          </Router>
        </div>
      </Grommet>
    );
  }
}

export default App;
