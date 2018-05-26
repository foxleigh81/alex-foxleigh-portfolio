var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Cache the collection name
var c = 'ContactDetails'

var ContactDetails = new Schema({
  name: String,
  value: String,
  url: String,
  active: Boolean
})

// Export the model and specify the collection name to avoid pluralisation (hence the repeated 'c' variable)
var Model = mongoose.model(c, ContactDetails, c)
module.exports = Model