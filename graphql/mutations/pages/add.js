import { GraphQLNonNull } from 'graphql'
import { pagesType, pagesInputType } from '../../types/pages'
import PagesModel from '../../../models/pages'

export default {
  type: pagesType,
  args: {
    pageAdd: {
      type: pagesInputType
    }
  },
  resolve(root, { pageAdd }) {
    const uModel = new PageModel(pageAdd)
    const newPage = uModel.save()
    if (!newPage) {
      throw new Error('Error')
    }
    return newPage
  }
}
