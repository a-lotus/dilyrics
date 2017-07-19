import { combineReducers } from 'redux'
import catalog from './catalog'
import favorites from './favorites'
import settings from './settings'
import share from './share'

export default combineReducers({
  catalog,
  favorites,
  settings,
  share
})
