import React from 'react'
import * as Icon from 'react-cryptocoins'
import styled from 'react-emotion'

const StyledIcon = styled('div')`
  display: block;
`

export default function findCoinIcon (name) {
  const coinName = name.charAt(0) + name.slice(1, -3).toLowerCase()  
  try {
    const icon = Icon[coinName]({color: 'black', size: 40})
    return (<StyledIcon>
      {icon}
    </StyledIcon>)
  } catch (e) {
    return (<StyledIcon><svg height="40" width="40">
      <circle cx="20" cy="20" r="18" stroke="black" strokeWidth="3" fill="white" />
    </svg></StyledIcon>)
  }
}
