import { GraphQLObjectType, GraphQLString } from 'graphql'

const dataShape = {
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
export const componentType = new GraphQLObjectType({
  name: 'component',
  fields: () => dataShape
})
