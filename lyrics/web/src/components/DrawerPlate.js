import React from 'react'
import Avatar from 'material-ui/Avatar'
import muiThemeable from 'material-ui/styles/muiThemeable'
import IconButton from 'material-ui/IconButton'
import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down'

const Plate = ({ muiTheme }) => {
  console.log(muiTheme.spacing)
  console.log(muiTheme.palette)
  const subtitleHeight = 56
  const { desktopGutterMini, desktopGutterLess, iconSize } = muiTheme.spacing
  const { alternateTextColor, primary2Color } = muiTheme.palette
  return (<div
    style={{
      backgroundColor: primary2Color,
      color: alternateTextColor,
      height: iconSize * 3 + desktopGutterLess * 2 + subtitleHeight,
      overflow: 'hidden',
      position: 'relative'
    }}
  >
    <div style={{
      position: 'relative',
      padding: desktopGutterLess
    }}>
      <Avatar
        size={3 * iconSize}
        src='https://lorempixel.com/128/128'
        style={{
          marginRight: desktopGutterLess,
          verticalAlign: 'middle'
        }}
      />
    </div>
    <div style={{
      fontWeight: 400,
      fontSize: 14,
      lineHeight: `${subtitleHeight / 2 - desktopGutterMini}px`,
      paddingBottom: desktopGutterMini,
      paddingLeft: desktopGutterLess,
      position: 'relative'
    }}>
      <span style={{ fontWeight: 500 }}>Виктор Чистяков</span>
      <br />
      <span>Церковь "Вифания", г. Сочи</span>
      <IconButton
        style={{
          position: 'absolute',
          bottom: -6,
          right: 4
        }}
      >
        <NavigationArrowDropDown color={alternateTextColor} />
      </IconButton>
    </div>
  </div>)
}

export default muiThemeable()(Plate)
