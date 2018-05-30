import { GraphQLNonNull } from 'graphql'
import { skillsType, skillsInputType } from '../../types/skills'
import SkillsModel from '../../../models/skills'

export default {
  type: skillsType,
  args: {
    skillsAdd: {
      type: skillsInputType
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
