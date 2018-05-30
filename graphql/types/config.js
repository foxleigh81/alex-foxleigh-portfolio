import { 
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID,
  GraphQLString } from 'graphql'


const dataShape = {
  status: {
    type: GraphQLString,
    description: 'My current contracting status, can be anything but is usually `available`, `unavailable` or `taking a break`'
  },
  available_from: {
    type: GraphQLString,
    description: 'The date I expect to be available from'
  },
  special_message: {
    type: GraphQLString,
    description: "Sometimes it makes sense to add a little note to the page (e.g. `Taking a break from contracting, right now, I'll be back in a few months)"
  },
  CV_URL: {
    type: GraphQLString,
    description: 'The full url to my CV (can be relative or absolute)'
  }
}

// Config Type
const configType = new GraphQLObjectType({
  name: 'config',
  fields: () => dataShape
})

// Config Input Type
const configInputType = new GraphQLInputObjectType({
  name: 'configInputType',
  fields: () => dataShape
})


export { configType, configInputType }