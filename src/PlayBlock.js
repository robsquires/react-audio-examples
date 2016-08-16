import React, { Component } from 'react'
import Audio from './Audio'

class PlayBlock extends Component {

  constructor(props) {
    super(props)
    // debugger
    this.state = {
      playing: true,
      src: ''
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
        <button onClick={this.onClick}>{ !playing ? 'Play' : 'Stop' }</button>
        <Audio playing={playing} src={src}/>
      </div>
    );
  }
}

export default PlayBlock
