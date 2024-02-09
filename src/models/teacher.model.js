const mongoose = require('mongoose')
const { Schema, model } = mongoose

const ProfesorModel = new Schema({
  password: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    required: true,
    default: 'profesor'
  },
  name: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  courses: {
    type: Array[String]
  }
})
module.exports = model('Profesor', ProfesorModel)
