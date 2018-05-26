var GraphQLNonNull = require('graphql').GraphQLNonNull
var SkillsType = require('../../types/skills')
var SkillsModel = require('../../../models/skills')

exports.add = {
  type: SkillsType.skillsType,
  args: {
    skillsAdd: {
      type: SkillsType.skillsInputType
    }
  },
  resolve(root, { skillsAdd }) {
    const uModel = new SkillsModel(skillsAdd)
    const newSkill = uModel.save()
    if (!newSkill) {
      throw new Error('Error')
    }
    return newSkill
  }
}
