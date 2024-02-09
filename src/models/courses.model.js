const mongoose = require('mongoose')
const { Schema, model } = mongoose

const courseSchema = new Schema({
  course: {
    type: String,
    required: true
  },
  turno: {
    type: String,
    require: true
  },
  especialidad: {
    type: String,
    required: true
  },
  materias: {
    type: [String],
    required: false
  },
  profesores: [{
    type: Schema.Types.ObjectId,
    ref: 'Profesor'
  }]
})
module.exports = model('Course', courseSchema)
