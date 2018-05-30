import { GraphQLNonNull, GraphQLString } from 'graphql'
import { skillsType } from '../../types/skills'
import SkillsModel from '../../../models/skills'

export default {
  type: skillsType,
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
