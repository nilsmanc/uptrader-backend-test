import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { MONGODB } from './variables'
import { CommentsController, ProjectController, TaskController } from './controllers/index'

mongoose
  .connect(MONGODB as string)
  .then(() => console.log('Database OK'))
  .catch((err) => console.log('Database error', err))

const app = express()

app.use(cors())
app.use(express.json())

app.get('/projects', ProjectController.getAll)
app.post('/projects', ProjectController.create)
app.delete('/projects/:id', ProjectController.remove)

app.get('/tasks', TaskController.getAll)
app.post('/tasks', TaskController.create)
app.get('/tasks/:id', TaskController.getOne)
app.get('/tasks/project/:id', TaskController.getProjectTasks)
app.patch('/tasks/:id', TaskController.update)

app.get('/comments', CommentsController.getComments)
app.get('/comments/task/:id', CommentsController.getTaskComments)
app.post('/comments', CommentsController.createComment)

app.listen(4444, () => {
  console.log('Server OK')
})
