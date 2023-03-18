import { Request, Response } from 'express'

import CommentModel from '../models/Comment'

export const getComments = async (req: Request, res: Response) => {
  const taskId = req.params.id

  try {
    const comments = await CommentModel.find({ task: { _id: taskId } })
      .populate('task')
      .exec()

    res.json(comments)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get comments',
    })
  }
}

export const getTaskComments = async (req: Request, res: Response) => {
  const taskId = req.params.id

  try {
    const tasks = await CommentModel.find({ task: { _id: taskId } })
      .populate('task')
      .exec()

    res.json(tasks)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get tasks',
    })
  }
}

export const createComment = async (req: Request, res: Response) => {
  try {
    const doc = new CommentModel({
      text: req.body.text,
      task: req.body.task,
    })

    const comment = await doc.save()

    res.json(comment)
  } catch (err) {
    console.log(err)

    res.status(500).json({
      message: 'Failed to create comment',
    })
  }
}
