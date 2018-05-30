import { GraphQLList } from 'graphql'
import SkillsModel from '../../models/skills'
import { skillsType as SkillsType } from '../types/skills'

// Query
export default {
  type: new GraphQLList(SkillsType),
  description: 'The skills I possess',
  resolve: () => {
    const skills = SkillsModel.find()
    if (!skills) {
      throw new Error('Error')
    }
    return skills
  }
}
