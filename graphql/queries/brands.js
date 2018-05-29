var GraphQLList = require('graphql').GraphQLList
var BrandsModel = require('../../models/brands')
var BrandsType = require('../types/brands').brandsType

// Query
exports.queryType = {
  type: new GraphQLList(BrandsType),
  description: 'The brands I have worked for',
  resolve: function () {
    const brands = BrandsModel.find()
    if (!brands) {
      throw new Error('Error')
    }
    return brands
  }
}
