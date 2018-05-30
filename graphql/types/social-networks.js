import { GraphQLObjectType, GraphQLInputObjectType, GraphQLBoolean, GraphQLString } from 'graphql'

const dataShape = {
  name: {
    type: GraphQLString,
    description: 'The name of the social network'
  },
  icon_class: {
    type: GraphQLString,
    description: 'If an icon is supposed to appear with the service, this is the class to show that icon. (e.g. `fa fa-facebook-official`)'
  },
  username: {
    type: GraphQLString,
    description: 'The username used on the service'
  },
  profile_url: {
    type: GraphQLString,
    description: 'The full profile URL (including username if applicable) of the service'
  },
  cta_text: {
    type: GraphQLString,
    description: 'A snippet of text to use as a call to action. (e.g. `Follow me on facebook`)'
  },
  active: {
    type: GraphQLBoolean,
    description: 'Should this service appear on the site? (Defaults to true)'
  }
}

const socialNetworksType = new GraphQLObjectType({
  name: 'socialNetworks',
  fields: () => dataShape
})

const socialNetworksInputType = new GraphQLInputObjectType({
  name: 'socialNetworksInputType',
  fields: () => dataShape
})

export { socialNetworksType, socialNetworksInputType }
