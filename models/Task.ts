import mongoose from 'mongoose'

interface Task extends Document {
  number: string
  title: string
  description: string
  expirationDate: string
  project: object
  priority: string
  status: string
}

const TaskSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: String,
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
    priority: String,
    status: String,
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Task', TaskSchema)
