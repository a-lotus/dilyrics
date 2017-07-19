import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import muiThemeable from 'material-ui/styles/muiThemeable'

const Login = ({ muiTheme }) => (
  <div>
    <TextField
      floatingLabelText='Логин'
    /><br />
    <TextField
      floatingLabelText='Пароль'
      type='password'
    /><br />
    <RaisedButton
      label='Вход'
      primary
      style={{ marginTop: muiTheme.spacing.desktopGutterLess, minWidth: 130 }}
    />
  </div>
)

export default muiThemeable()(Login)
