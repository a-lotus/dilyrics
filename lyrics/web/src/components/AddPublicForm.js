import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'

const paperStyle = {
  paddingTop: 10,
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 20
}

const AddPublicForm = ({ style }) => <Paper style={{ ...paperStyle, ...style }} rounded={false}>
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

export default AddPublicForm
