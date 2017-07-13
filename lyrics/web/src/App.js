import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import CardExample from './CardExample'
import DatePicker from 'material-ui/DatePicker'
import AppBar from 'material-ui/AppBar'
import Rotation from 'material-ui/svg-icons/action/work'

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
            iconElementRight={<Rotation style={{ color: 'white' }} />}
          />
          <Paper style={paperStyle} rounded={false}>
            <h2>Добавить публичный текст</h2>
            <DatePicker hintText='Дата' />
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
