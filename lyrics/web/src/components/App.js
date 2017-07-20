import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import theme from '../themes/teal'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiThemeable from 'material-ui/styles/muiThemeable'
import ActionSearch from 'material-ui/svg-icons/action/search'

import CardExample from './CardExample'
import MainMenuDrawer from './MainMenuDrawer'
import RouterExample from './RouterExample'
import SharePage from './SharePage'
import StartPage from './StartPage'
import PageLogin from './PageUnregistered'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { drawerOpen: false }
    this.handleToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen })
    this.handleClose = () => this.setState({ drawerOpen: false })
  }

  render () {
    return (
      <div className='App'>
        <MainMenuDrawer
          handleClose={this.handleClose}
          handleRequestChange={drawerOpen => this.setState({ drawerOpen })}
          open={this.state.drawerOpen}
        />
        <Route path='/login' children={({ match }) => (
          <AppBar
            title='dilyrics.ru'
            titleStyle={{ fontFamily: '"Architects Daughter", cursive' }}
            iconElementRight={match ? null : <IconButton><ActionSearch color='white' /></IconButton>}
            onRightIconButtonTouchTap={() => window.alert('hello')}
            onLeftIconButtonTouchTap={this.handleToggle}
            showMenuIconButton={!match}
            style={{
              position: 'fixed'
            }}
          />
        )} />
        <div className='apwr'
          style={{ paddingTop: this.props.muiTheme.appBar.height }}
        >
          <div className='apwr'
            style={{ overflow: 'auto' }}
          >
            <Switch>
              <Route path='/catalog' component={SharePage} />
              <Route path='/favorites' component={CardExample} />
              <Route path='/share' component={SharePage} />
              <Route path='/settings' component={CardExample} />
              <Route path='/info' component={RouterExample} />
              <Route path='/login' component={PageLogin} />
              <Route path='/' component={StartPage} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

App.contextTypes = {
  router: PropTypes.object
}

const AppThemeable = muiThemeable()(App)

export default () => (
  <Router>
    <MuiThemeProvider muiTheme={theme}>
      <AppThemeable />
    </MuiThemeProvider>
  </Router>
)
