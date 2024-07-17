const Course = require('../models/course.model.js')
const Student = require('../models/student.model.js')
const parserMongoObjects = require('../utils/parser_mongo_objects.js')

const getCoursesDivisions = async () => {
  try {
    const coursesDivisions = await Course.find()
    return coursesDivisions
  } catch (error) {
    console.log(error)
  }
}
const createCourse = async () => {
  try {
    const newCourse = await Course.create({})
    return newCourse
  } catch (error) {
    console.log(error)
  }
}
// Refactor
const getCourse = async (course) => {
  try {
    const students = await Student.find({ course }, { _id: 1, name: 1, last_name: 1 }).sort({ name: 1 })
    const studentsParse = parserMongoObjects(students)
    return studentsParse
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getCoursesDivisions, createCourse, getCourse }
