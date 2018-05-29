module.exports = {
    //MongoDB configuration
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
};