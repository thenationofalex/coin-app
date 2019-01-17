import React from 'react'

import findCoinIcon from './index'

test('findCoinIcon returns an svg', () => {
  const icon = findCoinIcon('BTCUSD')
  expect(icon.props.children.type).toBe('svg')
})

test('findCoinIcon returns the svg failback', () => {
  const icon = findCoinIcon('******')
  expect(icon.props.children.type).toBe('svg')
})

