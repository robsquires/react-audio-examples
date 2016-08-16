import React, { Component } from 'react'
import Audio from './Audio'

import { track1 } from './files'

class PlayBlock extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playing: true,
      src: track1
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({ playing: !this.state.playing })
  }

  render() {
    const { playing, src } = this.state

    return (
      <div>

        <button
          className="btn btn-primary btn-lg"
          onClick={this.onClick.bind(this)}>
          { !playing ? 'Play' : 'Stop' }
        </button>

        <Audio playing={playing} src={src}/>

      </div>
    );
  }
}

export default PlayBlock
