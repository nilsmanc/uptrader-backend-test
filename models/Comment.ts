import mongoose from 'mongoose'

interface Comment extends Document {
  text: string
  task: object
  comment: object
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
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model<Comment>('Comment', CommentSchema)
