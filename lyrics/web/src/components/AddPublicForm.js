import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import { darkBlack } from 'material-ui/styles/colors'

const AddPublicForm = ({ className, style }) => <Paper className={className} style={{ padding: 16, ...style }} rounded={false}>
  <h1 style={{
    color: darkBlack,
    fontSize: 18,
    fontWeight: 200,
    lineHeight: '48px',
    margin: 0
  }}>Публикация текста</h1>
  <DatePicker
    floatingLabelText='Дата'
    autoOk
    container='inline'
    hideCalendarDate
    mode='landscape'
  />
  <TextField
    floatingLabelText='Описание'
    fullWidth
    multiLine
    rows={1}
    rowsMax={3}
  />
  <TextField
    floatingLabelText='Публикуемый текст'
    fullWidth
    multiLine
    rows={1}
    rowsMax={14}
  />
  <p />
  <RaisedButton label='Сохранить' primary />
</Paper>

export default AddPublicForm
