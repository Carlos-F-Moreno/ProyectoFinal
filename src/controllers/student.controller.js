const studentService = require('../services/students.service.js')

const getStudent = async (req, res) => {
  const id = req.body.id
  const student = studentService.getStudent(id)
  res.json({ student, message: 'alumno pedido' })
}

module.exports = { getStudent }
