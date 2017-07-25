import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import theme from '../themes/teal'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ActionSearch from 'material-ui/svg-icons/action/search'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

import CardExample from './CardExample'
import MainMenuDrawer from './MainMenuDrawer'
import RouterExample from './RouterExample'
import SharePage from './SharePage'
import SharedPreview from './SharedPreview'
import StartPage from './StartPage'
import PageLogin from './PageUnregistered'

const slaveRoutes = [
  /^\/preview\//
]
const showBackBtn = route => slaveRoutes.some(reg => reg.exec(route))

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
    this.handleToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen })
    this.handleClose = () => this.setState({ drawerOpen: false })
  }

  getChildContext () {
    return {
      shareUrl: this.props.shareUrl
    }
  }

  render () {
    const isArrow = showBackBtn(this.context.router.route.location.pathname)
    const back = this.context.router.history.goBack
    const backButton = <IconButton onTouchTap={back}><NavigationArrowBack color='white' /></IconButton>
    const menuButton = <IconButton onTouchTap={this.handleToggle}><NavigationMenu color='white' /></IconButton>
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
            iconElementLeft={isArrow ? backButton : menuButton}
            iconElementRight={match ? null : <IconButton><ActionSearch color='white' /></IconButton>}
            onRightIconButtonTouchTap={() => window.alert('hello')}
            showMenuIconButton={!match}
            style={{
              position: 'fixed'
            }}
          />
        )} />
        <div className='apwr'
          style={{ paddingTop: this.context.muiTheme.appBar.height }}
        >
          <div className='apwr'
            style={{ overflow: 'auto' }}
          >
            <Switch>
              <Route path='/catalog' render={SharePage} />
              <Route path='/favorites' render={CardExample} />
              <Route path='/share' render={SharePage} />
              <Route path='/settings' render={CardExample} />
              <Route path='/info' render={RouterExample} />
              <Route path='/login' render={PageLogin} />
              <Route path='/preview/:id' component={SharedPreview} />
              <Route path='/' render={StartPage} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

App.contextTypes = {
  muiTheme: PropTypes.object,
  router: PropTypes.object
}

App.childContextTypes = {
  shareUrl: PropTypes.string
}

export default ({ shareUrl }) => (
  <Router>
    <MuiThemeProvider muiTheme={theme}>
      <App shareUrl={shareUrl} />
    </MuiThemeProvider>
  </Router>
)
