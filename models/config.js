import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Cache the collection name
const c = 'Config'

// Config schema
const ConfigSchema = new Schema({
  // Add children
  status: {
    type: String,
    required: true
  },
  available_from: {
    type: String,
    required: true
  },
  special_message: {
    type: String,
    required: true
  },
  CV_URL: {
    type: String,
    required: true
  }
})

// Export the model and specify the collection name to avoid pluralisation (hence the repeated 'c' variable)
export default mongoose.model(c, ConfigSchema, c)