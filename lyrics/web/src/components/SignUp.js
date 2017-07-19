import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import muiThemeable from 'material-ui/styles/muiThemeable'

const PageSignUp = ({ muiTheme }) => (
  <div>
    <TextField
      floatingLabelText='Логин'
    /><br />
    <TextField
      floatingLabelText='Email'
    /><br />
    <TextField
      floatingLabelText='Пароль'
      type='password'
    /><br />
    <TextField
      floatingLabelText='Подтверждение пароля'
      type='password'
    /><br />
    <RaisedButton
      label='Регистрация'
      primary
      style={{ marginTop: muiTheme.spacing.desktopGutterLess, minWidth: 130 }}
    />
  </div>
)

export default muiThemeable()(PageSignUp)
