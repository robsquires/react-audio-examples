import React, { Component } from 'react'

import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Demo</h1>
        <ul>
          <li><Link to='/audio'>audio</Link></li>
          <li><Link to='/play-block'>play block</Link></li>
          <li><Link to='/play-blocks'>play blocks</Link></li>
          {this.props.children}
        </ul>
      </div>
    );
  }
}
