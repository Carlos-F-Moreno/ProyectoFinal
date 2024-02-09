const coursesServices = require('../services/courses.service.js')

const index = async (req, res) => {
  try {
    const coursesDivisions = await coursesServices.getCoursesDivisions()
    res.render('courses', { coursesDivisions })
  } catch (e) {
    console.log(e)
  }
}
//
const createCourse = async (req, res) => {
  try {
    const newCourse = await coursesServices.createCourse()
    res.json(newCourse)
    console.log('hello')
  } catch {
    console.log('xd')
  }
}
const getCourse = async (req, res) => {
  try {
    const course = req.params.course
    const listStudents = await coursesServices.getCourse(course)
    res.render('list', { listStudents, rol: 'profesor' })
  } catch (error) {
    console.log(error)
  }
}
module.exports = { createCourse, index, getCourse }
