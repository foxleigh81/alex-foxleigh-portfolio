var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLString = require('graphql').GraphQLString
var SocialNetworksType = require('../../types/social-networks')
var SocialNetworksModel = require('../../../models/social-networks')

exports.update = {
  type: SocialNetworksType.socialNetworksType,
  description: 'Update a social network',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    socialNetworksUpdate: { type: SocialNetworksType.socialNetworksInputType }
  },
  resolve(root, { id, socialNetworksUpdate }) {
    return SocialNetworksModel.findByIdAndUpdate(
      id,
      {
        name: socialNetworksType.name,
        icon_class: socialNetworksType.icon_class,
        username: socialNetworksType.username,
        profile_url: socialNetworksType.profile_url,
        cta: socialNetworksType.cta,
        active: socialNetworksType.active
      },
      { new: true }
    ).exec()
      .catch(err => new Error(err))
  }
}
