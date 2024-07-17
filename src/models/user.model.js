const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  password: {
    type: String,
    require: true,
  },
  dni: {
    type: Number,
    unique: true,
    require: true,
    index: true,
  },
  rol: {
    type: String,
    default: 'student',
    enum: ['admin', 'teacher', 'student'],
    index: true,
  }
})
module.exports = model('User', UserSchema)
