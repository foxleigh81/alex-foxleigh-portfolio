import { GraphQLList } from 'graphql'
import LangModel from '../../models/lang'
import { langType as LangType } from '../types/lang'

// Query
export default {
  type: new GraphQLList(LangType),
  description: 'Various text snippets used throughout the site',
  resolve: () => {
    const lang = LangModel.find()
    if (!lang) {
      throw new Error('Error')
    }
    return lang
  }
}
