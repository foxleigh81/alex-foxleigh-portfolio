import config from './config'
import mongoose from 'mongoose'

const env = process.env.NODE_ENV || 'development'

export default function () {
  mongoose.Promise = global.Promise
  const db = mongoose.connect(config[env].db)
  mongoose.connection.on('error', function (err) {
    console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red)
  }).on('open', function () {
    console.log('Connection extablised with MongoDB')
  })
  return db
}
