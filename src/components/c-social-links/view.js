import React from 'react'

// Import stylesheet
import './style.styl'

export default class SocialLinks extends React.Component {
  render () {
    let links = this.props.services
    const linkItems = links.map((item) => {
      return (<li key={item.title}><a className={'u-icon ' + item.class} href={item.url} title={item.tooltip}><span>{item.title}</span></a></li>)
    })
    return (
      <nav className='c-social-links'>
        <ul>
          { linkItems }
        </ul>
      </nav>
    )
  }
}
