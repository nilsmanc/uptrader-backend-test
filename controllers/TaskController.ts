import { Request, Response } from 'express'

import TaskModel from '../models/Task'

export const getOne = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id

    const task = await TaskModel.findById(taskId).exec()

    res.json(task)
  } catch (err) {
    console.log(err)

    res.status(500).json({
      message: 'Failed to get task',
    })
  }
}

export const getProjectTasks = async (req: Request, res: Response) => {
  const projectId = req.params.id

  try {
    const tasks = await TaskModel.find({ project: { _id: projectId } })
      .populate('project')
      .exec()

    res.json(tasks)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get tasks',
    })
  }
}

export const create = async (req: Request, res: Response) => {
  try {
    const doc = new TaskModel({
      title: req.body.title,
      description: req.body.description,
      project: req.body.project,
    })

    const task = await doc.save()

    res.json(task)
  } catch (err) {
    console.log(err)

    res.status(500).json({
      message: 'Failed to create task',
    })
  }
}
