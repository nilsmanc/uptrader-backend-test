import mongoose from 'mongoose'

interface SubTask extends Document {
  title: string
  description: string
  inWork: string
  expirationDate: string
  task: object
  priority: string
}

const SubTaskSchema = new mongoose.Schema<SubTask>(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    inWork: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: String,
      required: true,
    },
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
    priority: String,
  },
  {
    timestamps: true,
  },
)

export default mongoose.model<SubTask>('Subtask', SubTaskSchema)
