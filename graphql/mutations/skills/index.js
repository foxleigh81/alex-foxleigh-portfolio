var GraphQLObjectType = require('graphql').GraphQLObjectType;

var add = require('./add').add;
var remove = require('./remove').remove;
var update = require('./update').update;

module.exports = {
 add,
 remove,
 update 
}