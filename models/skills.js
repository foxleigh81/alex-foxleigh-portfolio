var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Cache the collection name
var c = 'Skills'

// Skills schema
var SkillsSchema = new Schema({
  // Add children
  name: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  sort_order: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
})

// Export the model and specify the collection name to avoid pluralisation (hence the repeated 'c' variable)
var Model = mongoose.model(c, SkillsSchema, c)
module.exports = Model