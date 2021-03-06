import React from 'react'
import { deepOrangeA200 } from 'material-ui/styles/colors'

const Icon = () => <span style={{
  backgroundColor: deepOrangeA200,
  borderTopLeftRadius: '50%',
  borderTopRightRadius: '50%',
  borderBottomLeftRadius: '50%',
  borderBottomRightRadius: '50%',
  paddingLeft: '12px',
  paddingRight: '14px',
  paddingTop: '2px',
  paddingBottom: '2px'
}}>d</span>

const Logo = ({ className, style, withIcon }) => (
  <div
    className={className}
    style={{
      ...style,
      fontFamily: '"Architects Daughter", cursive',
      textAlign: 'center'
    }}
    >
    {withIcon ? <div
      style={{
        marginBottom: '-6px'
      }}
      >
      <Icon />
    </div> : null}
    dilyrics.ru
  </div>
)

export { Icon, Logo }
export default Logo
