const { model, Schema } = require('mongoose')

const noteSchema = new Schema({
  academic_period: { type: String },
  year: { type: Number },
  course: { type: String },
  student: { type: Schema.ObjectId, ref: 'Profile' },
  rating: { type: Number, required: true, min: 0, max: 10 },
  teacher: { type: String },
  subject: { type: String, required: true },
})

module.exports = model('Note', noteSchema)
