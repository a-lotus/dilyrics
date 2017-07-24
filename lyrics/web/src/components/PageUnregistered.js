import React, { Component } from 'react'
// import Media from 'react-media'
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
      // <Media query='(min-height: 600px)'>
      //   {matches => (
      <div className='apwr' style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'auto'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          minHeight: 'min-content',
          textAlign: 'center'
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
      </div>
      //   )}
      // </Media>
    )
  }
}

export default muiThemeable()(PageUnregistered)
