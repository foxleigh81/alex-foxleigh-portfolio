var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Cache the collection name
var c = 'SocialNetworks'

var SocialNetworks = new Schema({
  name: String,
  icon_class: String,
  username: String,
  profile_url: String,
  cta: String,
  active: Boolean
})


// Export the model and specify the collection name to avoid pluralisation (hence the repeated 'c' variable)
var Model = mongoose.model(c, SocialNetworks, c)
module.exports = Model