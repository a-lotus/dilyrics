import { all, call, put, select, takeLatest } from 'redux-saga/effects'

const scc = type => type.replace('REQUEST', 'SUCCESS')
const flr = type => type.replace('REQUEST', 'FAILURE')

export function * shareSubmit ({ logger, shareApi }, { doc, type }) {
  try {
    const response = yield call([shareApi, 'addPlain'], doc)
    const document = yield response.json()
    yield put({ type: scc(type), document })
  } catch (err) {
    logger && typeof logger.error === 'function' && logger.error('shareSubmit error', err)
    yield put({ type: flr(type), err: err.message })
  }
}

export function * shareLoadLast ({ logger, shareApi }, { created, type }) {
  let isoDate = created
  if (!isoDate) {
    const items = yield select(state => state.share.items)
    console.log('items', items)
    console.log('items.length', items.length)
    if (items.length === 0) {
      isoDate = new Date().toISOString()
    } else {
      isoDate = items[items.length - 1].created
    }
  }

  try {
    const [ countResp, itemsResp ] = yield all([
      call([shareApi, 'getCount']),
      call([shareApi, 'getPlainList'], isoDate)
    ])
    const count = yield countResp.json()
    const items = yield itemsResp.json()
    yield put({ type: scc(type), items, count })
  } catch (err) {
    logger && typeof logger.error === 'function' && logger.error('shareSubmit error', err)
    yield put({ type: flr(type), err: err.message })
  }
}

export function * shareSaga (ea) {
  yield takeLatest('SHARE_LOAD_LAST_REQUEST', shareLoadLast, ea)
  yield takeLatest('SHARE_SUBMIT_REQUEST', shareSubmit, ea)
}

export default shareSaga
