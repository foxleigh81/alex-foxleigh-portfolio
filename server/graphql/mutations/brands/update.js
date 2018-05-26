var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLString = require('graphql').GraphQLString
var BrandsType = require('../../types/brands')
var BrandsModel = require('../../../models/brands')

exports.update = {
  type: BrandsType.brandsType,
  description: 'Update a brand',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    brandsUpdate: { type: BrandsType.brandsInputType }
  },
  resolve(root, { id, brandsUpdate }) {
    return BrandsModel.findByIdAndUpdate(
      id,
      {
        name: brandsType.name,
        description: brandsType.description,
        logo_url: brandsType.logo_url,
        bg_url: brandsType.bg_url,
        cta_url: brandsType.cta_url,
        class: brandsType.class,
        active: brandsType.active
      },
      { new: true }
    ).exec()
      .catch(err => new Error(err))
  }
}
