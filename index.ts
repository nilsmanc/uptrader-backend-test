import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { CommentsController, ProjectController, TaskController } from './controllers/index'

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log('Database OK'))
  .catch((err) => console.log('Database error', err))

const app = express()

app.use(cors())
app.use(express.json())

app.get('/projects', ProjectController.getAll)
app.post('/projects', ProjectController.create)
app.delete('/projects/:id', ProjectController.remove)

app.post('/tasks', TaskController.create)
app.get('/tasks/:id', TaskController.getOne)
app.get('/tasks/project/:id', TaskController.getProjectTasks)

app.get('/comments/task/:id', CommentsController.getTaskComments)
app.post('/comments', CommentsController.createComment)

app.listen(process.env.PORT || 4444, () => {
  console.log('Server OK')
})
