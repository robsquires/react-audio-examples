## Play through

**Show playing through again**
   Playing through is an automation of pressing play at the right time
   Pressing play at the right time, is setting the playing state at the right time

1. In audio/video editting tools things center around THE PLAYHEAD

  Update constructor
  ```js

  playhead: 0,

  ```
  Show playhead in render
  ```js

  <button
    className="btn btn-success btn-lg"
    style={{ marginLeft: '10px'}}>{this.state.playhead.toFixed(2)}
  </button>

  ```

2. Increment the playhead on a timer

  Update playThrough
  ```js

  const start = new Date().getTime()


  this.interval = setInterval(() => {
    const elapsed = new Date().getTime() - start
    const inSeconds = elapsed / 1000

    this.setState({
      playhead: inSeconds
    })

  }, 100)

  ```
  **Press play**

  **Press playthrough more than once to show it keeps firing**

3. Stop the interval if one has started

  Add to playThrough
  ```js

  if (this.interval) {
    this.interval = clearInterval(this.interval)
    this.setState({ playhead: 0, playing: null })
    return
  }

  ```

4. Now we need to do trigger a play at the right time

  Specify when we want the blocks the play
  ```js

  blocks: [
    {
      src: tracks.track1,
      playAt: 1
    },
    {
      src: tracks.track2,
      playAt: 5
    },
    {
      src: tracks.track3,
      playAt: 10
    }
  ],

  ```

  Trigger a playAction when the playhead reaches the block
  ```js

    const blockIdx = this.state.blocks.findIndex(({ playAt }) => playAt === parseInt(inSeconds))
    this.setState({
      playhead: inSeconds,
      playing: blockIdx > -1 ? blockIdx : this.state.playing
    })

  ```

5. The playback is looping.
   This is because we are re-rendering all the blocks each time the playhead changes

   Another lifecycle hook to the rescue
   Add `shouldComponentUpdate` to the PlayBlock
   ```js

   shouldComponentUpdate(nextProps) {
     return nextProps.playing !== this.props.playing
   }

   ```

6. Playing forever, so add a time limit

  ```js

  if (elapsed >= 13000) {
    this.interval = clearInterval(this.interval)
    this.setState({ playhead: 0, playing: null })
    return
  }

  ```


7. Final flourish - Buttons still say playing

  Add onStop handler to  `PlayThrough.js`
  ```js

  onStop={() => this.playBlock(null)}

  ```

  Add onStop handler to Audio in `PlayBlock.js`
  ```js

  <Audio src={src} playing={playing} onStop={onStop} />

  ```

  Call onStop when the audio ends in `Audio.js`
  ```js

  constructor(props) {
    super(props)
    this.onStop = this.onStop.bind(this)
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('ended', this.onStop)
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('ended', this.onStop)
  }

  onStop() {
    this.props.onStop()
  }

  ```
