import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Text } from 'grommet';

import Project from '../project';

class Home extends Component {
  render() {
    return (
      <Grid columns={{ count: 3, size: 'auto' }}>
        {
          this.props.projects.length < 1
            ? <Text style={{ paddingTop: '2rem' }}>No projects available at this time.<br />Click <Link to="post-project">here</Link> to create one now.</Text>
            : this.props.projects.map((project, i) => <Project data={project} key={i} />)
        }
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps)(Home);