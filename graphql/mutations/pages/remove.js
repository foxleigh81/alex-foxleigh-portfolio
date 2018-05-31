import { GraphQLNonNull, GraphQLString } from 'graphql'
import { pagesType } from '../../types/pages'
import PagesModel from '../../../models/pages'

export default {
  type: pagesType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removePage = pagesModel.findByIdAndRemove(params.id).exec()
    if (!removePage) {
      throw new Error('Error')
    }
    return removePage
  }
}
