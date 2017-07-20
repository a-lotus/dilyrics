import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import Logger from 'logplease/es5'
// import 'typeface-roboto'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import reducers from './reducers'
import sagas from './sagas'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const loggerOptions = {
  useColors: true,
  showTimestamp: false,
  showLevel: true
}
const sagaLogger = Logger.create('saga', loggerOptions)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const sagaMiddleware = createSagaMiddleware({
  onError: e => sagaLogger.error('Unhandled error in saga middleware:', e)
})
const middlewares = composeEnhancers ? composeEnhancers(applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware)
const store = createStore(reducers, /* preloadedState, */ middlewares)

const extraArguments = {
  api: window.fetch,
  logger: sagaLogger
}
sagaMiddleware.run(sagas, extraArguments)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
store.dispatch({ type: 'GET_CONFIG_REQUEST' })
