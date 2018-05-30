import { GraphQLNonNull, GraphQLString } from 'graphql'
import { brandsType, brandsInputType } from '../../types/brands'
import BrandsModel from '../../../models/brands'

export default {
  type: brandsType,
  description: 'Update a brand',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    brandsUpdate: { type: brandsInputType }
  },
  resolve(root, { id, brandsUpdate }) {
    return BrandsModel.findByIdAndUpdate(
      id,
      {
        name: brandsUpdate.name,
        description: brandsUpdate.description,
        logo_url: brandsUpdate.logo_url,
        bg_url: brandsUpdate.bg_url,
        cta_url: brandsUpdate.cta_url,
        class: brandsUpdate.class,
        active: brandsUpdate.active
      },
      { new: true }
    ).exec()
      .catch(err => new Error(err))
  }
}
