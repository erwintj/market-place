import React, { Component } from 'react';
import { Link } from '@reach/router';

import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/post-project">Post Project</Link>
      </nav>
    );
  }
}

export default Nav;