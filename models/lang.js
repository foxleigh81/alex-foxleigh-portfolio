var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Cache the collection name
var c = 'Lang'

var DefinitionsSchema = new Schema({
  //add children
  'mobileMenuLabel' : String,
  'copyright' : String
})

// Language schema
var LangSchema = new Schema({
  // Add children
  'language': {
    type: String,
    required: true
  },
  'definitions' : [DefinitionsSchema]
})

// Export the model and specify the collection name to avoid pluralisation (hence the repeated 'c' variable)
var Model = mongoose.model(c, LangSchema, c)
module.exports = Model
