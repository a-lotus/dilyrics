import React from 'react'
import PropTypes from 'prop-types'
import DrawerPlate from './DrawerPlate'

import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import ActionInfo from 'material-ui/svg-icons/action/info'
import ActionList from 'material-ui/svg-icons/action/list'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ActionSettings from 'material-ui/svg-icons/action/settings'
import CommunicationRssFeed from 'material-ui/svg-icons/communication/rss-feed'
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add'

const MainMenuDrawer = ({ handleClose, handleRequestChange, open }, { router }) => {
  const menuTapHandler = path => () => {
    handleClose()
    router.history.push(path)
  }

  return (<Drawer
    docked={false}
    width={300}
    open={open}
    onRequestChange={handleRequestChange}
    >
    <DrawerPlate />
    <MenuItem onTouchTap={menuTapHandler('/catalog')} leftIcon={<ActionList />} primaryText='Каталог' />
    <MenuItem onTouchTap={menuTapHandler('/favorites')} leftIcon={<ActionGrade />} primaryText='Репертуар' />
    <MenuItem onTouchTap={menuTapHandler('/share')} leftIcon={<CommunicationRssFeed />} primaryText='Публикация' />
    <Divider />
    <MenuItem onTouchTap={menuTapHandler('/')} leftIcon={<SocialPersonAdd />} primaryText='Пригласить команду' />
    <MenuItem onTouchTap={menuTapHandler('/settings')} leftIcon={<ActionSettings />} primaryText='Настройки' />
    <MenuItem onTouchTap={menuTapHandler('/info')} leftIcon={<ActionInfo />} primaryText='Справочная информация' />
  </Drawer>)
}

MainMenuDrawer.contextTypes = {
  router: PropTypes.object
}

export default MainMenuDrawer
