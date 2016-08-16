import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Audio from './Audio';
import PlayBlock from './PlayBlock';
import PlayBlocks from './PlayBlocks';

// using an ES6 transpiler, like babel
import { Router, Route, Link, browserHistory } from 'react-router'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/audio" component={Audio}/>
      <Route path="/play-block" component={PlayBlock}/>
      <Route path="/play-blocks" component={PlayBlocks}/>
    </Route>

  </Router>
), document.getElementById('root'));
