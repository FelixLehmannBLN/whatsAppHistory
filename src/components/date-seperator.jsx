import React, { Component } from 'react';
import styled from 'styled-components'

const StyledDateSeperator = styled.p`
text-align: center;
`

export default class DateSeperator extends Component {
  render() {
    return (
      <StyledDateSeperator>{this.props.children}</StyledDateSeperator>
    );
  }
}
