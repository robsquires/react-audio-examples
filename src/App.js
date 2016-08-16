import React, { Component } from 'react'

import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>demo</h1>
        <div className='nav'>
          <ul className="nav nav-pills">
          <li><Link to='/audio'>1 audio element</Link></li>
          <li><Link to='/play-block'>2 play block</Link></li>
          <li><Link to='/play-blocks'>3 play blocks</Link></li>
          <li><Link to='/play-through'>4 play through</Link></li>
          </ul>
          <div className='row'>
            <div className='col-md-12'>
              <div style={{padding:'30px 0 0 30px'}}>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
