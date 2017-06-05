import mongoose, { Schema } from 'mongoose'

const campaignSchema = new Schema({
  createdBy: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String
  },
  goal: {
    type: String
  },
  reason: {
    type: String
  },
  details: {
    type: String
  },
  image: {
    type: String
  },
  video: {
    type: String
  },
  created: {
    type: String
  }
}, {
  timestamps: true
})

campaignSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      createdBy: this.createdBy.view(full),
      name: this.name,
      goal: this.goal,
      reason: this.reason,
      details: this.details,
      image: this.image,
      video: this.video,
      created: this.created,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Campaign', campaignSchema)

export const schema = model.schema
export default model
