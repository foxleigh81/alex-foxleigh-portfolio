import { GraphQLNonNull, GraphQLString } from 'graphql'
import { brandsType } from '../../types/brands'
import BrandsModel from '../../../models/brands'

export default {
  type: brandsType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removeBrand = BrandsModel.findByIdAndRemove(params.id).exec()
    if (!removeBrand) {
      throw new Error('Error')
    }
    return removeBrand
  }
}
