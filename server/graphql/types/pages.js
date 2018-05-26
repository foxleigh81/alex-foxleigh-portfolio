var GraphQLObjectType = require('graphql').GraphQLObjectType
var GraphQLInputObjectType = require('graphql').GraphQLInputObjectType
var GraphQLBoolean = require('graphql').GraphQLBoolean
var GraphQLList = require('graphql').GraphQLList
var GraphQLString = require('graphql').GraphQLString

// Import child types
var ComponentType = require('./component')

var dataShape = {
  name: {
    type: GraphQLString,
    description: 'The name of the skill'
  },
  slug: {
    type: GraphQLString,
    description: 'The url to the logo of the brand'
  },
  page_title: {
    type: GraphQLString,
    description: 'The URL to a background image for the brand'
  },
  page_description: {
    type: GraphQLString,
    description: 'A description of the work I did for the brand'
  },
  parent: {
    type: GraphQLString,
    description: 'If the brand is clickable, where should the click target go?'
  },
  class: {
    type: GraphQLString,
    description: 'If the brand needs a special class, add it here'
  },
  in_nav: {
    type: GraphQLBoolean,
    description: 'Should this skill appear on the site (defaults to true)'
  },
  active: {
    type: GraphQLBoolean,
    description: 'Should this skill appear on the site (defaults to true)'
  },
  title: {
    type: GraphQLString,
    description: 'If the brand needs a special class, add it here'
  },
  subtitle: {
    type: GraphQLString,
    description: 'If the brand needs a special class, add it here'
  },
  body_copy: {
    type: GraphQLString,
    description: 'If the brand needs a special class, add it here'
  },
  //TODO: This requires some though as it's essentially passing an object into a page to render the rest. 
  // Maybe look into this some more when the frontend has been built
  components: {
    type: ComponentType,
    description: 'The components the page uses'
  }
}

// Pages Type
exports.pagesType = new GraphQLObjectType({
  name: 'pages',
  fields: () => dataShape
})

// Pages Input Type
exports.pagesInputType = new GraphQLInputObjectType({
  name: 'pagesInputType',
  fields: () => dataShape
})
