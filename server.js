// Import dependencies
import express from 'express'
import cors from 'cors'

const db = mongoose()
const app = express()

app.use('*', cors())