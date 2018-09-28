import React, { Component } from 'react';

import Bubble from './components/bubble';
import Wrapper from './components/chat';
import chat from './assets/_chat.json';
import DateSeperator from './components/date-seperator'

const entries = Object.keys(chat);
const dayOne = entries[0];
const messageTimes = Object.keys(chat[dayOne]);



class App extends Component {
  constructor(props) {
    super(props)
    this.state = { whoAmI: 'Felix' };
    this.renderBubbles = this.renderBubbles.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.onPerspectiveSwitch.bind(this, 'Manon')}>Manon</button>
        <button onClick={this.onPerspectiveSwitch.bind(this, 'Felix')}>Felix</button>
        <Wrapper>
          {this.renderBubbles()}
        </Wrapper>
      </React.Fragment>
    );
  }


  renderBubbles() {
    return entries.map(date => {
      return (
        <React.Fragment>
          {<DateSeperator>
            {date}
          </DateSeperator>}
          {Object.keys(chat[date]).map(time => {
            const dateEntry = chat[date][time]
            const { author, text } = dateEntry;
            const isMe = author === this.state.whoAmI;
            return <Bubble
              key={`${dateEntry}${time}`}
              me={isMe}
              name={author}
              time={time}
              text={text}
            />
          })
          }
        </React.Fragment>
      )
    })
  }

  onPerspectiveSwitch(perspective) {
    console.log(perspective)
    this.setState({
      whoAmI: perspective
    })
  }
}

export default App;
