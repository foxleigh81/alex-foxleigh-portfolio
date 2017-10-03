import React from 'react'
import { NavLink as Link } from 'react-router-dom'

// Import stylesheet
import './style.styl'

export default class MainNav extends React.Component {
  render () {
    let navigation = this.props.navigation
    const navItems = navigation.map((item) => {
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
