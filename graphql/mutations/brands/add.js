var GraphQLNonNull = require('graphql').GraphQLNonNull
var BrandsType = require('../../types/brands')
var BrandsModel = require('../../../models/brands')

exports.add = {
  type: BrandsType.brandsType,
  args: {
    brandsAdd: {
      type: BrandsType.brandsInputType
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
