import mongoose from 'mongoose'

const SubTaskSchema = new mongoose.Schema(
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

export default mongoose.model('Subtask', SubTaskSchema)
