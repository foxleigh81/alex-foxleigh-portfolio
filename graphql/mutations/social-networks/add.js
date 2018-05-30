import { GraphQLNonNull } from 'graphql'
import { socialNetworksType, socialNetworksInputType } from '../../types/social-networks'
import SocialNetworksModel from '../../../models/social-networks'

export default {
  type: socialNetworksType,
  args: {
    socialNetworksAdd: {
      type: socialNetworksInputType
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
