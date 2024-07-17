const { Schema, model } = require('mongoose')

const TeacherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  attendance: {
    type: Map,
    of: String,
  },
  courses: [{
    type: String,
  }],
  year_of_entry: {
    type: String,
    required: true,
    default: Date.now,
  },
  Subjects: [
    {
      type: String,
    },
  ],
  userId: {
    type: Schema.ObjectId,
    ref: 'User',
  }
})

module.exports = model('Teacher', TeacherSchema)
