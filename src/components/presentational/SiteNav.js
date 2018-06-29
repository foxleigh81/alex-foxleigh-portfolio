// @flow

import React from 'react'

type PropTypes = {
  name: string,
  slug: string
}

const SiteNav = ({ name, slug }: PropTypes) => (
  <li>
    <a href={slug}>
      {name}
    </a>
  </li>
)
export default SiteNav
