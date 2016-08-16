import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Audio extends Component {

  componentDidUpdate() {
    if (this.props.playing) {
      this.getAudioEl().play()
    } else {
      this.getAudioEl().currentTime = 0
      this.getAudioEl().pause()
    }
  }

  getAudioEl() {
    return ReactDOM.findDOMNode(this)
  }

  render() {
    return (
      <audio refs='audio' src={this.props.src} playing={this.props.playing} />
    )
  }
}


export default Audio
