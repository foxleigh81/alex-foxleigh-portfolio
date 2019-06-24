const marked = require('marked')
const clone = require('lodash').cloneDeep
const fs = require('fs')
const resolve = require('path').resolve
const data = require('../data/json/segments.json')

// Clone the object
const mutatedData = clone(data)

// Mutate the cloned object
mutatedData.map(item => {
  if (item.content) {
    const file = fs.readFileSync(resolve(`./src/data/markdown/${item.content}`), 'utf-8')
    item.content = marked(file)
  }
})

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({data: mutatedData})
  });
}