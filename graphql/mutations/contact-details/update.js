import { GraphQLNonNull, GraphQLString } from 'graphql'
import ContactDetailsType from '../../types/contact-details'
import ContactDetailsModel from '../../../models/contact-details'

export default update = {
  type: ContactDetailsType.contactDetailsType,
  description: 'Update a contact method',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    contactDetailsUpdate: { type: ContactDetailsType.contactDetailsInputType }
  },
  resolve(root, { id, contactDetailsUpdate }) {
    return ContactDetailsModel.findByIdAndUpdate(
      id,
      {
        name: contactDetailsType.name,
        value: contactDetailsType.value,
        url: contactDetailsType.url,
        active: contactDetailsType.active
      },
      { new: true }
    ).exec()
      .catch(err => new Error(err))
  }
}
