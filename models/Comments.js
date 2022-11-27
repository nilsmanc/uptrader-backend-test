import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema(
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

export default mongoose.model('Comment', CommentSchema)
