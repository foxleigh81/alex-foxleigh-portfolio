var GraphQLSchema = require('graphql').GraphQLSchema;
var RootQuery = require('./queries').queryType;
var RootMutation = require('./mutations').mutationType;

exports.appSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})