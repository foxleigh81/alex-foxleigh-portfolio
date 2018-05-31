import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SiteNav from '../../presentational/SiteNav'

class SiteNavContainer extends Component {
  constructor () {
    super(props)
  }
  render () {
    return (
      <nav>
        <ul>
          <SiteNav />
        </ul>
      </nav>
    )
  }
}
export default SiteNavContainer
