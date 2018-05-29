var GraphQLNonNull = require('graphql').GraphQLNonNull
var SocialNetworksType = require('../../types/social-networks')
var SocialNetworksModel = require('../../../models/social-networks')

exports.add = {
  type: SocialNetworksType.socialNetworksType,
  args: {
    socialNetworksAdd: {
      type: SocialNetworksType.socialNetworksInputType
    }
  },
  resolve(root, { socialNetworksAdd }) {
    const uModel = new SocialNetworksModel(socialNetworksAdd)
    const newSocialNetwork = uModel.save()
    if (!newSocialNetwork) {
      throw new Error('Error')
    }
    return newSocialNetwork
  }
}
