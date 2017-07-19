import React from 'react'
import { Link } from 'react-router-dom'
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

const MainMenuDrawer = ({ handleClose, handleRequestChange, open }) => (<Drawer
  docked={false}
  width={300}
  open={open}
  onRequestChange={handleRequestChange}
  >
  <DrawerPlate />
  <nav>
    <Link to='/catalog'>
      <MenuItem onTouchTap={handleClose} leftIcon={<ActionList />}>Каталог</MenuItem>
    </Link>
    <Link to='/favorites'>
      <MenuItem onTouchTap={handleClose} leftIcon={<ActionGrade />}>Репертуар</MenuItem>
    </Link>
    <Link to='/share'>
      <MenuItem onTouchTap={handleClose} leftIcon={<CommunicationRssFeed />}>Публикация</MenuItem>
    </Link>
    <Divider />
    <Link to='/'>
      <MenuItem onTouchTap={handleClose} leftIcon={<SocialPersonAdd />}>Пригласить команду</MenuItem>
    </Link>
    <Link to='/settings'>
      <MenuItem onTouchTap={handleClose} leftIcon={<ActionSettings />}>Настройки</MenuItem>
    </Link>
    <Link to='/info'>
      <MenuItem onTouchTap={handleClose} leftIcon={<ActionInfo />}>Справочная информация</MenuItem>
    </Link>
  </nav>
</Drawer>)

export default MainMenuDrawer
