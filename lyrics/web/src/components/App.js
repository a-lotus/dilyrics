import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'

import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import CardExample from './CardExample'
import RouterExample from './RouterExample'
import DrawerPlate from './DrawerPlate'
import Share from './Share'
import StartPage from './StartPage'

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import ActionInfo from 'material-ui/svg-icons/action/info'
import ActionList from 'material-ui/svg-icons/action/list'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ActionSearch from 'material-ui/svg-icons/action/search'
import ActionSettings from 'material-ui/svg-icons/action/settings'
import CommunicationRssFeed from 'material-ui/svg-icons/communication/rss-feed'
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add'

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
        <Drawer
          docked={false}
          width={300}
          open={this.state.drawerOpen}
          onRequestChange={(drawerOpen) => this.setState({ drawerOpen })}
          >
          <DrawerPlate />
          <nav>
            <Link to='/router'>
              <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionList />}>Каталог</MenuItem>
            </Link>
            <Link to='/example'>
              <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionGrade />}>Репертуар</MenuItem>
            </Link>
            <Link to='/share'>
              <MenuItem onTouchTap={this.handleClose} leftIcon={<CommunicationRssFeed />}>Публикация</MenuItem>
            </Link>
            <Divider />
            <Link to='/share'>
              <MenuItem onTouchTap={this.handleClose} leftIcon={<SocialPersonAdd />}>Пригласить команду</MenuItem>
            </Link>
            <Link to='/share'>
              <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionSettings />}>Настройки</MenuItem>
            </Link>
            <Link to='/share'>
              <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionInfo />}>Справочная информация</MenuItem>
            </Link>
          </nav>
        </Drawer>
        <AppBar
          title='dilyrics.ru'
          titleStyle={{ fontFamily: '"Architects Daughter", cursive' }}
          iconElementRight={<IconButton><ActionSearch color='white' /></IconButton>}
          onRightIconButtonTouchTap={() => window.alert('hello')}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Switch>
          <Route path='/share' component={Share} />
          <Route path='/example' component={CardExample} />
          <Route path='/router' component={RouterExample} />
          <Route path='/' component={StartPage} />
        </Switch>
      </div>
    )
  }
}

App.contextTypes = {
  router: PropTypes.object
}

export default () => <Router>
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
</Router>
