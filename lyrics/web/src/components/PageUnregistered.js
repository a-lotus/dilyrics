import React, { Component } from 'react'
import Media from 'react-media'
import muiThemeable from 'material-ui/styles/muiThemeable'
import FlatButton from 'material-ui/FlatButton'
import Logo from './Logo'
import Login from './Login'
import SignUp from './SignUp'

class PageUnregistered extends Component {
  constructor (props) {
    super(props)
    this.state = {
      signup: false
    }
  }
  render () {
    const { muiTheme } = this.props
    return (
      <Media query='(min-height: 600px)'>
        {matches => (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: matches ? 600 - muiTheme.appBar.height : 280,
            marginTop: matches ? 0 : 40,
            marginBottom: matches ? 0 : 40
          }}>
            <Logo withIcon style={{ fontSize: muiTheme.spacing.iconSize }} />
            {this.state.signup ? <SignUp /> : <Login />}
            <FlatButton
              disableTouchRipple
              label={this.state.signup ? 'Вход' : 'Регистрация'} secondary
              onTouchTap={() => this.setState({ signup: !this.state.signup })}
              style={{ marginTop: muiTheme.spacing.desktopGutterMini }}
            />
          </div>
        )}
      </Media>
    )
  }
}

export default muiThemeable()(PageUnregistered)
