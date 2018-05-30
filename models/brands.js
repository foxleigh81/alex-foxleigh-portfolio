import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Cache the collection name
const c = 'Brands'

// Skills schema
const BrandsSchema = new Schema({
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
export default mongoose.model(c, BrandsSchema, c)
