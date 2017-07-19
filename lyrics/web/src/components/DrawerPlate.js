import React from 'react'
import Avatar from 'material-ui/Avatar'
import muiThemeable from 'material-ui/styles/muiThemeable'
import IconButton from 'material-ui/IconButton'
import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down'

// import {
//   indigo900,
//   deepOrange300,
//   pink400,
//   purple500,
//   lightBlack
// } from 'material-ui/styles/colors'

// const substrate = [
//   {
//     color: indigo900,
//     degree: 0,
//     height: 200,
//     width: 180,
//     left: 130,
//     top: -10
//   },
//   {
//     color: pink400,
//     degree: -24,
//     height: 300,
//     width: 180,
//     left: -70,
//     top: 0
//   },
//   {
//     color: deepOrange300,
//     degree: 20,
//     height: 200,
//     width: 180,
//     left: 170,
//     top: 10
//   },
//   {
//     color: purple500,
//     degree: -45,
//     height: 300,
//     width: 180,
//     left: 180,
//     top: -110
//   }
// ].map((d, i) => <div key={i} style={{
//   backgroundColor: d.color,
//   height: d.height,
//   width: d.width,
//   position: 'absolute',
//   left: d.left,
//   top: d.top,
//   transform: `rotate(${d.degree}deg)`,
//   boxShadow: `0 0 18px ${lightBlack}`
// }} />)

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
    {/* {substrate} */}
    <div style={{
      position: 'relative',
      padding: desktopGutterLess
    }}>
      <Avatar
        size={3 * iconSize}
        src='http://lorempixel.com/128/128'
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
