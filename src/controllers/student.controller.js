const studentService = require('../services/students.service.js')

const getStudent = async (req, res) => {
  try {
    const id = req.body.id
    const student = studentService.getStudent(id)
    res.json({ student, message: 'alumno pedido' })
  } catch (error) {
    res.json('error en controller')
  }
}
const createStudent = async (req, res) => {
  try {
    const student = studentService.createStudent(req.body)
    res.json({ student })
  } catch (error) {
    res.json('error in controller')
  }
}
const checkAsist = async (req, res) => {
  try {
    const list = req.body
    const check = studentService.checkAsist(list)
    res.json({ check })
  } catch (error) {
    res.json('error in controller')
  }
}
module.exports = { getStudent, createStudent, checkAsist }
