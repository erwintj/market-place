import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import PlaceBid from './components/PlaceBid';
import PostProject from './components/PostProject';

import { Router } from "@reach/router"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Home path="/" />
          <PostProject path="/post-project" />
          <PlaceBid path="/place-bid" />
        </Router>
      </div>
    );
  }
}

export default App;
