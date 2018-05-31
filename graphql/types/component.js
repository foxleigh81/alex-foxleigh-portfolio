import { GraphQLObjectType, GraphQLString } from 'graphql'

const dataShape = {
  name: {
    type: GraphQLString,
    description: 'The name of the component'
  },
  props: {
    type: new GraphQLObjectType,
    description: 'The props passed to the component'
  },
  path: {
    type: GraphQLString,
    description: 'The relative path to the component to load (omit the extension).'
  }
}

// Component Type
export const componentType = new GraphQLObjectType({
  name: 'component',
  fields: () => dataShape
})
