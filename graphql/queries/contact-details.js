import { GraphQLList } from 'graphql'
import ContactDetailsModel from '../../models/contact-details'
import { contactDetailsType as ContactDetailsType } from '../types/contact-details'

// Query
export default {
  type: new GraphQLList(ContactDetailsType),
  description: 'The contact details to display on the site.',
  resolve: () => {
    const contact_details = ContactDetailsModel.find()
    if (!contact_details) {
      throw new Error('Error')
    }
    return contact_details
  }
}
