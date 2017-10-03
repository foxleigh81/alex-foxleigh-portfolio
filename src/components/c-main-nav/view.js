import React from 'react'
import { NavLink as Link } from 'react-router-dom'

// Import stylesheet
import './style.styl'

// The component itself
export default class MainNav extends React.Component {
  render () {
    let nav = this.props.navigation
    const navItems = nav.map((item) => {
      return (<li key={item.title}><Link exact activeClassName='u-active' to={item.url}>{item.title}</Link></li>)
    })
    return (
      <nav className='c-main-nav'>
        <ul>
          { navItems }
        </ul>
      </nav>
    )
  }
}
