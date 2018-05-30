import { GraphQLNonNull } from 'graphql'
import { brandsType, brandsInputType } from '../../types/brands'
import BrandsModel from '../../../models/brands'

export default {
  type: brandsType,
  args: {
    brandsAdd: {
      type: brandsInputType
    }
  },
  resolve(root, { brandsAdd }) {
    const uModel = new BrandsModel(brandsAdd)
    const newBrand = uModel.save()
    if (!newBrand) {
      throw new Error('Error')
    }
    return newBrand
  }
}
