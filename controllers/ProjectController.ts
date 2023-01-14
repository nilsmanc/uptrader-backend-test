import { Request, Response } from 'express'

import ProjectModel from '../models/Project'

export const getAll = async (req: Request, res: Response) => {
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

export const create = async (req: Request, res: Response) => {
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

export const remove = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id

    ProjectModel.findOneAndDelete(
      {
        _id: projectId,
      },
      (err: Error, doc: Document) => {
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
