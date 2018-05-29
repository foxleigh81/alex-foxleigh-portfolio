var GraphQLObjectType = require('graphql').GraphQLObjectType
var GraphQLInputObjectType = require('graphql').GraphQLInputObjectType
var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLBoolean = require('graphql').GraphQLBoolean
var GraphQLList = require('graphql').GraphQLList
var GraphQLID = require('graphql').GraphQLID
var GraphQLString = require('graphql').GraphQLString
var GraphQLInt = require('graphql').GraphQLInt

var dataShape = {
  name: {
    type: GraphQLString,
    description: 'The name of the skill'
  },
  description: {
    type: GraphQLString,
    description: 'A description of the work I did for the brand'
  },
  logo_url: {
    type: GraphQLString,
    description: 'The url to the logo of the brand'
  },
  bg_url: {
    type: GraphQLString,
    description: 'The URL to a background image for the brand'
  },
  cta_url: {
    type: GraphQLString,
    description: 'If the brand is clickable, where should the click target go?'
  },
  class: {
    type: GraphQLString,
    description: 'If the brand needs a special class, add it here'
  },
  active: {
    type: GraphQLBoolean,
    description: 'Should this skill appear on the site (defaults to true)'
  }
}

// Brands Type
exports.brandsType = new GraphQLObjectType({
  name: 'brands',
  fields: () => dataShape
})

// Brands Input Type
exports.brandsInputType = new GraphQLInputObjectType({
  name: 'brandsInputType',
  fields: () => dataShape
})
