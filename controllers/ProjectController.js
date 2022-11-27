import ProjectModel from '../models/Project.js'

export const getAll = async (req, res) => {
  try {
    const projects = await ProjectModel.find().exec()

    res.json(projects)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get projects',
    })
  }
}

export const create = async (req, res) => {
  try {
    const doc = new ProjectModel({
      title: req.body.title,
    })

    const project = await doc.save()

    res.json(project)
  } catch (err) {
    console.log(err)

    res.status(500).json({
      message: 'Failed to create project',
    })
  }
}

export const remove = async (req, res) => {
  try {
    const projectId = req.params.id

    ProjectModel.findOneAndDelete(
      {
        _id: profileId,
      },
      (err, doc) => {
        if (!doc) {
          return res.status(404).json({
            message: 'Project not found',
          })
        }

        res.json({
          success: true,
        })
      },
    )
  } catch (err) {
    console.log(err)

    res.status(500).json({
      message: 'Failed to delete project',
    })
  }
}
