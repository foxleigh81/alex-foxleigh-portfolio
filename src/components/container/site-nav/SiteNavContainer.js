// @flow

import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import SiteNav from '../../presentational/SiteNav'

const SiteNavContainer = ({ data: { pages, refetch } }) => (
  <nav>
    <ul>
      {pages && pages.filter(page => page.in_nav).map((page, index) => <SiteNav key={index} name={page.name} slug={page.slug} />)}
    </ul>
  </nav>
)

export default graphql(gql`
  query NavigationQuery {
    pages {
     name, slug, in_nav
    }
  }
`)(SiteNavContainer)
