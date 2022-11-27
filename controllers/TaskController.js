import TaskModel from '../models/Taks.js'

export const getAll = async (req, res) => {
  try {
    const tasks = await TodoModel.find().populate('Project').exec()

    res.json(tasks)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get tasks',
    })
  }
}

export const getOne = async (req, res) => {
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

export const getProjectTasks = async (req, res) => {
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

export const create = async (req, res) => {
  try {
    const doc = new TaskModel({
      number: req.body.title,
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
