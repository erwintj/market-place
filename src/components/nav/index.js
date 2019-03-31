import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { Box, Button, Text } from 'grommet';

class Nav extends Component {

  render() {
    return (
      <>
        <Box style={{
          backgroundColor: '#ffffff',
          position: 'fixed',
          top: 0,
          width: '100%'
        }}
          gridArea="header"
          align="center"
          direction="row"
          pad={{ horizontal: "medium", vertical: "small" }}
        >
          <h1>Self-Employed Market Place</h1>
          <Button onClick={() => navigate('/')}>
            <Box pad={{ horizontal: "medium", vertical: "small" }}>
              <Text>Home</Text>
            </Box>
          </Button>
          <Button onClick={() => navigate('/post-project')}>
            <Box pad={{ horizontal: "medium", vertical: "small" }}>
              <Text>Post Project</Text>
            </Box>
          </Button>
        </Box>
      </>
    );
  }
}

export default Nav;