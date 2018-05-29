var GraphQLObjectType = require('graphql').GraphQLObjectType
var GraphQLList = require('graphql').GraphQLList

// Import queries
var configQuery = require('./config').queryType
var contactDetailsQuery = require('./contact-details').queryType
var socialNetworksQuery = require('./social-networks').queryType
var skillsQuery = require('./skills').queryType
var brandsQuery = require('./brands').queryType
var langQuery = require('./lang').queryType

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: function () {
    return {
      config: configQuery,
      contact_details: contactDetailsQuery,
      social_networks: socialNetworksQuery,
      skills: skillsQuery,
      brands: brandsQuery,
      lang: langQuery,
    }
  }
})
