import React, { Component } from 'react';

import Bubble from './components/bubble';
import Wrapper from './components/chat';
import chat from './assets/_chat.json';

const dayOne = Object.keys(chat)[0];
const messageTimes = Object.keys(chat[dayOne]);

class App extends Component {
  render() {
    return (
      <Wrapper>
        {dayOne}
        {renderBubbles()}
      </Wrapper>
    );
  }
}

export default App;

function renderBubbles() {
  return messageTimes.map(time => {
    console.log(time)
    const me = chat[dayOne][time]['author'] === 'Felix';
     return <Bubble key={`${dayOne}${time}`} me={me} name={chat[dayOne][time]['author']} time={time} text={chat[dayOne][time]['text']} />
  })
}