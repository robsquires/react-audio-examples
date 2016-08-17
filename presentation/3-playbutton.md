## Play buttons
Demo play buttons
1. Only want to be able to play 1 block at a time
 **Show the what `PlayBlockS` looks like**
  Removing state from PlayBlock makes this straightforward

  Remove constructor

  Convert everything to props inside `PlayBlock.js` render()
  ```js

  render() {
    const { src, playing, onClick } = this.props
    return (
      <div>
        <button
          className="btn btn-primary btn-lg"
          onClick={onClick}
          style={{ marginTop: '10px' }}>
          { !playing ? 'Play' : 'Stop' }
        </button>

        <Audio src={src} playing={playing} />
      </div>
    );
  }

  ```

2. Now that PlayBlock is pure, need to manage this state in PlayBlocks

  Add `playing` to the state
  ```js

  playing: 0

  ```
  Determine which block is playing when rendering the blocks
  ```js

  <PlayBlock
    key={idx}
    src={block.src}
    playing={idx === this.state.playing}
    />

  ```

3. PlayBlocks is now responsible for playing a block
  ```js

  playBlock(idx) {
    this.setState({ playing: idx })
  }

  ```
  Call onClick in the context of each block
  ```js

  <PlayBlock
    key={idx}
    src={block.src}
    playing={idx === this.state.playing}
    onClick={() => this.playBlock(idx)}
    />

  ```

4. Things still play together when press 2 buttons one after other
  Update `Audio.js` to stop the playback

  ```js

  const node = ReactDOM.findDOMNode(this)
  if (this.props.playing) {
    node.play()
  } else {
    node.currentTime = 0
    node.pause()
  }

  ```
