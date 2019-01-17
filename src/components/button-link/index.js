import React from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const StyledButton = styled(Link)`
  border: none;
  background-color: ${props => props.theme.colors.lightPurple};
  color: #fff;
  display: inline-block;
  float: right;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  margin-right: 40px;
  min-width: 120px;
  text-align: center;
  &:hover, &:focus {
    background-color: ${props => props.theme.colors.darkPurple};
  }
`

export default class ButtonLink extends React.PureComponent {
  render () {
    return (
      <StyledButton
        to={this.props.link}>
        {this.props.title}
      </StyledButton>
    )
  }
}

ButtonLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

ButtonLink.defaultProps = {
  link: '/'
}
