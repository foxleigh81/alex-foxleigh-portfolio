var GraphQLObjectType = require('graphql').GraphQLObjectType
var GraphQLString = require('graphql').GraphQLString

var dataShape = {
  name: {
    type: GraphQLString,
    description: 'The name of the component'
  },
  data: {
    type: new GraphQLObjectType,
    description: 'The data passed to the component'
  }
}

// Component Type
exports.componentType = new GraphQLObjectType({
  name: 'component',
  fields: () => dataShape
})
