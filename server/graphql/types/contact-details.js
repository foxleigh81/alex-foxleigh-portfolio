var GraphQLObjectType = require('graphql').GraphQLObjectType
var GraphQLInputObjectType = require('graphql').GraphQLInputObjectType
var GraphQLBoolean = require('graphql').GraphQLBoolean
var GraphQLString = require('graphql').GraphQLString

let dataShape = {
  name: {
    type: GraphQLString,
    description: 'The name of the contact service (e.g. `Email address`)'
  },
  value: {
    type: GraphQLString,
    description: 'The value of the contact service (e.g. `example@mail.com`'
  },
  url: {
    type: GraphQLString,
    description: 'If the contact service is clickable, specificy the url path or set to `true` to use the `value` value.'
  },
  active: {
    type: GraphQLBoolean,
    description: 'Should the service appear on the site? (Defaults to true)'
  }
}

exports.contactDetailsType = new GraphQLObjectType({
  name: 'contactDetails',
  fields: () => dataShape
})

exports.contactDetailsInputType = new GraphQLInputObjectType({
  name: 'contactDetailsInputType',
  fields: () => dataShape
})
