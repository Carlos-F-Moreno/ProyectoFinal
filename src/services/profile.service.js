const Teacher = require('../models/teachers.model.js')
const create = (info) => {
  try {
    const teacher = Teacher.create({ info })
    return teacher
  } catch (error) {
    console.log(error)
  }
}
module.exports = { create }
