var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLString = require('graphql').GraphQLString
var SocialNetworksType = require('../../types/social-networks')
var SocialNetworksModel = require('../../../models/social-networks')

exports.remove = {
  type: SocialNetworksType.socialNetworksType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removeSocialNetwork = SocialNetworksModel.findByIdAndRemove(params.id).exec()
    if (!removeSocialNetwork) {
      throw new Error('Error')
    }
    return removeSocialNetwork
  }
}
