import { GraphQLObjectType, GraphQLInputObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLList, GraphQLID, GraphQLString, GraphQLInt } from 'graphql'

const childDataShape = {
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
const definitionsType = new GraphQLObjectType({
  name: 'definitions',
  fields: () => childDataShape
})

const definitionsInputType = new GraphQLInputObjectType({
  name: 'definitionsInputType',
  fields: () => childDataShape
})

// REFACTOR: Too many data shapes and not very DRY.

const dataShape = {
  language: {
    type: GraphQLString,
    description: 'The language being used (in `ISO 639-1` format (e.g. `en-gb`)'
  },
  definitions: {
    type: new GraphQLList(definitionsType),
    description: 'The content for each language'
  }
}

const dataShapeInput = {
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
const langType = new GraphQLObjectType({
  name: 'lang',
  fields: () => dataShape
})

// Lang Input Type
const langInputType = new GraphQLInputObjectType({
  name: 'langInputType',
  fields: () => dataShapeInput
})

export {
  definitionsType,
  definitionsInputType,
  langType,
langInputType}
