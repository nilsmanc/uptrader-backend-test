import SubtaskModel from '../models/Subtask.js'

export const getTaskSubtasks = async (req, res) => {
  const taskId = req.params.id

  try {
    const subtasks = await SubtaskModel.find({ task: { _id: taskId } })
      .populate('task')
      .exec()

    res.json(subtasks)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get subtasks',
    })
  }
}

export const create = async (req, res) => {
  try {
    const doc = new SubtaskModel({
      title: req.body.title,
      description: req.body.description,
      expirationDate: req.body.expirationDate,
      task: req.body.task,
      priority: req.body.priority,
      status: req.body.status,
    })

    const subtask = await doc.save()

    res.json(subtask)
  } catch (err) {
    console.log(err)

    res.status(500).json({
      message: 'Failed to create subtask',
    })
  }
}
