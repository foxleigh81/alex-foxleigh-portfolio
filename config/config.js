// Import env file
import dotenv from 'dotenv'
dotenv.config()

export default {
  // MongoDB configuration
  development: {
    db: process.env.MONGO_URI_DEV,
    app: {
      name: 'graphql'
    }
  },
  production: {
    db: process.env.MONGO_URI_PROD,
    app: {
      name: 'graphql'
    }
  }
}
