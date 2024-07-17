const studentService = require('../services/student.service.js')

const renderProfile = async (req, res) => {
  try {
    const id = req.body.id
    const student = studentService.getStudent(id)
    res.render('profile', {student})
  } catch (error) {
    res.json('error en controller')
  }
}
const create = async (req, res) => {
  try {
    const student = studentService.createStudent(req.body)
    res.redirect('/create')
  } catch (error) {
    res.json('error in controller')
  }
}
const checkAttendance = async (req, res) => {
  try {
    const list = req.body
    const check = studentService.checkAttendance(list)
    res.json({ check })
  } catch (error) {
    res.json('error in controller')
  }
}
const update = async (req, res) => {
  try {
    const student = studentService.updateStudent(req.body)
    res.redirect('/profile')
  } catch (error) {
    res.json('error in controller')
  }
}
module.exports = { renderProfile, create, checkAttendance, update }
