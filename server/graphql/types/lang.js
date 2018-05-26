var GraphQLObjectType = require('graphql').GraphQLObjectType
var GraphQLInputObjectType = require('graphql').GraphQLInputObjectType
var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLBoolean = require('graphql').GraphQLBoolean
var GraphQLList = require('graphql').GraphQLList
var GraphQLID = require('graphql').GraphQLID
var GraphQLString = require('graphql').GraphQLString
var GraphQLInt = require('graphql').GraphQLInt

var childDataShape = {
  mobileMenuLabel: {
    type: GraphQLString,
    description: 'The alt text for the mobile menu icon'
  },
  copyright: {
    type: GraphQLString,
    description: 'The copyright text for the footer'
  }
}

// Lang definitions Type
var definitionsType = new GraphQLObjectType({
  name: 'definitions',
  fields: () => childDataShape
})

var definitionsInputType = new GraphQLInputObjectType({
  name: 'definitionsInputType',
  fields: () => childDataShape
})

// REFACTOR: Too many data shapes and not very DRY.

var dataShape = {
  language: {
    type: GraphQLString,
    description: 'The language being used (in `ISO 639-1` format (e.g. `en-gb`)'
  },
  definitions: {
    type: new GraphQLList(definitionsType),
    description: 'The content for each language'
  }
}

var dataShapeInput = {
  language: {
    type: GraphQLString,
    description: 'The language being used (in `ISO 639-1` format (e.g. `en-gb`)'
  },
  definitions: {
    type: new GraphQLList(definitionsInputType),
    description: 'The content for each language'
  }
}

// Lang Type
var langType = new GraphQLObjectType({
  name: 'lang',
  fields: () => dataShape
})

// Lang Input Type
var langInputType = new GraphQLInputObjectType({
  name: 'langInputType',
  fields: () => dataShapeInput
})

module.exports = {
  definitionsType,
  definitionsInputType,
  langType,
langInputType}
