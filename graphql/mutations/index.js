import { GraphQLObjectType } from 'graphql'

import updateConfig from './config'
import updateLang from './lang'
import skills from './skills'
import brands from './brands'
import socialNetworks from './social-networks'

export default new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: () => ({
    updateConfig,
    updateLang,
    addSkill: skills.add,
    updateSkill: skills.update,
    removeSkill: skills.remove,
    addBrand: brands.add,
    updateBrand: brands.update,
    removeBrand: brands.remove,
    addSocialNetwork: socialNetworks.add,
    updateSocialNetwork: socialNetworks.update,
    removeSocialNetwork: socialNetworks.remove
  })
})
