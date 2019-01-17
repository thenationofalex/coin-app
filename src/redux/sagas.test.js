import { takeEvery, call, put } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import syncSagas from './sagas'

test('Redux Saga - Fetch Coin Data Success', () => {
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

  return expectSaga(syncSagas)
    .dispatch({ type: 'SYNC_API'})
    .put({ type: 'STORE_REMOTE_DATA', data: [{
      symbol: 'btcusd',
      bid: 8353.7,
      bid_size: 71.07122423,
      ask: 8353.8,
      ask_size: 59.66371416,
      daily_change: 116.83419784,
      last_price: 0.0142,
      volume: 8353.7
      }]
    })
    .silentRun()
})

test('Redux Saga - Fetch Coin Data Failure', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  return expectSaga(syncSagas)
    .dispatch({ type: 'SYNC_API'})
    .put({ type: 'STORE_REMOTE_ERROR' })
    .silentRun()
})
