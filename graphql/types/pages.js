import { GraphQLObjectType, GraphQLInputObjectType, GraphQLBoolean, GraphQLList, GraphQLString } from 'graphql'

// Import child types
// import ComponentType from './component'

const dataShape = {
  name: {
    type: GraphQLString,
    description: 'The name of the page (this is what will appear in navigations)'
  },
  slug: {
    type: GraphQLString,
    description: 'The slugified version of the name, suitable for use in a url'
  },
  page_title: {
    type: GraphQLString,
    description: 'The meta title of the page'
  },
  page_description: {
    type: GraphQLString,
    description: 'The meta description of the page'
  },
  parent: {
    type: GraphQLString,
    description: 'Is this page a child of another page? If so what is the slug of it\'s parent?'
  },
  class: {
    type: GraphQLString,
    description: 'If the page needs a special class, add it here'
  },
  in_nav: {
    type: GraphQLBoolean,
    description: 'Should this page appear in the main navigation?'
  },
  active: {
    type: GraphQLBoolean,
    description: 'Should this page appear on the site (defaults to true)'
  },
  title: {
    type: GraphQLString,
    description: 'What title do you want to display on the page (usually in the H1 slot)'
  },
  subtitle: {
    type: GraphQLString,
    description: 'Does the page have a subtitle? What is it?'
  },
  body_copy: {
    type: GraphQLString,
    description: 'The main copy for the page (accepts HTML)'
  },

// // TODO: This requires some though as it's essentially passing an object into a page to render the rest. 
// // Maybe look into this some more when the frontend has been built
// components: {
//   type: ComponentType,
//   description: 'The components the page uses'
// }
}

// Pages Type
const pagesType = new GraphQLObjectType({
  name: 'pages',
  fields: () => dataShape
})

// Pages Input Type
const pagesInputType = new GraphQLInputObjectType({
  name: 'pagesInputType',
  fields: () => dataShape
})

export { pagesType, pagesInputType }
