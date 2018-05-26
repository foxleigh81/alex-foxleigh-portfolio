var GraphQLObjectType = require('graphql').GraphQLObjectType
var GraphQLInputObjectType = require('graphql').GraphQLInputObjectType
var GraphQLBoolean = require('graphql').GraphQLBoolean
var GraphQLString = require('graphql').GraphQLString

let dataShape = {
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

exports.socialNetworksType = new GraphQLObjectType({
  name: 'socialNetworks',
  fields: () => dataShape
})

exports.socialNetworksInputType = new GraphQLInputObjectType({
  name: 'socialNetworksInputType',
  fields: () => dataShape
})
