import React, { Component } from 'react';
import styled from 'styled-components'
import colors from './colors';

const StyledWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto 0;
`

export default class Chat extends Component {
  render() {
    console.log(this.props)
    return (
      <StyledWrapper>{this.props.children}</StyledWrapper>
    );
  }
}
