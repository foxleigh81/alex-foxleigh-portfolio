import React from 'react';
import { kebabCase, uniqueId } from 'lodash'

const NavItem = props => props.items
  .filter(item => item.active === true)
  .map(item => (
    <li key={kebabCase(uniqueId(item.name))} className={item.classes.join(' ')}><a href={item.url}>{item.name}</a></li>)
  )

export default NavItem