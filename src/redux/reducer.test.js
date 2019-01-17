import reducer from './reducer'

test('Reducers initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    coinData: 'loading',
    error: false,
    loading: true
  })
})

test('Simuate STORE_REMOTE_DATA event', () => {
  expect(
    reducer([], {
      type: 'STORE_REMOTE_DATA',
      data: [{
        symbol: "btcusd", 
        bid: 8364.6, 
        bid_size: 89.30694059, 
        ask: 8364.7, 
        ask_size: 50.95224277,
        daily_change: 44.2,
        last_price: 0.0351,
        volume: 1
      }]
    })).toEqual({
    error: false,
    loading: false,
    coinData: [{
      symbol: "btcusd", 
      bid: 8364.6, 
      bid_size: 89.30694059, 
      ask: 8364.7, 
      ask_size: 50.95224277,
      daily_change: 44.2,
      last_price: 0.0351,
      volume: 1
    }]
  })
})

test('Simulate STORE_REMOTE_ERROR event', () => {
  expect(
    reducer([], {
      type: 'STORE_REMOTE_ERROR'
    })).toEqual({
      error: true,
      loading: false,
      coinData: 'Sorry the connection to the API failed. Please wait a few moments and refresh the page.'
    })
})
