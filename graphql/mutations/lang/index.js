import { GraphQLNonNull, GraphQLString } from 'graphql'
import { langType, langInputType } from '../../types/lang'
import LangModel from '../../../models/lang'

export default {
  type: langType,
  description: 'Update a language item',
  args: {
    langUpdate: { type: langInputType }
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
