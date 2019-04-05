import React from 'react';
import { Box, Button, Text } from 'grommet';

const Nav = props => (
  <Box style={{
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2
  }}
    gridArea="header"
    align="center"
    direction="row"
    background="neutral-2"
    pad={{ horizontal: "medium", vertical: "small" }}
  >
    <h1>Self-Employed Market Place</h1>
    {
      props.isAuthenticated &&
      <div>
        <Button onClick={() => props.history.push('/home')}>
          <Box pad={{ horizontal: "medium", vertical: "small" }}>
            <Text>Home</Text>
          </Box>
        </Button>
        <Button onClick={() => props.history.push('/post-project')}>
          <Box pad={{ horizontal: "medium", vertical: "small" }}>
            <Text>Post Project</Text>
          </Box>
        </Button>
        <Button onClick={props.doLogout}>
          <Box pad={{ horizontal: "medium", vertical: "small" }}>
            <Text>Logout</Text>
          </Box>
        </Button>
      </div>
    }
  </Box>
);

export default Nav;