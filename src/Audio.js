import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { track1 } from './files'

class Audio extends Component {

  constructor(props) {
    super(props)

    this.state = {
      src: track1,
      playing: false // set this 'true' to play on component mount
    }
  }

  componentDidMount() {
    if (this.state.playing) {
      ReactDOM.findDOMNode(this).play()
    }
  }

  render() {
    return (
      <audio refs='audio' src={this.state.src}/>
    )
  }
}

export default Audio
