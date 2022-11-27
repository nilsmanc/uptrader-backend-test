import mongoose from 'mongoose'

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
    inWork: {
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
