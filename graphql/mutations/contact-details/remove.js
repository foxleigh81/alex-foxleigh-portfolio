var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLString = require('graphql').GraphQLString
var ContactDetailsType = require('../../types/contact-details')
var ContactDetailsModel = require('../../../models/contact-details')

exports.remove = {
  type: ContactDetailsType.contactDetailsType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removeContactDetail = ContactDetailsModel.findByIdAndRemove(params.id).exec()
    if (!removeContactDetail) {
      throw new Error('Error')
    }
    return removeContactDetail
  }
}
