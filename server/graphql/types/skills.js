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
  level: {
		type: GraphQLInt,
		description: 'The level I am at with the skill (1: Expert, 2: Intermediate, 3: Basic)'
  },
  sort_order: {
		type: GraphQLInt,
		description: 'Where in the list should this skill appear?'
  },
  active: {
		type: GraphQLBoolean,
		description: 'Should this skill appear on the site (defaults to true)'
  }
}

// Skills Type
exports.skillsType = new GraphQLObjectType({
  name: 'skills',
  fields: () => dataShape
})

// Skills Input Type
exports.skillsInputType = new GraphQLInputObjectType({
  name: 'skillsInputType',
  fields: () => dataShape
})
