import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'

const CardStyle = {
  margin: 8
}

const StartPage = () => (<div>
  <Card style={CardStyle}>
    <CardTitle title='Репертуар' subtitle='Избранное' />
    <CardText>
      Открыть каталог избранных песен.
    </CardText>
  </Card>
  <Card style={CardStyle}>
    <CardTitle title='Каталог' />
    <CardText>
      Открыть каталог всех песен, добавленных кем-либо.
    </CardText>
  </Card>
  <Card style={CardStyle}>
    <CardTitle title='Публикация' />
    <CardText>
      Публикация текстов песен и создание публичной ссылки.
    </CardText>
  </Card>
</div>)

export default StartPage
