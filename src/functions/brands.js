const data = require('../data/json/brands.json')

exports.handler = function(event, context, callback) {
  callback(null, {
  statusCode: 200,
  body: JSON.stringify({data})
  });
}