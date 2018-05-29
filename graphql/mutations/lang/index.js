var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLString = require('graphql').GraphQLString
var LangType = require('../../types/lang')
var LangModel = require('../../../models/lang')

exports.update = {
  type: LangType.langType,
  description: 'Update a language item',
  args: {
    langUpdate: { type: LangType.langInputType }
  },
  resolve(root, { langUpdate }) {
    return LangModel.findOneAndUpdate(
      // There is only one language on this site so rather than mess about retrieving it, I'll just hardcode it here.
      { 'language': 'en-gb' },
      {
        language: langUpdate.language,
        definitions: langUpdate.definitions
      },
      { new: true }
    ).exec()
      .catch(err => new Error(err))
  }
}
