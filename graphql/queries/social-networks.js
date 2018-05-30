import { GraphQLList } from 'graphql'
import SocialNetworksModel from '../../models/social-networks'
import { socialNetworksType as SocialNetworksType } from '../types/social-networks'

// Query
export default {
  type: new GraphQLList(SocialNetworksType),
  description: 'A list of social networks.  (Note: This is also used to connect to a few adjacent APIs so do not delete any entries without checking)',
  resolve: () => {
    const social_networks = SocialNetworksModel.find()
    if (!social_networks) {
      throw new Error('Error')
    }
    return social_networks
  }
}
