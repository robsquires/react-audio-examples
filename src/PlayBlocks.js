import React, { Component } from 'react'

import PlayBlock from './PlayBlock'

import { track1, track2, track3, track4 } from './files'

export default class Audio extends Component {

  constructor(props) {
    super(props)

    this.state = {
      blocks: [
        {
          src: track1
        },
        {
          src: track2
        },
        {
          src: track3
        },
        {
          src: track4
        }
      ],
      playing: null
    }
  }

  setPlaying(idx) {
    this.setState({ playing: idx })
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
        {blocks}
      </div>
    );
  }
}
