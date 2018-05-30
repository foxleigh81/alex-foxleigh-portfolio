// Import dependencies
import express from 'express'
import mongoose from './config/mongoose'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'

const db = mongoose()
const app = express()

app.use('*', cors())

// import schemas
import appSchema from'./graphql/index'

// Set up schemas with Express endpoint
app.use('/graphql', cors(), graphqlHTTP({
  schema: appSchema,
  rootValue: global,
  graphiql: true
}))

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log('A GraphQL API running at http://localhost:4000/graphql')
})
