import { GraphQLObjectType, GraphQLInputObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLString, GraphQLInt } from 'graphql'

const dataShape = {
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
const skillsType = new GraphQLObjectType({
  name: 'skills',
  fields: () => dataShape
})

// Skills Input Type
const skillsInputType = new GraphQLInputObjectType({
  name: 'skillsInputType',
  fields: () => dataShape
})

export { skillsType, skillsInputType }
