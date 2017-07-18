import React from 'react'
import Avatar from 'material-ui/Avatar'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500
} from 'material-ui/styles/colors'

console.log('colors:', blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500)

const Plate = () => <div
  style={{
    backgroundColor: blue300,
    height: 80,
    overflow: 'hidden',
    position: 'relative'
  }}
>
  <div style={{
    backgroundColor: indigo900,
    height: '200px',
    width: '180px',
    position: 'absolute',
    left: '120px',
    top: '-20px',
    transform: 'rotate(14deg)',
    boxShadow: '0 0 4px'
  }} />
  <div style={{
    backgroundColor: pink400,
    height: '200px',
    width: '180px',
    position: 'absolute',
    left: '-80px',
    top: '-20px',
    transform: 'rotate(-24deg)',
    boxShadow: '0 0 8px'
  }} />
  <div style={{
    backgroundColor: deepOrange300,
    height: '200px',
    width: '180px',
    position: 'absolute',
    left: '160px',
    top: '-20px',
    transform: 'rotate(24deg)',
    boxShadow: '0 0 6px'
  }} />
  <div style={{
    backgroundColor: purple500,
    height: '200px',
    width: '180px',
    position: 'absolute',
    left: '180px',
    top: '-100px',
    transform: 'rotate(-45deg)',
    boxShadow: '0 0 18px'
  }} />
  <div style={{ position: 'relative', padding: 16 }}>
    <Avatar src='http://lorempixel.com/128/128' size={48} style={{ marginRight: 16, verticalAlign: 'middle' }} />
    <span
      style={{
        color: 'white',
        textShadow: 'black 1px 1px 5px',
        fontWeight: 500
      }}
    >
      Image Avatar
    </span>
  </div>
</div>

export default Plate
