import React, { Component } from 'react'
import { track1 } from './files'

class PlayBlock extends Component {

  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    this.state = {
      playing: false
    }
  }

  onClick() {
    this.setState({ playing: !this.state.playing })
  }

  render() {

    return (
      <div>
        <button
          className="btn btn-primary btn-lg"
          onClick={this.onClick}
          style={{ marginTop: '10px' }}>
          { !this.state.playing ? 'Play' : 'Stop' }
        </button>


      </div>
    );
  }
}

export default PlayBlock
