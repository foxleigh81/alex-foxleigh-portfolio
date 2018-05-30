import mongoose from 'mongoose'
const Schema = mongoose.Schema

// Cache the collection name
const c = 'Lang'

const DefinitionsSchema = new Schema({
  //add children
  'mobileMenuLabel' : String,
  'copyright' : String
})

// Language schema
const LangSchema = new Schema({
  // Add children
  'language': {
    type: String,
    required: true
  },
  'definitions' : [DefinitionsSchema]
})

// Export the model and specify the collection name to avoid pluralisation (hence the repeated 'c' variable)
export default mongoose.model(c, LangSchema, c)
