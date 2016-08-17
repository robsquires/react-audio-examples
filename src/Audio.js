import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { track1 } from './files'

class Audio extends Component {

  constructor(props) {
    super(props)
  }


  shouldComponentUpdate(nextProps) {
    return nextProps.playing !== this.props.playing
  }

  componentDidMount() {
    if (this.props.playing) {
      ReactDOM.findDOMNode(this).play()
    }
  }

  componentDidUpdate() {
    if (this.props.playing) {
      ReactDOM.findDOMNode(this).play()
    } else {
      ReactDOM.findDOMNode(this).currentTime = 0
      ReactDOM.findDOMNode(this).pause()
    }
  }

  render() {
    return (
      <audio refs='audio' src={this.props.src}/>
    )
  }
}

export default Audio
