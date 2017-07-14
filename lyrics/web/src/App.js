import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import CardExample from './CardExample'
import DatePicker from 'material-ui/DatePicker'
import AppBar from 'material-ui/AppBar'
import ActionHome from 'material-ui/svg-icons/action/home'
import Logo from './Logo'

const paperStyle = {
  margin: 20,
  paddingTop: 10,
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 20
}

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <AppBar
            title='dilyrics.ru'
            titleStyle={{ fontFamily: '"Architects Daughter", cursive' }}
            iconElementRight={<IconButton onTouchTap={() => window.alert('hello')}><ActionHome color='white' /></IconButton>}
          />
          <Logo style={{ fontSize: 24, margin: 24 }} />
          <Paper style={paperStyle} rounded={false}>
            <h2>Добавить публичный текст</h2>
            <DatePicker
              autoOk
              container='inline'
              hideCalendarDate
              hintText='Дата'
              mode='landscape'
            />
            <TextField
              fullWidth
              hintText='Описание html страницы'
              floatingLabelText='Описание'
            />
            <TextField
              fullWidth
              hintText='Вставьте сюда текст песен'
              multiLine
              rows={1}
              rowsMax={14}
            />
            <RaisedButton label='Сохранить' primary />
          </Paper>
          <CardExample />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
