var GraphQLList = require('graphql').GraphQLList;
var ContactDetailsModel = require('../../models/contact-details');
var ContactDetailsType = require('../types/contact-details').contactDetailsType;

// Query
exports.queryType = {
  type: new GraphQLList(ContactDetailsType),
  description: 'The contact details to display on the site.',
  resolve: function () {
    const contact_details = ContactDetailsModel.find()
    if (!contact_details) {
      throw new Error('Error')
    }
    return contact_details
  }
}