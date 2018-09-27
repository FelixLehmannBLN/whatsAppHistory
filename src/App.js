import React, { Component } from 'react';

import Bubble from './components/bubble';
import Chat from './components/chat';

class App extends Component {
  render() {
    return (
      <Chat>
        <Bubble me name='Felix' time='19:30' text='This is a really nice chat experience' />
        <Bubble name='Gabriel' time='19:31' text='Yes, i think so too' />
      </Chat>
    );
  }
}

export default App;
