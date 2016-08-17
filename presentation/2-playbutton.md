## Play button

1. Simple react component that toggles a button between playing + stopped
  How might our audio component integrate?

  Import the Audio component
  ```js

  import Audio from './Audio'

  ```
  Add to render function
  ```js

  <Audio playing={this.state.playing} />

  ```

**If voice plays, set `playing:false` in Audio.js**

2. Now need to go into Audio and make some changes
Turning this from a `Stateful component` into a `Pure component`
**Remember to change the viewer to Audio.js**

  Convert state to props
  ```js

  componentDidMount() {
    if (this.props.playing) {
      ReactDOM.findDOMNode(this).play()
    }
  }

  ```
  Remove constructor all together

3. Still wont play because because action is being taken once, when it mounts

  Convert componentDidMount -> componentDidUpdate
  ```js

  componentDidUpdate() {
    if (this.props.playing) {
      ReactDOM.findDOMNode(this).play()
    }
  }

  ```

4. Finally make this totally pure by removing that hardcoded state from the render function

  Remove hardcoded in `Audio.js`
  ```js

  <audio src={this.props.src}/>

  ```

  Set pass src to Audio in `PlayBlock.js`
  ```js

  <Audio src={this.state.src} playing={this.state.playing} />

  ```

  ```js
  this.state = {
    playing: true,
    src: track1
  }

  ```

**This should play as before, move on**
