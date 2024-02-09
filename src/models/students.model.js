const { Schema, model } = require('mongoose')

const StudentsSchema = new Schema({
  lastname: {
    type: String,
    required: true
  },
  attendance: {
    type: Map,
    of: String,
    default: {}
  },
  rol: {
    type: String,
    required: true,
    default: 'student'
  },
  course: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
module.exports = model('Students', StudentsSchema)
