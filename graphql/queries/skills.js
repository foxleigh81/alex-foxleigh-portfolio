var GraphQLList = require('graphql').GraphQLList;
var SkillsModel = require('../../models/skills');
var SkillsType = require('../types/skills').skillsType;

// Query
exports.queryType = {
  type: new GraphQLList(SkillsType),
  description: 'The skills I possess',
  resolve: function () {
    const skills = SkillsModel.find()
    if (!skills) {
      throw new Error('Error')
    }
    return skills
  }
}
