var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Cache the collection name
var c = 'Brands'

// Skills schema
var BrandsSchema = new Schema({
  // Add children
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  logo_url: {
    type: String,
    required: true
  },
  bg_url: {
    type: String
  },
  cta_url: {
    type: String
  },
  class: {
    type: String
  },
  active: {
    type: String,
    default: true
  }
})

// Export the model and specify the collection name to avoid pluralisation (hence the repeated 'c' variable)
var Model = mongoose.model(c, BrandsSchema, c)
module.exports = Model
