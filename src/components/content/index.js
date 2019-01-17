import React from 'react'
import styled from 'react-emotion'

const StyledWrapper = styled('section')`
  margin: 80px auto;
  max-width: ${props => props.theme.appWidth}
`

export default class Content extends React.PureComponent {
  render () {
    return (
      <StyledWrapper>
        {this.props.children}
      </StyledWrapper>
    )
  }
}
