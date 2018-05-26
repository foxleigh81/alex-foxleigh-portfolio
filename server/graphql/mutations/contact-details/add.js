var GraphQLNonNull = require('graphql').GraphQLNonNull
var ContactDetailsType = require('../../types/contact-details')
var ContactDetailsModel = require('../../../models/contact-details')

exports.add = {
  type: ContactDetailsType.contactDetailsType,
  args: {
    contactDetailsAdd: {
      type: ContactDetailsType.contactDetailsInputType
    }
  },
  resolve(root, { contactDetailsAdd }) {
    const uModel = new ContactDetailsModel(contactDetailsAdd)
    const newContactDetail = uModel.save()
    if (!newContactDetail) {
      throw new Error('Error')
    }
    return newContactDetail
  }
}
