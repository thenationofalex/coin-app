import { takeEvery, call, put } from 'redux-saga/effects'
import { apiData } from '../api'

function * fetchCoinData() {
  try {
    const callApi = yield call(apiData)
    yield put({ type: 'STORE_REMOTE_DATA', data: callApi })
  } catch (e) {
    yield put({ type: 'STORE_REMOTE_ERROR' })
  }
  
}

function * syncSagas() {
  yield takeEvery('SYNC_API', fetchCoinData)
}

export default syncSagas
