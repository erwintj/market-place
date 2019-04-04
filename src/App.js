import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Box, Grid, Grommet } from 'grommet';

import './App.css';

import Home from './components/home';
import Login from './components/login';
import Nav from './components/nav';
import PlaceBid from './components/place-bid';
import PostProject from './components/post-project';

import { logout } from './state/auth/actions';

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
          <Box gridArea="main" align="center">
            <Nav {...this.props} />
            <div className="App">
              <>
                {
                  this.props.isAuthenticated && (
                    <>
                      <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/post-project" component={PostProject} />
                        <Route path="/place-bid/:id" component={PlaceBid} />
                      </Switch>
                    </>
                  )
                }
                <Route path="/login" component={Login} />
              </>
            </div>
          </Box>
        </Grid>
      </Grommet>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch, props) => ({
  doLogout() {
    dispatch(logout());
    props.history.push('/login');
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
