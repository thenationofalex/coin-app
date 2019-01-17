const initialState = {
  coinData: 'loading',
  error: false,
  loading: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SYNC_API':
    return state
  case 'STORE_REMOTE_DATA':
    return {
      error: false,
      loading: false,
      coinData: action.data
    }
  case 'STORE_REMOTE_ERROR':
    return {
      loading: false,
      error: true,
      coinData: 'Sorry the connection to the API failed. Please wait a few moments and refresh the page.'
    }
  default:
    return state
  }
}

export default reducer
