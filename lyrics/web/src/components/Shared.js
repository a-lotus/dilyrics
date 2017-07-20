import React from 'react'
import { grey400, darkBlack } from 'material-ui/styles/colors'
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import muiThemeable from 'material-ui/styles/muiThemeable'

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

const Shared = ({ muiTheme }) => (
  <Paper>
    <List>
      <Subheader>Последние добавленные публикации</Subheader>
      <ListItem
        leftAvatar={<Avatar src='https://lorempixel.com/128/128/sports' />}
        rightIconButton={rightIconMenu}
        primaryText='Brendan Lim'
        secondaryText={
          <p>
            <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
            I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset />
      <ListItem
        leftAvatar={<Avatar src='https://lorempixel.com/128/128' />}
        rightIconButton={rightIconMenu}
        primaryText='me, Scott, Jennifer'
        secondaryText={
          <p>
            <span style={{color: darkBlack}}>Summer BBQ</span><br />
            Wish I could come, but I&apos;m out of town this weekend.
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset />
      <ListItem
        leftAvatar={<Avatar src='https://lorempixel.com/128/128/city' />}
        rightIconButton={rightIconMenu}
        primaryText='Grace Ng'
        secondaryText={
          <p>
            <span style={{color: darkBlack}}>Oui oui</span><br />
            Do you have any Paris recs? Have you ever been?
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset />
      <ListItem
        leftAvatar={<Avatar src='https://lorempixel.com/128/128/fashion' />}
        rightIconButton={rightIconMenu}
        primaryText='Kerem Suer'
        secondaryText={
          <p>
            <span style={{color: darkBlack}}>Birthday gift</span><br />
            Do you have any ideas what we can get Heidi for her birthday? How about a pony?
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset />
      <ListItem
        leftAvatar={<Avatar src='https://lorempixel.com/128/128/nature' />}
        rightIconButton={rightIconMenu}
        primaryText='Raquel Parrado'
        secondaryText={
          <p>
            <span style={{color: darkBlack}}>Recipe to try</span><br />
            We should eat this: grated squash. Corn and tomatillo tacos.
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset />
      <ListItem
        leftAvatar={<Avatar icon={<NavigationExpandMore />} backgroundColor={muiTheme.palette.accent1Color} />}
        primaryText='Показать еще'
      />
    </List>
  </Paper>
)

export default muiThemeable()(Shared)
