import mongoose from 'mongoose'

export interface Project extends Document {
  title: string
}

const ProjectSchema = new mongoose.Schema<Project>({
  title: {
    type: String,
    required: true,
  },
})

export default mongoose.model<Project>('Project', ProjectSchema)
