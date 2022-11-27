import express from 'express'
import mongoose from 'mongoose'
import { MONGODB } from './variables.js'

mongoose
  .connect(MONGODB)
  .then(() => console.log('Database OK'))
  .catch((err) => console.log('Database error', err))

const app = express()

app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Server OK')
})
