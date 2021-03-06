import React from 'react'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const CardExampleWithAvatar = () => (
  <Card>
    <CardTitle title='Card title' subtitle='Card subtitle' />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label='Save' primary />
      <FlatButton label='Cancel' />
    </CardActions>
  </Card>
)

export default CardExampleWithAvatar
