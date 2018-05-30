import mongoose from 'mongoose'
const Schema = mongoose.Schema

// Cache the collection name
const c = 'Skills'

// Skills schema
const SkillsSchema = new Schema({
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
export default mongoose.model(c, SkillsSchema, c)
