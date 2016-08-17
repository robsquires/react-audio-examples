## Basic audio Component

1. An Audio element can be initiated via JS or declaratively using HTML
   What would this look like as simple React component?

```javascript
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { track1 } from './files'

class Audio extends Component {

  render() {
    return (
      <audio src={track1}/>
    )
  }
}

export default Audio
```


2. Add state to declare whether the audio should be play or not

```javascript
constructor(props) {
  super(props)

  this.state = {
    playing: true
  }
}
```

3. LifeCycle callback to do something based on this state

```javascript
componentDidMount() {
  if (this.state.playing) {
    ReactDOM.findDOMNode(this).play()
  }
}
```
4. Tweak playing by setting the state
