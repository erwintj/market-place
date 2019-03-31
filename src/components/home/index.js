import React, { Component } from 'react';
import { Grid } from 'grommet';

import Project from '../project';

class Home extends Component {
  render() {
    return (
      <Grid columns={{ count: 3, size: 'auto' }}>
        {
          Object
            .keys(localStorage)
            .map((key, i) => {
              const data = JSON.parse(localStorage[key])

              return <Project data={data} key={i} />;
            })
        }
      </Grid>
    )
  }
}

export default Home;