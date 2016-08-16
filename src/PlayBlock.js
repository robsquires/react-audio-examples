import React, { Component } from 'react'
import Audio from './Audio'

import { track1 } from './files'

class PlayBlock extends Component {

  render() {
    const { playing, src, onClick } = this.props

    return (
      <div>

        <button
          className="btn btn-primary btn-lg"
          onClick={onClick}>
          { !playing ? 'Play' : 'Stop' }
        </button>

        <Audio playing={playing} src={src}/>

      </div>
    );
  }
}

export default PlayBlock
