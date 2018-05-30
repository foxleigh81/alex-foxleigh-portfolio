import { GraphQLNonNull, GraphQLString } from 'graphql'
import { skillsType, skillsInputType } from '../../types/skills'
import SkillsModel from '../../../models/skills'

export default {
  type: skillsType,
  description: 'Update a skill',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    skillsUpdate: { type: skillsInputType }
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
