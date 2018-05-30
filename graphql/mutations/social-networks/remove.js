import { GraphQLNonNull, GraphQLString } from 'graphql'
import { socialNetworksType } from '../../types/social-networks'
import SocialNetworksModel from '../../../models/social-networks'

export default {
  type: socialNetworksType,
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
