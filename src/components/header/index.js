import React from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

const StyledHeader = styled('header')`
  background-color: ${props => props.theme.colors.darkPurple};
  height: 60px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
`

const StyledWrapper = styled('div')`
  margin: 0 auto;
  max-width: ${props => props.theme.appWidth};
`

const StyledTitle = styled('h1')`
  color: #fff;
  font-size: 22px;
  margin-left: 20px;
`

export default class Header extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <StyledHeader>
          <StyledWrapper>
            <Link to='/'>
              <StyledTitle>
                blockbid
              </StyledTitle>
            </Link>
          </StyledWrapper>
        </StyledHeader>
      </React.Fragment>
    )
  }
}
