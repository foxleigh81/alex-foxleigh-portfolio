import { GraphQLObjectType, GraphQLList } from 'graphql'

// Import queries
import configQuery from './config'
import contactDetailsQuery from './contact-details'
import socialNetworksQuery from './social-networks'
import skillsQuery from './skills'
import brandsQuery from './brands'
import langQuery from './lang'

// Query
export default new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => {
    return {
      config: configQuery,
      contact_details: contactDetailsQuery,
      social_networks: socialNetworksQuery,
      skills: skillsQuery,
      brands: brandsQuery,
      lang: langQuery
    }
  }
})