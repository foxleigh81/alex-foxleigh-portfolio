var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLString = require('graphql').GraphQLString
var BrandsType = require('../../types/brands')
var BrandsModel = require('../../../models/brands')

exports.remove = {
  type: BrandsType.brandsType,
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
