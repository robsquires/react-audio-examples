import React, { Component } from 'react'
import PlayBlock from './PlayBlock'
import * as tracks from './files'

export default class Audio extends Component {

  constructor(props) {
    super(props)

    this.playThrough = this.playThrough.bind(this)

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
      ],
      playing: null
    }
  }

  playBlock(idx) {
    this.setState({ playing: idx })
  }

  playThrough() {
    alert('WIP')

  }

  render() {
    const blocks = this.state.blocks.map((block, idx) => {
      return (
        <PlayBlock
          key={idx}
          src={block.src}
          playing={idx === this.state.playing}
          onClick={() => this.playBlock(idx)}
          />
      )
    })

    return (
      <div>

        <button
        className="btn btn-primary btn-lg"
        onClick={this.playThrough}>Play Through</button>

        <div style={{margin: '10px 0 0 30px'}}>
          {blocks}
        </div>
      </div>
    );
  }
}
