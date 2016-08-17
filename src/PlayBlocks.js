import React, { Component } from 'react'
import PlayBlock from './PlayBlock'
import * as tracks from './files'

export default class Audio extends Component {

  constructor(props) {
    super(props)

    this.state = {
      blocks: [
        {
          src: tracks.track1
        },
        {
          src: tracks.track2
        },
        {
          src: tracks.track3
        }
      ]
    }

  }

  render() {
    const blocks = this.state.blocks.map((block, idx) => {
      return (
        <PlayBlock
          key={idx}
          src={block.src}
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
