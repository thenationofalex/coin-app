import React from 'react'
import styled from 'react-emotion'

const StyledHeading = styled('h2')`
  color: ${props => props.theme.colors.lightPurple};
  font-size: 20px;
  text-align: center;
`

export default class H2 extends React.PureComponent {
  render () {
    return (
      <StyledHeading>{this.props.children}</StyledHeading>
    )
  }
}
