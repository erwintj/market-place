import React, { Component } from 'react';
import { Router } from "@reach/router"
import { Box, Grid, Grommet } from 'grommet';

import './App.css';

import Home from './components/home';
import Nav from './components/nav';
import PlaceBid from './components/place-bid';
import PostProject from './components/post-project';

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
        <Grid
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
            { name: "header", start: [0, 0], end: [1, 0] },
            { name: "main", start: [1, 1], end: [1, 1] }
          ]}
        >
          <Nav />
          <Box gridArea="main" align="center">
            <div className="App">
              <Router primary={false}>
                <Home path="/" />
                <PostProject path="/post-project" />
                <PlaceBid path="/place-bid/:id" />
              </Router>
            </div>
          </Box>
        </Grid>
      </Grommet>
    );
  }
}

export default App;
