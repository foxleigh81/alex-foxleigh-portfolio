import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Cache the collection name
const c = 'SocialNetworks'

const SocialNetworks = new Schema({
  name: String,
  icon_class: String,
  username: String,
  profile_url: String,
  cta: String,
  active: Boolean
})

// Export the model and specify the collection name to avoid pluralisation (hence the repeated 'c' variable)
export default mongoose.model(c, SocialNetworks, c)