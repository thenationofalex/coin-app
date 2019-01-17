import React from 'react'
import styled from 'react-emotion'

export const ErrorMessage = styled('div')`
  color: ${props => props.theme.colors.error};
  display: block;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  width: 100%;
`
