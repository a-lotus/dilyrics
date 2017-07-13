import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
