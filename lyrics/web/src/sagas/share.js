import { call, put, takeLatest } from 'redux-saga/effects'

const scc = type => type.replace('REQUEST', 'SUCCESS')
const flr = type => type.replace('REQUEST', 'FAILURE')

export function * shareSubmit ({ logger, shareApi }, { doc, type }) {
  try {
    const document = yield call([shareApi, 'addPlain'], doc)
    yield put({ type: scc(type), document })
  } catch (err) {
    logger && typeof logger.error === 'function' && logger.error('shareSubmit error', err)
    yield put({ type: flr(type), err: err.message })
  }
}

export function * shareSaga (ea) {
  yield takeLatest('SHARE_SUBMIT_REQUEST', shareSubmit, ea)
}

export default shareSaga
