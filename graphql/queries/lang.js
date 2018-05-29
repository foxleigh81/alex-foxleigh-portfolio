var GraphQLList = require('graphql').GraphQLList;
var LangModel = require('../../models/lang');
var LangType = require('../types/lang').langType;

// Query
exports.queryType = {
  type: new GraphQLList(LangType),
  description: 'Various text snippets used throughout the site',
  resolve: function () {
    const lang = LangModel.find()
    if (!lang) {
      throw new Error('Error')
    }
    return lang
  }
}
