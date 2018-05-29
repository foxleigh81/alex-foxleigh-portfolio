var GraphQLObjectType = require('graphql').GraphQLObjectType

var config = require('./config')
var lang = require('./lang')
var skills = require('./skills')
var brands = require('./brands')
var socialNetworks = require('./social-networks')

exports.mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: function () {
    return {
      updateConfig: config.update,
      updateLang: lang.update,
      addSkill: skills.add,
      updateSkill: skills.update,
      removeSkill: skills.remove,
      addBrand: brands.add,
      updateBrand: brands.update,
      removeBrand: brands.remove,
      addSocialNetwork: socialNetworks.add,
      updateSocialNetwork: socialNetworks.update,
      removeSocialNetwork: socialNetworks.remove,
    }
  }
})
