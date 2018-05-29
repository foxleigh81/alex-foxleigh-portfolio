var GraphQLList = require('graphql').GraphQLList;
var SocialNetworksModel = require('../../models/social-networks');
var SocialNetworksType = require('../types/social-networks').socialNetworksType;

// Query
exports.queryType = {
  type: new GraphQLList(SocialNetworksType),
  description: 'A list of social networks.  (Note: This is also used to connect to a few adjacent APIs so do not delete any entries without checking)',
  resolve: function () {
    const social_networks = SocialNetworksModel.find()
    if (!social_networks) {
      throw new Error('Error')
    }
    return social_networks
  }
}
