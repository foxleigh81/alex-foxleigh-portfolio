var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLString = require('graphql').GraphQLString
var SkillsType = require('../../types/skills')
var SkillsModel = require('../../../models/skills')

exports.update = {
  type: SkillsType.skillsType,
  description: 'Update a skill',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    skillsUpdate: { type: SkillsType.skillsInputType }
  },
  resolve(root, { id, skillsUpdate }) {
    return SkillsModel.findByIdAndUpdate(
      id,
      {
        name: skillsUpdate.name,
        level: skillsUpdate.level,
        sort_order: skillsUpdate.sort_order,
        active: skillsUpdate.active
      },
      { new: true }
    ).exec()
      .catch(err => new Error(err))
  }
}
