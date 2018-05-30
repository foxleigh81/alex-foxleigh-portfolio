import { GraphQLObjectType, GraphQLInputObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLList, GraphQLID, GraphQLString, GraphQLInt } from 'graphql'

const dataShape = {
  name: {
    type: GraphQLString,
    description: 'The name of the skill'
  },
  description: {
    type: GraphQLString,
    description: 'A description of the work I did for the brand'
  },
  logo_url: {
    type: GraphQLString,
    description: 'The url to the logo of the brand'
  },
  bg_url: {
    type: GraphQLString,
    description: 'The URL to a background image for the brand'
  },
  cta_url: {
    type: GraphQLString,
    description: 'If the brand is clickable, where should the click target go?'
  },
  class: {
    type: GraphQLString,
    description: 'If the brand needs a special class, add it here'
  },
  active: {
    type: GraphQLBoolean,
    description: 'Should this skill appear on the site (defaults to true)'
  }
}

// Brands Type
const brandsType = new GraphQLObjectType({
  name: 'brands',
  fields: () => dataShape
})

// Brands Input Type
const brandsInputType = new GraphQLInputObjectType({
  name: 'brandsInputType',
  fields: () => dataShape
})

export { brandsType, brandsInputType }
