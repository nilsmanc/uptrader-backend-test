import CommentModel from '../models/Comments.js'

export const getTaskComments = async (req, res) => {
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

export const getCascadeComments = async (req, res) => {
  const commentId = req.params.id

  try {
    const comments = await CommentModel.find({ comment: { _id: commentId } })
      .populate('comment')
      .exec()

    res.json(comments)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get comments',
    })
  }
}

export const createTaskComment = async (req, res) => {
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

export const createCascadeComment = async (req, res) => {
  try {
    const doc = new CommentModel({
      text: req.body.text,
      comment: req.body.comment,
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
