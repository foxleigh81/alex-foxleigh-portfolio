var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Cache the collection name
var c = 'Pages'

// Skills schema
var BrandsSchema = new Schema({
  // Add children
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  page_title: {
    type: String,
    required: true
  },
  page_description: {
    type: String,
    required: true
  },
  parent: {
    type: String
  },
  class: {
    type: String,
  },
  in_nav: {
    type: Boolean,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
  },
  body_copy: {
    type: String,
  },
  components: {
    type: Object,
  }
})

// Export the model and specify the collection name to avoid pluralisation (hence the repeated 'c' variable)
var Model = mongoose.model(c, PagesSchema, c)
module.exports = Model
