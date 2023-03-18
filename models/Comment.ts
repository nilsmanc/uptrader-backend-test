import mongoose from 'mongoose'

import { Task } from './Task'

interface Comment extends Document {
  text: string
  task: Task
}

const CommentSchema = new mongoose.Schema<Comment>(
  {
    text: {
      type: String,
      required: true,
    },
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model<Comment>('Comment', CommentSchema)
