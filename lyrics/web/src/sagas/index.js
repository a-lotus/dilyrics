import { all } from 'redux-saga/effects'
import shareSaga from './share'

export default function * rootSaga (extraArguments) {
  yield all([
    shareSaga(extraArguments)
  ])
}
