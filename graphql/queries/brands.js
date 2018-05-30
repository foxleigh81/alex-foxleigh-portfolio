import { GraphQLList } from 'graphql'
import BrandsModel from '../../models/brands'
import { brandsType as BrandsType } from '../types/brands'

// Query
export default {
  type: new GraphQLList(BrandsType),
  description: 'The brands I have worked for',
  resolve: () => {
    const brands = BrandsModel.find()
    if (!brands) {
      throw new Error('Error')
    }
    return brands
  }
}
