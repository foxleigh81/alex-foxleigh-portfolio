import React from 'react'
import PropTypes from 'prop-types'

const SiteNav = ({ name, slug, in_nav }) => (
  <li>
    <a href={slug}>
      {name}
    </a>
  </li>
)
SiteNav.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  in_nav: PropTypes.bool
}
export default SiteNav
