import { Request, Response } from 'express'

import TaskModel from '../models/Task'

export const getAll = async (req: Request, res: Response) => {
  try {
    const tasks = await TaskModel.find().populate('Project').exec()

    res.json(tasks)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get tasks',
    })
  }
}

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
      number: req.body.number,
      title: req.body.title,
      description: req.body.description,
      expirationDate: req.body.expirationDate,
      project: req.body.project,
      priority: req.body.priority,
      status: req.body.status,
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

export const update = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id

    await TaskModel.updateOne(
      {
        _id: taskId,
      },
      {
        number: req.body.number,
        title: req.body.title,
        description: req.body.description,
        expirationDate: req.body.expirationDate,
        project: req.body.project,
        priority: req.body.priority,
        status: req.body.status,
      },
    )

    res.json({
      success: true,
    })
  } catch (err) {
    console.log(err)

    res.status(500).json({
      message: 'Failed to update task',
    })
  }
}
