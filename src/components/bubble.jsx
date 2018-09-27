import React, { Component } from 'react';
import styled from 'styled-components'
import colors from './colors';

const StyledBubbleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const StyledBubble = styled.div`
width: 240px;
height: auto;
display: block;
border-radius: 4px;
box-shadow: 2px 2px 5px #000;
position: relative;
margin-bottom: 25px;
padding: 0 10px;
 background: ${(props => props.me === true ? `${colors.silver}` : `${colors.aqua}`)};
align-self: ${ (props => props.me === true ? 'end' : 'start')};
`

const StyledName = styled.p`
color: ${(props => props.me === true ? `${colors.silver}` : `${colors.aqua}`)};

  font-weight: bold;
  font-size: 0.8rem;
`
const StyledText = styled.p``
const StyledTime = styled.p`
  text-align: end;
  font-size: 0.7rem;
`

export default class Bubble extends Component {
  render() {
    console.log(this.props)
    return (
      <StyledBubbleWrapper>
        <StyledBubble me={this.props.me}>
          <StyledName>{this.props.name}</StyledName>
          <StyledText>{this.props.text}</StyledText>
          <StyledTime>{this.props.time}</StyledTime>
        </StyledBubble>
      </StyledBubbleWrapper>
    );
  }
}
