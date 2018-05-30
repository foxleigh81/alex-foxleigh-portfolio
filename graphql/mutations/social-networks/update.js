import { GraphQLNonNull, GraphQLString } from 'graphql'
import { socialNetworksType, socialNetworksInputType } from '../../types/social-networks'
import SocialNetworksModel from '../../../models/social-networks'

export default {
  type: socialNetworksType,
  description: 'Update a social network',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    socialNetworksUpdate: { type: socialNetworksInputType }
  },
  resolve(root, { id, socialNetworksUpdate }) {
    return SocialNetworksModel.findByIdAndUpdate(
      id,
      {
        name: socialNetworksUpdate.name,
        icon_class: socialNetworksUpdate.icon_class,
        username: socialNetworksUpdate.username,
        profile_url: socialNetworksUpdate.profile_url,
        cta: socialNetworksUpdate.cta,
        active: socialNetworksUpdate.active
      },
      { new: true }
    ).exec()
      .catch(err => new Error(err))
  }
}
