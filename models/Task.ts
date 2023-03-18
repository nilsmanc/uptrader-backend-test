import mongoose from 'mongoose'

import { Project } from './Project'

export interface Task extends Document {
  title: string
  description: string
  project: Project
}

const TaskSchema = new mongoose.Schema<Task>(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model<Task>('Task', TaskSchema)
