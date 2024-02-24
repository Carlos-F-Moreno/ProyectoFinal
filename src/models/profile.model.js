const { Schema, model } = require('mongoose')

const ProfileSchema = new Schema({
  last_name: {
    type: String,
    required: true
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
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = model('profile', ProfileSchema)
