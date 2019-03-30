import React, { Component } from 'react';
import { Box, Heading } from 'grommet';

import Project from '../project';

class Home extends Component {
  render() {
    return (
      <>
        <Heading>Projects</Heading>
        <Box justify="between">
          {
            Object
              .keys(localStorage)
              .map((key, i) => {
                const data = JSON.parse(localStorage[key])

                return <Project data={data} key={i} />;
              })
          }
        </Box>
      </>
    )
  }
}

export default Home;