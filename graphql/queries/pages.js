import { GraphQLList } from 'graphql'
import PagesModel from '../../models/pages'
import { pagesType as PagesType } from '../types/pages'

// Query
export default {
  type: new GraphQLList(PagesType),
  description: "The content for the site pages",
  resolve: () => {
    const page = PagesModel.find()
    if (!page) {
      throw new Error('Error')
    }
    return page
  }
}
