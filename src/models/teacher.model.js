const mongoose = require('mongoose')
const { Schema, model } = mongoose

const TeacherModel = new Schema({
  rol: {
    type: String,
    required: true,
    default: 'Teacher'
  },
  name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  courses: {
    type: Array[String]
  },
  subjects: {
    type: [String],
    required: true,
    default: []
  }
})
module.exports = model('Teacher', TeacherModel)
