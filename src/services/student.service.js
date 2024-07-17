const Student = require('../models/student.model.js') 

const renderProfile = (id) => {
  try{
    const student = Student.findById(id)
    return Student
  }catch(error){
    console.log(error)
  }
}
const createStudent = (info) => {
  try {
    const student = Student.create({info})
    return student 
  } catch (error) {
    console.log(error)
  }
}
const checkAttendance = (id) => {}

module.exports = {renderProfile, createStudent, checkAttendance}