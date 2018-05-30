import { GraphQLNonNull, GraphQLString } from 'graphql'
import { configType, configInputType } from '../../types/config'
import ConfigModel from '../../../models/config'

export default {
  type: configType,
  description: 'Update a config item',
  args: {
    configUpdate: { type: configInputType }
  },
  resolve(root, { configUpdate }) {
    return ConfigModel.findOneAndUpdate(
      // There is only ever one config so rather than mess about retrieving it, I'll just hardcode the ID here.
      {'_id': '5afaf49ab10a8da744ea6a00' },
      {
        status: configUpdate.status,
        available_from: configUpdate.available_from,
        special_message: configUpdate.special_message,
        CV_URL: configUpdate.CV_URL
      },
      { new: true }
    ).exec()
      .catch(err => new Error(err))
  }
}
