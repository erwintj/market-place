import React, { Component } from 'react';
import { Link } from '@reach/router';

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/post-project">Post Project</Link>
        <Link to="/place-bid">Place Bid</Link>
      </nav>
    );
  }
}

export default Nav;