const router = require('express').Router()
const studentsController = require('../controllers/student.controller.js')
router.get('/:id', studentsController.getStudent)
module.exports = router
