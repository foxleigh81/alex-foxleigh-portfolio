import { GraphQLNonNull } from 'graphql'
import ContactDetailsType from '../../types/contact-details'
import ContactDetailsModel from '../../../models/contact-details'

export default add = {
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
