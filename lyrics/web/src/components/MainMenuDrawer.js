import React from 'react'
import PropTypes from 'prop-types'
import DrawerPlate from './DrawerPlate'

import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import { List, ListItem, makeSelectable } from 'material-ui/List'

import ActionInfo from 'material-ui/svg-icons/action/info'
import ActionList from 'material-ui/svg-icons/action/list'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ActionSettings from 'material-ui/svg-icons/action/settings'
import CommunicationRssFeed from 'material-ui/svg-icons/communication/rss-feed'
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add'

const SelectableList = makeSelectable(List)

const MainMenuDrawer = ({ handleClose, handleRequestChange, open }, { router }) => (<Drawer
  docked={false}
  width={300}
  open={open}
  onRequestChange={handleRequestChange}
  >
  <DrawerPlate />
  <SelectableList value={router.route.location.pathname} onChange={(event, index) => { handleClose(); router.history.push(index) }}>
    <ListItem leftIcon={<ActionList />} primaryText='Каталог' value='/catalog' />
    <ListItem leftIcon={<ActionGrade />} primaryText='Репертуар' value='/favorites' />
    <ListItem leftIcon={<CommunicationRssFeed />} primaryText='Публикация' value='/share' />
    <Divider />
    <ListItem leftIcon={<SocialPersonAdd />} primaryText='Пригласить команду' value='/' />
    <ListItem leftIcon={<ActionSettings />} primaryText='Настройки' value='/settings' />
    <ListItem leftIcon={<ActionInfo />} primaryText='Информация' value='/info' />
  </SelectableList>
</Drawer>)

MainMenuDrawer.contextTypes = {
  router: PropTypes.object
}

export default MainMenuDrawer
