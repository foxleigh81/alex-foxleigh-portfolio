import { GraphQLList } from 'graphql'
import ConfigModel from '../../models/config'
import { configType as ConfigType } from '../types/config'

// Query
export default {
  type: new GraphQLList(ConfigType),
  description: "The configuration for the home 'page'",
  resolve: function () {
    const config = ConfigModel.find()
    if (!config) {
      throw new Error('Error')
    }
    return config
  }
}
