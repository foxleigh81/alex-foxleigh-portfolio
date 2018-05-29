var GraphQLList = require('graphql').GraphQLList;
var ConfigModel = require('../../models/config');
var ConfigType = require('../types/config').configType;

// Query
exports.queryType = {
  type: new GraphQLList(ConfigType),
  description: 'The configuration for the home \'page\'',
  resolve: function () {
    const config = ConfigModel.find()
    if (!config) {
      throw new Error('Error')
    }
    return config
  }
}
