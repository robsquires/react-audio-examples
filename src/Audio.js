import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { track1 } from './files'

class Audio extends Component {

  render() {
    return (
      <audio src={track1}/>
    )
  }
}

export default Audio
