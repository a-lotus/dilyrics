import React from 'react'
import PropTypes from 'prop-types'
import Subheader from 'material-ui/Subheader'
import container from '../containers/sharedPreview'

const SharedPreview = ({ created, date, description, text, token }, { muiTheme, shareUrl }) => {
  const pStyle = {
    paddingLeft: muiTheme.spacing.desktopGutterLess
  }
  const publicLink = `${shareUrl}/pt/${token}`
  return (<div>
    <Subheader>Дата</Subheader>
    <p style={pStyle}>{String(date).slice(0, 10)}</p>
    <Subheader>Описание</Subheader>
    <p style={pStyle}>{description}</p>
    <Subheader>Текст</Subheader>
    <p style={pStyle}><pre>{text}</pre></p>
    <Subheader>Публичная ссылка</Subheader>
    <p style={pStyle}><a href={publicLink}>{publicLink}</a></p>
  </div>
  )
}

SharedPreview.contextTypes = {
  muiTheme: PropTypes.object,
  shareUrl: PropTypes.string
}

export default container(SharedPreview)
