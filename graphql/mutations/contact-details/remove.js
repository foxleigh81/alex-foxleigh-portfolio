import { GraphQLNonNull, GraphQLString } from 'graphql'
import ContactDetailsType from '../../types/contact-details'
import ContactDetailsModel from '../../../models/contact-details'

export default remove = {
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
