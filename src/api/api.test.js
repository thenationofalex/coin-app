import React from 'react'

import { apiData } from './index'

test('API connection and data formatting', async () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  fetch.mockResponse(
    JSON.stringify(
      [[
        "tBTCUSD",
        8353.7,
        71.07122423,
        8353.8,
        59.66371416,
        116.83419784,
        0.0142,
        8353.7,
        29014.3847146,
        8482.2,
        8121.7
      ]]
    )
  )

  const testApi = await apiData()
    .then(data => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            symbol: 'btcusd'
          })
        ])
      )
    })
})
