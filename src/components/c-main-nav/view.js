import React from 'react'

// Import stylesheet
import './style.styl'

export default class MainNav extends React.Component {
  render () {
    let navigation = this.props.navigation
    const navItems = navigation.map((item) => {
      return (<li key={item.title}><a href={item.url}>{item.title}</a></li>)
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
