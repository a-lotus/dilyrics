import React, { Component } from 'react'
import './App.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import CardExample from './CardExample'
import RouterExample from './RouterExample'
import DrawerPlate from './DrawerPlate'
import Share from './Share'

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ActionSearch from 'material-ui/svg-icons/action/search'
import CommunicationRssFeed from 'material-ui/svg-icons/communication/rss-feed'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.handleToggle = () => this.setState({ open: !this.state.open })
    this.handleClose = () => this.setState({ open: false })
  }

  render () {
    return (
      <Router>
        <MuiThemeProvider>
          <div className='App'>
            <Drawer
              docked={false}
              width={300}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
              >
              <DrawerPlate />
              <nav>
                <Link to='/example'>
                  <MenuItem onTouchTap={this.handleClose} leftIcon={<ContentInbox />}>Example</MenuItem>
                </Link>
                <Link to='/router'>
                  <MenuItem onTouchTap={this.handleClose} leftIcon={<ActionGrade />}>Router</MenuItem>
                </Link>
                <Link to='/share'>
                  <MenuItem onTouchTap={this.handleClose} leftIcon={<CommunicationRssFeed />}>Share</MenuItem>
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
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App
