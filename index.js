import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { MONGODB } from './variables.js'
import {
  CommentsController,
  ProjectController,
  SubtaskController,
  TaskController,
} from './controllers/index.js'

mongoose
  .connect(MONGODB)
  .then(() => console.log('Database OK'))
  .catch((err) => console.log('Database error', err))

const app = express()

app.use(cors())
app.use(express.json())

app.get('/projects', ProjectController.getAll)
app.post('/projects', ProjectController.create)
app.delete('/projects', ProjectController.remove)

app.get('/tasks', TaskController.getAll)
app.post('/tasks', TaskController.create)
app.get('/tasks/:id', TaskController.getOne)
app.get('/tasks/project/:id', TaskController.getProjectTasks)

app.get('/subtasks', SubtaskController.getTaskSubtasks)
app.post('/subtasks', SubtaskController.create)

app.get('/taskcomments', CommentsController.getTaskComments)
app.post('/taskcomments', CommentsController.createTaskComment)
app.get('/cascadecomments', CommentsController.getCascadeComments)
app.post('/cascadecomments', CommentsController.createCascadeComment)

app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Server OK')
})
