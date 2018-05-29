var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLString = require('graphql').GraphQLString
var SkillsType = require('../../types/skills')
var SkillsModel = require('../../../models/skills')

exports.remove = {
  type: SkillsType.skillsType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removeSkill = SkillsModel.findByIdAndRemove(params.id).exec()
    if (!removeSkill) {
      throw new Error('Error')
    }
    return removeSkill
  }
}
