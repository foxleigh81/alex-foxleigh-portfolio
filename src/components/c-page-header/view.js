import React from 'react'

// Import stylesheet
import './style.styl'

// Import components
import MainNav from '../c-main-nav/view'
import SocialLinks from '../c-social-links/view'

export default class PageHeader extends React.Component {
  render () {
    return (
      <header className='c-page-header'>
        <MainNav navigation={this.props.data.navigation} />
        <SocialLinks services={this.props.data.socialLinks} />
      </header>
    )
  }
}
