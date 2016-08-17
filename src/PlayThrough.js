import React, { Component } from 'react'

import PlayBlock from './PlayBlock'

import { track1, track2, track3, track4 } from './files'

export default class Audio extends Component {

  constructor(props) {
    super(props)

    this.playThrough = this.playThrough.bind(this)

    this.state = {
      blocks: [
        {
          src: track1,
          playAt: 1
        },
        {
          src: track2,
          playAt: 5
        },
        {
          src: track3,
          playAt: 8
        },
        {
          src: track4,
          playAt: 10
        }
      ],
      playing: null,
      timer: 0
    }
  }

  setPlaying(idx) {
    this.setState({ playing: idx })
  }

  playThrough() {
    const start = new Date().getTime()
    const limit = 15000

    if (this.interval) {
      this.setState({ timer: 0 }, () => this.interval = clearInterval(this.interval))
      return
    }

    this.interval = setInterval(() => {
      const elapsed = new Date().getTime() - start

      if (elapsed >= limit) {
         this.setState({ timer: 0 }, () => this.interval = clearInterval(this.interval))
      }

      const inSeconds = elapsed / 1000
      const blockIdx = this.state.blocks.findIndex(({ playAt }) => playAt === parseInt(inSeconds))
      this.setState({
        timer: inSeconds.toFixed(2),
        playing: blockIdx > -1 ? blockIdx : this.state.playing
      })

    }, 100)
  }

  render() {
    const blocks = this.state.blocks.map((block, idx) => {
      return (
        <PlayBlock
          src={block.src}
          key={idx}
          onClick={() => this.setPlaying(idx)}
          playing={ idx === this.state.playing }
          />
      )
    })

    return (
      <div>
        <button
          className="btn btn-primary btn-lg"
          onClick={this.playThrough}>Play Through : {this.state.timer}</button>
        {blocks}
      </div>
    );
  }
}
