import React, { Component } from 'react'

import PlayBlock from './PlayBlock'

export default class Audio extends Component {

  constructor(props) {
    super(props)

    this.state = {
      blocks: [
        {
          src: 'https://s3-eu-west-1.amazonaws.com/newsrig/test/tmp/audio/2ace66dfacaa95cf59a31dc44e7b27b7098a838000f5ba6f64bfd51af0588e49.m4a'
        },
        {
          src: 'https://s3-eu-west-1.amazonaws.com/newsrig/test/tmp/audio/2ace66dfacaa95cf59a31dc44e7b27b7098a838000f5ba6f64bfd51af0588e49.m4a'
        },
        {
          src: 'https://s3-eu-west-1.amazonaws.com/newsrig/test/tmp/audio/2ace66dfacaa95cf59a31dc44e7b27b7098a838000f5ba6f64bfd51af0588e49.m4a'
        }
      ]
    }
  }

  render() {
    const blocks = this.state.blocks.map((block, idx) => {
      return (
        <PlayBlock src={block.src} key={idx}/>
      )
    })

    return (
      <div>
        {blocks}
      </div>
    );
  }
}
