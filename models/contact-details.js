import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Cache the collection name
const c = 'ContactDetails'

const ContactDetails = new Schema({
  name: String,
  value: String,
  url: String,
  active: Boolean
})

// Export the model and specify the collection name to avoid pluralisation (hence the repeated 'c' variable)
export default mongoose.model(c, ContactDetails, c)