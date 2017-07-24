import React from 'react'
import PropTypes from 'prop-types'

import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import { List, ListItem } from 'material-ui/List'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'

import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import SocialPerson from 'material-ui/svg-icons/social/person'

import { grey400, darkBlack } from 'material-ui/styles/colors'
import container from '../containers/shared'

const iconButtonElement = (
  <IconButton
    touch
    tooltip='more'
    tooltipPosition='bottom-left'
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Перейти</MenuItem>
    <MenuItem>Скопировать ссылку</MenuItem>
  </IconMenu>
)

const LoadMoreItem = ({ accentColor, disabled, tapHandler }) => disabled ? <ListItem
  disabled
  leftAvatar={<Avatar icon={<NavigationExpandMore />} />}
  primaryText='Загрузка...'
/> : <ListItem
  leftAvatar={<Avatar icon={<NavigationExpandMore />} backgroundColor={accentColor} />}
  onTouchTap={tapHandler}
  primaryText='Показать еще'
/>

const Shared = ({ canLoadMore, items, isFetching, showMoreHandler }, { muiTheme, router }) => {
  const tapHandler = id => () => router.history.push(`/preview/${id}`)
  const loadMore = canLoadMore ? <div>
    <Divider inset />
    <LoadMoreItem accentColor={muiTheme.palette.accent1Color} disabled={isFetching} tapHandler={showMoreHandler} />
  </div> : null
  return (<Paper>
    <List>
      <Subheader>Последние добавленные публикации</Subheader>
      {items.reduce((result, item, idx, arr) => {
        result.push(<ListItem
          key={idx * 2}
          leftAvatar={<Avatar icon={<SocialPerson />} />}
          onTouchTap={tapHandler(item._id)}
          primaryText={String(item.date).slice(0, 10)}
          rightIconButton={rightIconMenu}
          secondaryText={<p>
            <span style={{color: darkBlack}}>Виктор Чистяков</span><br />
            {item.description}
          </p>}
          secondaryTextLines={2}
        />)
        if (idx + 1 !== arr.length) {
          result.push(<Divider key={idx * 2 + 1} inset />)
        }
        return result
      }, [])}
      {loadMore}
    </List>
  </Paper>)
}

Shared.contextTypes = {
  muiTheme: PropTypes.object,
  router: PropTypes.object
}

export default container(Shared)
