import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import muiThemeable from 'material-ui/styles/muiThemeable'
import container from '../containers/share'

const Share = ({
  className, muiTheme, style,
  date, description, text,
  setDate, setDescription, setText, submit
  }) => {
  const { desktopGutterLess, desktopSubheaderHeight } = muiTheme.spacing
  return (
    <Paper
      className={className}
      rounded={false}
      style={{ padding: desktopGutterLess, ...style }}
    >
      <h1 style={{
        fontSize: 18,
        fontWeight: 400,
        lineHeight: `${desktopSubheaderHeight}px`,
        margin: 0
      }}>Публикация текста</h1>
      <DatePicker
        autoOk
        container='inline'
        floatingLabelText='Дата'
        hideCalendarDate
        mode='landscape'
        onChange={(e, v) => setDate(v)}
        value={date}
      />
      <TextField
        floatingLabelText='Описание'
        fullWidth
        multiLine
        onChange={(e, v) => setDescription(v)}
        rows={1}
        rowsMax={3}
        value={description}
      />
      <TextField
        floatingLabelText='Публикуемый текст'
        fullWidth
        multiLine
        onChange={(e, v) => setText(v)}
        rows={1}
        rowsMax={14}
        value={text}
      />
      <RaisedButton
        label='Сохранить'
        onTouchTap={submit}
        primary
        style={{ marginTop: desktopGutterLess }}
      />
    </Paper>
  )
}

export default container(muiThemeable()(Share))
