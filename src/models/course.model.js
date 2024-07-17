const mongoose = require('mongoose')
const { Schema, model } = mongoose

const courseSchema = new Schema({
  division: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    require: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  matters: {
    type: [String],
    required: false,
  },
  teachers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Profile',
    },
  ],
  subjects: [
    {
      type: String,
    },
  ]
})
module.exports = model('Course', courseSchema)
